import { defineStore } from 'pinia'

export const useGeneralStore = defineStore('generalStore',{
  state: () => ({
    menu: {},
    menu_locations: {},
    pages: {},
    posts: [],
    options: {
      acf: {},
    },
  }),

  getters: {
    data: (state) => {
      return state
    },
    getOptionsData: (state) => {
      return state.options.acf
    },
    getPageData: (state) => {
      return (slug) => state.pages[slug]
    },
    getPostsData: (state) => {
      return state.posts
    },
  },

  actions: {
  
    save(data) {
      Object.assign(this, data)
    },
    menuAdd(data) {
      var obj = {
        [data.ID.toString()]: data,
      }
  
      Object.assign(this.menu, { ...this.menu, ...obj })
    },
    pageAdd(slug,data) {
      var obj = {
        [slug]: data,
      }
      this.pages = { ...this.pages, ...obj }
    },
  
    postsPrepend(data) {
      let postsSet = new Set([ ...data, ...this.posts ])
      Object.assign(this.posts, Array.from(postsSet) )
    },
  
    postsAdd(data) {
      let postsCombined = [...this.posts, ...data]
      let postsUnique = [...new Map(postsCombined.map(item =>
        [item['id'], item])).values()]
  
        this.posts = postsUnique
    },
  
    init(data) {
      this.save(data)
    },
    menuInit(data) {
      this.menuAdd(data.menu)
    },
    pagesInit(data) {
      this.pageAdd(data.pages)
    },
    postsInit(posts= [], prepend= false ) {
      if (prepend) {
        this.postsPrepend(posts)      
      }else{
        this.postsAdd(posts)
      }
    },
  }

})

