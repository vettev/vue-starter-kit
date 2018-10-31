import store from '@/store/index';

export default (to, from, next) => {
    const isUserLogged = store.getters.isUserLogged;

    if (to.matched.some(record => record.meta.authRequired)) {
        if (isUserLogged) {
            next();
        } else {
            next({name: 'login'});
        }
    } else {
        next();
    }
};