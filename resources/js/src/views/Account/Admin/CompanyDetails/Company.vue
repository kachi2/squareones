<template>
    <div class="card exemption border-0">
        <div class="card-header bg-transparent border-0">
            <div @click="togglePopulateData" class="float-end">
                <button v-if="!isPopulatingData" class="btn btn-primary btn-sm">
                    Populate Data <i class="bi bi-pencil"></i>
                </button>
                <div v-else>
                    <button class="btn btn-primary btn-sm">
                        <i class="bi bi-x"></i> Publish Data
                    </button>
                    &nbsp; &nbsp; &nbsp;
                    <button class="btn btn-secondary btn-sm">
                        <i class="bi bi-x-lg"></i> Cancel
                    </button>
                </div>
            </div>
        </div>
        <div v-if="isPopulatingData" class="card-body">
            <Editing @done="togglePopulateData" />
        </div>
        <div v-else class="card-body">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="tab1-tab" data-bs-toggle="tab" data-bs-target="#tab1"
                        type="button" role="tab" aria-controls="tab1" aria-selected="true">
                        Company details
                    </button>
                </li>
                <li class="nav-item" role="presentation">
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
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="tab4-tab" data-bs-toggle="tab" data-bs-target="#tab4" type="button"
                        role="tab" aria-controls="tab4" aria-selected="false">
                        Documents
                    </button>
                </li>
                <!-- <li class="nav-item" role="presentation">
                    <button class="nav-link" id="tab5-tab" data-bs-toggle="tab" data-bs-target="#tab5" type="button"
                        role="tab" aria-controls="tab5" aria-selected="false">
                        Founders/Directors
                    </button>
                </li> -->
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="tab6-tab" data-bs-toggle="tab" data-bs-target="#tab6" type="button"
                        role="tab" aria-controls="tab6" aria-selected="false">
                        Activity Logs
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
                <!-- <div class="tab-pane" id="tab5" role="tabpanel" aria-labelledby="tab5-tab">
                    <foundersTabContent />
                </div> -->
                <div class="tab-pane" id="tab6" role="tabpanel" aria-labelledby="tab6-tab">
                    <logsTabContent />
                </div>
            </div>
        </div>
    </div>

</template>
<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue';
import { useAdminParamsStore } from './adminParamsStore';

// tabcontents
import companyDetailsTabContent from './components/tabContents/companyDetails.vue'
import companyRegistersTabContent from './components/tabContents/companyRegisters/companyRegisters.vue'
// import registerOfChargesTabContent from './components/tabContents/registerOfCharges.vue'
import documentsTabContent from './components/tabContents/documents.vue'
// import foundersTabContent from './components/tabContents/founders.vue'
import logsTabContent from './components/tabContents/logs.vue'
import Editing from './components/editing/editing.vue';

const paramsStore = useAdminParamsStore()

const companyIsLoading = ref<boolean>(true)
const isPopulatingData = ref<boolean>(false)

function togglePopulateData() {
    isPopulatingData.value = !isPopulatingData.value
}

onMounted(async () => {
    await paramsStore.getCompanyDetails()
    companyIsLoading.value = false
})

</script>
<style lang="css">
.list-group-item {
    background: transparent;
    padding-block: 13px;
}

.card {
    box-shadow: 1px 1px #88888812;
    border: 1px solid rgb(0 0 0 / 5%);
    border-radius: 10px;
}
</style>./adminParamsStore