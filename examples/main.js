import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './assets/md.scss';
import demoBlock from './components/demo-block.vue';


import btui from '../packages/index';
Vue.use(btui);

// import { Button } from '../lib/bt-ui.umd';
// Vue.component('bt-button', Button);

Vue.component('demo-block', demoBlock);

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
