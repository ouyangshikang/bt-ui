import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './assets/common.scss';


import btui from '../packages/index';
Vue.use(btui);

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
