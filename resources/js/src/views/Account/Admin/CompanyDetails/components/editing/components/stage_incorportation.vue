<template>
    <div>
        <div class="modal-body">

            <div class="col-12 col-md-12">
                <div class="form-label">Update Incorporation Status</div>
                <v-select v-model="registration_progress_id" :clearable="true" :options="progressData"
                    :reduce="(item: any) => item.id" label="description"  />

            </div>
        </div>
        <div class="modal-footer mt-4 border-0">
            <button v-if="isSaving" class="btn btn-primary" type="button" disabled>
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Saving data..
            </button>

            <button v-else @click="save" type="button" class="btn btn-primary">
                Update Data
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import api from "@/stores/Helpers/axios"
import { useAdminParamsStore } from '../../../adminParamsStore';
import useFxn from '@/stores/Helpers/useFunctions';


const paramsStore = useAdminParamsStore()

const emit = defineEmits(['done'])
onMounted(async () => {
    await getProgressData()

    updateField()
})

function updateField() {
    const progress = paramsStore.currentCompanyData?.registered_company[0]
    if (progress) {
        registration_progress_id.value = parseInt(progress.registration_progress_id)
    }
}


const progressData = ref<any>([])
const registration_progress_id: any = ref('')
const isSaving = ref(false)

async function save() {
    isSaving.value = true
    // console.log(registration_progress_id.value);
    const formData = new FormData();
    formData.append('company_id', paramsStore.currentCompanyId)
    formData.append('registration_progress_id', registration_progress_id.value)

    try {
        await api.incoprationStatusUpdate(formData)
        isSaving.value = false
        useFxn.toast('Updated', 'success')
        await paramsStore.getCompanyDetails()
        paramsStore.hasUpdatedProgress = !paramsStore.hasUpdatedProgress
        // emit('done')

    } catch (error) {
        console.log(error);
    }
}

async function getProgressData() {
    const { data } = await api.GetCompanyProgressStatus();
    progressData.value = data.data
    console.log(progressData.value, 'progress_data');
}
</script>