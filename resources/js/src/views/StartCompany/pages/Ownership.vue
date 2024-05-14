<template>
    <StartCompany_template>
        <template #main>
            <section class="section">
                <div class="fw-bolder fs-5">Ownership</div>
            </section>

            <section class="section">
                <div class="row g-3 mt-1">
                    <div class="col-md-6 col-lg-3">
                        <label class="form-labe fw-bold small">Class of shares: <span class="text-danger"> * </span>
                        </label>
                        <div class="col-md-12">
                            <select v-model="form.share_type_id" class="form-select">
                                <option selected value="1">Ordinary</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <label class="form-labe fw-bold small">Total no of shares: <span class="text-danger"> *
                            </span></label>
                        <div class="col-md-12">
                            <input v-model="form.no_of_share" required placeholder="0" class="form-control" v-maska
                                data-maska="9,99#" data-maska-tokens="9:[0-9]:repeated" data-maska-reversed>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-3">
                        <label class="form-labe fw-bold small">Total amount paid:<span class="text-danger"> *
                            </span></label>
                        <div class="col-md-12">
                            <input v-model="form.total_amount_paid" placeholder="0.00" class="form-control" v-maska
                                data-maska="9,99#" data-maska-tokens="9:[0-9]:repeated" data-maska-reversed>
                            <span class="small text-danger">{{ errors.total }}</span>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-3">
                        <label class="form-labe fw-bold small">Currency: <span class="text-danger"> * </span></label>
                        <div class="col-md-12">
                            <v-select v-model="form.currency" :clearable="false"
                                :options="startCompanyStore.currencies" />
                        </div>
                    </div>
                </div>
            </section>

            <div class="my-4">Split the company shares between founders:</div>

            <div class="card border-0 shadow-sm mb-3">
                <div class="card-body">
                    <div v-if="!form.shareHolders">
                        <button class="btn btn-link" @click="startCompanyStore.switchStage('-')">
                            <i class="bi bi-plus"></i>Please add Shareholders.
                        </button>
                    </div>

                    <ul v-else class="list-group list-group-flush">
                        <li v-for="(founder, index) in form.shareHolders" :key="founder"
                            class="list-group-item text-capitalize">
                            <i class="bi bi-person-circle text-muted me-2"></i> {{ founder.entity_name }} <span
                                class="text-danger"> * </span>
                            <span class="float-end">
                                <input v-model="founder.own_share" type="text"
                                    class="form-control form-control-sm text-end" placeholder="0" v-maska
                                    data-maska="9,99#" data-maska-tokens="9:[0-9]:repeated" data-maska-reversed>
                            </span>
                        </li>

                        <li class="list-group-item">
                            <span v-if="form.total_amount_paid && sumEqualToTotal"
                                class="fw-bold float-end text-success">
                                100% <i class="bi bi-check-circle"></i>
                            </span>

                            <span v-else class=" float-end text-danger small">
                                {{ sumError }}
                                <i class="bi bi-exclamation-circle"></i>
                            </span>


                        </li>
                    </ul>
                </div>
            </div>


            <section class="section" v-if="form.no_of_share && sumEqualToTotal">
                <div class="fw-bolder fs-6">Ownership Summary</div>
                <span>Here is how much founders own</span>
                <div class="card mt-1 rounded-0 border-0 bg-light">
                    <div class="card-body bg-transparent">
                        <div class="table-responsive">
                            <table class="table ">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Split</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="founder in summaryArray" :key="founder">
                                        <td class="text-capitalize">
                                            <i class="bi bi-circle-fill text-muted me-2"></i> {{ founder.name }}
                                        </td>
                                        <td>{{ founder.share_percentage }}%</td>
                                    </tr>

                                    <tr class="">
                                        <td></td>
                                        <td class="fw-bold  text-success">100%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>

            </section>


            <div class="movement-buttons mt-5 mb-4">
                <button @click="moveBack" class="btn btn-outline-dark me-3">
                    <i class="bi bi-arrow-left"></i> Back
                </button>
                <button :disabled="!sumEqualToTotal || fieldsHasErrors" v-if="!form.isSaving" @click="saveAndContinue"
                    class="btn btn-primary">
                    Save Record <i class="bi bi-arrow-right"></i>
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
                    What are 'Class of Shares', and how do

                    I choose the right one?
                </div>
                <div>
                    'Class of Shares' refers to the category of stock you are allocating. 'Ordinary' shares are common
                    stock with no special rights or restrictions. This is the most common and most straight forward to
                    begin with.
                </div>
            </section>
            <section class="section">
                <div class="fw-bold">
                    What if the ownership percentages among founders don’t add up to 100%?
                </div>
                <div>
                    The total ownership must equal 100%. If your allocations don’t sum up to 100%, you'll need to adjust
                    the percentages until they do. The form will indicate any discrepancies with a visual cue.
                </div>
            </section>

        </template>
    </StartCompany_template>
</template>
<script lang="ts" setup>
import { computed, onMounted, watch, watchEffect, reactive, ref } from 'vue';
import StartCompany_template from '../StartCompany_template.vue';
import { useStartCompanyStore } from '../StartCompany_store';
import api from '@/stores/Helpers/axios'
import { useToast } from 'vue-toast-notification';
import { vMaska } from "maska"
import { ownershipForm } from './formsStore/Ownership'

const toast = useToast()
const startCompanyStore = useStartCompanyStore()

