import AuthService from '@/services/Auth';

const state = {
    user: null
};

const getters = {
    user: (state) => state.user,
    isUserLogged: (state, getters) => {
        return !!(getters.user && getters.token && getters.token.length > 0);
    },
    token: () => {
        return localStorage.getItem('authToken');
    }
};

const mutations = {
    setUser(state, payload) {
        state.user = payload;
    },
    setToken(state, payload) {
        localStorage.setItem('authToken', payload);
    }
};

const actions = {
    async login({commit}, payload) {
        const response = await AuthService.login(payload);
        commit('setUser', response.user);
        commit('setToken', response.token);

        return true;
    }
};


export default {
    state,
    getters,
    mutations,
    actions
};