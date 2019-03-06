import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './assets/md.scss';
import demoBlock from './components/demo-block.vue';


import btui from '../packages/index';
Vue.use(btui);

// import { btButton } from '../packages/index';
// Vue.component('bt-button', btButton);

Vue.component('demo-block', demoBlock);

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
