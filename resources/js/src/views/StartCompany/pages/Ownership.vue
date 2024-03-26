<template>
    <StartCompany_template>
        <template #main>
            <section>
                <div class="fw-bolder fs-5">Ownership</div>
            </section>

            <section>
                <div class="row g-3 mt-1">
                    <div class="col-md-6 col-lg-4">
                        <label class="form-labe fw-bold small">Class of shares:</label>
                        <div class="col-md-12">
                            <select v-model="form.share_type_id" class="form-select">
                                <option selected value="1">Ordinary</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <label class="form-labe fw-bold small">Total no of shares:</label>
                        <div class="col-md-12">
                            <input v-model="form.no_of_share" placeholder="0" class="form-control" v-maska
                                data-maska="9,99#" data-maska-tokens="9:[0-9]:repeated" data-maska-reversed>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-4">
                        <label class="form-labe fw-bold small">Total amount paid-off:</label>
                        <div class="col-md-12">
                            <input v-model="form.total_amount_paid" placeholder="0.00" class="form-control" v-maska
                                data-maska="9,99#.##" data-maska-tokens="9:[0-9]:repeated" data-maska-reversed>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <label class="form-labe fw-bold small">Currency:</label>
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
                            <i class="bi bi-circle-fill text-muted me-2"></i> {{ founder.entity_name }}
                            <span class="float-end">
                                <input v-model="founder.own_share" type="text"
                                    class="form-control form-control-sm text-end" placeholder="0.00" v-maska
                                    data-maska="9,99#.##" data-maska-tokens="9:[0-9]:repeated" data-maska-reversed>
                            </span>
                        </li>

                        <li class="list-group-item">
                            <span v-if="form.total_amount_paid && sumEqualToTotal"
                                class="fw-bold float-end text-success">
                                100% <i class="bi bi-check-circle"></i>
                            </span>

                            <span v-else class=" float-end text-danger small">
                                Sum of entries must be equal to Total Amount Paid
                                <i class="bi bi-exclamation-circle"></i>
                            </span>


                        </li>
                    </ul>
                </div>
            </div>


            <section v-if="form.total_amount_paid && sumEqualToTotal">
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
                                        <td class="fw-bold">100%</td>
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
                <button :disabled="!sumEqualToTotal" v-if="!form.isSaving" @click="saveAndContinue"
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
            <section>
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
            <section>
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
import { computed, onMounted, ref } from 'vue';
import StartCompany_template from '../StartCompany_template.vue';
import { useStartCompanyStore } from '../StartCompany_store';
import api from '@/stores/Helpers/axios'
import { useToast } from 'vue-toast-notification';
import { vMaska } from "maska"
import { ownershipForm } from './formsStore/Ownership'

import useFxn from '@/stores/Helpers/useFunctions';

const toast = useToast()
const startCompanyStore = useStartCompanyStore()

const form = ownershipForm()

function dissolveMaska(str: string) {
    return parseFloat(str.replace(/,/g, ''))
}

onMounted(() => {
    // check for atleast one Individual
    const entity = startCompanyStore.companyInProgress?.company_entity ?? [];
    const individual = entity.find((x: any) => x.entity_type_id == 1)
    if (!entity.length || !individual) {
        toast.error('You need to add at least one Individual Entity', { position: 'top-right' })
        startCompanyStore.switchStage('-')
    }

    retrieveShareHolders()

    autoFillForm()
})

function autoFillForm() {
    form.no_of_share = startCompanyStore.companyInProgress?.shares[0]?.no_of_share ?? ''
    form.currency = startCompanyStore.companyInProgress?.shares[0]?.currency ?? ''
    const totalAmount = startCompanyStore.companyInProgress?.shares[0]?.total_amount_paid ?? ''
    form.total_amount_paid = totalAmount ? (parseFloat(totalAmount)).toFixed(2) : ''
}


async function retrieveShareHolders() {
    try {
        const resp = await api.retrieveShaheolders()

        const entity = resp.data.data;
        const arrayOfFounders: any[] = []
        if (entity.length) {
            entity.forEach((el: any) => {
                const obj = el.individual || el.corporate;
                if (obj) {
                    obj.entity_name = el.entity_type_id == 1 ?
                        `${obj.first_name} ${obj.last_name}`
                        : `${obj.company_name}`
                    obj.own_share = 0;
                    arrayOfFounders.push(obj);
                }
            });
        }

        form.shareHolders = arrayOfFounders

    } catch (error) {
        console.log(error);

    }
}

const sumEqualToTotal = computed(() => {
    let total = 0;
    if (form.shareHolders.length) {
        for (const obj of form.shareHolders) {
            if (obj.own_share) {
                total += dissolveMaska(obj.own_share);
            }
        }
    }

    const totalInputed = form.total_amount_paid ? dissolveMaska(form.total_amount_paid) : 0

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
                share_percentage: ((dissolveMaska(x.own_share) / dissolveMaska(form.total_amount_paid)) * 100).toFixed(2)
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
        formData.append(`company_entity[${index}][total_amount]`, `${dissolveMaska(form.total_amount_paid)}`);
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
        // startCompanyStore.switchStage('+')
        startCompanyStore.getCompanyInProgress()

    } catch (error) {
        toast.error('Sorry, Something went wrong', { position: 'top-right' });
        form.isSaving = false
        console.log(error);

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
</style>
