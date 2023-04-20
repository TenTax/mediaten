import api from '@/api'

export default {
  namespaced: true,

  state: {
    loaded: false,
    data: null,
  },

  getters: {
    loaded (state) {
      return state.loaded
    },
    title (state) {
      return state.data?.title
    },
    sections (state) {
      return state.data?.sections
    },
    totalProducts (state) {
      return state.data?.total_products
    },
    totalSuppliers (state) {
      return state.data?.total_suppliers
    },
  },

  actions: {
    async fetchData ({ commit, state }, subsection) {
      if (state.loaded) {
        return
      }

      try {
        const data = await api.getSubsectionData(subsection)
        commit('setData', data)
      } finally {
        commit('setLoaded')
      }
    },
  },

  mutations: {
    setData (state, data) {
      state.data = data
    },

    setLoaded (state) {
      state.loaded = true
    },
  },
}
