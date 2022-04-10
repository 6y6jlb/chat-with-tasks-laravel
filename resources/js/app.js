require('./bootstrap');

import { createApp } from 'vue'
import { store } from './store';


const app = createApp({});

app.component('example-component', require('./components/ExampleComponent.vue').default);
app.use(store);
app.mount('#app');