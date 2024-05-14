<template>
    <div class="side-panel"></div>
    <div class="main-panel shadow-sm">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 p-lg-3 p-2 shadow-sm head-panel">
                    <button class="btn btn-lg p-1 py-0 d-md-none border-0" data-bs-toggle="offcanvas"
                        data-bs-target="#startMobileOffcanvas" aria-controls="startMobileOffcanvas">
                        <i class="bi bi-justify fs-3"></i>
                    </button>

                    <span>
                        Sign Document & Complete KYC
                        <span class="pl-2">
                    <span style="border:1px solid #0dcaf0; color:#0dcaf0; border-radius:5px; padding:3px; margin:5px; font-style:italic; font-size:10px" v-if=" statuses.isKYCcompleted != null" > KYC Completed </span> 
                    <span style="border:1px solid #0d6efd; color:#0d6efd; border-radius:5px; padding:3px; margin:5px;  font-style:italic;font-size:10px" v-if="statuses.isFounderSigned"> Signature Added </span> 
                    </span>
                    </span>

                    <span class="float-end">
                        <slot name="founderName"></slot>
                    </span>
                </div>
                <div class="col-2 d-none d-md-block min-vh-100 sub-menu-panel">
                    <!-- <StartCompany_menulist /> -->
                   
                </div>
                <div class="col-md-7 bg-white min-vh-100 sub-form-panel pt-4">
                    <div class="card border-0 ">
                        <div class="card-body pt-0 p-0 px-md-3k">
                            <slot name="main"></slot>
                        </div>
                    </div>
                </div>
                <div class="col-3  min-vh-100 sub-info-panel p-3 pt-4 small">
                    <slot name="info"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {ref, watchEffect, watch} from 'vue'
import { useStartCompanyStore } from './StartCompany_store';
const statuses = useStartCompanyStore()
const kyc = ref<any>(null)

watch(() => statuses.isKYCcompleted, ()=>{ })
watch(() => statuses.isFounderSigned, ()=>{ })

// console.log(statuses.isKYCcompleted)
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