const form = ownershipForm()

const errors: any = reactive({
    total: ''
})

let sumError: any = ref('Sum of entries must be equal to Total Amount Paid');

const fieldsHasErrors = computed(() => {
    return Object.keys(errors).some(el => errors[el] !== '');
});

function dissolveMaska(str: string) {
    return parseInt(str.replace(/,/g, ''))
}

// watch(() => form.no_of_share, () => {
//     form.total_amount_paid = form.no_of_share
// })

watchEffect(() => {
    // if (dissolveMaska(form.total_amount_paid) > dissolveMaska(form.no_of_share))
    // errors.total = 'Must not be greater than no. of shares'
    errors.total = '';
})



onMounted(() => {
    // check for atleast one Individual
    const entity = startCompanyStore.companyInProgress?.company_entity ?? [];
    const individual = entity.find((x: any) => x.entity_capacity_id.includes(2) && x.entity_type_id == 1)
    const Corporate = entity.find((x: any) => x.entity_capacity_id.includes(1))
    if (!Corporate || !individual) {
        toast.error('You need to add at least one <br> Shareholder    and one Individual <br> Director to proceed', { position: 'top-right' })
        startCompanyStore.switchStage('-')
    }

    retrieveShareHolders()

    autoFillForm()
})

function autoFillForm() {
    form.no_of_share = startCompanyStore.companyInProgress?.shares[0]?.no_of_share ?? ''
    form.currency = startCompanyStore.companyInProgress?.shares[0]?.currency ?? ''
    const totalAmount = startCompanyStore.companyInProgress?.shares[0]?.total_amount_paid ?? ''
    form.total_amount_paid = totalAmount ? (parseFloat(totalAmount)).toFixed(0) : ''
}


async function retrieveShareHolders() {
    try {
        const resp = await api.retrieveShaheolders(startCompanyStore.companyInProgress?.id)

        const entity = resp.data.data;
        // console.log(entity)
        const arrayOfFounders: any[] = []
        if (entity.length) {
            entity.forEach((el: any) => {
                console.log(el)

                const obj = el.individual || el.corporate;
                if (obj) {
                    obj.entity_name = el.entity_type_id == 1 ?
                        `${obj.first_name} ${obj.last_name}`
                        : `${obj.company_name}`
                    obj.own_share = el.share?.total_amount ?? 0;
                    arrayOfFounders.push(obj);
                }
            });
        }

        form.shareHolders = arrayOfFounders

    } catch (error) {
        // console.log(error);

    }
}

const sumEqualToTotal = computed(() => {
    let total = 0;
    if (form.shareHolders.length) {
        for (const obj of form.shareHolders) {
            if (obj.own_share) {
                total += dissolveMaska(obj.own_share);
            }
            if (obj.own_share <= 0) {
                sumError = "Shareholder must not have zero(0) shares";
                return false;
            } else {
                sumError = "Sum of entries must be equal to Total Amount Paid";
            }

        }

    }



    const totalInputed = form.no_of_share ? dissolveMaska(form.no_of_share) : 0
    return total == totalInputed ? true : false
})

const summaryArray = computed(() => {
    const array: any[] = []
    if (form.shareHolders.length && form.total_amount_paid) {
        form.shareHolders.forEach((x: any) => {
            const obj = {
                name: x.entity_name,
                own_share: x.own_share,
                company_entity_id: x.company_entity_id,
                share_percentage: ((dissolveMaska(x.own_share) / dissolveMaska(form.no_of_share)) * 100).toFixed(2)
            }
            array.push(obj)
        })
    }

    return array;
})


function moveBack() {
    startCompanyStore.switchStage('-')
}

function saveAndContinue() {

    if (!startCompanyStore.companyInProgress?.id) {
        toast.default('You have not registered any company name', { position: 'top-right' })
        startCompanyStore.switchStage('-', 2)
        return;
    }

    if (!form.currency || !form.total_amount_paid || !form.no_of_share) {
        toast.default('Please complete fields', { position: 'top-right' })
        return;
    }

    const formData = new FormData;
    formData.append('company_id', startCompanyStore.companyInProgress.id)
    formData.append('currency', form.currency)
    formData.append('share_type_id', form.share_type_id)
    formData.append('total_amount_paid', `${dissolveMaska(form.total_amount_paid)}`)
    formData.append('no_of_share', form.no_of_share.replace(/,/g, ''))

    summaryArray.value.forEach((entity, index) => {

        formData.append(`company_entity[${index}][share_percentage]`, entity.share_percentage);
        formData.append(`company_entity[${index}][total_amount]`, `${dissolveMaska(entity.own_share)}`);
        formData.append(`company_entity[${index}][company_entity_id]`, entity.company_entity_id);
    });

    form.isSaving = true
    saveFromToApi(formData)
}

async function saveFromToApi(formData: FormData) {
    try {
        await api.companyShares(formData)

        toast.success('Data Saved Successfully', { position: 'top-right' });
        form.isSaving = false
        startCompanyStore.switchStage('+')
        startCompanyStore.getCompanyInProgress()

    } catch (error) {
        toast.error('Sorry, Something went wrong', { position: 'top-right' });
        form.isSaving = false
        // console.log(error);

    }
}

</script>
<style lang="css" scoped>
td,
th {
    background: transparent !important;
}

th {
    font-weight: bold;
}

.form-labe {
    font-size: 11px;
}
</style>
