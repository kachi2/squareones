
<template>
    <pageLoadingComponent v-if="pageIsLoading" />
    <StartCompany_template_founders v-else>
        <template #founderName>
           <i class="bi bi-person-circle">  </i> {{ currentEntity?.label ?? '' }}
        </template>
        <!-- <template #main>
            <BasePdf />
        </template> -->
        
<template #main>
    <div id="complycube-mount" ></div>
<div class="container">
   <div class="bg-white pb-5">
    <div class="container">
      <div class="row g-3 justify-content-center align-items-center">
        <div class="col-md-11">
          <div class="card bg-transparent border-0">
            
            <div class="card-body justify-content-center text-center ">
              <div class="p-3">
                <!-- <img class="email-logo" src="{{asset('squareone-light-logo.png')}}" alt="logo" style="height: 40px; background:#555454;max-width: 100%;vertical-align:middle;"> -->
              </div>
              <div class="row justify-content-center">
                <div class="col-lg-12 p">
                  <div class="text-muted">
                    This Kyc verifications will take approximately 1-5 munites to complete
                  
                  </div>
                  <div class="text-muted mt-2">
                    Before you start, please make sure you the documents below ready
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-10">
          <div class="card border-0 bg-transparent">
            <div class="card-body">
              <section>
                <div class="text-muted h6">ONE OF THIS DOCUMENT CAN USED FOR THIS PURPOSE</div>
                <div class="row g-3 mt-1">
                  <div class="col-md-6">
                    <div class="row g-0">
                      <div class="col-1"><i class="bi bi-person-vcard"></i></div>
                      <div class="col">
                        <span class="fw-bold color-thick">Identification Proof</span>
                        <div class="text-muted"> Hong Kong Indentity Card / Passport / Travel Document / National
                          Identity
                          Card </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="row g-0">
                      <div class="col-1"><i class="bi bi-award"></i></div>
                      <div class="col">
                        <span class="fw-bold color-thick">Residential Permit</span>
                        <div class="text-muted"> An Active Residential Permit from the government of country you currently resides </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-6" >
            <button class="btn btn-outline-dark me-3" @click="back()">
            <i class="bi bi-arrow-left"></i> Back
        </button>
            <button  v-if="startCompanyStore.isKYCcompleted" class="btn btn-primary w-50 "  id="closeoncompleted" type="button" @click="closeWindow()"> Close Window</button>
     
            <button  v-else class="btn btn-primary w-50 "  id="closeoncompleted" type="button" @click="startVerification"> Start verification</button>
       <small id="erro"></small>
        </div>
      </div>
    </div>
  </div>
</div>
 
</template>
        <template #info>
  <div class="mt-3">
            </div>
            <p style="border-bottom: 1px solid #000; font-weight:bolder">WHY THIS KYC PROCEESS</p>
            <p>
                <span class="mr-2">📄</span>
                As Government policy requires every founder/Director to be fully Verified before company can be fuly registered
            </p>
            <p>
                <span class="mr-2">📄</span>
                This is to ensure there is no ghost founder/Director and to prevent impersonafication

            </p>
            <p class="mb-1 flex items-center text-gray-700">
                <span class="mr-2">✔️</span>
               Please Note: Your documents are encrypted and  securely stored and will not be share maxPageWidth anyone
            <p class="ml-6 text-gray-600">In the Event this verification fails</p>
            <ul class="ml-10 list-inside list-disc text-gray-600">
                <li></li>
                <li>Your primary user will request for a new verification process for you</li>
                <li>You will received an updated link to start a new verifications</li>
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

import api from '@/stores/Helpers/axios'
import { useRoute } from 'vue-router';

function back(){
    history.back()
}

const startCompanyStore = useStartCompanyStore()
const pageIsLoading = ref<boolean>(true)
const userToken = ref('');
const FounderToken = ref('')
const route: any = useRoute()

const company_entity_id_onRoute = ref<any>('')
const company_id_onRoute = ref<any>('')
const currentEntity = ref<any>({})
const CompanyEntity = ref<any>('')

function closeWindow(){
    window.close()
}

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

    const entities = founders.find((y: any)  => y.id == company_entity_id_onRoute.value)
    // console.log(entities, 'FOUNDER')

    FounderToken.value = entities.user_token
    CompanyEntity.value = entities
    // console.log(entities.kyc_status)
  
    startCompanyStore.isFounderSigned = CompanyEntity.value.signature
    startCompanyStore.isKYCcompleted = CompanyEntity.value.kyc_status
    pageIsLoading.value = false
}
function startVerification() {
    // @ts-ignore
    const complycube = ComplyCube.mount({
        containerId: 'complycube-mount',
        token: FounderToken.value,
        onComplete: async function (res: any) {
            //update founder kyc status
           const form = new FormData();
            form.append('kyc_status', 'pending')
            form.append('company_id', CompanyEntity.value.company_id)
            form.append('company_entity_id', CompanyEntity.value.id)
             const   {data} =  await api.registerSignature(form)
            console.log(data, 'response when u run data')
                 startCompanyStore.isFounderSigned = data.data.signature
                startCompanyStore.isKYCcompleted = data.data.kyc_status
            setTimeout(() => {
                complycube.unmount()
            }, 3000)

            // console.log("Capture complete", data)
        },
        onModalClose: function () {
            complycube.unmount()
        },
        onError: function (error: any) {
            if (error.type === 'token_expired') {
                // Request a new SDK token
            } else {
                // Handle other errors
                console.log(error);
            }
        }
    });
}

</script>
<style lang="css">
/* @import 'https://assets.complycube.com/web-sdk/v1/style.css'; */
@import '@/assets/complycube.css';
</style>
