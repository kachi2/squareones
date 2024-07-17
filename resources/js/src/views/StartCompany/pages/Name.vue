<template>
    <StartCompany_template>
        <template #main>
            <section class="section">
                <div class="fw-bolder fs-5">Name</div>
                <span>Enter your preferred company names in order of priority.</span>
            </section>

            <section class="section">
                <div class="fw-bold">Primary Choice</div>
                <div>This is your most preferred company name. Ensure it is the legal name intended for
                    registration.
                </div>

                <div class="row g-3 mt-1">
                    <div class="col-md-6">
                        <div class="form-floating-custom">
                            <input id="choice_level1_eng_name" v-bind="form.choice_level1_eng_nameAttr"
                                :class="{ 'error-field': form.errors.choice_level1_eng_name }" v-maska
                                data-maska-tokens="*:[a-zA-Z0-9]:multiple" v-model="form.choice_level1_eng_name"
                                type="text" class="form-control" placeholder="">
                            <label for="choice_level1_eng_name">English name</label>
                        </div>
                        <small class=" text-danger">{{ form.errors.choice_level1_eng_name }}</small>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating-custom">
                            <select id="choice_level1_prefix" v-model="form.choice_level1_prefix" class="form-select">
                                <option :value="'Limited'">Limited</option>
                                <option :value="'LIMITED'">LIMITED</option>
                            </select>
                            <label for="choice_level1_prefix">Prefix</label>
                        </div>

                    </div>
                    <div class="col-md-6">
                        <div class="form-floating-custom">
                            <input id="choice_level1_chn_name"
                                :class="{ 'error-field': form.errors.choice_level1_chn_name }"
                                v-model="form.choice_level1_chn_name" type="text" class="form-control" placeholder="">
                            <label for="choice_level1_chn_name">Chinese Name</label>
                        </div>
                        <small class=" text-danger">{{ manualErrors.choice_level1_chn_name }}</small>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating-custom">
                            <select id="choice_level1_chn_prefix" v-model="form.choice_level1_chn_prefix"
                                class="form-select">
                                <option :value="'有限公司'">有限公司</option>
                            </select>
                            <label for="choice_level1_chn_prefix">Prefix</label>
                        </div>

                    </div>
                </div>
            </section>

            <section class="section" v-if="form.isSecond">
                <div class="fw-bolder">Secondary Choice</div>
                <div>These are alternative names you would consider should your primary choice be unavailable. List
                    them in descending order of preference.</div>
                <div class="row g-3 mt-1">
                    <div class="col-md-6">
                        <div class="form-floating-custom">
                            <input id="choice_level2_eng_name"
                                :class="{ 'error-field': form.errors.choice_level2_eng_name }" v-maska
                                data-maska-tokens="*:[a-zA-Z0-9]:multiple" v-model="form.choice_level2_eng_name"
                                type="text" class="form-control" placeholder="">
                            <label for="choice_level2_eng_name">English name</label>
                        </div>
                        <small class=" text-danger">{{ form.errors.choice_level2_eng_name }}</small>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating-custom">
                            <select id="choice_level2_prefix" v-model="form.choice_level2_prefix" class="form-select">
                                <option :value="'Limited'">Limited</option>
                                <option :value="'LIMITED'">LIMITED</option>
                            </select>
                            <label for="choice_level2_prefix">Prefix</label>
                        </div>

                    </div>
                    <div class="col-md-6">
                        <div class="form-floating-custom">
                            <input id="choice_level2_chn_name"
                                :class="{ 'error-field': form.errors.choice_level2_chn_name }"
                                v-model="form.choice_level2_chn_name" type="text" class="form-control" placeholder="">
                            <label for="choice_level2_chn_name">Chinese name</label>
                        </div>

                        <small class=" text-danger">{{ manualErrors.choice_level2_chn_name }}</small>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating-custom">
                            <select id="choice_level2_chn_prefix" v-model="form.choice_level2_chn_prefix"
                                class="form-select">
                                <option :value="'有限公司'">有限公司</option>
                            </select>
                            <label for="choice_level2_chn_prefix">Prefix</label>
                        </div>

                    </div>
                </div>
                <div class="p-1 mt-1">
                    <button @click="removeForm('isSecond')" class="btn btn-outline-danger me-3">
                        <i class="bi bi-x-circle"></i> Remove
                    </button>
                </div>
            </section>

            <section class="section" v-if="form.isThird">
                <div class="fw-bold">Third Choice</div>
                <div>This is your third choice company name. Ensure it is the legal name intended for
                    registration.
                </div>

                <div class="row g-3 mt-1">
                    <div class="col-md-6">
                        <div class="form-floating-custom">
                            <input id="choice_level3_eng_name"
                                :class="{ 'error-field': form.errors.choice_level3_eng_name }" v-maska
                                data-maska-tokens="*:[a-zA-Z0-9]:multiple" v-model="form.choice_level3_eng_name"
                                type="text" class="form-control" placeholder="">
                            <label for="choice_level3_eng_name">English name</label>
                        </div>

                        <small class=" text-danger">{{ form.errors.choice_level3_eng_name }}</small>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating-custom">
                            <select id="choice_level3_prefix" v-model="form.choice_level3_prefix" class="form-select">
                                <option :value="'Limited'">Limited</option>
                                <option :value="'LIMITED'">LIMITED</option>
                            </select>
                            <label for="choice_level3_prefix">Prefix</label>
                        </div>

                    </div>
                    <div class="col-md-6">
                        <div class="form-floating-custom">
                            <input id="choice_level3_chn_name"
                                :class="{ 'error-field': form.errors.choice_level3_chn_name }"
                                v-model="form.choice_level3_chn_name" type="text" class="form-control" placeholder="">
                            <label for="choice_level3_chn_name">Chinese name</label>
                        </div>

                        <small class=" text-danger">{{ manualErrors.choice_level3_chn_name }}</small>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating-custom">
                            <select id="choice_level3_chn_prefix" v-model="form.choice_level3_chn_prefix"
                                class="form-select">
                                <option :value="'有限公司'">有限公司</option>
                            </select>
                            <label for="choice_level3_chn_prefix">Prefix</label>
                        </div>

                    </div>
                </div>
                <div class="p-1 mt-1">
                    <button @click="removeForm('isThird')" class="btn btn-outline-danger me-3">
                        <i class="bi bi-x-circle"></i> Remove
                    </button>
                </div>
            </section>

            <section class="section" v-if="form.isForth">
                <div class="fw-bold">Fourth Choice</div>
                <div>This is your fourth company name. Ensure it is the legal name intended for
                    registration.
                </div>

                <div class="row g-3 mt-1">
                    <div class="col-md-6">
                        <div class="form-floating-custom">
                            <input id="choice_level4_eng_name"
                                :class="{ 'error-field': form.errors.choice_level4_eng_name }" v-maska
                                data-maska-tokens="*:[a-zA-Z0-9]:multiple" v-model="form.choice_level4_eng_name"
                                type="text" class="form-control" placeholder="">
                            <label for="choice_level4_eng_name">English name</label>
                        </div>

                        <small class=" text-danger">{{ form.errors.choice_level4_eng_name }}</small>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating-custom">
                            <select id="choice_level4_prefix" v-model="form.choice_level4_prefix" class="form-select">
                                <option :value="'Limited'">Limited</option>
                                <option :value="'LIMITED'">LIMITED</option>
                            </select>
                            <label for="choice_level4_prefix">Prefix</label>
                        </div>

                    </div>
                    <div class="col-md-6">
                        <div class="form-floating-custom">
                            <input id="choice_level4_chn_name"
                                :class="{ 'error-field': form.errors.choice_level4_chn_name }"
                                v-model="form.choice_level4_chn_name" type="text" class="form-control" placeholder="">
                            <label for="choice_level4_chn_name">Chinese name</label>
                        </div>

                        <small class=" text-danger">{{ manualErrors.choice_level4_chn_name }}</small>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating-custom">
                            <select id="choice_level4_chn_prefix" v-model="form.choice_level4_chn_prefix"
                                class="form-select">
                                <option :value="'有限公司'">有限公司</option>
                            </select>
                            <label for="choice_level4_chn_prefix">Prefix</label>
                        </div>
                    </div>
                </div>
                <div class="p-1 mt-1">
                    <button @click="removeForm('isForth')" class="btn btn-outline-danger me-3">
                        <i class="bi bi-x-circle"></i> Remove
                    </button>
                </div>
            </section>

            <section class="section" v-if="form.isFifth">
                <div class="fw-bold">Fifth Choice</div>
                <div>This is your fifth company name. Ensure it is the legal name intended for
                    registration.
                </div>
                <div class="row g-3 mt-1">
                    <div class="col-md-6">
                        <div class="form-floating-custom">
                            <input id="choice_level5_eng_name"
                                :class="{ 'error-field': form.errors.choice_level5_eng_name }" v-maska
                                data-maska-tokens="*:[a-zA-Z0-9]:multiple" v-model="form.choice_level5_eng_name"
                                type="text" class="form-control" placeholder="">
                            <label for="choice_level5_eng_name">English name</label>
                        </div>
                        <small class=" text-danger">{{ form.errors.choice_level5_eng_name }}</small>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating-custom">
                            <select id="choice_level5_prefix" v-model="form.choice_level5_prefix" class="form-select">
                                <option :value="'Limited'">Limited</option>
                                <option :value="'LIMITED'">LIMITED</option>
                            </select>
                            <label for="choice_level5_prefix">Prefix</label>
                        </div>

                    </div>
                    <div class="col-md-6">
                        <div class="form-floating-custom">
                            <input id="choice_level5_chn_name"
                                :class="{ 'error-field': form.errors.choice_level5_chn_name }"
                                v-model="form.choice_level5_chn_name" type="text" class="form-control" placeholder="">
                            <label for="choice_level5_chn_name">Chinese name</label>
                        </div>

                        <small class=" text-danger">{{ manualErrors.choice_level5_chn_name }}</small>
                    </div>
                    <div class="col-md-6">
                        <div id="choice_level5_chn_prefix" class="form-floating-custom">
                            <select v-model="form.choice_level5_chn_prefix" class="form-select">
                                <option :value="'有限公司'">有限公司</option>
                            </select>
                            <label for="choice_level5_chn_prefix"></label>
                        </div>

                    </div>
                </div>
                <div class="p-1 mt-1">
                    <button @click="removeForm('isFifth')" class="btn btn-outline-danger me-3">
                        <i class="bi bi-x-circle"></i> Remove
                    </button>
                </div>
            </section>

            <div>
                <!-- <button v-if="form.isSecond || form.isThird || form.isForth || form.isFifth" @click="removeForm"
                    class="btn btn-outline-danger me-3">
                    <i class="bi bi-x-circle"></i> Remove
                </button> -->
                <button :disabled="form.isThird && form.isForth && form.isFifth" @click="addForm"
                    class="btn btn-outline-success bg-success-subtle">
                    Add another name <i class="bi bi-plus-circle"></i>
                </button>

            </div>

            <div class="movement-buttons my-5">
                <!-- <button @click="moveBack" class="btn btn-outline-info me-3">
                    <i class="bi bi-arrow-left"></i> Back
                </button> -->
                <button v-if="!form.isSaving" @click="saveAndContinue" class="btn btn-primary">
                    Save & Continue <i class="bi bi-arrow-right"></i>
                </button>

                <button v-else class="btn btn-primary" type="button" disabled>
                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    Saving, Please wait
                </button>

            </div>

        </template>

        <template #info>
            <section class="section">
                <div class="fw-bold">
                    What are the restrictions on naming my company?
                </div>
                <div>
                    Your company name should be unique and not be too similar to any existing company registered
                    in Hong Kong. It must end with 'Limited' or ‘有限公司’ for Chinese to signify limited liability
                    and should not contain restricted terms or imply government affiliation without permission.
                </div>
            </section>
            <section class="section">
                <div class="fw-bold">
                    Can I include both English and Chinese in my company name?
                </div>
                <div>

                    Yes, you can register a name in English, Chinese, or both. However, the Chinese name must not be a
                    direct translation of the English name and only Traditional Chinese characters are accepted by the
                    Hong
                    Kong Companies Registry.
                </div>
            </section>
            <section class="section">
                <div class="fw-bold">
                    What should I do if my preferred company name is already taken?
                </div>
                <div>
                    It's advisable to have alternative names ready. You can prioritize your preferred names when filling
                    out this form, and we will register in order of preference. If all listed names are taken, you will
                    be contacted to provide additional names.
                </div>
            </section>
        </template>
    </StartCompany_template>
