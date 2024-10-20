<template>
    <div class="container">
        <h5 class="fw-bold page-title mb-4"> Billing</h5>
        <div class="row g-4">

            <div class="col-lg-12">

                <div class="card shadow-sm py-3">
                    <div class="card-body">
                        <div class="row g-3">

                            <div class="col-lg-3 col-md-6">
                                <div class="card  h-100 border-grey">
                                    <div class="card-body">
                                        <div class="small text-grey fw-bold">Total paid Invoices
                                            ({{ invoice.paid_invoice ?? '0' }})
                                        </div>
                                        <div class="fs-4 text-primary fw-bold ">
                                            ${{ useFxn.addCommas(invoice.paid_invoice_amount) ?? '0' }}</div>
                                        <div class="small text-grey fw-bold">Total in Last 31 Days</div>
                                        <div class=" fw-bold">$0</div>

                                    </div>
                                    <div class="card-footer border-0 bg-transparent">
                                        <div v-if="refresh.paid"
                                            class="spinner-border text-primary spinner-border-sm float-end"
                                            role="status">
                                            <span class="visually-hidden">Loading...</span>
                                        </div>

                                        <button v-else @click="getInvoicesRefresh('paid')"
                                            class="btn btn-link text-decoration-none btn-sm p-0 float-end">
                                            <i class="bi bi-arrow-clockwise"></i>
                                            Refresh
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <div class="card h-100 border-grey">
                                    <div class="card-body">
                                        <div class="small text-grey fw-bold">Total Unpaid Invoice
                                            ({{ invoice.unpaid_invoice ?? '0' }})
                                        </div>
                                        <div class="fs-4 text-primary fw-bold ">
                                            ${{ useFxn.addCommas(invoice.unpaid_invoice_amount) ?? '0' }}
                                        </div>
                                        <div class="small text-grey fw-bold">Overdue invoice
                                            ({{ invoice.overdue_invoices ?? '0' }})
                                        </div>
                                        <div class=" fw-bold">${{ useFxn.addCommas(invoice.overdue_invoices_amount) ??
                                            '0' }}
                                        </div>

                                    </div>
                                    <div class="card-footer border-0 bg-transparent">
                                        <div v-if="refresh.unpaid"
                                            class="spinner-border text-primary spinner-border-sm float-end"
                                            role="status">
                                            <span class="visually-hidden">Loading...</span>
                                        </div>
                                        <button v-else @click="getInvoicesRefresh('unpaid')"
                                            class="btn btn-link text-decoration-none btn-sm p-0 float-end"> <i
                                                class="bi bi-arrow-clockwise"></i>
                                            Refresh</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <div class="card h-100" style="border: 1px blue solid !important;">
                                    <div class="card-body">
                                        <div class="  fw-bold">Plans Subscription</div>

                                        <ul class="list-group list-group-flush xsmall">
                                            <li class="list-group-item p-0 border-0">
                                                <strong class="text-muted">Name:</strong>
                                                <span class="float-end">{{ plans.data?.plan ?? '-' }}</span>
                                            </li>
                                            <li class="list-group-item p-0 border-0">
                                                <strong class="text-muted">Amount:</strong>
                                                <span class="float-end">
                                                    {{ plans.data?.amount ? useFxn.addCommas(plans.data.amount) : -'' }}
                                                </span>
                                            </li>
                                            <li class="list-group-item p-0 border-0">
                                                <strong class="text-muted">Duration:</strong>
                                                <span class="float-end">{{ plans.data?.recurring ?? '-' }}</span>
                                            </li>
                                            <li class="list-group-item p-0 border-0">
                                                <strong class="text-muted">Currency:</strong>
                                                <span class="float-end">{{ plans.data?.currency ?? '-' }}</span>
                                            </li>
                                        </ul>


                                    </div>
                                    <div class="card-footer border-0 bg-transparent">
                                        <button v-show="!plans.isLoading" @click="planModal('create')"
                                            v-if="!plans.data?.stripe_product_id"
                                            class="btn btn-link text-decoration-none p-0 btn-sm float-end">
                                            <i class="bi bi-plus-lg"></i> Create plan</button>
                                        <button v-show="!plans.isLoading" @click="planModal('update')" v-else
                                            class="btn btn-link text-decoration-none p-0 btn-sm float-end">
                                            <i class="bi bi-pencil"></i> Update plan</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <div class="card h-100" style="border: 1px blue solid !important;">
                                    <div class="card-body">
                                        <div class="  fw-bold">Subscriptions</div>
                                        <ul class="list-group list-group-flush xsmall">
                                            <li class="list-group-item p-0 border-0">
                                                <strong class="text-muted">Active Subcriptions:</strong>
                                                <span class="float-end badge bg-success-subtle text-dark">{{
                                                    invoice.active_subscriptions }}</span>
                                            </li>
                                            <li class="list-group-item p-0 border-0">
                                                <strong class="text-muted">Cancelled subscriptions:</strong>
                                                <span class="float-end badge bg-danger-subtle text-dark">{{
                                                    invoice.cancelled_subscriptions }}</span>
                                            </li>

                                        </ul>
                                    </div>
                                    <div class="card-footer border-0 bg-transparent">
                                        <div v-if="refresh.subscribers"
                                            class="spinner-border text-primary spinner-border-sm float-end"
                                            role="status">
                                            <span class="visually-hidden">Loading...</span>
                                        </div>
                                        <button v-else @click="getInvoicesRefresh('subscribers')"
                                            class="btn btn-link text-decoration-none btn-sm p-0 float-end"> <i
                                                class="bi bi-arrow-clockwise"></i>
                                            Refresh</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="col-12 mt-4 ">
                <div class="card shadow-sm  min-vh-100">
                    <div class="card-body">
                        <div class="card-header fw-bold bg-transparent border-0 px-0 py-3">
                            Billing Table
                        </div>
                        <isLoadingComponent v-if="invoice.isLoading" />
                        <EasyDataTable v-else class="easy-data-table" show-index :headers="paymentHistoryHeader"
                            :items="invoice.billingsTable" buttons-pagination
                            v-model:server-options="serverOptionsInvoices" :server-items-length="invoice.totalInvoices">

                            <template #header="header">
                                <span class="fw-bold text-muted">{{ header.text == '#' ? 'S/N' : header.text }}</span>
                            </template>

                            <template #item-status="item">
                                <span v-if="item.status == 'paid'" class="badge bg-success-subtle text-dark">
                                    {{ item.status }}
                                </span>

                                <span v-else class="badge bg-secondary-subtle text-dark">
                                    {{ item.status }}
                                </span>

                            </template>

                            <template #item-amount_due="item">
                                {{ useFxn.addCommas(item.amount_due) }}
                            </template>

                            <template #item-next_billing_cycle="item">
                                {{ useFxn.dateDisplay(item?.subscription?.next_billing_cycle) }}
                            </template>

                            <template #item-company_name="item">
                                {{ item?.subscription?.company_name }}
                            </template>


                            <template #item-due_date="item">
                                {{ useFxn.dateDisplay(item.due_date) }}
                            </template>

                            <template #item-last_payment_date="item">
                                {{ useFxn.dateDisplay(item.created_at) }}
                            </template>

                            <template #item-hosted_invoice_url="item">
                                <span class="text-nowrap" v-if="item.hosted_invoice_url">
                                    <a :href="item.hosted_invoice_url" target="_blank" style="text-decoration:none">
                                        <!-- <i class="bi bi-file-arrow-down-fill"></i> -->

                                        <strong> View Details</strong>
                                    </a>
                                </span>
                                <span v-else>-</span>
                            </template>
                        </EasyDataTable>
                    </div>
                </div>
            </div>

            <!-- <div class="col-12 mt-4 ">
                <div class="card shadow-sm  min-vh-100">
                    <div class="card-body">
                        <div class="card-header fw-bold bg-transparent border-0 px-0 py-3">
                            Payment History
                        </div>
                        <isLoadingComponent v-if="itemsLoading" />
                        <EasyDataTable v-else class="easy-data-table" show-index :headers="headers" :items="items"
                            buttons-pagination v-model:server-options="serverOptions" :server-items-length="total">

                            <template #header="header">
                                <span class="fw-bold text-muted">{{ header.text == '#' ? 'S/N' : header.text }}</span>
                            </template>

                            <template #item-name="item">
                                {{ computedUserName(item) }}
                            </template>

                            <template #item-names="item">
                                {{ computedCoyName(item) }}
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
            </div> -->
        </div>
    </div>

    <!-- plan modal -->

    <!-- Modal trigger button -->
    <button ref="modalOpen" class="d-none" type="button" data-bs-toggle="modal" data-bs-target="#planModal">

    </button>

    <!-- Modal Body -->
    <!-- if you want to close by clicking outside the modal, delete the last endpoint:data-bs-backdrop and data-bs-keyboard -->
    <div class="modal fade" id="planModal" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false"
        role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header text-capitalize border-0">
                    <h5 class="modal-title" id="modalTitleId">
                        {{ plans.action }} Plan
                    </h5>
                    <button ref="modalClose" type="button" class="btn-close" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row g-3">
                        <div :class="plans.action == 'create' ? 'col-lg-6' : 'col-lg-12'">
                            <div class="form-label">Name</div>
                            <input v-model="plans.formName" class="form-control" type="text">
                        </div>
                        <div v-if="plans.action == 'create'" class="col-lg-6">
                            <div class="form-label">Amount</div>
                            <input v-model="plans.formPrice" class="form-control" type="text" v-maska data-maska="9,99#"
                                data-maska-tokens="9:[0-9]:repeated" data-maska-reversed>
                        </div>

                        <div v-if="plans.action == 'create'" class="col-lg-6">
                            <div class="form-label">Duration</div>
                            <select v-model="plans.formInterval" class="form-select" name="" id="">
                                <option value="year" selected>Year</option>
                            </select>
                        </div>

                        <div v-if="plans.action == 'create'" class="col-lg-6">
                            <div class="form-label">Currency</div>
                            <select v-model="plans.formCurrency" class="form-select" name="" id="">
                                <option v-for="(currency, index) in JsonData.currencyCodes" :key="index"
                                    :value="currency">
                                    {{ currency }}
                                </option>
                            </select>
                        </div>

                    </div>
                </div>
                <div class="modal-footer border-0">
                    <!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Close
                    </button> -->
                    <button v-if="plans.isLoading" class="btn btn-primary" type="button" disabled>
                        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        Loading
                    </button>

                    <button @click="saveUpdatePlan" v-else type="button" class="btn btn-primary text-capitalize">
                        {{ plans.action }} plan
                    </button>
                </div>
            </div>
        </div>
    </div>



