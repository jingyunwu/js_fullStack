import Vue from 'vue'
import vuex from 'vuex'
import trip from './modules/trip'
import home from './modules/home'

Vue.use(vuex)


export default new vuex.Store({
  modules: {
    trip,
    home
  }
})