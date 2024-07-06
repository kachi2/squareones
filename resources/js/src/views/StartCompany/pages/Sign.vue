<template>
  <StartCompany_template>
    <template #main>

      <div>
        <BasePdf />
      </div>

      <div class="movement-buttons my-5">
        <!-- <button @click="moveBack" class="btn btn-outline-info me-3">
          <i class="bi bi-arrow-left"></i> Back
        </button> -->
        <button v-if="!startCompanyStore.pdfIsSending" @click="proceed" class="btn btn-primary">
          Proceed to complete Payment <i class="bi bi-arrow-right"></i>
        </button>

        <button v-else class="btn btn-primary" type="button" disabled>
          <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          Processing, Please wait....
        </button>


      </div>

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
              <button @click="signaturePadModal = false" type="button" class="btn-close" data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <VueSignaturePad class="bg-transparent" height="300px" width="100%" ref="signaturePad" />
            </div>
            <div class="modal-footer bg-transparent">
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

      <div v-if="!founderInfo.signature">
      <v-select placeholder="select founder.." v-model="selected_entity_id" :clearable="false" :options="entities" />
      <p v-if="!signaturePadModal" style="color:darkred"> {{ msg}}</p>
      <p v-if="founderError" style="color:darkred"> {{  founderError }} </p>
      <button class="btn btn-primary mt-3" @click="signaturePadModals">Sign Document</button>
      
      <span class="float-end">
        <!-- <button class="btn btn-warning" @click="undo">Clear</button> -->
      </span>
      <br>
      <!-- <div class="card w-75 float-end" > -->
      <p style="margin-top:10px">
        <span style="color:red; "> Please review and Sign Document</span>
      </p>
    </div>
    <div v-else>
      <div class="card p-3">
        <span> {{ founderInfo?.name }}</span>
        <hr>

      <img width="100" :src="founderInfo?.signature" alt="">
      <span style="color:red" class="p-1"> Last Updated: {{ founderInfo.date }}</span>
    </div>
      <button class="btn btn-primary mt-3" @click="DeleteSignature()">Delete Signature</button>
      
      <span class="float-end">
        <!-- <button class="btn btn-warning" @click="undo">Clear</button> -->
      </span>
      <br>
      <!-- <div class="card w-75 float-end" > -->
      <!-- <p style="margin-top:10px">
        <span style="color:red; "> Please review and Sign Document</span>
      </p> -->
    </div>
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
      <p class="ml-6 text-gray-600">The Articles of Association is a document that outlines the regulations for a
        company's operations and the structure of its internal governance.</p>

      </p>
      <p class="mb-1 flex items-center text-gray-700">
        <span class="mr-2">✔️</span>
        Notice to Business Registration Office (IRBR1)
      <p class="ml-6 text-gray-600">Notify the Inland Revenue for business registration.</p>
      <ul class="ml-10 list-inside list-disc text-gray-600">
        <li>This makes application for the purpose of business registration.</li>
        <li>Business registration is renewed on an annual basis if elected to obtain 1-year Business Registration
          Certificate.</li>
        <li>This shows your business address, and the nature of your business.</li>
      </ul>
      </p>
      <!-- </div> -->

    </template>

  </StartCompany_template>

</template>
<script lang="ts" setup>
import { ref, onMounted, computed, reactive, watch, watchEffect} from 'vue';
import StartCompany_template from '../StartCompany_template.vue';
import { useStartCompanyStore } from '../StartCompany_store';
import BasePdf from '../../Pdf/BasePdf.vue'
import { useToast } from 'vue-toast-notification';
import api from '@/stores/Helpers/axios'
import useFxn from "@/stores/Helpers/useFunctions";

const startCompanyStore = useStartCompanyStore()

const toast = useToast()
const signaturePadModal = ref<boolean>(false)
const signatureIsSaving = ref<boolean>(false)
const signaturePad = ref<any>(null)
const msg = ref('')

const founderInfo = reactive({
  name: '',
  signature: '',
  date: '',
  id: ''
})

 function signaturePadModals()
 {
  if(selected_entity_id.value){
  return signaturePadModal.value = true
  }else{
    msg.value = "Please select a Founder";
   return  signaturePadModal.value = false
  }
}



