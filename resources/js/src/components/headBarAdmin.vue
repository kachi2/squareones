<template>
    <nav class="navbar navbar-expand-sm shadow-sm ">
        <div class="container">
            <span class="navbar-brand">
                <span @click="templateStore.sideBarToggleCollapse()" class="cursor-pointer">
                    <i class="bi bi-justify"></i>
                </span>

                <span class="ms-3"> Welcome back Admin</span>
            </span>
            <button class="btn btn-lg p-1 py-0 d-md-none" data-bs-toggle="offcanvas"
                data-bs-target="#sideBarMobileOffcanvas" aria-controls="sideBarMobileOffcanvas">
                <i class="bi bi-justify fs-3"></i>
            </button>

            <div class="d-none d-md-block">
                <!-- <appModeToggler /> -->
                <span class="mx-4 dropdown">
                    <span @click="updateReadNotifications"
                        class="position-relative  cursor-pointer bell dropdown-toggle" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        <i class="bi bi-bell " style="font-size:16px; font-weight:700; color:blue"></i>
                        <span v-if="notificationsUnRead"
                            class="position-absolute top-0 start-100 translate-middle p-1 mt-2 bg-danger border border-light rounded-circle">
                            <span class="visually-hidden"></span>
                        </span>

                        <div class="dropdown-menu dropdown-menu-end notification-dropdown">
                            <div v-if="!notifications.length" class="dropdown-item"> No Notificatons</div>
                            <div v-else>
                                <!-- <div class="noti-header">
                                    Notifications <span class="badge rounded-pill text-bg-light small">{{
                                        notifications.length }}</span>

                                </div> -->
                                <ul class="list-group list-group-flush ">
                                    <li v-for="noti in notifications" :key="noti"
                                        class="dropdown-item list-group-ite small text-wrap"
                                        style="border-bottom:1px solid #eee">
                                        <strong>{{ noti.title }}
                                            <!-- <i class="bi bi-x-lg text-danger cursor-pointer float-end"></i> -->
                                        </strong>
                                        <div class="small text-mut">
                                            {{ noti?.content }}
                                            <p class="text-danger-emphasis fst-italic">{{
                                                useFunctions.timeAgo(noti.created_at) }}
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </span>

                </span>
                <span class="line-right"> </span>

                <span class=" mx-4 me-5 dropdown">
                    <span data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                        class="dropdown-toggle"><i class="bi bi-person-fill  "></i>
                        <small style="font-weight: 450"> Admin </small> <i class="bi bi-chevron-down"></i></span>
                    <div class="dropdown-menu dropdown-menu-end">
                        <router-link class="dropdown-item" to="/admin/account">Settings</router-link>
                        <span class="dropdown-item" @click="logout">Logout</span>
                        <div class="dropdown-divider"></div>
                        <appModeToggler class="dropdown-item" />
                    </div>
                </span>

            </div>
        </div>
    </nav>
    <SideBarMobileAdmin />
</template>

<script lang="ts" setup>

import { useTemplateStore } from '@/stores/templateStore';
import SideBarMobileAdmin from './sideBarMobileAdmin.vue';

import { useAuthStore } from '@/stores/authStore';
import { useRouter } from 'vue-router';
import { computed, ref } from 'vue';
import api from "@/stores/Helpers/axios";
import useFunctions from '@/stores/Helpers/useFunctions';

const authStore = useAuthStore()
const router = useRouter()

const templateStore = useTemplateStore()
const notifications = ref<any[]>([])
const notificationsUnRead = computed(() => {
    return notifications.value.find((x: any) => x.is_read == 1)
})


async function updateReadNotifications() {
    try { await api.userNotificationsMarkAsRead() } catch (error) { }
    getNotifications()
}

async function getNotifications() {
    try {
        const resp = await api.userNotifications()
        notifications.value = resp.data?.data ?? []

    } catch (error) {

    }

}


async function logout() {
    await authStore.logout()
    router.replace({ name: 'Login' })
}
</script>


<style lang="css" scoped>
.navbar {
    margin-left: v-bind('templateStore.sidebarWidth');
    background-color: v-bind('templateStore.bgColor');
    color: v-bind('templateStore.textColor');
    /* border-bottom: 1px solid v-bind('templateStore.borderInDark') !important; */
    box-shadow: 2px 1px 2px #eee;
}

.navbar-brand {
    color: v-bind('templateStore.textColor');
}

@media (max-width: 767px) {
    .navbar {
        margin-left: 0px;
    }
}

.bell {
    padding-left: 6px;
    padding-top: 6px;
}

.dropdown-toggle::after {
    content: none !important;
}

.dropdown-menu {
    border-radius: 0px;
    border: none !important;
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)
}
</style>
