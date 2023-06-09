addEventListener('fetch', (event) => {
  const request = event.request
  if (request.method === 'OPTIONS') {
    event.respondWith(handleOptions(request))
  } else {
    event.respondWith(handle(request))
  }
})

// Helper function to return JSON response
const JSONResponse = (message, status = 200) => {
  let headers = {
    headers: {
      'content-type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, HEAD, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },

    status: status,
  }

  let response = {
    message: message,
  }

  return new Response(JSON.stringify(response), headers)
}

const urlfy = (obj) =>
  Object.keys(obj)
    .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(obj[k]))
    .join('&')

function handleOptions(request) {
  if (
    request.headers.get('Origin') !== null &&
    request.headers.get('Access-Control-Request-Method') !== null &&
    request.headers.get('Access-Control-Request-Headers') !== null
  ) {
    // Handle CORS pre-flight request.
    return new Response(null, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, HEAD, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Client-Key',
      },
    })
  } else {
    // Handle standard OPTIONS request.
    return new Response(null, {
      headers: {
        Allow: 'GET, HEAD, POST, OPTIONS',
      },
    })
  }
}

// function authorize(request) {
//     if (request.headers.get("Client-Key") !== config.client_key) {
//         throw new Error('Unauthorized request')
//     }
// }

// Utility function to validate form fields
function validateInput(form, config) {
  // if (form[config.honeypot_field] !== "") {
  //     throw new Error('Invalid request')
  // }

  // Validate form inputs
  for (let i = 0; i < config.form_fields.length; i++) {
    let field = config.form_fields[i]
    if (form[field] === '') {
      throw new Error(`${field} is required`)
    }
  }

  // Validate email field
  let email_regex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (
    form[config.email_field] == '' ||
    !email_regex.test(form[config.email_field])
  ) {
    console.log(
      form[config.email_field] == '' ||
        !email_regex.test(form[config.email_field])
    )
    throw new Error('Please, enter valid email address')
  }
  if (
    form[config.admin_email] == '' ||
    !email_regex.test(form[config.admin_email])
  ) {
    throw new Error(
      'No admin email address found. Please contact site administrator'
    )
  }
}

function generateAdminOptions(form, config, env) {
  let admin_data = {
    from: config.from,
    to: config.admin_email,
    subject: `${form.company}: New message from ${form.name}`,
    text: JSON.stringify(form),
    template: env.MAILGUN_TEMPLATE || 'hello',
    'h:X-Mailgun-Variables': JSON.stringify({
      // be sure to stringify your payload
      name: form.name,
      company: form.company,
      phone: form.tel,
      description: form.message,
      acceptance: form.acceptance,
    }),
    'o:tag': 'www',
    'h:Reply-To': form.mail,
    // attachments: [{
    //     filename: 'mailgun.png',
    //     data: Buffer.from(form.attachment, 'binary').toString('base64')
    //   }],
  }

  let admin_options = {
    method: 'POST',
    headers: {
      Authorization:
        'Basic ' +
        btoa(
          'api:' + env.MAILGUN_API_KEY || 'key-398c9b563c4855e62deb4d9cd020ddc8'
        ),
      'Content-Type': 'application/x-www-form-urlencoded',
      //"Content-Length": JSON.stringify(admin_data).length
    },
    inline: form.attachment,
    body: urlfy(admin_data),
  }

  return admin_options
}

