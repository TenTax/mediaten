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
    sections (state) {
      return state.data?.sections
    },
  },

  actions: {
    async fetchData ({ commit }, subsection) {
      try {
        const data = await api.getSubsectionData(subsection)
        commit('setData', data)
      } finally {
        commit('setLoaded')
      }
    },
    resetState ({ commit }) {
      commit('resetState')
    },
  },

  mutations: {
    setData (state, data) {
      state.data = data
    },

    setLoaded (state) {
      state.loaded = true
    },

    resetState (state) {
      state.loaded = false
      state.data = null
    },
  },
}
