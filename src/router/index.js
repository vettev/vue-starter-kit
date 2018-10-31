import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes';

import checkAuth from './guards/checkAuth';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

router.beforeEach(checkAuth);

export default router;
