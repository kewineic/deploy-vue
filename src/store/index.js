import { createStore } from 'vuex';

import Api from '../service/Api';

export default createStore({
  state: {
    token: null,
    user: {},
    gerentes: []
  },
  mutations: {
    SET_LOGGED_USER(state, { token, user }){
      state.token = token;
      state.user = user;
    },

    SET_LOGOUT_USER(state) {
      state.token = null;
      state.user = {};
    },

    GET_GERENTES(state, gerentes) {
      state.gerentes = gerentes;
    }
  },
  actions: {
    getManagers({ commit }) {
      return new Promise((resolve, reject) => {
        Api.get('gerentes')
        .then(res => {
          commit('GET_GERENTES', res.data);
          resolve(res.data)
        })
        .catch(err => {
          console.log(err);
          reject(err);
        });
      });
    },

    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        Api.post('auth/login', user)
          .then( res => {
            commit('SET_LOGGED_USER', {
              token: res.data.access_token,
              user: res.data.user
            });
            resolve(res.data);
          })
          .catch(err => {
            console.log(err);
            reject(err);
          });
      });
    },

    sendForm() {

    }
  },
  getters: {
    userIsLogged(state) {
      return Boolean(state.token); 
    },

    listManagers(state) {
      return state.gerentes
    }
  },
  modules: {
  }
});
