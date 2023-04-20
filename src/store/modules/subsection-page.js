import api from '@/api'

export default {
  namespaced: true,

  state: {
    loading: false,
    data: null,
    cache: {},
  },

  getters: {
    loading (state) {
      return state.loading
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
      if (!state.cache[subsection]) {
        try {
          commit('setLoading', true)
          const data = await api.getSubsectionData(subsection)
          commit('saveDataToCache', { key: subsection, data })
        } finally {
          commit('setLoading', false)
        }
      }

      commit('setData', state.cache[subsection])
    },
  },

  mutations: {
    setData (state, data) {
      state.data = data
    },

    setLoading (state, loading) {
      state.loading = loading
    },

    saveDataToCache (state, { key, data }) {
      state.cache[key] = data
    },
  },
}
