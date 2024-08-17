<template>
    <div class="container">
        <!-- <h5 class="fw-bold page-title mb-4"> Billings</h5> -->
        <div class="row g-4">

            <div class="col-lg-6 mb-4">
                <div class="card shadow-sm p- border-1 h-100">
                    <div class="card-body">
                        <div class="table-responsive">
                            <div class="fw-bold mb-2">Billing Plan</div>
                            <table class="table table-borderless table-sm ">
                                <tbody v-if="Subscription.plan_name">
                                    <tr class="">
                                        <td>Billing Plan:</td>
                                        <td class="">{{  Subscription.plan_name }}</td>
                                    </tr>
                                    <tr class="">
                                        <td>Billing Price:</td>
                                        <td class="">{{  Subscription.amount_paid }} HKD</td>
                                    </tr>
                                    <tr class="">
                                        <td>Renewal date:</td>
                                        <td class="">{{  Subscription.plan_name }}</td>
                                    </tr>
                                    <tr>
                                        <td> Duration</td>
                                        <td>{{Subscription.duration}}</td>
                                        </tr>


                                </tbody>
                                <tbody v-else>
                                    <tr>
                                        <td> No Billing plan information found</td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                    <!-- <div class="card-footer border-0 bg-transparent py-3">

                        <button type="button" class="float-end btn-outline-secondary btn btn-sm"> Renew Now</button>
                    </div> -->
                </div>
            </div>


             <div class="col-lg-6 mb-4">

                <div class="card shadow-sm p- border-1 h-100" >
                    <div class="card-body">
                        <div class="table-responsive">
                            <div class="fw-bold mb-2">Billing information</div>
                            <table class="table table-borderless table-sm" >
                                <tbody v-if="paymentData.card_no">
                                    <tr class="">
                                        <td>Payment method:</td>
                                        <td class=""><i class="bi bi-credit-card"></i> {{paymentData.card_name??'VISA'}} Credit Card </td>
                                    </tr>
                                    <tr class="">
                                        <td>Card Number:</td>
                                        <td class=""> **** **** ***** {{paymentData.card_no}} </td>
                                    </tr>
                                    <tr class="">
                                        <td>Card Holder Name:</td>
                                        <td class="">{{paymentData.name}}</td>
                                    </tr>
                                    <tr class="">
                                        <td>Card Holder Email:</td>
                                        <td class="">{{paymentData.email}}</td>
                                    </tr>
                                    <tr class="">
                                        <td>Expiry Date:</td>
                                        <td class="">{{paymentData.expiry}}</td>
                                    </tr>
                                </tbody>
                                <tbody v-else>
                                    <tr>
                                        <td> No Billing Information Found</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="card-footer border-0 bg-transparent py-3">

                        <!-- <button type="button" class="float-end btn-outline-secondary btn  btn-sm"> Update
                            Details</button> -->
                    </div>
                </div>
            </div> 

            <!-- <div class="col-lg-6 mb-4">
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
            </div> -->


            <div class="col-12 mt-4" >

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

                            <template #item-date_paid="item">
                                {{ useFxn.dateDisplay(item.date_paid) }}
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
    getPaymentInfo()
    getSubscription()
})

const paymentData = reactive<any>({
    card_name: '',
    card_no: '',
    country: '',
    expiry: '',
    email: '',
    name: ''

})

const Subscription = reactive<any>({
    plan_name: '',
    expiry_date: '',
    amount_paid: '',
    payment_id: '',
    duration: ''

})

async function getPaymentInfo()
{
    try{
        const resp = await api.getPaymentInfo()
        const data = resp.data
        paymentData.card_name = data.card_name
        paymentData.card_no = data.card_no
        paymentData.country = data.country
        paymentData.expiry = data.expiry
        paymentData.email = data.email
        paymentData.name = data.name
        // console.log(paymentData, 'payment Information Data')
    }catch(err)
    {

    }
}

async function getSubscription()
{
    try{
        const resp = await api.getUserSubscription()
        const data = resp.data;
        Subscription.plan_name = data.plans.plan,
        Subscription.expiry_date =data.expiry_date,
        Subscription.amount_paid = data.amount_paid,
        Subscription.payment_id =data.payment_id,
        Subscription.duration = data.plans.duration+' Days'
        console.log(data, 'getUserSubscription')
    }catch(err)
    {

    }
}
async function getItemsData() {
    try {
        const resp = await api.userBillings()
        const data = resp.data.data
        total.value = data.total
        items.value = data.data
        // console.log(data, 'billings')
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
    { text: "PAYMENT STATUS", value: "status" },
    { text: "PAYMENT REFERENCE", value: "payment_ref" },
    { text: "AMOUNT PAID", value: "amount" },
    { text: "PAYMENT ID", value: "payment_intent" },
    { text: "DATE", value: "date_paid" },
];

watch(serverOptions, (value) => { getItemsData(); }, { deep: true });

</script>
<style lang="css" scoped></style>