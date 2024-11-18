import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home.vue"
import LoginView from "@/views/Login.vue"
import Hotplace from "@/views/Hotplace.vue"
import Mypage from "@/views/Mypage.vue"
import Notice from "@/views/Notice.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/main',
      name: 'main',
      component: Home,
    },
    {
      path: '/hotplace',
      name: 'hotplace',
      component: Hotplace,
    },
    {
      path: '/notice',
      name: 'notice',
      component: Notice,
    },
    {
      path: '/mypage',
      name: 'mypage',
      component: Mypage,
    },
  ],
})

export default router
