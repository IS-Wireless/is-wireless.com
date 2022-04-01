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
        },
        tiles:[

          {
            category:'Papers',
            catIconUrl:'../static/test-icon.png',
            title: 'Machine Learning Techniques for Detecting Attackers During Quantum Key Distribution in IoT Networks With Application to Railway Scenarios',
            description: 'IEEE Xplore, Publication Date: 04.10.2021'
          },
          {
            category:'Papers',
            catIconUrl:'../static/test-icon.png',
            title: 'Design and Experimental Validation of Radio Access Network Controller Prototype for Multi-RAT Technologies With Scheduler Strategies',
            description: 'IEEE 32nd Annual International Symposium on Personal, Indoor and Mobile Radio Communications (PIMRC’21), 13-16.09.2021'
          },
          {
            category:'Videos',
            catIconUrl:'../static/test-icon.png',
            title: 'Open RAN: otwarta architektura sieci 5G (open 5G network architecture)',
            description: 'PLNOG23 Conference Kraków, 24.09.2019'
          },
          {
            category:'Books',
            catIconUrl:'../static/test-icon.png',
            title: 'Towards 5G, Applications, Requirements & Candidate Technologies',
            description: 'R. Vannithamby, S. Talwar; Wiley, 2016'
          },
          {
            category:'Reports',
            catIconUrl:'../static/test-icon.png',
            title: 'Precoding Optimization for Cell-free mMIMO in 5G and Beyond Networks: A Machine Learning Approach,',
            description: 'R. Vannithamby, S. Talwar; Wiley, 2016'
          },
          {
            category:'Slidesets',
            catIconUrl:'../static/test-icon.png',
            title: 'Lessons learned from hands-on development of multi-RAT virtual-RAN',
            description: 'Pietrzyk S., part of Industry Program, IEEE Globecom 2019, Waikoloa, HI, USA'
          },
          {
            category:'Papers',
            catIconUrl:'../static/test-icon.png',
            title: 'Machine Learning Techniques for Detecting Attackers During Quantum Key Distribution in IoT Networks With Application to Railway Scenarios',
            description: 'IEEE Xplore, Publication Date: 04.10.2021'
          },
          {
            category:'Papers',
            catIconUrl:'../static/test-icon.png',
            title: 'Design and Experimental Validation of Radio Access Network Controller Prototype for Multi-RAT Technologies With Scheduler Strategies',
            description: 'IEEE 32nd Annual International Symposium on Personal, Indoor and Mobile Radio Communications (PIMRC’21), 13-16.09.2021'
          },
          {
            category:'Videos',
            catIconUrl:'../static/test-icon.png',
            title: 'Open RAN: otwarta architektura sieci 5G (open 5G network architecture)',
            description: 'PLNOG23 Conference Kraków, 24.09.2019'
          },
          {
            category:'Books',
            catIconUrl:'../static/test-icon.png',
            title: 'Towards 5G, Applications, Requirements & Candidate Technologies',
            description: 'R. Vannithamby, S. Talwar; Wiley, 2016'
          },
          {
            category:'Reports',
            catIconUrl:'../static/test-icon.png',
            title: 'Precoding Optimization for Cell-free mMIMO in 5G and Beyond Networks: A Machine Learning Approach,',
            description: 'R. Vannithamby, S. Talwar; Wiley, 2016'
          },
          {
            category:'Slidesets',
            catIconUrl:'../static/test-icon.png',
            title: 'Lessons learned from hands-on development of multi-RAT virtual-RAN',
            description: 'Pietrzyk S., part of Industry Program, IEEE Globecom 2019, Waikoloa, HI, USA'
          }
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
