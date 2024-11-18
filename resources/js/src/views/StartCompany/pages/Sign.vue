<template>
  <StartCompany_template>
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

  <div class="accordion" id="accordionExample">
    <p style="border-bottom: 0px solid #000; font-weight: 500; font-size:small">Signature Will be Applied to the Following Pages</p>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <span class="mx-1">📄</span>
         Incorporation Form (NNC1)
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body ">
        <ul style="list-style-type:square;"> 
      <li>   We file this with the Companies Registry.</li> 
      <li>   This is the specified form that forms your company.</li> 
        <li>    This form contains details about the company's proposed name, registered office address, share capital, and information about the directors and shareholders.</li> 
          <li>  This form appoints a company secretary that is required by the Companies Ordinance.</li> 
        </ul>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <span class="mx-1">📄</span>
        Articles of Association (AA)
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body ">
        <ul style="list-style-type:square"> 
      <li>    The Articles of Association is a document that outlines the regulations for a company's operations and the structure of its internal governance.</li> 
      <li>       Model articles is adopted for simplicity and effectiveness.</li> 
        <li>        This sets out the roles and powers of directors and the rights of shareholders.</li> 
          <li>      This sets out the procedures for daily management and administrative operations.</li> 
        </ul>
        </div>
  </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <span class="mx-1">📄</span>
        Notice to Business Registration Office (IRBR1)
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <ul style="list-style-type:square">
        <li>Notify the Inland Revenue for business registration. </li>
        <li>This makes application for the purpose of business registration.</li>
        <li>Business registration is renewed on an annual basis if elected to obtain 1-year Business Registration Certificate.</li>
        <li>This shows your business address, and the nature of your business.</li>
      </ul>
    </div>
    </div>
  </div>
</div>
<div class="p-3"> </div>
      <div v-if="!SignatureStore.founderSignature" >
   
        <div class="fixed-label-custom">
      <v-select append-to-body
       v-model="selected_entity_id" :clearable="true" :options="entities" />
      <label class="fw-bold ">      I am, </label>
      </div>
      <p v-if="!signaturePadModal" style="color:darkred"> {{ msg}}</p>
      <p v-if="founderError" style="color:darkred"> {{  founderError }} </p>
      <p> <input type="checkbox" v-model="checkBoxClick">  By signing and submitting the online application,  I agree to the terms of service and <a href=""> privacy policy </a></p>
      
      <button class="btn btn-primary mt-3 w-100" @click="signaturePadModals" v-if="checkBoxClick">Sign Document</button>
      <button class="btn btn-primary mt-3 w-100" @click="signaturePadModals" v-else disabled>Sign Document</button>

      <span class="float-end">
        <!-- <button class="btn btn-warning" @click="undo">Clear</button> -->
      </span>
      <br>
      <!-- <div class="card w-75 float-end" > -->
      <!-- <p style="margin-top:20px">
        <span style="color:blue; font-weight: 600;"> Please Review and Sign Document</span>
      </p> -->
    </div>
    <div v-else>
      <div class="card p-3">
        <span> {{  SignatureStore.founderName }}</span>
        <hr>

      <img width="100" :src="SignatureStore?.founderSignature" alt="">
      <span style="color:red" class="p-1"> Last Updated: {{  SignatureStore?.signatureDate }}</span>
    </div>
      <button class="btn btn-primary mt-3 w-100" @click="DeleteSignature()">Delete Signature</button>
      
      <span class="float-end">
        <!-- <button class="btn btn-warning" @click="undo">Clear</button> -->
      </span>
      <br>
      <!-- <div class="card w-75 float-end" > -->
      <!-- <p style="margin-top:10px">
        <span style="color:red; "> Please review and Sign Document</span>
      </p> -->
    </div>

    <div class="pt-5" v-if="SignatureStore.founderSignature">

<span v-if="!checkIfPaid()"> 
<button v-if="!startCompanyStore.pdfIsSending" @click="proceed" class="btn btn-primary">
    Proceed to complete Payment <i class="bi bi-arrow-right"></i>
  </button>

  <button v-else class="btn btn-primary" type="button" disabled>
    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
    Processing, Please wait....
  </button>
</span>
<span v-else>
  <button @click="MoveToKyc()" class="btn btn-primary w-100" type="button">
    Proceed to KYC <i class="bi bi-arrow-right"> </i>
   
  </button> </span>
</div>
      <br>
    
    
      
     
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
import useFunctions from '@/stores/Helpers/useFunctions';
import { useFounderSignatureStore } from '../FoundersSignature_store';
import {useRouter} from 'vue-router'

const startCompanyStore = useStartCompanyStore()
const SignatureStore = useFounderSignatureStore()
const router = useRouter()

console.log(SignatureStore.founderId, 'SignatureStore')
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

const checkBoxClick = ref(false)

 function signaturePadModals()
 {
  if(selected_entity_id.value){
  return signaturePadModal.value = true
  }else{
    msg.value = "Please select a Founder";
   return  signaturePadModal.value = false
  }
}

function MoveToKyc()
{
  router.push({path: 'kyc/verifications'})

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
      // console.log(obj, 'founders')
      if (obj && el.entity_capacity_id.includes(1) ) {
        obj.label = el?.entity_type_id == 1 ?
          `${obj.first_name??''} ${obj?.last_name??'' } ${obj?.chn_last_name??''}${obj?.chn_first_name??''}`
          : `${obj?.authorized_persons?.first_name + ' ' + obj?.authorized_persons?.last_name  + ' FOR AND BEHALF OF ' + obj?.company_name + ' ' +  obj?.chn_company_name} `
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
  checkIfPaid()
})


console.log(checkIfPaid(), 'checkIfPaid()')

function save() {
  const { isEmpty, data, } = signaturePad.value.saveSignature()
  if (!isEmpty) {
    startCompanyStore.signatureImage = data
    startCompanyStore.signatureDateSigned = new Date()
    signatureIsSaving.value = true
   saveSignatureBySelectedFounder()
  }

}



function checkIfPaid()
{
  return startCompanyStore?.companyInProgress?.is_paid == 1
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
  //  SignatureStore.founderName = (fx.individual?.first_name??'' + fx.corporate?.authorized_persons?.first_name?? '') + ' ' + (fx.individual?.last_name??'' + fx.corporate?.authorized_persons?.last_name?? '') 
   //@ts-ignore
  SignatureStore.founderName = fx?.entity_type_id == 1 ? `${fx.individual.first_name??''} ${fx.individual.last_name??'' } ${fx.individual.chn_last_name??''}${fx.individual.chn_first_name??''}`  : `${fx.corporate?.authorized_persons?.first_name + ' ' + fx.corporate?.authorized_persons?.last_name  + ' FOR AND BEHALF OF ' + fx.corporate?.company_name??'' + ' ' +  fx.corporate?.chn_company_name??''}`
   SignatureStore.founderSignature = fx.signature
   SignatureStore.signatureDate = fx.date_signed
   SignatureStore.founderId = fx.id
   }
   return founder;
  }




async function DeleteSignature()
{
    useFxn.confirmDelete("You want to Delete Signature", "Yes, Delete")
  .then(async (resp) => {
  if (resp.isConfirmed) {
  const formData = new FormData()
  formData.append('company_id', startCompanyStore.companyInProgress.id)
  formData.append('company_entity_id',  SignatureStore.founderId)
  await api.deleteSignature(formData)
  SignatureStore.founderName  = ''
  SignatureStore.founderSignature = ''
  SignatureStore.signatureDate = ''
  SignatureStore.founderId = ''
   startCompanyStore.getCompanyInProgress()
    // getActiveFounder()
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