function generateUserOptions(form, config, env) {
  let user_data = {
    from: config.from,
    to: form.mail,
    subject: `Thank you for contact ${form.name}`,
    text: JSON.stringify(form),
    template: env.MAILGUN_TEMPLATE || 'hello',
    'h:X-Mailgun-Variables': JSON.stringify({
      // be sure to stringify your payload
      name: form.name,
      company: form.company,
      phone: form.tel,
      description: form.message,
      acceptance: form.acceptance,
    }),

    'o:tag': 'www',
    'h:Reply-To': config.admin_email, // reply to admin
    // attachments: [{
    //     filename: 'mailgun.png',
    //     data: Buffer.from(form.attachment, 'binary').toString('base64')
    //   }]
  }

  let user_options = {
    method: 'POST',
    headers: {
      Authorization:
        'Basic ' +
        btoa(
          'api:' + env.MAILGUN_API_KEY || 'key-398c9b563c4855e62deb4d9cd020ddc8'
        ),
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: urlfy(user_data),
  }

  return user_options
}

export async function onRequestPost(context) {
  const {
    request, // same as existing Worker API
    env, // same as existing Worker API
    params, // if filename includes [id] or [[path]]
    waitUntil, // same as ctx.waitUntil in existing Worker API
    next, // used for middleware or to fetch assets
    data, // arbitrary space for passing data between middlewares
  } = context

  const formData = await request.formData()

  const form = JSON.parse(JSON.stringify(Object.fromEntries(formData)))

  // Script configuration
  const config = {
    client_key: context.env.CLIENT_API_KEY,
    mailgun_key:
      context.env.MAILGUN_API_KEY || 'key-398c9b563c4855e62deb4d9cd020ddc8',
    mailgun_domain:
      context.env.MAILGUN_API_DOMAIN ||
      'sandbox59a0930a84614b27b3e712756266a274.mailgun.org',
    from:
      formData.mail ||
      context.env.EMAIL_FROM ||
      'mailgun@sandbox59a0930a84614b27b3e712756266a274.mailgun.org',
    email_field: 'mail', // email field name
    admin_email: context.env.EMAIL_TO || 'test@webo.agency',
    form_fields: ['name', 'description', 'company', 'service'], // list of required fields
    honeypot_field: 'email2', // honeypot field name
  }

  const messgage = {
    from: `${formData.name} <${
      formData.mail ||
      context.env.EMAIL_FROM ||
      'mailgun@sandbox59a0930a84614b27b3e712756266a274.mailgun.org'
    }>`,
    to: [context.env.EMAIL_TO || 'test@webo.agency'],
    subject: `${formData.company}`,
    text: JSON.stringify(formData),
    template: context.env.MAILGUN_TEMPLATE || 'hello',
    'h:X-Mailgun-Variables': JSON.stringify({
      // be sure to stringify your payload
      name: form.name,
      company: form.company,
      phone: form.tel,
      message: form.message,
      acceptance: form.acceptance,
    }),
    'o:tag': 'www',
    'h:Reply-To': formData.mail,
  }

  // console.log(request)
  // Authenticate pre-distributed API key
  // try {
  //     authorize(request);
  // } catch (err) {
  //     return JSONResponse("Unauthorized request", 401);
  // }

  // Validate form fields

  // try {
  //     validateInput(form, config);
  // } catch (err)  {
  //     return JSONResponse(err.message, 400);
  // }

  // const user_options = generateUserOptions(form, config);

  // Construct admin and user email and options

  console.log(config)
  try {
    const admin_options = generateAdminOptions(form, config, env)
    const user_options = generateUserOptions(form, config, env)
    // Config to submit each email
    const options = [admin_options, user_options]

    // Send admin and user emails
    try {
      let data = await Promise.all(
        options.map((opt) =>
          fetch(
            `${context.env.MAILGUN_ENDPOINT || 'https://api.mailgun.net'}/v3/${
              context.env.MAILGUN_API_DOMAIN ||
              'sandbox59a0930a84614b27b3e712756266a274.mailgun.org'
            }/messages`,
            opt
          )
            .then((response) => {
              if (response.status != 200) {
                throw new Error('Email failed to send')
              }
            })
            .catch((err) => {
              throw new Error('Email failed to send')
            })
        )
      )
      return JSONResponse('Message has been sent')
    } catch (err) {
      return JSONResponse(
        'Failed to send email, please contact website administrator',
        500
      )
    }
  } catch (err) {
    return JSONResponse(
      'Failed to generate email, please contact website administrator',
      500
    )
  }
}
