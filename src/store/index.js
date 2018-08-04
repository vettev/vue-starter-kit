import Vue from 'vue';
import Vuex from 'vuex';

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
});
