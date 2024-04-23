<template>
    <div class="side-panel">
        <ul class="list-group list-group-flush mt-4">
            <li class="list-group-item border-0 bg-transparent">
                <router-link to="/">
                    <img src="/icons/sidebar/vector-10.png" alt="">
                </router-link>
            </li>
            <li class="list-group-item border-0 bg-transparent">
                <router-link to="/dashboard">
                    <img src="/icons/sidebar/grid-four.png" alt="">
                </router-link>
            </li>
            <li class="list-group-item border-0 bg-transparent">
                <img src="/icons/sidebar/main-component.png" alt="">
            </li>
            <li class="list-group-item border-0 bg-transparent">
                <img src="/icons/sidebar/document-upload.png" alt="">
            </li>
            <li class="list-group-item border-0 bg-transparent">
                <img src="/icons/sidebar/people.png" alt="">
            </li>
        </ul>


        <ul class="list-group list-group-flush" style="margin-top: 120px;">

            <li class="list-group-item border-0 bg-transparent">
                <img src="/icons/sidebar/profile.png" alt="">
            </li>
            <li class="list-group-item border-0 bg-transparent">
                <img src="/icons/sidebar/setting-2.png" alt="">
            </li>
            <li class="list-group-item border-0 bg-transparent">
                <img src="/icons/sidebar/money.png" alt="">
            </li>
            <li class="list-group-item border-0 bg-transparent">
                <img src="/icons/sidebar/message-question.png" alt="">
            </li>
        </ul>

    </div>
    <div class="main-panel shadow-sm">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 p-lg-3 p-2 shadow-sm head-panel">
                    <button class="btn btn-lg p-1 py-0 d-md-none border-0" data-bs-toggle="offcanvas"
                        data-bs-target="#startMobileOffcanvas" aria-controls="startMobileOffcanvas">
                        <i class="bi bi-justify fs-3"></i>
                    </button>
                    Start your Company
                    <span class="small fw-bold d-none d-md-inline" v-if="activeCompanyName">
                        ({{ activeCompanyName }})
                    </span>
                    <span class="badge bg-success-subtle text-success small"
                            v-if="paymentStatus">
                            <i class="bi bi-check-circle"></i> Paid
                        </span>
                    <span class="float-end">
                        <!-- KYC Status -->

                        <span class="badge bg-success-subtle text-success small"
                            v-if="KycStatus">
                            <i class="bi bi-check-circle"></i> Verified
                        </span>
                        <span class="badge bg-success-subtle text-danger small"
                            v-else>
                            <i class="bi bi-check-circle"></i> Not-Verified
                        </span>
                        <!-- KYC Status -->
                        <span class=" mx-2 me-5 dropdown">
                            <span data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                                class="dropdown-toggle">
                                <i class="bi bi-person-circle "></i>
                                {{ startCompanyStore.companyInProgress?.users?.name }}
                                <i class="bi bi-chevron-down"></i></span>
                            <div class="dropdown-menu dropdown-menu-start">
                                <span @click="logout" class="dropdown-item text-danger">
                                    <i class="bi bi-power"></i> Logout
                                </span>
                            </div>
                        </span>
                    </span>
                </div>
                <div class="col-2 d-none d-md-block min-vh-100 sub-menu-panel">
                    <StartCompany_menulist />
                </div>
                <div class="col-md-7 bg-white min-vh-100 sub-form-panel pt-4">
                    <div class="card border-0">
                        <div class="card-body pt-0 p-0 px-md-3">
                            <slot name="main"></slot>
                        </div>
                    </div>
                </div>
                <div class="col-3 d-none d-md-block min-vh-100 sub-info-panel p-3 pt-4 small">
                    <slot name="info"></slot>
                </div>
            </div>
        </div>
    </div>
    <!-- offcanvas -->
    <StartCompany_mobilemenu />
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useStartCompanyStore } from './StartCompany_store';
import StartCompany_menulist from './StartCompany_menulist.vue';
import StartCompany_mobilemenu from './StartCompany_mobilemenu.vue';
import { useAuthStore } from '@/stores/authStore';
import { useRouter, useRoute } from 'vue-router';

const authStore = useAuthStore()
const router = useRouter()
const route = useRoute()


const startCompanyStore = useStartCompanyStore()

const paymentStatus = computed(()=>{
    const status = startCompanyStore.companyInProgress?.billing?.status
return status;
})

const KycStatus = computed(()=>{
    const status = startCompanyStore.companyInProgress?.users?.kyc_status
return status;
})

const activeCompanyName = computed(() => {
    let coyName = ''
    const choiceNames = startCompanyStore.companyInProgress?.names ?? []
    if (choiceNames) {
        const coy = choiceNames.find((x: any) => x.choice_level == 1);
        if (coy) {
            coyName = coy?.eng_name ? coy.eng_name + ' ' + coy.eng_prefix : coy.chn_name + ' ' + coy.chn_prefix;
        }
    }
    return coyName
})


async function logout() {
    await authStore.logout()
    router.replace({ name: 'Login' })
}
</script>

<style lang="css" scoped>
.side-panel {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 50px !important;
    background-color: #212935;
    overflow-y: auto;
}

.main-panel {
    background-color: #fff;
    min-height: 100vh;
    margin: 25px 25px 25px 75px;
}

.head-panel {
    background-color: #F5F9FC;
    border-bottom: 1px solid #d5dae5;
    /* z-index: 1; */
}

.sub-info-panel,
.sub-menu-panel {
    background-color: #F5F9FC;
}

@media (max-width: 767px) {
    .side-panel {
        display: none;
    }

    .main-panel {
        margin: 5px 5px 5px 5px;
    }
}

.dropdown {
    cursor: pointer;
}

.dropdown-toggle::after {
    content: none !important;
}

/* .dropdown-menu {
    border-radius: 0px;
} */
</style>
