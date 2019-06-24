import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);


// 单一的状态树 一颗树
export default new Vuex.Store({
  state: {
    todos: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
  },
  actions,
  
})