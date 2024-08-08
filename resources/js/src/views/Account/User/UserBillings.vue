<template>
    <div class="container">
        <!-- <h5 class="fw-bold page-title mb-4"> Billings</h5> -->
        <div class="row g-4">

            <div class="col-lg-6 mb-4">
                <div class="card shadow-sm p- border-1 h-100">
                    <div class="card-body">
                        <div class="table-responsive">
                            <div class="fw-bold mb-2">Subscription Plan</div>
                            <table class="table table-borderless table-sm ">
                                <tbody>
                                    <tr class="">
                                        <td>Subscription:</td>
                                        <td class="">Annual Plan</td>
                                    </tr>
                                    <tr class="">
                                        <td>Billing Price:</td>
                                        <td class="">5000HKD billed Annually</td>
                                    </tr>
                                    <tr class="">
                                        <td>Contact person:</td>
                                        <td class="">John Doe</td>
                                    </tr>
                                    <tr class="">
                                        <td>Renewal date:</td>
                                        <td class="">17 August 2024 (365 days left) </td>
                                    </tr>

                                </tbody>
                            </table>

                        </div>
                    </div>
                    <div class="card-footer border-0 bg-transparent py-3">

                        <button type="button" class="float-end btn-outline-secondary btn btn-sm"> Renew Now</button>
                    </div>
                </div>
            </div>


            <!-- <div class="col-lg-6 mb-4">

                <div class="card shadow-sm p- border-1 h-100">
                    <div class="card-body">
                        <div class="table-responsive">
                            <div class="fw-bold mb-2">Payment details</div>
                            <table class="table table-borderless table-sm">
                                <tbody>
                                    <tr class="">
                                        <td>Payment method:</td>
                                        <td class="">VISA Credit Card </td>
                                    </tr>
                                    <tr class="">
                                        <td>Card Number:</td>
                                        <td class=""> **** **** ***** 1890 </td>
                                    </tr>
                                    <tr class="">
                                        <td>Card Holder Name:</td>
                                        <td class="">Michael Ozoudeh</td>
                                    </tr>
                                    <tr class="">
                                        <td>Expiry Date:</td>
                                        <td class="">0/2025</td>
                                    </tr>

                                    <tr class="">
                                        <td>Upcoming bill:</td>
                                        <td class="">17 August 2024 </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="card-footer border-0 bg-transparent py-3">

                        <button type="button" class="float-end btn-outline-secondary btn  btn-sm"> Update
                            Details</button>
                    </div>
                </div>
            </div> -->

            <div class="col-lg-6 mb-4">
                <div class="card shadow-sm p- border-1 h-100">
                    <div class="card-body">
                        <div class="table-responsive">
                            <div class="fw-bold mb-2">Billing information</div>
                            <table class="table table-borderless table-sm">
                                <tbody>
                                    <tr class="">
                                        <td>Name:</td>
                                        <td class="">Joe Doe</td>
                                    </tr>
                                    <tr class="">
                                        <td>Billing address:</td>
                                        <td class="">ABS Tower format
                                            29 Des Street, Wadham
                                        </td>
                                    </tr>

                                    <tr class="">
                                        <td>State:</td>
                                        <td class="">
                                            D123 142 </td>
                                    </tr>
                                    <tr class="">
                                        <td>Country:</td>
                                        <td class="">
                                            United Kingdom </td>
                                    </tr>


                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="card-footer border-0 bg-transparent py-3">
                        <button type="button" class="float-end btn-outline-secondary btn  btn-sm"> Update
                            Details</button>

                    </div>
                </div>
            </div>


            <div class="col-12 mt-4">

                <div class="card ">
                    <div class="fw-bold mb-2 p-3">Billing History</div>
                    <div class="card-body">
                        <span class=" m-2 btn btn-outline-secondary btn-sm float-end"> Downlod Logs</span>
                        <isLoadingComponent v-if="itemsLoading" />
                        <EasyDataTable v-else class="easy-data-table" show-index :headers="headers" :items="items"
                            buttons-pagination v-model:server-options="serverOptions" :server-items-length="total">

                            <template #header="header">
                                <span class="fw-bold text-muted">{{ header.text == '#' ? 'S/N' : header.text }}</span>
                            </template>

                            <template #item-last_login="item">
                                {{ useFxn.dateDisplay(item.last_login) }}
                            </template>

                            <template #item-action="item">
                                <span class="dropdown">
                                    <span class=" cursor-pointer bell dropdown-toggle" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        <i class="bi bi-three-dots text-primary"></i>
                                        <div class="dropdown-menu dropdown-menu-start">
                                            <ul class="list-group list-group-flush  ">
                                                <li @click="" class="dropdown-item text-danger"
                                                    style="background-color: transparent !important;">
                                                    <i class="bi bi-trash3"></i> Delete
                                                </li>
                                            </ul>
                                        </div>
                                    </span>
                                </span>
                            </template>
                        </EasyDataTable>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { onMounted, reactive, ref, watch } from 'vue';
import type { Header, Item, ServerOptions } from "vue3-easy-data-table";
import api from '@/stores/Helpers/axios'
import { useParamsStore } from './CompanyDetails/paramsStore';
import useFxn from '@/stores/Helpers/useFunctions';

const paramsStore = useParamsStore()

onMounted(() => {
    getItemsData()
})

async function getItemsData() {
    try {
        const resp = await api.userBillings()
        const data = resp.data.data
        // total.value = data.total
        // items.value = data.data
        itemsLoading.value = false

    } catch (error) {
        console.log(error);

    }
}

const serverOptions = ref<ServerOptions | any>({
    page: 1,
    rowsPerPage: 15,
    // sortType: 'desc',
    // sortBy: ''
});

const total = ref(0)
const items = ref([])
const itemsLoading = ref(true)
const headers = [
    // { text: "NAME", value: "name" },
    // { text: "COMPANY NAME", value: "email" },
    // { text: "REGISTERED DATE", value: "reg_date" },
    { text: "DATE", value: "date_paid" },
    { text: "PAYMENT STATUS", value: "payment_status" },
    { text: "PAYMENT REFERENCE", value: "reference" },
    { text: "AMOUNT PAID", value: "amount_paid" },
    { text: "PAYMENT ID", value: "payment_id" },
];

watch(serverOptions, (value) => { getItemsData(); }, { deep: true });

</script>
<style lang="css" scoped></style>