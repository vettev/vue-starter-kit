import Vue from 'vue';
import './plugins/axios';
import App from './App.vue';
import router from './router/index';
import store from './store/index';
import i18n from './i18n';

import {Message} from 'element-ui';

Vue.use(Message);

Vue.prototype.$message = Message;

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    i18n,
    render: h => h(App),
}).$mount('#app');
