import Vue from 'vue';

export default class AbstractService {
    static PREFIX = '/';

    static path(path) {
        return this.PREFIX + path;
    }

    static post(path, data) {
        path = this.path(path);
        return Vue.axios.post(path, data);
    }

    static get(path, data) {
        path = this.path(path);
        return Vue.axios.get(path, data);
    }

    static put(path, data) {
        path = this.path(path);
        return Vue.axios.put(path, data);
    }

    static delete(path, data) {
        path = this.path(path);
        return Vue.axios.put(path, data);
    }
}
