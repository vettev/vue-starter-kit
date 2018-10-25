import Vue from 'vue';
import VueLogger from 'vuejs-logger';

const options = {
    // required ['debug', 'info', 'warn', 'error', 'fatal']
    logLevel: process.env.NODE_ENV === 'production' ? 'fatal' : 'debug',
    stringifyArguments: false,
    showLogLevel: true,
    showMethodName: false,
    separator: '|',
    showConsoleColors: true
};

Vue.use(VueLogger, options);

Vue.config.errorHandler = function (err, vm, info) {
    Vue.$log.error(info, err);
};
Vue.config.warnHandler = function (msg, vm, trace) {
    Vue.$log.warn(msg, trace);
};
