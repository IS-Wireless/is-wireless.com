import WPApi from 'wpapi'

<% if (options.extensions) { %>
import * as WPApiExtensions from 'wpapi-extensions'
<% } %>

const agent = require('superagent')

require('superagent-cache')(agent)

// const checkMethodSupport = require('wpapi/lib/util/check-method-support')
// const objectReduce = require('wpapi/lib/util/object-reduce')
// const isEmptyObject = require('wpapi/lib/util/is-empty-object')
// const { createPaginationObject } = require('wp-nuxt/utils/superagent-pagination')


/**
 * Conditionally set basic authentication on a server request object.
 *
 * @method _auth
 * @private
 * @param {Object} request A superagent request object
 * @param {Object} options A WPRequest _options object
 * @param {Boolean} forceAuthentication whether to force authentication on the request
 * @param {Object} A superagent request object, conditionally configured to use basic auth
 */
 function _auth(request, options, forceAuthentication) {
  // If we're not supposed to authenticate, don't even start
  if (!forceAuthentication && !options.auth && !options.nonce) {
    return request
  }

  // Enable nonce in options for Cookie authentication http://wp-api.org/guides/authentication.html
  if (options.nonce) {
    request.set('X-WP-Nonce', options.nonce)
    return request
  }

  // Retrieve the username & password from the request options if they weren't provided
  const username = options.username
  const password = options.password

  // If no username or no password, can't authenticate
  if (!username || !password) {
    return request
  }

  // Can authenticate: set basic auth parameters on the request
  return request.auth(username, password)
}

const options = <%= serialize(options) %>
let wp = new WPApi(options)

export default async (ctx, inject) => {
  <% if (options.discover && options.auth) { %>
    wp = await WPApi.discover(options.endpoint).then(site => {
      return site.auth({
          username: options.username,
          password: options.password
      });
  });
  <% } %>

  <% if (options.discover && !options.auth) { %>
    wp = await WPApi.discover(options.endpoint);
  <% } %>

  <% if (options.extensions) { %>
    WPApiExtensions.registerWuxt(wp)
  <% } %>

  <% if (options.customRoutes) { %>
    options.customRoutes.forEach(element => {
      wp[element.name] = wp.registerRoute(element.extension, element.route);
    });
  <% } %>

  wp.transport(options.transport);
  
  inject('wp', wp)
}
