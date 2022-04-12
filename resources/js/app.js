require('./bootstrap');

import { createApp } from 'vue'
import router from './router/index';
import store from './store';


const app = createApp({});

app.component('app-component', require('./components/App.vue').default)
    .use(router)
    .use(store)
    .mount('#app')