</template>
<script lang="ts" setup>
import StartCompany_template from '../StartCompany_template.vue';
import { useStartCompanyStore } from '../StartCompany_store';
import { useToast } from 'vue-toast-notification';
import api from '@/stores/Helpers/axios'
import { nameForm } from './formsStore/Name';
import { vMaska } from "maska"
import { ref, onMounted, watch, reactive, watchEffect } from 'vue'

const toast = useToast()
const startCompanyStore = useStartCompanyStore()

const form: any = nameForm()
let formId = <any>ref('')

onMounted(() => {
    form.updateFields(startCompanyStore.companyInProgress)
})

watch(() => form, () => { form.saveToLocalStorage() }, { deep: true })

function addForm() {
    for (var field of ['isSecond', 'isThird', 'isForth', 'isFifth']) {
        if (!form[field]) {
            form[field] = true
            return;
        }
    }
}

watchEffect(() => {
    if (form.choice_level1_chn_name == '') {
        form.errors.choice_level1_chn_name = ''
        delete form.errors.choice_level1_chn_name
    }
    if (form.choice_level2_chn_name == '') {
        form.errors.choice_level2_chn_name = null
        delete form.errors.choice_level2_chn_name
    }
    if (form.choice_level3_chn_name == '') {
        form.errors.choice_level3_chn_name = null
        delete form.errors.choice_level3_chn_name
    }
    if (form.choice_level4_chn_name == '') {
        form.errors.choice_level4_chn_name = ''
        delete form.errors.choice_level4_chn_name
    }
    if (form.choice_level5_chn_name == '') {
        form.errors.choice_level5_chn_name = ''
        delete form.errors.choice_level5_chn_name
    }
})

