import { createStore } from 'vuex'
import baseModule from './modules/base'
import petitionsModule from "./modules/petitions";
import examiner from "./modules/examiner"
export default createStore({
  state: {},

  mutations: {},

  actions: {},

  modules: {
    baseModule,
    petitionsModule,
    examiner
  }
})
