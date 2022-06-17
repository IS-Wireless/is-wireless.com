export const state = () => ({})

export const mutations = {
  save($state, data) {
    let dataM = data
    dataM = { ...dataM.homepageData, ...dataM.homepageData.acf }
    Object.assign($state, dataM)
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