function removeForm(field: any) {
    form[field] = false
    if (field == 'isSecond') {
        form.resetField('choice_level2_eng_name')
        form.resetField('choice_level2_chn_name')
        delete form.errors.choice_level2_eng_name
        delete form.errors.choice_level2_chn_name
    }
    if (field == 'isThird') {
        form.resetField('choice_level3_eng_name')
        form.resetField('choice_level3_chn_name')
        delete form.errors.choice_level3_eng_name
        delete form.errors.choice_level3_chn_name
    }
    if (field == 'isForth') {
        form.resetField('choice_level4_eng_name')
        form.resetField('choice_level4_chn_name')
        delete form.errors.choice_level4_eng_name
        delete form.errors.choice_level4_chn_name
    }
    if (field == 'isFifth') {
        form.resetField('choice_level5_eng_name')
        form.resetField('choice_level5_chn_name')
        delete form.errors.choice_level5_eng_name
        delete form.errors.choice_level5_chn_name
    }
}



const manualErrors = reactive({
    choice_level1_chn_name: '',
    choice_level2_chn_name: '',
    choice_level3_chn_name: '',
    choice_level4_chn_name: '',
    choice_level5_chn_name: '',
})
watch(() => [form.choice_level1_chn_name, form.choice_level2_chn_name, form.choice_level3_chn_name, form.choice_level4_chn_name, form.choice_level5_chn_name], () => {

    manualErrors.choice_level1_chn_name = form.choice_level1_chn_name && !form.chineseCheck(form.choice_level1_chn_name) ? 'Please input only Chinese characters' : ''
    manualErrors.choice_level2_chn_name = form.choice_level2_chn_name && !form.chineseCheck(form.choice_level2_chn_name) ? 'Please input only Chinese characters' : ''
    manualErrors.choice_level3_chn_name = form.choice_level3_chn_name && !form.chineseCheck(form.choice_level3_chn_name) ? 'Please input only Chinese characters' : ''
    manualErrors.choice_level4_chn_name = form.choice_level4_chn_name && !form.chineseCheck(form.choice_level4_chn_name) ? 'Please input only Chinese characters' : ''
    manualErrors.choice_level5_chn_name = form.choice_level5_chn_name && !form.chineseCheck(form.choice_level5_chn_name) ? 'Please input only Chinese characters' : ''
})



