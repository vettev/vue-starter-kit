import Vue from 'vue';

export default class AbstractService {
    static PREFIX = '/';

    path(path) {
        return this.PREFIX + path;
    }

    post(path, data) {
        path = this.path(path);
        return Vue.axios.post(path, data);
    }

    get(path, data) {
        path = this.path(path);
        return Vue.axios.get(path, data);
    }

    put(path, data) {
        path = this.path(path);
        return Vue.axios.put(path, data);
    }

    delete(path, data) {
        path = this.path(path);
        return Vue.axios.put(path, data);
    }
}
