import { isEmpty as _isEmpty } from 'lodash'

const filterWords = ['yoast_head', 'meta', '{}']

export const state = () => ({
    acf:{
        banner:{
            title: 'About Us',
            bgUrl: 'https://www.is-wireless.com/wp-content/uploads/2021/02/About-us.jpg'
        },
        content:[
          {component:'content-static',anchor: 'what-we-do',title: 'What we do',text: 'IS-Wireless develops software-defined 4G and 5G mobile networks supporting more users with better performance at lower cost by applying cutting edge proprietary technologies. IS-Wireless participates in the Open RAN revolution and expects significant changes in the way networks are built and deployed in the coming years. The company is strongly rooted in R&D on 4G and 5G since its foundation in 2006, mainly through EU-funded collaborative research projects. IS-Wireless is a proud recipient of various local recognitions including Micro-Entrepreneur of the Year and Innovator of Mazovia.'},
          {component:'content-static',anchor: 'leadership',title: 'Leadership',text: '2IS-Wireless develops software-defined 4G and 5G mobile networks supporting more users with better performance at lower cost by applying cutting edge proprietary technologies. IS-Wireless participates in the Open RAN revolution and expects significant changes in the way networks are built and deployed in the coming years. The company is strongly rooted in R&D on 4G and 5G since its foundation in 2006, mainly through EU-funded collaborative research projects. IS-Wireless is a proud recipient of various local recognitions including Micro-Entrepreneur of the Year and Innovator of Mazovia.'},
        ]
        
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
