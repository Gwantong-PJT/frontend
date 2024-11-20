import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import LoginView from '@/views/Login.vue'
import Hotplace from '@/views/Hotplace.vue'
import Mypage from '@/views/Mypage.vue'
import Notice from '@/views/Notice.vue'
import Search from '@/views/Search.vue'

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
      redirect: { name: 'hotplace-list' },
      children: [
        {
          path: 'list',
          name: 'hotplace-list',
          component: () => import('@/components/Hotplace/HotplaceList.vue'),
        },
        {
          path: 'view/:hotplaceNo',
          name: 'hotplace-view',
          component: () => import('@/components/Hotplace/HotplaceDetail.vue'),
        },
        {
          path: 'write',
          name: 'hotplace-write',
          component: () => import('@/components/Hotplace/HotplaceWrite.vue'),
        },
      ],
    },
    {
      path: '/notice',
      name: 'notice',
      component: Notice,
      redirect: { name: 'article-list' },
      children: [
        {
          path: 'list',
          name: 'article-list',
          component: () => import('@/components/Notice/NoticeList.vue'),
        },
        {
          path: 'view/:noticeNo',
          name: 'article-view',
          component: () => import('@/components/Notice/NoticeDetail.vue'),
        },
        {
          path: 'write',
          name: 'article-write',
          component: () => import('@/components/Notice/NoticeWrite.vue'),
        },
        {
          path: 'modify/:noticeNo',
          name: 'article-modify',
          component: () => import('@/components/Notice/NoticeModify.vue'),
        },
      ],
    },
    {
      path: '/mypage',
      name: 'mypage',
      component: Mypage,
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
    },
  ],
})

export default router
