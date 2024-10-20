<template>
    <div class="main-panel shadow-sm">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 p-lg-3 p-2 shadow-sm head-panel" style="border-radius:0px;">
                    <button class="btn btn-lg p-1 py-0 d-md-none border-0" data-bs-toggle="offcanvas"
                        data-bs-target="#startMobileOffcanvas" aria-controls="startMobileOffcanvas">
                        <i class="bi bi-justify fs-3"></i>
                    </button>
                    <span class="small fw-bold d-none d-md-inline text-capitalize" v-if="activeCompanyName">
                        {{ activeCompanyName }}
                    </span>
                    <!-- <span class="badge bg-success-subtle text-success small" v-if="paymentStatus">
                        <i class="bi bi-check-circle"></i> Paid
                    </span> -->
                    <span class="float-end">
                        <!-- KYC Status -->
                        <span class="me-3">
                            <!-- <appModeToggler /> -->
                        </span>

                        <!-- KYC Status -->

                    </span>
                </div>
                <div class=" d-none d-md-block min-vh-100 sub-menu-panel" style="width:230px">
                    <StartCompany_menulist />
                </div>
                <div class="col-md-7  min-vh-100 sub-form-panel pt-2  d-flex justify-content-center">
                    <div class="car border- middle-panel-fixed-size ">
                        <div class="card-bod pt-0 p-0 px-md-3">
                            <slot name="main"></slot>
                        </div>
                    </div>
                </div>
                <div class="col-2 d-none d-md-block min-vh-100 sub-info-panel p-3 pt-4 small ">
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

import { descriptionForm } from './pages/formsStore/Description';
import { nameForm } from './pages/formsStore/Name';
import { sourceForm } from './pages/formsStore/Source';
import { activitiesForm } from './pages/formsStore/Activities';
import { foundersCorporateForm } from './pages/formsStore/Founders_corporate'
import { foundersIdividualForm } from './pages/formsStore/Founders_individual'

import { useTemplateStore } from '@/stores/templateStore';
const templateStore = useTemplateStore()


const description_form = descriptionForm()
const name_form = nameForm()
const source_form = sourceForm()
const activities_form = activitiesForm()
const fCoporate_form = foundersCorporateForm()
const fIndividual_form = foundersIdividualForm()

const authStore = useAuthStore()
const router = useRouter()
const route = useRoute()


const startCompanyStore = useStartCompanyStore()

const paymentStatus = computed(() => {
    const status = startCompanyStore.companyInProgress?.billing?.status
    return status;
})

const KycStatus = computed(() => {
    const status = startCompanyStore.companyInProgress?.users?.kyc_status
    return status;
})

const activeCompanyName = computed(() => {
    let coyName = ''
    let coyCh_name = ''
    const choiceNames = startCompanyStore.companyInProgress?.names ?? []
    if (choiceNames) {
        const coy = choiceNames.find((x: any) => x.choice_level == 1);
        if (coy) {
            coyName = coy?.eng_name ? coy.eng_name + ' ' + coy.eng_prefix : '';
            coyCh_name = coy.chn_name ? coy.chn_name + '' + coy.chn_prefix : ''

        }
    }
    return coyName + ' ' + coyCh_name
})


async function logout() {
    await description_form.clearLocalStorage()
    await name_form.clearLocalStorage()
    await source_form.clearLocalStorage()
    await activities_form.clearLocalStorage()
    await fCoporate_form.clearLocalStorage()
    await fIndividual_form.clearLocalStorage()
    await startCompanyStore.clearLocalStorage()
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
    background-color: v-bind('templateStore.bgColor');
    overflow-y: auto;
    box-shadow: 1px 1px 5px 1px #0302020f;
}

.mode {
    color: v-bind('templateStore.textColor');
    font-size: 17px;
    font-weight: 750;
}



.main-panel {
    /* background-color: #00000000; */
    background-color: v-bind('templateStore.bgColor');
    color: v-bind('templateStore.textColor');
    min-height: 100vh;
    /* margin: 10px 25px 25px 75px;  */
    margin: 20px auto;
    max-width: 1300px;
    border-radius: 0%;
}

@media(min-width:750px) and (max-width:1200px) {
    .main-panel {
        /* background-color: #00000000; */
        background-color: v-bind('templateStore.bgColor');
        color: v-bind('templateStore.textColor');
        min-height: 100vh;
        margin: 10px 25px 25px 75px;
        /* margin: 20px auto;   */
        max-width: 1300px;
        border-radius: 0px;
    }
}

@media(min-width:1200px) and (max-width:1400px) {
    .main-panel {
        /* background-color: #00000000; */
        background-color: v-bind('templateStore.bgColor');
        color: v-bind('templateStore.textColor');
        min-height: 100vh;
        margin: 10px 25px 25px 75px;
        /* margin: 20px auto;   */
        max-width: 1300px;
        border-radius: 0px;
    }
}

.head-panel {
    /* background-color: #F5F9FC; */
    background-color: v-bind('templateStore.bgColor');
    color: v-bind('templateStore.textColor');
    border-bottom: 1px solid #cccccc57;
    /* color: red; */
    /* z-index: 1; */
}

.sub-info-panel,
.sub-menu-panel {
    /* background-color: #F5F9FC; */
    /* background-color: #ffffff; */
    background-color: v-bind('templateStore.bgColor');
    color: v-bind('templateStore.textColor');
    /* box-shadow: 1px 1px 1px 1px #eeebeb; */
}

.sub-info-panel,
.sub-form-panel {
    border-left: 1px solid #cccccc57 !important;
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

.middle-panel-fixed-size {
    width: 800px;

}

/* .dropdown-menu {
    background-color: v-bind('templateStore.bgColor') !important;
    color: v-bind('templateStore.textColor') !important;
} */
</style>
