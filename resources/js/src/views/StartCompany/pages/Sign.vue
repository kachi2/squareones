<template>
    <StartCompany_template>
        <template #main>
            <div>
                <button  class="btn btn-outline-primary btn-sm" @click="NextPage"> Previous Page</button>  <span style="float: right;">
                    <button class="btn btn-outline-primary btn-sm" @click="PreviousPage"> Next Page</button></span> 
                    <hr style="color:#000435">
            <VuePDF :pdf="pdf"  intent="display" :page="currentPage" :scale="1.2" />
            
        </div>
        </template>

        <template #info>
           <span style="color:blue;">Draw Mouse here to Sign Document</span> 
            <hr style="color:#000135">
            <VueSignaturePad width="300px" height="100px" 
            ref="signaturePad" 
            />
        <br>
      <button class="btn btn-primary" @click="save">Save Signature</button>
     <span class="float-end">
        <button class="btn btn-warning" @click="undo">Clear</button>
    </span> 
    <br>
            <!-- <div class="card w-75 float-end" > -->
            <p>
              <span style="color:red">  Please review the PDF and Draw your Mouse on the empty space above to sign the document</span> 
            </p>
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
                    <p class="ml-6 text-gray-600">The Articles of Association is a document that outlines the regulations for a company's operations and the structure of its internal governance.</p>
                  
              </p>
              <p class="mb-1 flex items-center text-gray-700">
                    <span class="mr-2">✔️</span>
                    Notice to Business Registration Office (IRBR1)
                    <p class="ml-6 text-gray-600">Notify the Inland Revenue for business registration.</p>
                  <ul class="ml-10 list-inside list-disc text-gray-600">
                    <li>This makes application for the purpose of business registration.</li>
                    <li>Business registration is renewed on an annual basis if elected to obtain 1-year Business Registration Certificate.</li>
                    <li>This shows your business address, and the nature of your business.</li>
                  </ul>
             </p>
            <!-- </div> -->

        </template>

    
       

    </StartCompany_template>
    
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import StartCompany_template from '../StartCompany_template.vue';
import { useStartCompanyStore } from '../StartCompany_store';
import { VuePDF, usePDF } from '@tato30/vue-pdf'

const { pdf, pages, info } = usePDF('public/ncc1.pdf')
const currentPage = ref(1);

const startCompanyStore = useStartCompanyStore()


function undo() {
    //   this.$refs.signaturePad.undoSignature();
    }
 function   save() {
    //   const { isEmpty, data } = this.$refs.signaturePad.saveSignature();
    //   console.log(isEmpty);
    //   console.log(data);
    }


function NextPage(){
    if(currentPage.value > 0)    return currentPage.value--;
}
function PreviousPage(){
    if(currentPage.value < pages.value)  return currentPage.value++;
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
</style>

