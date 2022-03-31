import { isEmpty as _isEmpty } from 'lodash'

const filterWords = ['yoast_head', 'meta', '{}']

export const state = () => ({
    acf:{
        banner:{
            title: 'Resources',
            bgUrl: 'https://www.is-wireless.com/wp-content/uploads/2021/02/Resources.jpg'
        },
        filters:{
            0:{
                category: 'Books',
                iconUrl: '../static/test-icon.png'
            },
            1:{
                category: 'Videos',
                iconUrl: '../static/test-icon.png'
            },
            2:{
                category: 'Slidesets',
                iconUrl: '../static/test-icon.png'
            },
            3:{
                category: 'Papers',
                iconUrl: '../static/test-icon.png'
            },
            4:{
                category: 'Reports',
                iconUrl: '../static/test-icon.png'
            }
        }
    }
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
