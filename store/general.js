export const state = () => ({
  menu: {},
  pages: {},
})

export const getters = {
  getData: ($state) => {
    return $state
  },
  getOptionsData: ($state) => {
    return $state.options.acf
  },
  getPagesData: ($state) => {
    return $state.pages
  },
  getPostsData: ($state) => {
    return $state.posts
  },
}

export const mutations = {
  save($state, data) {
    Object.assign($state, data)
  },
  menuAdd($state, data) {
    var obj = {
      [data.ID.toString()]: data,
    }

    Object.assign($state.menu, { ...$state.menu, ...obj })
  },
  pageAdd($state, data) {
    var obj = {
      [data.id.toString()]: data,
    }

    Object.assign($state.pages, { ...$state.pages, ...obj })
  },
}

export const actions = {
  init(context, data) {
    context.commit('save', data)
  },
  menuInit(context, data) {
    context.commit('menuAdd', data.menu)
  },
  pagesInit(context, data) {
    context.commit('pageAdd', data.pages)
  },
}
