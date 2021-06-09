import Vue from 'vue';
import Vuex from 'vuex';
import { toLogin } from '../api/loginrequest';
import { setLocal, getLocal } from '../utils/local';
import router from '../router/index';
Vue.use(Vuex);

const loginModule = {
  namespaced: true,
  state: {
    userInfo: JSON.parse(getLocal('userInfo')),
  },
  mutations: {
    changeUserInfo(state, user) {
      state.userInfo = user;
      setLocal('token', user.jwt);
      setLocal('userInfo', JSON.stringify(user));
      router.push('/home');
    },
  },
  getters: {},

  actions: {
    async getUserInfoCommit({ commit }, user) {
      const { data } = await toLogin(user);
      commit('changeUserInfo', data);
    },
  },
};
const homeModule = {
  namespaced: true,
  state: {},
  mutations: {},
  getters: {},

  actions: {},
};
export default new Vuex.Store({
  state: {},
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    loginModule,
    homeModule,
  },
});
