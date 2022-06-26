'use strict';

import Vue from 'vue';
import axios from 'axios';

let config = {
    baseURL: process.env.VUE_APP_API_BASE_URL || '',
};

const _axios = axios.create(config);

Plugin.install = function (Vue) {
    Vue.axios = _axios;
    window.axios = _axios;
    Object.defineProperties(Vue.prototype, {
        axios: {
            get() {
                return _axios;
            },
        },
        $axios: {
            get() {
                return _axios;
            },
        },
    });
};

Vue.use(Plugin);

export default Plugin;
