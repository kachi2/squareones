<template>


    <div class="modal-body">
        <div class="row g-3">
            <div class="col-lg-12">
                <div class="col-12">
                    <div class="form-label">Document title</div>
                    <input v-model="documentTitle" type="text" class="form-control w-100">
                </div>
            </div>
            <div class="col-12 col-lg-6">
                <div class="form-label">Year</div>
                <input v-maska data-maska="####" v-model="documentYear" type="text" class="form-control w-100">
            </div>
            <div class="col-12 col-lg-6">
                <div class="form-label">Document Type</div>
                <input v-model="documentType" type="text" class="form-control w-100">
            </div>
            <div class="col-12 mt-4">
                <div v-bind="getRootProps()">
                    <div class="dropzone text-center small py-2">
                        <i class="bi bi-paperclip color-theme"></i> Click here to browse or
                        drag files here to add
                        <br>
                        You can all more than one document.
                    </div>
                    <input v-bind="getInputProps()" />
                </div>
            </div>
            <div class="col-lg-12" v-if="uploadedFiles.length">
                <div class="card h-100">
                    <div class="card-body">

                        <ul class="list-group list-group-flush">
                            <li v-for="(doc, index) in uploadedFiles" :key="doc" class="list-group-item p-0">
                                <strong>{{ index + 1 }}</strong>. {{ doc.name }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <div class="modal-footer mt-4 border-0">
        <button v-show="uploadedFiles.length" @click="uploadedFiles.length = 0" type="button"
            class="btn btn-warning me-3">
            Remove all from list
        </button>

        <button v-if="isSaving" class="btn btn-primary" type="button" disabled>
            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            Saving Document..
        </button>

        <button :disabled="!uploadedFiles.length" v-else @click="save" type="button" class="btn btn-primary">
            Save Document
        </button>
    </div>

</template>

<script setup lang="ts">
import { ref } from 'vue';
import api from "@/stores/Helpers/axios"
import useFxn from '@/stores/Helpers/useFunctions';
import { vMaska } from "maska"
import { useAdminParamsStore } from '../../../adminParamsStore';

//@ts-ignore
import { useDropzone } from "vue3-dropzone";

const paramsStore = useAdminParamsStore()
const emit = defineEmits(['done'])

const acceptedFormats = ['doc', 'docx', 'pdf', 'jpg', 'png', 'jpeg']
const uploadedFiles = ref<any[]>([])
const documentTitle = ref('')
const documentYear = ref('')
const documentType = ref('')



const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptFiles: any[], rejectReasons: any) => {

        const hasInvalidFile = acceptFiles.find(x => !useFxn.isExtension(x.name, acceptedFormats))

        if (hasInvalidFile) {
            useFxn.toast('Invalid file type added', 'warning');
            return;
        }

        uploadedFiles.value = acceptFiles
        console.log(rejectReasons);
    },
});



const isSaving = ref<boolean>(false)

const save = (async () => {
    useFxn.confirm("Continue submit?", "Continue").then(async (confirmed) => {
        if (confirmed.value == true) {
            if (!documentTitle.value) {
                useFxn.toast('Please enter Document(s) title', 'warning');
                return;
            }

            if (!documentYear.value) {
                useFxn.toast('Please enter Year', 'warning');
                return;
            }

            if (!documentYear.value) {
                useFxn.toast('Please enter Type', 'warning');
                return;
            }

            const formData = new FormData()
            formData.append('company_id', paramsStore.currentCompanyId)
            formData.append('title', documentTitle.value)
            formData.append('year', documentYear.value)
            formData.append('type', documentType.value)
            formData.append('document_type_id', '1')
            uploadedFiles.value.forEach((file, index) => {
                formData.append(`document[${index}]`, file)
            });

            isSaving.value = true

            try {
                await api.uploadCompanyDocuments(formData)
                isSaving.value = false
                useFxn.toast('Updated', 'success')
                paramsStore.getCompanyDetails()
                // emit('done')

            } catch (error) {
                console.log(error);
            }
        }
    })
})
</script>

<style scoped>
.dropzone {
    width: 100%;
    height: 100%;
    /* display: flex; */
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 5px;
    border: 2px dashed var(--bs-dark-bg-subtle);
    background-color: var(--bs-light);
    transition: 0.3s ease all;
    color: rgb(170, 164, 164);
    cursor: pointer;
    border-radius: 10px;
}

/* .dropzone input {
    display: none;
} */

.active-dropzone {
    color: #fff;
    border-color: #fff;
    background-color: #41b883;
}
</style>