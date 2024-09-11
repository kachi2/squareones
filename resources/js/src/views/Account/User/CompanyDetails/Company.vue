<template>
    <div v-if="pageIsLoading">
        <PageLoadingComponent />
    </div>
    <div v-else class=" p-3">
        <div class="card-body">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item single-list-items" role="presentation">
                    <button class="nav-link active " id="tab1-tab" data-bs-toggle="tab" data-bs-target="#tab1"
                        type="button" role="tab" aria-controls="tab1" aria-selected="true">
                        Company details
                    </button>
                </li>
                <li class="nav-item single-list-items" role="presentation">
                    <button class="nav-link" id="tab2-tab" data-bs-toggle="tab" data-bs-target="#tab2" type="button"
                        role="tab" aria-controls="tab2" aria-selected="false">
                        Company Registers
                    </button>
                </li>
                <!-- <li class="nav-item" role="presentation">
                    <button class="nav-link" id="tab3-tab" data-bs-toggle="tab" data-bs-target="#tab3" type="button"
                        role="tab" aria-controls="tab3" aria-selected="false">
                        Register of Charges
                    </button>
                </li> -->
                <li class="nav-item single-list-items" role="presentation">
                    <button class="nav-link" id="tab4-tab" data-bs-toggle="tab" data-bs-target="#tab4" type="button"
                        role="tab" aria-controls="tab4" aria-selected="false">
                        Documents
                    </button>
                </li>

                <li class="nav-item single-list-items" role="presentation">
                    <button class="nav-link" id="tab5-tab" data-bs-toggle="tab" data-bs-target="#tab5" type="button"
                        role="tab" aria-controls="tab5" aria-selected="false">
                        Team Members
                    </button>
                </li>
                <li class="nav-item single-list-items" role="presentation">
                    <button class="nav-link" id="tab6-tab" data-bs-toggle="tab" data-bs-target="#tab6" type="button"
                        role="tab" aria-controls="tab6" aria-selected="false">
                        Verifications
                    </button>
                </li>
            </ul>

            <!-- Tab panes -->
            <isLoadingComponent v-if="companyIsLoading" />

            <div v-else class="tab-content py-4">
                <div class="tab-pane active" id="tab1" role="tabpanel" aria-labelledby="tab1-tab">
                    <companyDetailsTabContent />
                </div>
                <div class="tab-pane" id="tab2" role="tabpanel" aria-labelledby="tab2-tab">
                    <companyRegistersTabContent />
                </div>
                <!-- <div class="tab-pane" id="tab3" role="tabpanel" aria-labelledby="tab3-tab">
                    <registerOfChargesTabContent />
                </div> -->
                <div class="tab-pane" id="tab4" role="tabpanel" aria-labelledby="tab4-tab">
                    <documentsTabContent />
                </div>
                <div class="tab-pane" id="tab5" role="tabpanel" aria-labelledby="tab5-tab">
                    <teamsTabContent />
                </div>
                <div class="tab-pane" id="tab6" role="tabpanel" aria-labelledby="tab6-tab">
                    <foundersTabContent />
                </div>
            </div>
        </div>
    </div>

</template>
<script lang="ts" setup>
import { onMounted, reactive, ref, watch } from 'vue';
import { useParamsStore } from './paramsStore';

// tabcontents
import companyDetailsTabContent from './components/tabContents/companyDetails.vue'
import companyRegistersTabContent from './components/tabContents/companyRegisters/companyRegisters.vue'
// import registerOfChargesTabContent from './components/tabContents/registerOfCharges.vue'
import documentsTabContent from './components/tabContents/documents.vue'
import foundersTabContent from './components/tabContents/founders.vue'
import teamsTabContent from './components/tabContents/teams.vue'
import { useRoute } from 'vue-router';
import PageLoadingComponent from '@/components/pageLoadingComponent.vue';
import api from '@/stores/Helpers/axios'
import { useToast } from 'vue-toast-notification';

const paramsStore = useParamsStore()
const route = useRoute()
const toast = useToast()

const companyIsLoading = ref<boolean>(true)
const pageIsLoading = ref(true)

onMounted(() => {
    checkForToken()
})

function checkForToken() {
    if (!route.query.invite) {
        getCompanyDetails()
    }
    else {
        acceptInvitation()
    }
}

watch(() => paramsStore.currentCompanyId, () => {
    getCompanyDetails()
})


async function getCompanyDetails() {
    pageIsLoading.value = false
    await paramsStore.getCompanyDetails()
    companyIsLoading.value = false
}


async function acceptInvitation() {
    const token: any = route.query.invite

    try {
        const formData = new FormData();
        formData.append('token', token);
        const resp = await api.userTeamsInvitationAccept(formData)
        console.log(resp);

        if (resp.status == 200) {
            toast.info('Invitation Accepted, you have been added to this team', { position: 'top-right' });
            paramsStore.currentCompanyId = resp.data.data.companyId
            getCompanyDetails()
        }
        else if (resp.status == 203) {
            toast.info('This Token is invalid', { position: 'top-right' });
        }


    } catch (error) {
        console.log(error);

        toast.error('Something went Wrong', { position: 'top-right' });
    }
}

</script>

<style lang="css">
.single-list-items:hover {
    background: #eee;
    padding: 1px;
    border-radius: 6px 6px 0px 0px;
    color: red;
    transition: padding 0.5s
}

.tab-content {
    background-color: transparent !important;
}

/* .card{
    background-color: #212935ae;
    color:#fff;
    border: 1px solid #fff;
} */
/* .card-body{
    border: 1px solid #eeeeee69;
}

.bg-dark{
    background-color: #212935ae; 
    color:#fff;
}
.list-group-item {
    background: transparent;
    padding-block: 13px;
    color:#fff;
}

.card {
    box-shadow: 1px 1px #88888812;
    border: 1px solid rgb(0 0 0 / 5%);
    border-radius: 10px;
} */
</style>