</template>
<script lang="ts" setup>
import { onMounted, reactive, ref, watch } from 'vue';
import type { Header, Item, ServerOptions } from "vue3-easy-data-table";
import api from '@/stores/Helpers/axios'
import { useAdminParamsStore } from './CompanyDetails/adminParamsStore';
import useFxn from '@/stores/Helpers/useFunctions';
import { useToast } from 'vue-toast-notification';
import { vMaska } from "maska"
import JsonData from '@/views/StartCompany/StartCompany_jsonData.json'
import { onBeforeRouteLeave } from 'vue-router';

const paramsStore = useAdminParamsStore()
const toast = useToast()

const companies = reactive<any>({
    list: [],
})
onMounted(() => {
    getPaymentHistoryItems()
    getInvoices()
    getPlans()
})
const computedCoyName = (coy: any) => {
    const id = coy.id
    let englishName = '';
    let chineseName = '';
    const coms = companies.list;
    coms.forEach((com: any) => {
        const company = com.company.names.find((x: any) => x.choice_level == 1);
        englishName = company?.eng_name ? company?.eng_name + ' ' + company?.eng_prefix : '';
        chineseName = company?.chn_name ? company?.chn_name + ' ' + company?.chn_prefix : ''
    })
    return `${englishName} ${chineseName}`;
}

