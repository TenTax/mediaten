import Vue from 'vue'
import Vuex from 'vuex'
import subsectionPage from './modules/subsection-page'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    subsectionPage,
  },
})
