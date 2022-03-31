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
                iconUrl: 'https://i.ibb.co/xh6hL9q/images-removebg-preview.png'
            },
            1:{
                category: 'Videos',
                iconUrl: 'https://i.ibb.co/xh6hL9q/images-removebg-preview.png'
            },
            2:{
                category: 'Slidesets',
                iconUrl: 'https://i.ibb.co/xh6hL9q/images-removebg-preview.png'
            },
            3:{
                category: 'Papers',
                iconUrl: 'https://i.ibb.co/xh6hL9q/images-removebg-preview.png'
            },
            4:{
                category: 'Reports',
                iconUrl: 'https://i.ibb.co/xh6hL9q/images-removebg-preview.png'
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
