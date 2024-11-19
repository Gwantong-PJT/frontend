import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import router from './router';
import { useKakao } from 'vue3-kakao-maps/@utils';

useKakao('46c8b3ecc2392dcc42bee9dabfefb433');
const app = createApp(App);
app.use(createPinia()); 
app.use(router);    
app.mount('#app');