const computedUserName = (coy: any) => {
    const id = coy.id
    let Name = '';
    const coms = companies.list;
    // console.log(coms)
    coms.forEach((com: any) => {
        Name = com.user.name;
    })
    // console.log(Name)
    return Name;
}
async function getPaymentHistoryItems() {
    try {
        const resp = await api.getAllBillings(paramsStore.currentCompanyId)
        const data = resp.data.data
        total.value = data.total
        items.value = data.data
        companies.list = data.data
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

const serverOptionsInvoices = ref<ServerOptions | any>({
    page: 1,
    rowsPerPage: 15,
    // sortType: 'desc',
    // sortBy: ''
});


const total = ref(0)
const items = ref([])
const itemsLoading = ref(true)
const headers = [
    { text: "COMPANY NAME", value: "email" },
    // { text: "REGISTERED DATE", value: "reg_date" },
    { text: "INVOICE NO", value: "invoice_no" },
    { text: "DATE ISSUED", value: "date_issued" },
    { text: "DATE PAID", value: "date_paid" },
    { text: "AMOUNT", value: "amount_paid" },
    { text: "PAYMENT METHOD", value: "payment_method" },
    { text: "STATUS", value: "status" },
];

watch(serverOptions, (value) => { getPaymentHistoryItems(); }, { deep: true });
watch(serverOptionsInvoices, (value) => { getInvoices(); }, { deep: true });

// invoices
const invoice = reactive<any>({
    isLoading: true,
    total_invoices: 0,
    total_invoice_amount: 0,
    unpaid_invoice: 0,
    unpaid_invoice_amount: 0,
    paid_invoice: 0,
    paid_invoice_amount: 0,
    overdue_invoices: 0,
    overdue_invoices_amount: 0,
    active_subscriptions: 0,
    cancelled_subscriptions: 0,
    invoice_paid_this_monthly: 0,
    invoice_unpaid_monthly_amount: 0,
    invoice_paid_monthly_amount: 0,
    invoice_unpaid_monthly: 0,
    billingsTable: [],
    totalInvoices: 0
})


async function getInvoices() {
    try {
        const { data } = await api.getInvoices()

        const invoiceObj = data.data?.subscription_summary;
        const invoices = data?.data?.invoices;
        invoice.billingsTable = invoices?.data ?? [];
        invoice.totalInvoices = invoices?.total ?? 0;

        invoice.total_invoices = invoiceObj?.total_invoices;
        invoice.total_invoice_amount = invoiceObj?.total_invoice_amount;
        invoice.unpaid_invoice = invoiceObj?.unpaid_invoice;
        invoice.unpaid_invoice_amount = invoiceObj?.unpaid_invoice_amount;
        invoice.paid_invoice = invoiceObj?.paid_invoice;
        invoice.paid_invoice_amount = invoiceObj?.paid_invoice_amount;
        invoice.overdue_invoices = invoiceObj?.overdue_invoices;
        invoice.overdue_invoices_amount = invoiceObj?.overdue_invoices_amount;
        invoice.active_subscriptions = invoiceObj?.active_subscriptions;
        invoice.cancelled_subscriptions = invoiceObj?.cancelled_subscriptions;
        invoice.isLoading = false
    } catch (error) {
        console.log(error);

    }
}

const refresh = reactive<any>({
    paid: false,
    unpaid: false,
    subscribers: false
})


async function getInvoicesRefresh(card: 'subscribers' | 'paid' | 'unpaid') {
    refresh[card] = true
    try {
        await getInvoices()
        toast.success('Invoice Updated', { position: 'top-right' })
        refresh[card] = false
    } catch (error) {
        toast.error('Error, Something went wrong', { position: 'top-right' })
        refresh[card] = false
    }
}



// Plans Card
const plans = reactive<{
    data: any,
    action: 'create' | 'update',
    isLoading: boolean,
    formName: string,
    formPrice: string,
    formInterval: string,
    formCurrency: string,
}>({
    data: null,
    action: 'create',
    isLoading: false,
    formName: '',
    formPrice: '',
    formInterval: 'year',
    formCurrency: 'USD',
})
const modalOpen = ref<any>(null)
const modalClose = ref<any>(null)

async function getPlans() {
    try {
        plans.isLoading = true
        const { data } = await api.getPlans()
        plans.data = data.data
        plans.isLoading = false
    }
    catch (error) {
        // 
    }
}


function planModal(action: 'create' | 'update') {
    plans.action = action
    modalOpen.value.click()
}

async function saveUpdatePlan() {
    const form = new FormData()
    plans.isLoading = true
    if (plans.action == 'create') {
        try {
            form.append('name', plans.formName)
            form.append('interval', plans.formInterval)
            form.append('currency', plans.formCurrency)
            form.append('price', plans.formPrice.replace(/,/g, ''))
            const resp = await api.createStripeProduct(form)
            toast.success('Plan Created', { position: 'top-right' })
            modalClose.value.click()
            plans.isLoading = false
            console.log(resp);
            getPlans()

        } catch (error) {
            // console.log(error);
            toast.error('Sorry something went wrong', { position: 'top-right' })
            modalClose.value.click()
            plans.isLoading = false

        }
    }
    else {
        try {
            form.append('name', plans.formName)
            form.append('stripe_product_id', plans?.data?.stripe_product_id) //prod_QmYaYdjTcgOOPt
            // form.append('stripe_product_id', 'prod_QmYaYdjTcgOOPt') //
            const resp = await api.updateStripeProduct(form)
            toast.success('Plan Updated', { position: 'top-right' })
            modalClose.value.click()
            plans.isLoading = false
            console.log(resp);
            getPlans()


        } catch (error) {
            // console.log(error);
            toast.error('Sorry something went wrong', { position: 'top-right' })
            modalClose.value.click()
            plans.isLoading = false
        }
    }
}



// payment History table
// const paymentHistoryLoading = ref()
const paymentHistoryHeader = [
    { text: "COMPANY NAME", value: "company_name" },
    { text: "SUBSCRIPTION STATUS", value: "reg_date" },
    { text: "BILLING CYCLE", value: "next_billing_cycle" },
    { text: "LAST PAYMENT DATE", value: "last_payment_date" },
    { text: "NEXT BILLING DATE", value: "due_date" },
    { text: "AMOUNT DUE", value: "amount_due" },
    { text: "PAYMENT STATUS", value: "status" },
    { text: "INVOICE", value: "hosted_invoice_url" },
];







onBeforeRouteLeave(() => {
    modalClose.value.click()
})






// manage/sync/invoices Payment History Table
// ...... 

</script>
<style lang="css" scoped>
.border-grey {
    border: 1px #8080802f solid !important;
}
</style>
