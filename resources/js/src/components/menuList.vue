<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';
import { useParamsStore } from '@/views/Account/User/CompanyDetails/paramsStore';
import { useTemplateStore } from '@/stores/templateStore';

const templateStore = useTemplateStore()


const paramsStore = useParamsStore()
onMounted(async () => {
    await paramsStore.getCompanies()
})


const companiesDropdownClicker = ref<any>(null)
function openCompaniesDropdown() {
    templateStore.sidebarIsCollapsed = !templateStore.sidebarIsCollapsed
    companiesDropdownClicker.value.click()
}


</script>

<template>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">
            <router-link to="/user/dashboard" class="single-list-items">
                <!-- <img class="side-icon" src="/icons/sidebar/grid-four.png" alt=""> -->
                <i class="bi bi-grid me-2"></i>
                <span v-if="!templateStore.sidebarIsCollapsed">Dashboard</span>
            </router-link>
        </li>
        <li class="list-group-item" v-if="!templateStore.sidebarIsCollapsed">
            <div ref="companiesDropdownClicker" class="accordion" id="accordionMenuCaompany">
                <div class="accordion-item ">
                    <span class="accordion-header_" id="menu1Heading">
                        <a class="accordion-button collapsed " type="button" style="padding:0px"
                            data-bs-toggle="collapse" data-bs-target="#accordionMenuCompanyCollapse"
                            aria-expanded="true" aria-controls="accordionMenuCompanyCollapse">
                            <!-- <img class="side-icon" src="/icons/sidebar/main-component.png" alt=""> -->
                            <i class="bi bi-building me-2"></i>
                            <span class="single-list-item">Company</span>
                            &nbsp;
                            <!-- <i data-v-35aba22b="" class="bi bi-chevron-down"></i> -->
                        </a>
                    </span>

                    <div id="accordionMenuCompanyCollapse" class="accordion-collapse collapse "
                        aria-labelledby="menu1Heading" data-bs-parent="#accordionMenuCaompany">
                        <div class="accordion-body">
                            <ul class="nav flex-column mt-2" v-if="paramsStore.companies.list.length">
                                <li v-for="item in paramsStore.companies.list" :key="item"
                                    class="nav-item single-list-items">
                                    <router-link @click="paramsStore.currentCompanyId = item.id" to="/user/company">
                                        {{ paramsStore.computedCoyName(item) }}
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </li>

        <!-- <li @click="openCompaniesDropdown" v-else class="list-group-item">
            <i class="bi bi-building me-2"></i>
        </li> -->
        <li v-else class="list-group-item">
            <div class="dropdown">
                <i class="bi bi-building me-2 dropdown-toggle" id="triggerId" data-bs-toggle="dropdown"></i>
                <div class="dropdown-menu" style="z-index: 99999 !important;" aria-labelledby="triggerId">
                    <!-- <a class="dropdown-item" href="#">Action</a> -->
                    <router-link class="dropdown-item" v-for="item in paramsStore.companies.list" :key="item"
                        @click="paramsStore.currentCompanyId = item.id" to="/user/company">
                        {{ paramsStore.computedCoyName(item) }}
                    </router-link>
                </div>
            </div>


        </li>

        <li class="list-group-item">
            <router-link to="/user/users" class="single-list-items">
                <i class="bi bi-people me-2"></i>
                <span v-if="!templateStore.sidebarIsCollapsed">My Team</span>

            </router-link>

        </li>

    </ul>

    <div class="mt-5">
        <ul class="list-group list-group-flush">
            <li v-if="!templateStore.sidebarIsCollapsed" class="list-group-item text-secondary ">Preferences</li>

            <li class="list-group-item">
                <router-link to="/user/account" class="single-list-items">
                    <!-- <img class="side-icon" src="/icons/sidebar/profile.png" alt=""> -->
                    <i class="bi bi-gear"></i>
                    <span v-if="!templateStore.sidebarIsCollapsed"> Settings</span>
                </router-link>
            </li>


            <li class="list-group-item">
                <router-link to="/user/billings" class="single-list-items">
                    <!-- <img class="side-icon" src="/icons/sidebar/money.png" alt=""> -->
                    <i class="bi bi-cash-stack"></i>
                    <span v-if="!templateStore.sidebarIsCollapsed"> Billings</span>
                </router-link>
            </li>


            <!-- <li class="list-group-item">
                <img class="side-icon" src="/icons/sidebar/message-question.png" alt="">Help
            </li> -->

        </ul>

    </div>
</template>

<style lang="css" scoped>
/* .nav-item:hover {
    background:#eee;
    padding: 5px 5px 5px 5px;
    border-radius: 10px;
    transition:  padding 0.5s
} */

.single-list-items:hover {
    background: #eee;
    padding: 5px 5px 5px 5px;
    border-radius: 5px;
    transition: padding 0.5s;
    color: #000;
}

.list-group-item {
    background: transparent;
    border: none;
    padding-bottom: 5px;

}

.list-group-item a {
    color: #080707;
    color: v-bind('templateStore.textColor');
    text-decoration: none;
    font-weight: 450;
}


.accordion-item {
    background: transparent;
    border: none !important;
}


.accordion-button {
    padding: 0px;
    background-color: transparent;
    /* font-size: 16px; */
    color: #070707;
    color: v-bind('templateStore.textColor');
    border: none;
    box-shadow: none;
    font-weight: 450;
}

.accordion-button.collapsed::after {
    background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23554c16'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
}

.accordion-button:not(.collapsed)::after {
    background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23554c16'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
}

.accordion-item .nav-item a {
    /* color: #000000; */
    color: v-bind('templateStore.textColor');
    margin-block: 0px;
    font-size: 14px;
}

.accordion-item .nav-item a:hover {
    color: #000000;
    /* color: v-bind('templateStore.textColor'); */
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
    color: #000000;
    color: v-bind('templateStore.textColor');
    font-weight: 450;
}

.dropdown-toggle::after {
    content: none !important;
}
</style>
