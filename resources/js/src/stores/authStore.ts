import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
// @ts-ignore
import Cookies from 'js-cookie';
import { useStorage } from '@vueuse/core';

export const useAuthStore = defineStore('authStore', () => {
  const token = ref('')
  const profileData: any = useStorage('sqOneProfile_data', '')
  const profileDataName: any = useStorage('sqOneProfile_dataName', '')

  const isLoggedIn = computed(() => token.value || Cookies.get('_tokn'));

  const emailVerified = computed(() => {
    return profileData.value?.email_verified_at
  })

  const login = (data: any) => {
    Cookies.set('_tokn', data.UserToken, { expires: 7 });
    token.value = data.UserToken;
    profileData.value = data.user;
    profileDataName.value = data.user.name;
  }

  const logout = () => {
    Cookies.remove('_tokn');
    token.value = '';
    window.location.reload();
  }

  return { login, logout, isLoggedIn, profileData, profileDataName, emailVerified }
})
