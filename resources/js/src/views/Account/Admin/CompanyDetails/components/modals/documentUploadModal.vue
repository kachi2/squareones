<template>
    <div>
        <!-- Modal trigger button -->
        <button ref="openModal" class="btn d-none" data-bs-toggle="modal" data-bs-target="#documentUploadModalEdit">
        </button>

        <div class="modal fade" id="documentUploadModalEdit" tabindex="-1" data-bs-backdrop="static"
            data-bs-keyboard="false" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header p-3  border-0">
                        <h5 class="modal-title fw-bold text-center">Documents Upload</h5>
                        <!-- <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> -->
                    </div>
                    <div class="modal-body">
                        <div class="row g-3">
                            <div class="col-lg-6">
                                <div class="col-12">
                                    <div class="form-label">Document title</div>
                                    <input v-model="documentTitle" type="text" class="form-control w-100">
                                </div>

                            </div>
                            <div class="col-12 col-lg-6">
                                <div class="form-label">Year</div>
                                <input v-maska data-maska="####" v-model="documentYear" type="text"
                                    class="form-control w-100">
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
                            <div class="col-lg-12">
                                <div class="card bg-light-subtle h-100">
                                    <div class="card-body">
                                        <div class="text-muted" v-if="!uploadedFiles.length">Uploaded files will show
                                            here</div>

                                        <ul v-else class="list-group list-group-flush">
                                            <li v-for="(doc, index) in uploadedFiles" :key="doc"
                                                class="list-group-item p-0">
                                                {{ index + 1 }}. {{ doc.name }}
                                                <span class="float-end">
                                                    <i @click="sliceDocument(doc.name)"
                                                        class="bi bi-x-lg cursor-pointer text-danger"></i>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>
                    <div class="modal-footer border-0">
                        <button @click="uploadedFiles.length = 0" type="button" class="btn btn-warning">
                            Clear
                        </button>
                        <button ref="closeModal" type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                            Cancel
                        </button>

                        <button v-if="isSaving" class="btn btn-primary" type="button" disabled>
                            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            Saving data..
                        </button>

                        <button :disabled="!uploadedFiles.length" v-else @click="save" type="button"
                            class="btn btn-primary">
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
import useFxn from '@/stores/Helpers/useFunctions';
import { vMaska } from "maska"
import { useAdminParamsStore } from '../../adminParamsStore';

//@ts-ignore
import { useDropzone } from "vue3-dropzone";

const paramsStore = useAdminParamsStore()
const emit = defineEmits(['done'])



// modal
const openModal = ref<any>(null)
const closeModal = ref<any>(null)

const acceptedFormats = ['doc', 'docx', 'pdf', 'jpg', 'png', 'jpeg']
const uploadedFiles = ref<any[]>([])
const documentTitle = ref('')
const documentYear = ref('')
const documentType = ref('')



const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    onDrop: (acceptFiles: any[], rejectReasons: any) => {


        const file = acceptFiles[0]

        // const hasInvalidFile = acceptFiles.find((x: any) => !useFxn.isExtension(x.name, acceptedFormats))
        const hasInvalidFile = !useFxn.isExtension(file.name, acceptedFormats)

        if (hasInvalidFile) {
            useFxn.toast('Invalid file type added, select a vaid document', 'warning');
            return;
        }

        uploadedFiles.value.push(file)

        // uploadedFiles.value = acceptFiles
        // console.log(rejectReasons);
    },
});

function sliceDocument(name: string) {
    uploadedFiles.value = uploadedFiles.value.filter((x: any) => x.name !== name)
}

watch(() => paramsStore.documentUploadModal, () => {
    uploadedFiles.value.length = 0
    openModal.value.click()
});
onBeforeRouteLeave(() => {
    closeModal.value.click()
});


const isSaving = ref<boolean>(false)

const save = (async () => {
    useFxn.confirm("Continue submit?", "Continue").then(async (confirmed) => {
        if (confirmed.value == true) {
            if (!documentTitle.value) {
                useFxn.toast('Please Document(s) title', 'warning');
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
                // paramsStore.getCompanyDetails()
                emit('done')
                closeModal.value.click()

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