import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './router';
import App from './App.vue';
import 'uno.css';
import './styles/index.less';

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.mount('#app');
