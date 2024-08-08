<template>
    <div>
        <div class="modal-body">

            <div class="col-12 col-md-12">
                <div class="form-label">Update Incorporation Status</div>
                <v-select v-model="registration_progress_id" :clearable="true" :options="progressData"
                    :reduce="(item: any) => item.id" label="description" />

            </div>
        </div>
        <div class="modal-footer mt-4 border-0">
            <button v-if="isSaving" class="btn btn-primary" type="button" disabled>
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Saving data..
            </button>

            <button v-else @click="save" type="button" class="btn btn-primary">
                Save and Continue
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import { onBeforeRouteLeave } from 'vue-router';
import api from "@/stores/Helpers/axios"
import { useAdminParamsStore } from '../../../adminParamsStore';


const paramsStore = useAdminParamsStore()

const emit = defineEmits(['done'])
onMounted(() => {
    getProgressData()
})


const progressData = ref<any>([])
const registration_progress_id = ref('')
const isSaving = ref(false)

async function save() {
    isSaving.value = true
    console.log(registration_progress_id.value);
    const formData = new FormData();
    formData.append('company_id', paramsStore.currentCompanyId)
    formData.append('registration_progress_id', registration_progress_id.value)

    try {
        await api.incoprationStatusUpdate(formData)
        isSaving.value = false

        await paramsStore.getCompanyDetails()
        paramsStore.hasUpdatedProgress = !paramsStore.hasUpdatedProgress
        emit('done')

    } catch (error) {
        console.log(error);
    }
}

async function getProgressData() {
    const { data } = await api.GetCompanyProgressStatus();
    progressData.value = data.data
    // console.log(progressData.value);
}
</script>