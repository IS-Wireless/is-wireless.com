import { isEmpty as _isEmpty } from 'lodash'

const filterWords = ['yoast_head', 'meta', '{}']

export const state = () => ({
  acf: {
    banner: {
      title: 'About Us',
      bgUrl:
        'https://www.is-wireless.com/wp-content/uploads/2021/02/About-us.jpg',
    },
    content: {
      acf_fc_layout: 'sidebar_blocks_links',
      title: 'Table of contents',
      links: [
        { link_title: 'What we do' },
        { link_title: 'Leadership' },
        { link_title: 'Business development' },
        { link_title: 'Investor' },
        { link_title: 'Team' },
        { link_title: 'Values' },
        { link_title: 'Inspirations' },
        { link_title: 'Membership and associations' },
        { link_title: 'Public funds' },
      ],
    },
  },
})

const filterData = (obj) => {
  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] == 'string') {
      obj[key] = obj[key].replace(
        /(<!--.*?-->)|(<!--[\S\s]+?-->)|(<!--[\S\s]*?$)/gs,
        ''
      )
    }

    if (
      _isEmpty(key) ||
      RegExp(filterWords.join('|')).test(key) ||
      obj[key] == null ||
      typeof obj[key] == 'undefined' ||
      (Array.isArray(obj[key]) && !obj[key].length) ||
      obj[key] == '' ||
      obj[key] == []
    ) {
      delete obj[key]
    } // delete
    else if (obj[key] && typeof obj[key] === 'object') filterData(obj[key]) // recurse
  })
}

export const mutations = {
  save($state, data) {
    filterData(data)

    Object.assign($state, data)
  },
}

export const getters = {
  getData: ($state) => {
    return $state
  },
}

export const actions = {}
