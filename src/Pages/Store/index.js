// import vue from 'vue';
import { createStore } from 'vuex';

// vue.use(Vuex)

import state from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const Store = createStore({
  mutations,
  actions,
  getters,
  state,
});
export default Store;
