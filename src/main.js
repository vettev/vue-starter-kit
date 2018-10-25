import Vue from 'vue';

import i18n from './bootstrap/i18n';
import './bootstrap/axios';
import './bootstrap/components';

import router from './router/index';
import store from './store/index';

import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app');
