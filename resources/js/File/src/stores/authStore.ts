import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
// @ts-ignore
import Cookies from 'js-cookie';

export const useAuthStore = defineStore('authStore', () => {
  const token = ref('')
  const profileData = ref<any>('')

  const isLoggedIn = computed(() => token.value || Cookies.get('_tokn'));

  const emailVerified = computed(() => {
    return profileData.value?.email_verified_at
  })

  const login = (tokenStr: string) => {
    Cookies.set('_tokn', tokenStr, { expires: 7 });
    token.value = tokenStr;
  }

  const logout = () => {
    Cookies.remove('_tokn');
    token.value = '';
  }

  return { login, logout, isLoggedIn, profileData, emailVerified }
})
