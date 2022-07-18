import Vue from 'vue';
import VueTour from 'vue-tour';
import App from './App.vue';
import router from './router';
import store from './store';

import '@/assets/scss/index.scss';

require('vue-tour/dist/vue-tour.css');

Vue.use(VueTour);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
