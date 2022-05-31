export const state = () => ({
  acf: {
    baner_slide: [
      {
        baner_images: [
          {
            imgUrl:
              'https://www.is-wireless.com/wp-content/uploads/2021/02/Coverage-macro-IS-Wireless.jpg',
            alt: 'IS-Wireless Coverage macro',
          },
          {
            imgUrl:
              'https://www.is-wireless.com/wp-content/uploads/2021/02/Indoor-capacity.jpg',
            alt: 'IS-Wireless Indoor-capacity',
          },
          {
            imgUrl:
              'https://www.is-wireless.com/wp-content/uploads/2021/02/Campus-IS-Wireless.jpg',
            alt: 'IS-Wireless Campus',
          },
        ],
        baner_content: [
          {
            acf_fc_layout: 'Podstawowy',
            logo:
              'https://www.is-wireless.com/wp-content/uploads/2021/02/IS-Wireless-5GMadeTogether.svg',
            text: '4G and 5G Mobile Networks of the Future',
            button_first_text: 'Networks',
            button_first_url: 'https://www.is-wireless.com/networks/',
            button_second_text: 'Academy',
            button_second_url: 'https://www.is-wireless.com/academy/',
          },
        ],
      },
    ],
    organisations: {
      swiper_logos: [
        {
          imgUrl:
            'https://www.is-wireless.com/wp-content/uploads/2015/07/O-ran-1024x439.png',
          alt: 'randomAlt',
          url: '/',
        },
        {
          imgUrl:
            'https://www.is-wireless.com/wp-content/uploads/2021/02/tip_logo-200x132.png',
          alt: 'random alt',
          url: '/',
        },
        {
          imgUrl:
            'https://www.is-wireless.com/wp-content/uploads/2021/10/website-logo-header-withoutclaim-200x114.png',
          alt: 'random alt',
          url: '/',
        },
        {
          imgUrl:
            'https://www.is-wireless.com/wp-content/uploads/2020/04/AIOTI-e1610551262965.jpg',
          alt: 'random alt',
          url: '/',
        },
        {
          imgUrl:
            'https://www.is-wireless.com/wp-content/uploads/2021/02/CyberMadeinPoland.png',
          alt: 'random alt',
          url: '/',
        },
        {
          imgUrl:
            'https://www.is-wireless.com/wp-content/uploads/2021/02/ZIPSEE-Cyfrowa-Polska-200x74.png',
          alt: 'random alt',
          url: '/',
        },
      ],
      static_logos: [
        {
          imgUrl:
            'https://www.is-wireless.com/wp-content/uploads/2021/02/NCBR.svg',
          alt: 'random alt',
          url:
            'https://www.is-wireless.com/about-us/#membership-and-associations',
        },
        {
          imgUrl:
            'https://www.is-wireless.com/wp-content/uploads/2021/02/European-Union.svg',
          alt: 'random alt',
          url: '/',
        },
      ],
    },
    E2e: {
      title: 'Complete E2E European Open RAN',
      text:
        'Software-hardware decoupling and opening of interfaces is a phenomenon well known from other domains such as computers or mobile phones. It always brings more choice at a lower price. This is the long-awaited paradigm shift in RAN business models. On the contrary, single-RAN promoted by the “traditional” vendors is the main reason and cause for the telco industry standstill.',
      list: [
        {
          text:
            'Savings of ~30% in Capex and ~40% in Opex when compared to “traditional” RAN deployment already demonstrated by Rakuten',
          iconUrl: '../static/test-icon.png',
        },
        {
          text:
            '	No vendor lock-in and rich supplier ecosystem significantly lowering business risks such as dependency on a single supplier',
          iconUrl: '../static/test-icon.png',
        },
        {
          text:
            '	Better security and scalability by use of independently managed network functions deployed when needed',
          iconUrl:
            'https://e7.pngegg.com/pngimages/527/437/png-clipart-wifi-logo-wi-fi-computer-icons-wireless-symbol-wifi-icon-angle-electronics.png',
        },
      ],
    },

    granularized: {
      title: 'Highly granularized Network Function Virtualization',
      text:
        'Decoupling happens also inside the software. Instead of virtual software monoliths we are using libraries of highly granularized Virtual Network Functions. Moreover, they can be engineered in semi-automatic mode.',
      list: [
        {
          text: 'Possibility to support any of the protocol splits',
          iconUrl: '../static/test-icon.png',
        },
        {
          text:
            'Ease of deployment on any computing resources including dedicated and shared ones',
          iconUrl: '../static/test-icon.png',
        },
        {
          text:
            'Significantly shorter time to market in new feature deployment',
          iconUrl:
            'https://e7.pngegg.com/pngimages/527/437/png-clipart-wifi-logo-wi-fi-computer-icons-wireless-symbol-wifi-icon-angle-electronics.png',
        },
      ],
      bgUrl: 'https://www.is-wireless.com/wp-content/uploads/2021/02/RRH-1.jpg',
    },

    radio: {
      title: 'Radio Resource Management',
      text:
        'Future networks will need to be much denser to meet the 1000x capacity requirement. It may mean the deployment of low-power Radio Units at every corner of the street and in every room. RRM algorithms run by RIC can handle interference in such situations. Moreover, they can manage QoS both in ultra-dense and in macro networks.',
      list: [
        {
          text:
            'Constructive use of interference, radiation lowering, energy efficiency',
          iconUrl: '../static/test-icon.png',
        },
        {
          text:
            'Practical realization of ultra-dense and high capacity networks',
          iconUrl: '../static/test-icon.png',
        },
        {
          text:
            'Ultra-reliable and low-latency communications enabled by the RRM algorithms',
          iconUrl:
            'https://e7.pngegg.com/pngimages/527/437/png-clipart-wifi-logo-wi-fi-computer-icons-wireless-symbol-wifi-icon-angle-electronics.png',
        },
      ],
    },
    cta_job: {
      title: 'Check out job openings',
      text: 'IS-Wireless is always looking for talented people!',
      bgUrl:
        'https://www.is-wireless.com/wp-content/uploads/2021/02/5G-job-IS-Wireless.jpg',
    },
  },
  homepageData: {},
})

export const mutations = {
  save($state, data) {
    Object.assign($state, data)
  },
}

export const getters = {
  getData: ($state) => {
    return $state
  },
}

export const actions = {
  init(context, data) {
    context.commit('save', data)
  },
}
