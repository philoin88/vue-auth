import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  user: null
};

const getters = {
  getUser(state) {
    return state.user
  }
};

const actions = {
  setUser(context, user) {
    context.commit('setUser', user)
  }
}

const mutations = {
  setUser(state, payload) {
    state.user = payload
  }
};

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
})

export default store;
