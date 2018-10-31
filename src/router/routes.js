import Home from '@/views/Home';
import Login from '@/views/auth/Login';
import Register from '@/views/auth/Register';

export default [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            authRequired: true
        }
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    }
    // {
    //     path: '/about',
    //     name: 'about',
    //     // router level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this router
    //     // which is lazy-loaded when the router is visited.
    //     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // }
];