function undo() {
  signaturePad.value.undoSignature()
}
function clear() {
  signaturePad.value.clearSignature()
}

const selected_entity_id = ref<any>('')

const entities = computed(() => {
  const array: any[] = []
  const data = startCompanyStore.companyInProgress?.company_entity ?? []
  if (data.length) {
    data.forEach((el: any) => {
      const founder = el.individual
      const obj = el.individual || el.corporate;
      if (founder && el.entity_capacity_id.includes(1) ) {
        obj.label = el.entity_type_id == 1 ?
          `${obj.first_name ?? obj.chn_first_name} ${obj.last_name ?? obj.chn_last_name}`
          : `${obj.company_name ?? obj.chn_company_name}`
        obj.company_entity_id = el.id
        array.push(obj)
      }
    });
  }
  return array;
})



onMounted(async () => {
  const data = await api.ProcessKyc()
  await startCompanyStore.getCompanyInProgress()
  getActiveFounder()
})



function save() {
  const { isEmpty, data, } = signaturePad.value.saveSignature()
  if (!isEmpty) {
    startCompanyStore.signatureImage = data
    startCompanyStore.signatureDateSigned = new Date()
    signatureIsSaving.value = true
   saveSignatureBySelectedFounder()
  }

}

const founderError = ref('')

async function saveSignatureBySelectedFounder() {

  if(founderInfo.id != ''  && founderInfo.id != selected_entity_id.value.company_entity_id){
    signaturePadModal.value = false
    signatureIsSaving.value = false
    founderError.value = "You cannot sign for this User"
    return false;
  } 
  const newForm = new FormData();
  newForm.append('company_id', startCompanyStore.companyInProgress.id)
  newForm.append('company_entity_id', selected_entity_id.value.company_entity_id)
  newForm.append('is_founder', '1')
  newForm.append('signature', startCompanyStore.signatureImage)
  newForm.append('date_signed', startCompanyStore.signatureDateSigned)
  try {
    await api.registerSignature(newForm)
    toast.info('Signature added to founders  <br>  page successfully', { position: 'top-right' });
    signaturePadModal.value = false
    signatureIsSaving.value = false
    await startCompanyStore.getCompanyInProgress()
    getActiveFounder() 
  } catch (error) {
    toast.error('Something went wrong', { position: 'top-right' });
    signaturePadModal.value = false
    signatureIsSaving.value = false
  }
}


function getActiveFounder()
{
  const founder = startCompanyStore.companyInProgress?.company_entity??[]
   const fxs = founder.filter((t:any) =>  t.is_founder == 1 )
   if(fxs.length > 0){
   const fx = fxs[0];
   founderInfo.name = (fx.individual.first_name?fx.individual.first_name:'') + ' ' + (fx.individual.last_name?fx.individual.last_name:'') 
   founderInfo.signature = fx.signature
   founderInfo.date = fx.date_signed
   founderInfo.id = fx.id
   }
  }




async function DeleteSignature()
{
    useFxn.confirmDelete("You want to Delete Signature", "Yes, Delete")
  .then(async (resp) => {
  if (resp.isConfirmed) {
  const formData = new FormData()
  formData.append('company_id', startCompanyStore.companyInProgress.id)
  formData.append('company_entity_id',  founderInfo.id)
  await api.deleteSignature(formData)
   founderInfo.name = ''
   founderInfo.signature = ''
   founderInfo.date = ''
   founderInfo.id = ''
   startCompanyStore.getCompanyInProgress()
  //  getActiveFounder()
  toast.error('Signature removed successfully', { position: 'top-right' });
  }
})
}



function proceed() {
  if (!startCompanyStore.signatureImage) {
    toast.error('Please add signature first!', { position: 'top-right' });
    return;
  }

  startCompanyStore.pdfIsSending = true
  setTimeout(() => {
    startCompanyStore.pdfAction = !startCompanyStore.pdfAction
  }, 500);

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
