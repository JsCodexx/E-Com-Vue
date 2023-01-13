
import { createStore } from 'vuex';



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
