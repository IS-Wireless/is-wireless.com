import { isEmpty as _isEmpty } from 'lodash'

const filterWords = ['yoast_head', 'meta', '{}']

export const state = () => ({
  acf:{
    "baner_slide":[{"baner_image":"https://www.is-wireless.com/wp-content/uploads/2021/02/Indoor-capacity.jpg","baner_content":[{"acf_fc_layout":"Podstawowy","logo":"https://www.is-wireless.com/wp-content/uploads/2021/02/IS-Wireless-5GMadeTogether.svg","text":"4G and 5G Mobile Networks of the Future","button_first_text":"https://www.is-wireless.com/networks/","button_second_text":"Academy","button_second_url":"https://www.is-wireless.com/academy/"}]}]    
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
