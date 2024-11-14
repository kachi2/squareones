<template>
    <sideBar />
    <headBar />

    <div class="main-content">
        <div class="container">
            <div class="col-12" v-if="$route.path == '/user/dashboard'">
                <div v-if="!companyDetails?.is_completed && companyDetails != false && companyDetails?.main_contact?.kyc_status != null">
                    <div class="col-12">
                        <div class="alert alert-dark bg-primary-subtle" role="alert">
                            <div class="row gy-1">
                                <div class="col-lg-10">
                                    <div class="fw-bold">
                                        Company Incorporation in progress
                                    </div>
                                    <small>Complete your application, to set up your company</small>
                                </div>
                                <div class="col-lg-2 d-flex justify-content-lg-end align-items-lg-center">
                                    <router-link class="btn btn-primary" to="/start_company">
                                        Resume <i class="bi bi-arrow-right"></i>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
               
                <div v-else-if="companyDetails?.main_contact?.kyc_status == null">
                    <div class="col-12"> 
                        <div class="alert alert-dark bg-primary-subtle" role="alert">
                            <div class="row gy-1">
                                <div class="col-lg-10">
                                    <div class="fw-bold">
                                        You have not completed KYC verifications
                                    </div>
                                    <small>Continue your KYC verification to get your company Incorporated</small>
                                </div>
                                <div class="col-lg-2 d-flex justify-content-lg-end align-items-lg-center">
                                    <router-link class="btn btn-primary" to="/user/account?verify=true">
                                        Verify Now <i class="bi bi-arrow-right"></i>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12" v-else>
                    <div class="alert alert-dark bg-primary-subtle" role="alert">
                        <div class="row gy-1">
                            <div class="col-lg-9">
                                <div class="fw-bold">
                                    Start a new company
                                </div>
                                <small>Return to the form page to start a new company registration</small>
                            </div>
                            <div class="col-lg-3 d-flex justify-content-lg-end align-items-lg-center">
                                <router-link class="btn btn-primary" to="/start_company">
                                    Start New Company <i class="bi bi-arrow-right"></i>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- <div class="card border-0 exemption"> -->
            <!-- <div class="card-body"> -->
            <RouterView />
            <!-- </div> -->
            <!-- </div> -->
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref, watch } from "vue";
import { RouterView } from 'vue-router'
import sideBar from '@/components/sideBar.vue';
import api from "@/stores/Helpers/axios";
import headBar from '@/components/headBar.vue';
import { useTemplateStore } from '@/stores/templateStore';
const templateStore = useTemplateStore()

const companyDetails = ref<any>([])

async function companyReturn() {
    const companies = await api.userCompany();
    const data = companies.data.data;
    companyDetails.value = data
    //    console.log(data, 'annualRsassasasassaseturns');
    return data
}

onMounted(() => {
    companyReturn()
})

</script>

<style scoped>
.main-content {
    padding-top: 30px;
    padding-bottom: 100px;
    background-color: v-bind('templateStore.accountTemplateBg');
    /* background-color: #0f172acc; */
    color: v-bind('templateStore.textColor');
}

.card {
    background-color: v-bind('templateStore.cardBg') !important;
    color: v-bind('templateStore.cardTextColor');
}


@media (min-width: 767px) {
    .main-content {
        margin-left: v-bind('templateStore.sidebarWidth');
        padding-left: 10px;
    }
}
</style>