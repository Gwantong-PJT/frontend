import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home.vue"
import LoginView from "@/views/LoginView.vue"
import Hotplace from "@/views/Hotplace.vue"
import Mypage from "@/views/Mypage.vue"
import Notice from "@/views/Notice.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
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
