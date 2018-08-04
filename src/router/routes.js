import Home from '@/views/Home.vue';

export default [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    // {
    //     path: '/about',
    //     name: 'about',
    //     // router level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this router
    //     // which is lazy-loaded when the router is visited.
    //     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // }
];
