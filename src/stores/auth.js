import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isLoggedIn: false,
  }),
  actions: {
    login() {
      this.isLoggedIn = true
      sessionStorage.setItem('isLoggedIn', 'true'); // 로그인 상태 저장
    },
    logout() {
      this.isLoggedIn = false
      sessionStorage.removeItem('isLoggedIn'); // 상태 지우기
      sessionStorage.removeItem('refreshToken'); // 토큰 제거
    },
    initializeAuth() {
      // sessionStorage에 저장된 로그인 상태를 복원
      const loggedIn = sessionStorage.getItem('isLoggedIn');
      this.isLoggedIn = loggedIn === 'true';
    },
  },
})
