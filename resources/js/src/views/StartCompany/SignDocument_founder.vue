<template>
    <pageLoadingComponent v-if="pageIsLoading" />
    <StartCompany_template_founders v-else>
        <template #founderName>
            <i class="bi bi-person-circle">  </i> {{ currentEntity?.label ?? '' }}
        </template>
        <template #main>
            <BasePdf />
        </template>

        <template #info>

            <div v-if="signaturePadModal" class="modal show d-block modal-bg-transparent" tabindex="-1" role="dialog"
                aria-hidden="true">
                <div class="modal-dialog  modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">
                                Draw Mouse to Sign Document
                            </h5>
                            <button @click="signaturePadModal = false" type="button" class="btn-close"
                                data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">

                            <VueSignaturePad class="bg-light" height="300px" width="100%" ref="signaturePad" />

                        </div>
                        <div class="modal-footer">
                            <button v-if="!signatureIsSaving" @click="save" type="button" class="btn btn-primary">Save
                                Signature</button>
                            <button v-else class="btn btn-primary" type="button" disabled>
                                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                Saving...
                            </button>

                            <button @click="clear" type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                                Clear
                            </button>
                            <button :disabled="signatureIsSaving" @click="undo" class="btn btn-warning">Undo</button>

                        </div>
                    </div>
                </div>
            </div>

            
  <div v-if="startCompanyStore.isFounderSigned" class="mt-3">
    <router-link :to="{
    name: 'FOUNDERKYC',
    params: {
        company_id: route.params.company_id,
        founder_id: route.params.founder_id
    },
    }" 
    class="btn btn-primary w-100 mt-3">
    Proceed to KYC Verification
    </router-link>
  
                <!-- <Kyc_founder :user-token="userToken" /> -->
            </div>
            <button v-else class="btn btn-primary w-100 mt-3" @click="signaturePadModal = true">Click here to sign
                Document
            </button>
          
            <br>

            <!-- <div class="card w-75 float-end" > -->

            <br>
        
            <p style="border-bottom: 1px solid #000;">Signature will be applied to the following pages</p>
            <p>
                <span class="mr-2">📄</span>
                Incorporation Form (NNC1) <br>
                <span>We file this with the Companies Registry.</span>
            </p>
            <p>
                <span class="mr-2">📄</span>
                Articles of Association (AA)
            <p class="ml-6 text-gray-600">The Articles of Association is a document that outlines the regulations
                for a
                company's operations and the structure of its internal governance.</p>

            </p>
            <p class="mb-1 flex items-center text-gray-700">
                <span class="mr-2">✔️</span>
                Notice to Business Registration Office (IRBR1)
            <p class="ml-6 text-gray-600">Notify the Inland Revenue for business registration.</p>
            <ul class="ml-10 list-inside list-disc text-gray-600">
                <li>This makes application for the purpose of business registration.</li>
                <li>Business registration is renewed on an annual basis if elected to obtain 1-year Business
                    Registration
                    Certificate.</li>
                <li>This shows your business address, and the nature of your business.</li>
            </ul>
            </p>

        </template>

    </StartCompany_template_founders>

</template>
<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue';
import StartCompany_template_founders from './StartCompany_template_founders.vue';
import pageLoadingComponent from '@/components/pageLoadingComponent.vue'
import { useStartCompanyStore } from './StartCompany_store';
import BasePdf from '../Pdf/BasePdf.vue'
import { useToast } from 'vue-toast-notification';
import api from '@/stores/Helpers/axios'
import { useRoute } from 'vue-router';
import Kyc_founder from './Kyc_founder.vue';

const startCompanyStore = useStartCompanyStore()
const pageIsLoading = ref<boolean>(true)
const hasSigned = ref<any>(null)
const userToken = ref('');

const toast = useToast()
const signaturePadModal = ref<boolean>(false)
const signatureIsSaving = ref<boolean>(false)
const signaturePad = ref<any>(null)
const route: any = useRoute()


function undo() {
    signaturePad.value.undoSignature()
}
function clear() {
    signaturePad.value.clearSignature()
}

const company_entity_id_onRoute = ref<any>('')
const company_id_onRoute = ref<any>('')
const currentEntity = ref<any>({})

onMounted(async () => {
    company_entity_id_onRoute.value = atob(route.params.founder_id)
    company_id_onRoute.value = atob(route.params.company_id)
    startCompanyStore.companyIdonRoute = atob(route.params.company_id)
    await startCompanyStore.getCompanyInProgress()
    await api.ProcessKyc()
    getCompanyProgress()
})

async function getCompanyProgress() {
    const { data } = await api.companyProgress(company_id_onRoute.value)
    userToken.value = data?.company?.users?.user_token ?? ''
    const founders = data?.company?.company_entity ?? []
    const arrayOfFounders = startCompanyStore.collateFounders(founders);
    currentEntity.value = arrayOfFounders.find(x => x.company_entity_id == company_entity_id_onRoute.value)
    hasSigned.value = founders.find((f: any) => f.id == company_entity_id_onRoute.value) 
    // console.log(hasSigned.value.signature) 
    // console.log(startCompanyStore.isFounderSigned)
    startCompanyStore.isFounderSigned = hasSigned.value.signature
    startCompanyStore.isKYCcompleted = hasSigned.value.kyc_status

    //  console.log(hasSigned.value, 'has value')
//     const entities = founders.find(y  => y._id == company_entity_id_onRoute.value)
//    console.log(entities.signature)
    pageIsLoading.value = false
}

function save() {
    const { isEmpty, data, } = signaturePad.value.saveSignature()
    if (!isEmpty) {
        startCompanyStore.signatureImage = data
        startCompanyStore.signatureDateSigned = new Date()
        signatureIsSaving.value = true
        saveSignatureBySelectedFounder()
    }
}

async function saveSignatureBySelectedFounder() {
    const newForm = new FormData();
    newForm.append('company_id', company_id_onRoute.value)
    newForm.append('company_entity_id', company_entity_id_onRoute.value)
    newForm.append('signature', startCompanyStore.signatureImage)
    newForm.append('date_signed', startCompanyStore.signatureDateSigned)

    try {
     const  {data} =  await api.registerSignature(newForm)
        toast.info('Signature saved successfully', { position: 'top-right' });
        signaturePadModal.value = false
        signatureIsSaving.value = false
        startCompanyStore.isFounderSigned = data.data.signature
        startCompanyStore.isKYCcompleted = data.data.kyc_status
    } catch (error) {
        console.log(error);
        toast.error('Something went wrong', { position: 'top-right' });
        signaturePadModal.value = false
        signatureIsSaving.value = false
    }
}

</script>
<style lang="css" scoped>
#signature {
    border: 2px solid #000;
    border-radius: 5px;
    background: #000;
    background-origin: border-box;
    background-clip: content-box, border-box;
}

.container {
    width: "100%";
    padding: 8px 16px;
}

.buttons {
    display: flex;
    gap: 8px;
    justify-content: center;
    margin-top: 8px;
}



/* modal */
.modal.fade .modal-dialog {
    transform: scale(0.8);
    transition: transform 0.3s ease-out;
}

.modal.show .modal-dialog {
    transform: scale(1);
}

.modal-bg-transparent {
    background-color: #00000042;
}
</style>