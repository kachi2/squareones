<template>
    <div class="sidebar">
        <!-- <div class="brand-icon" v-if="templateStore.appMode == 'dark'">
            <img src="/icons/sidebar/squareone_main.png" alt="">
        </div>
        <div class="brand-icon" v-else>
            <img src="/icons/sidebar/squareone_main_light.png" width="170px" alt="">
        </div> -->

        <div v-if="templateStore.appMode == 'light'" class="px-2 pt-3 pb-3">
            <router-link to="/">
                <svg width="40" height="33" viewBox="0 0 1500 2153" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M750 1305.69V1666.84C750 1666.84 750 1722.4 680.556 1764.07C611.111 1805.74 111.111 2111.33 111.111 2111.33C111.111 2111.33 13.8889 2180.78 13.8889 2097.44C13.8889 2014.1 13.8889 1736.29 13.8889 1736.29C13.8889 1736.29 13.8889 1694.62 55.5556 1666.84C97.2222 1639.06 694.444 1277.91 694.444 1277.91L763.889 1291.8L750 1305.69Z"
                        fill="#006CFC" />
                    <path
                        d="M750 847.31V486.161C750 486.161 750 430.6 819.444 388.929C888.889 347.258 1388.89 41.671 1388.89 41.671C1388.89 41.671 1486.11 -27.7806 1486.11 55.5614C1486.11 138.903 1486.11 416.71 1486.11 416.71C1486.11 416.71 1486.11 458.381 1444.44 486.161C1402.78 513.942 805.556 875.09 805.556 875.09L736.111 861.2L750 847.31Z"
                        fill="#006CFC" />
                    <path
                        d="M13.8889 791.748C13.8889 791.748 13.8889 875.09 83.3333 916.761C152.778 958.432 1416.67 1722.4 1416.67 1722.4C1416.67 1722.4 1486.11 1764.07 1486.11 1694.62C1486.11 1625.17 1486.11 1361.25 1486.11 1361.25C1486.11 1361.25 1486.11 1277.91 1416.67 1236.24C1347.22 1194.57 97.2222 444.49 97.2222 444.49C97.2222 444.49 13.8889 388.929 13.8889 472.271C13.8889 555.613 13.8889 791.748 13.8889 791.748Z"
                        fill="#006CFC" />
                </svg>
            </router-link>
        </div>
        <div class="px-2 pt-3 pb-3" v-else>
            <svg width="40" height="33" version="1.1" class="logoClass" id="Layer_3" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 108 155"
                style="enable-background:new  155  108 155;" xml:space="preserve">
                <path class="st0"
                    d="M54,94v26c0,0,0,4-5,7S8,152,8,152s-7,5-7-1s0-26,0-26s0-3,3-5s46-28,46-28l5,1L54,94z" />
                <path class="st0"
                    d="M54,61V35c0,0,0-4,5-7s41-25,41-25s7-5,7,1s0,26,0,26s0,3-3,5S58,63,58,63l-5-1L54,61z" />
                <path class="st0"
                    d="M1,57c0,0,0,6,5,9s96,58,96,58s5,3,5-2s0-24,0-24s0-6-5-9S7,32,7,32s-6-4-6,2S1,57,1,57z" />
            </svg>

        </div>
        <div class="mt-5">
            <menuList />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import menuList from './menuList.vue';

import { useTemplateStore } from '@/stores/templateStore';
const templateStore = useTemplateStore()

const router = useRouter()

</script>

<style scoped>
.sidebar {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: v-bind('templateStore.sidebarWidth') !important;
    /* border-right: 1px solid v-bind('templateStore.borderInDark') !important; */
    background-color: v-bind('templateStore.bgColor');
    overflow-y: auto;
    padding-right: 0px;
}

.logoClass {
    .st0 {
        fill: #7ECBFD;
    }
}

.brand-icon {
    margin: 20px;
}

@media (max-width: 767px) {
    .sidebar {
        display: none;
    }
}
</style>
