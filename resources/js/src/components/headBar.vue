<template>
    <nav class="navbar navbar-expand-sm navbar-light bg-light">
        <div class="container">
            <span class="navbar-brand">Welcome back John!</span>
            <button class="btn btn-lg p-1 py-0 d-md-none" data-bs-toggle="offcanvas"
                data-bs-target="#sideBarMobileOffcanvas" aria-controls="sideBarMobileOffcanvas">
                <i class="bi bi-justify fs-3"></i>
            </button>

            <div class="d-none d-md-block">
                <span class="mx-4 dropdown">
                    <span class="position-relative  cursor-pointer bell dropdown-toggle" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        <i class="bi bi-bell "></i>
                        <span
                            class="position-absolute top-0 start-100 translate-middle p-1 mt-2 bg-danger border border-light rounded-circle">
                            <span class="visually-hidden"></span>
                        </span>

                        <div class="dropdown-menu dropdown-menu-end">
                            <ul class="list-group list-group-flush  ">
                                <li class="dropdown-item list-group-item">Menu 1</li>
                                <li class=" dropdown-item list-group-item">Menu 2</li>
                                <li class=" dropdown-item list-group-item">Menu 2</li>
                            </ul>
                        </div>
                    </span>

                </span>
                <span class="line-right"> </span>

                <span class=" mx-4 me-5 dropdown">
                    <span data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                        class="dropdown-toggle"><i class="bi bi-circle-fill text-light-emphasis "></i>
                        John Doe <i class="bi bi-chevron-down"></i></span>
                    <div class="dropdown-menu dropdown-menu-end">
                        <a class="dropdown-item" href="#">Action</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">After divider action</a>
                    </div>
                </span>

            </div>
        </div>
    </nav>
    <sideBarMobile />
</template>

<script lang="ts" setup>
import sideBarMobile from './sideBarMobile.vue';

import { useTemplateStore } from '@/stores/templateStore';
const templateStore = useTemplateStore()
</script>


<style lang="css" scoped>
.navbar {
    margin-left: v-bind('templateStore.sidebarWidth');
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
}
</style>