function moveBack() {
    startCompanyStore.switchStage('-')
}

function saveAndContinue() {

    if (!form.choice_level1_eng_name && !form.choice_level1_chn_name) {
        toast.error("Please complete Primary choice names", { position: 'top-right' });
        return;
    }

    if (form.isSecond && (!form.choice_level2_eng_name && !form.choice_level2_chn_name)) {
        toast.error("Please complete secondary choice names", { position: 'top-right' });
        return;
    }

    if (form.isThird && (!form.choice_level3_eng_name && !form.choice_level3_chn_name)) {
        toast.error("Please complete third choice names", { position: 'top-right' });
        return;
    }

    if (form.isForth && (!form.choice_level4_eng_name && !form.choice_level4_chn_name)) {
        toast.error("Please complete fourth choice names", { position: 'top-right' });
        return;
    }

    if (form.isFifth && (!form.choice_level5_eng_name && !form.choice_level5_chn_name)) {
        toast.error("Please complete fifth choice names", { position: 'top-right' });
        return;
    }

    console.log(form.errors)
    if (Object.keys(form.errors).length > 0) {
        toast.error("Some fields still have errors", { position: 'top-right' });
        return;
    }

    if (manualErrors.choice_level1_chn_name || manualErrors.choice_level2_chn_name || manualErrors.choice_level3_chn_name ||
        manualErrors.choice_level4_chn_name || manualErrors.choice_level5_chn_name
    ) {
        toast.default("Some fields still have errors", { position: 'top-right' });
        return;
    }

    const formData = new FormData()

    formData.append('company_id', startCompanyStore.companyInProgress?.id ?? '')

    formData.append('names[0][eng_name]', form.choice_level1_eng_name)
    formData.append('names[0][prefix]', form.choice_level1_prefix)
    formData.append('names[0][chn_name]', form.choice_level1_chn_name)
    formData.append('names[0][chn_prefix]', form.choice_level1_chn_prefix)
    formData.append('names[0][choice_level]', '1')


    if (form.isSecond) {
        formData.append('names[1][eng_name]', form.choice_level2_eng_name)
        formData.append('names[1][prefix]', form.choice_level2_prefix)
        formData.append('names[1][chn_name]', form.choice_level2_chn_name)
        formData.append('names[1][chn_prefix]', form.choice_level2_chn_prefix)
        formData.append('names[1][choice_level]', '2')
    }

    if (form.isThird) {
        formData.append('names[2][eng_name]', form.choice_level3_eng_name)
        formData.append('names[2][prefix]', form.choice_level3_prefix)
        formData.append('names[2][chn_name]', form.choice_level3_chn_name)
        formData.append('names[2][chn_prefix]', form.choice_level3_chn_prefix)
        formData.append('names[2][choice_level]', '3')
    }

    if (form.isForth) {
        formData.append('names[3][eng_name]', form.choice_level4_eng_name)
        formData.append('names[3][prefix]', form.choice_level4_prefix)
        formData.append('names[3][chn_name]', form.choice_level4_chn_name)
        formData.append('names[3][chn_prefix]', form.choice_level4_chn_prefix)
        formData.append('names[3][choice_level]', '4')
    }

    if (form.isFifth) {
        formData.append('names[4][eng_name]', form.choice_level5_eng_name)
        formData.append('names[4][prefix]', form.choice_level5_prefix)
        formData.append('names[4][chn_name]', form.choice_level5_chn_name)
        formData.append('names[4][chn_prefix]', form.choice_level5_chn_prefix)
        formData.append('names[4][choice_level]', '5')
    }

    form.isSaving = true
    saveFromToApi(formData)
}

function checkFields(level: any, msg?: string) {
    const message = msg ? 'Please fill Primary Choice Names' : 'Please complete fields'
    if (!level + '_eng_name' || !level + '_chn_name') {
        toast.default(message, { position: 'top-right' });
        return true;
    }
    return false;
}

async function saveFromToApi(formData: FormData) {
    try {
        await api.registerCompany(formData)
        // console.log(formData)
        toast.success('Data Saved Successfully', { position: 'top-right' });
        form.isSaving = false
        startCompanyStore.switchStage('+')
        startCompanyStore.getCompanyInProgress()

    } catch (error) {
        toast.error('Sorry, Something went wrong', { position: 'top-right' });
        form.isSaving = false
    }
}

</script>
<style lang="css" scoped></style>
