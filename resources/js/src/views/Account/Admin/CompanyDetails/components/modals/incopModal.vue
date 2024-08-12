<template>
    <div>
        <!-- Modal trigger button -->
        <button ref="openModal" class="btn d-none" data-bs-toggle="modal" data-bs-target="#incopModalEdit">
        </button>

        <div class="modal fade" id="incopModalEdit" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false"
            role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-heade p-3   border-0">
                        <h5 class="modal-title  fw-bold ">Company Incorporation</h5>
                        <!-- <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> -->
                    </div>
                    <div class="modal-body">

                        <div class="col-12 col-md-12">
                            <div class="form-label">Update Incorporation Status</div>
                            <v-select v-model="registration_progress_id" :clearable="true" :options="progressData"
                                :reduce="(item: any) => item.id" label="description" />

                        </div>
                    </div>
                    <div class="modal-footer border-0">
                        <button ref="closeModal" type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                            Cancel
                        </button>
                        <button v-if="isSaving" class="btn btn-primary" type="button" disabled>
                            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            Saving data..
                        </button>

                        <button v-else @click="save" type="button" class="btn btn-primary">
                            Submit Data
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import { onBeforeRouteLeave } from 'vue-router';
import api from "@/stores/Helpers/axios"
import { useAdminParamsStore } from '../../adminParamsStore';
import useFunctions from '@/stores/Helpers/useFunctions';

const openModal = ref<any>(null)
const closeModal = ref<any>(null)
const paramsStore = useAdminParamsStore()

onMounted(() => {
    getProgressData()
})

watch(() => paramsStore.incopModal, () => {
    openModal.value.click()
});

onBeforeRouteLeave(() => {
    closeModal.value.click()
});


const progressData = ref<any>([])
const registration_progress_id = ref('')
const isSaving = ref(false)

async function save() {
    useFunctions.confirm("Continue submit?", "Continue").then(async (confirmed) => {
        if (confirmed.value) {
            isSaving.value = true
            console.log(registration_progress_id.value);


            const formData = new FormData();
            formData.append('company_id', paramsStore.currentCompanyId)
            formData.append('registration_progress_id', registration_progress_id.value)

            try {
                await api.incoprationStatusUpdate(formData)
                isSaving.value = false

                await paramsStore.getCompanyDetails()
                closeModal.value.click()
                paramsStore.hasUpdatedProgress = !paramsStore.hasUpdatedProgress

            } catch (error) {
                console.log(error);
            }
        }
    })
}

async function getProgressData() {
    const { data } = await api.GetCompanyProgressStatus();
    progressData.value = data.data
    // console.log(progressData.value);
}
</script>