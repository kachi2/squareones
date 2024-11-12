<template>
    <sideBar />
    <headBar />
    <div class="main-content">
        <div class="container">
            <div class="col-12">
                <div v-if="!companyDetails.is_paid && !companyDetails.is_kyc_completed">
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
                <div v-else-if="!companyDetails.is_kyc_completed">
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
                                    <router-link class="btn btn-primary" to="/start_company">
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
                            <div class="col-lg-10">
                                <div class="fw-bold">

                                </div>
                                <small>Start a new Company Formation</small>
                            </div>
                            <div class="col-lg-2 d-flex justify-content-lg-end align-items-lg-center">
                                <router-link class="btn btn-primary" to="/start_company">
                                    Resume <i class="bi bi-arrow-right"></i>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="alert alert-warning alert-dismissible fade show" role="alert">
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    <strong>Information Alert!</strong> You should check out this information details.
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

const companyDetails = reactive<any>({
    is_paid: '',
    is_kyc: '',
});

async function companyReturn() {
    const companies = await api.userCompany();
    const data = companies.data.data;
    companyDetails.is_paid = data.is_paid
    companyDetails.is_kyc = data.is_kyc_completed
    //    console.log(data.is_kyc_completed, 'annualRsassasasassaseturns');
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