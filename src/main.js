import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import { useKakao } from 'vue3-kakao-maps/@utils'
import axios from 'axios'

// 기본 url설정
axios.defaults.baseURL = import.meta.env.VITE_VUE_API_URL
// 카카오맵 key
useKakao('46c8b3ecc2392dcc42bee9dabfefb433')

const app = createApp(App)
app.config.globalProperties.axios = axios
app.use(createPinia())
app.use(router)
app.mount('#app')
