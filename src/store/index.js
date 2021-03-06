import Vue from 'vue';
import Vuex from 'vuex';

import auth from './modules/auth';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isLoading: false,
    },
    getters: {
        isLoading: (state) => state.isLoading,
    },
    mutations: {
        enableLoading(state) {
            state.isLoading = true;
        },
        disableLoading(state) {
            state.isLoading = false;
        },
    },
    actions: {},
    modules: {
        auth
    }
});
