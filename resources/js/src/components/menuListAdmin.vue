<script lang="ts" setup>
import { RouterLink } from 'vue-router';
import { useTemplateStore } from '@/stores/templateStore';

const templateStore = useTemplateStore()
</script>

<template>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">
            <router-link to="/admin">
                <!-- <img class="side-icon" src="/icons/sidebar/grid-four.png" alt=""> -->
                <i class="bi bi-grid me-2"></i>
                <span v-if="!templateStore.sidebarIsCollapsed">Dashboard</span>

            </router-link>

        </li>
        <li class="list-group-item">
            <router-link to="/admin/companies">
                <!-- <img class="side-icon" src="/icons/sidebar/grid-four.png" alt=""> -->
                <i class="bi bi-buildings me-2"></i>
                <span v-if="!templateStore.sidebarIsCollapsed">Manage Company</span>

            </router-link>
        </li>

        <li class="list-group-item">
            <router-link to="/admin/users">
                <!-- <img class="side-icon" src="/icons/sidebar/grid-four.png" alt=""> -->
                <i class="bi bi-people me-2"></i>
                <span v-if="!templateStore.sidebarIsCollapsed">Manage Users</span>

            </router-link>
        </li>

    </ul>

    <div class="mt-5">
        <!-- Some borders are removed -->
        <ul class="list-group list-group-flush">
            <li v-if="!templateStore.sidebarIsCollapsed" class="list-group-item text-secondary">Preferences</li>

            <li class="list-group-item">
                <router-link to="/admin/account">
                    <!-- <img class="side-icon" src="/icons/sidebar/profile.png" alt=""> -->
                    <i class="bi bi-gear me-2"></i>
                    <span v-if="!templateStore.sidebarIsCollapsed">Account Settings</span>
                </router-link>
            </li>


            <li class="list-group-item">
                <router-link to="/admin/billings">
                    <!-- <img class="side-icon" src="/icons/sidebar/money.png" alt=""> -->
                    <i class="bi bi-cash-stack me-2"></i>

                    <span v-if="!templateStore.sidebarIsCollapsed">Billings</span>
                </router-link>
            </li>

        </ul>

    </div>
</template>

<style lang="css" scoped>
.list-group-item {
    background: transparent;
    border: none;
    padding-bottom: 15px;
}

.list-group-item a {
    color: #171717;
    color: v-bind('templateStore.textColor');
    text-decoration: none;
    font-weight: 450;
}


.accordion-item {
    background: transparent;
    border: none !important;
    color: #171717;
}


.accordion-button {
    padding: 0px;
    background-color: transparent;
    /* font-size: 16px; */
    color: #fff;
    color: v-bind('templateStore.textColor');
    border: none;
    box-shadow: none;
}

.accordion-button.collapsed::after {
    background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23ffffff'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
}

.accordion-button:not(.collapsed)::after {
    background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23ffffff'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
}

.accordion-item .nav-item a {
    /* color: #fff; */
    color: #171717;
    color: v-bind('templateStore.textColor');
    margin-block: 0px;
    font-size: 14px;

}

.accordion-body {
    padding-bottom: 0px !important;
    padding-top: 3px !important;
}


.side-icon {
    margin-right: 8px;
}

.list-group-item .router-link-active {
    /* color: var(--primary-color) !important */
    color: #171717;
    color: v-bind('templateStore.textColor');
}

.list-group-item .router-link-active:hover {
    /* color: var(--primary-color) !important */
    background-color: #00000015;
    padding: 10px;
}
</style>
