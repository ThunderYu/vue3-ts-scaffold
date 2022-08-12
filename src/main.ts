import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './router';
import '@/store/index';
import App from './App.vue';
import './styles/index.less';

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.mount('#app');
