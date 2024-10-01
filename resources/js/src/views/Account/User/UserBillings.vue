<template>
    <div class="container">
        <!-- <h5 class="fw-bold page-title mb-4"> Billings</h5> -->
        <div class="row g-4">

            <div class="col-lg-12">

                <div class="card shadow-sm py-3">
                    <div class="card-body">
                        <div class="row g-3">

                            <div class="col-lg-3 col-md-6">
                                <div class="card  h-100 border-grey">
                                    <div class="card-body">
                                        <div class="small text-grey fw-bold">Pending Renewal</div>
                                        <div class="fs-4 text-primary fw-bold ">0</div>
                                        <div class="small text-grey fw-bold">Next renewal date:</div>
                                        <div class=" fw-bold">
                                            {{ useFxn.dateDisplay(Subscription.expiry_date) }}</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <div class="card h-100 border-grey">
                                    <div class="card-body">
                                        <div class="small text-grey fw-bold">Total Payments made:</div>
                                        <div class="fs-4 text-primary fw-bold ">{{
                                            useFxn.addCommas(Subscription.amount_paid) }}</div>
                                        <div class="small text-grey fw-bold">last payment date:</div>
                                        <div class=" fw-bold">{{ useFxn.dateDisplay(Subscription.last_paid) }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <div class="card h-100" style="border: 1px blue solid !important;">
                                    <div class="card-body pb-1">
                                        <div class="  fw-bold">Card details</div>
                                        <div class=" text-grey fw-bold text-capitalize ">
                                            Name: <span>{{ paymentData.card_name ?? '***' }}</span>
                                        </div>
                                        <div class=" text-grey fw-bold ">
                                            Number: <span>**** **** ****{{ paymentData.card_no ?? '' }}</span>
                                        </div>
                                        <div class=" text-grey fw-bold ">
                                            Expiry: <span>{{ paymentData.expiry ?? '***' }}</span>
                                        </div>

                                    </div>
                                    <div class="card-footer pt-0   border-0 bg-transparent">
                                        <a @click="openCardDetailsModal" href="#" class="small fw-bold">
                                            <i class="bi bi-pencil"></i>
                                            Edit Card deatils
                                        </a>
                                    </div>
                                </div>

                            </div>
                            <div class="col-lg-3 col-md-6">
                                <div class="card h-100" style="border: 1px blue solid !important;">
                                    <div class="card-body pb-1">
                                        <div class="  fw-bold">Subscription Plans ({{
                                            SubscriptionPlan.subscription.length }}) </div>
                                        <ul class="list-group list-group-flush xsmall">
                                            <li class="list-group-item p-0 border-0">
                                                <strong class="text-muted">Active Suscriptions:</strong>
                                                <span class="float-end badge bg-success-subtle text-dark">{{
                                                    SubscriptionPlan.active_subs.length }}</span>
                                            </li>

                                            <li class="list-group-item p-0 border-0">
                                                <strong class="text-muted">Paused Suscriptions:</strong>
                                                <span class="float-end badge bg-danger-subtle text-dark">{{
                                                    SubscriptionPlan.cancelled_subs.length }}</span>
                                            </li>
                                        </ul>

                                    </div>
                                    <div class="card-footer pt-0  border-0 bg-transparent">
                                        <a href="#" @click="manageSubscriptionPlan" class=" small fw-bold"> <i
                                                class="bi bi-gear-wide"></i>
                                            Manage Subscription</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>



            <div class="col-12 mt-4">

                <div class="card ">
                    <div class="fw-bold mb-2 p-3">Billing History</div>
                    <div class="card-body">
                        <!-- <span class=" m-2 btn btn-outline-secondary btn-sm float-end"> Downlod Logs</span> -->
                        <!-- <isLoadingComponent v-if="billingsLoading" /> -->
                        <EasyDataTable :loading="billingsLoading" class="easy-data-table" show-index :headers="headers"
                            :items="billings" buttons-pagination v-model:server-options="serverOptions"
                            :server-items-length="totalBillings">

                            <template #header="header">
                                <span class="fw-bold text-muted">{{ header.text == '#' ? 'S/N' : header.text }}</span>
                            </template>

                            <template #item-reg_date="item">
                                <span v-if="item?.subscription?.status == 'active'"
                                    class="badge bg-success-subtle text-dark">
                                    {{ item?.subscription?.status }}
                                </span>

                                <span v-else class="badge bg-secondary-subtle text-dark">
                                    {{ item?.subscription?.status }}
                                </span>

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

                            <template #item-due_date="item">
                                {{ useFxn.dateDisplay(item.due_date) }}
                            </template>

                            <template #item-next_billing_cycle="item">
                                {{ useFxn.dateDisplay(item?.subscription?.next_billing_cycle) }}
                            </template>

                            <template #item-company_name="item">
                                {{ item?.subscription?.company_name }}
                            </template>

                            <template #item-last_payment_date="item">
                                {{ useFxn.dateDisplay(item.created_at) }}
                            </template>

                            <template #item-invoice_pdf="item">
                                <span class="text-nowrap" v-if="item.invoice_pdf">
                                    <a :href="item.invoice_pdf" target="_blank">
                                        <i class="bi bi-file-arrow-down-fill"></i>

                                        <strong> DOWNLOAD</strong>
                                    </a>
                                </span>
                                <span v-else>-</span>
                            </template>
                        </EasyDataTable>
                    </div>
                </div>
            </div>
        </div>
    </div>





    <!-- subcriptionModal -->
    <button ref="subscriptionPlanModalOpen" type="button" class="btn d-none" data-bs-toggle="modal"
        data-bs-target="#subscriptionModal">
    </button>
    <div class="modal fade" id="subscriptionModal" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false"
        role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered " role="document">
            <div class="modal-content">
                <div class="modal-header border-0">
                    <h5 class="modal-title" id="modalTitleId">
                        Subscription Plan
                    </h5>
                    <button ref="subscriptionPlanModalClose" type="button" class="btn-close" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row g-3">
                        <div class="col-12">
                            <div for="" class="form-label">Select Plan</div>
                            <select v-model="SubscriptionPlan.seletedSubPlan" class="form-select">
                                <option :class="{ 'text-success-emphasis': opt.status == 'active' }"
                                    v-for="opt in SubscriptionPlan.subscription" :value="opt" :key="opt.id">
                                    {{ opt.company_name ?? '-' }} (next billing cycle: {{
                                        useFxn.dateDisplay(opt.next_billing_cycle) }})
                                </option>

                            </select>
                        </div>

                    </div>
                </div>
                <div class="modal-footer border-0">
                    <button v-if="SubscriptionPlan.isSaving" class="btn btn-secondary" type="button" disabled>
                        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        Loading
                    </button>
                    <div v-else v-if="SubscriptionPlan.seletedSubPlan">
                        <button v-if="SubscriptionPlan.seletedSubPlan?.status == 'active'"
                            @click="updateSubscription('pause')" type="button" class="btn btn-danger">Pause
                            Subscription</button>

                        <button v-else @click="updateSubscription('resume')" type="button"
                            class="btn btn-success">Resume
                            Subscription</button>
                    </div>
                </div>
            </div>
        </div>
    </div>



    <button ref="cardDetailsModalOpen" type="button" class="btn d-none" data-bs-toggle="modal"
        data-bs-target="#cardDetailsModal">

    </button>
    <div class="modal fade" id="cardDetailsModal" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false"
        role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered " role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="modalTitleId">
                        Card Details
                    </h5>
                    <button ref="cardDetailsModalClose" type="button" class="btn-close" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                </div>
                <div class="modal-body">

                    <div v-if="intentHasError" class="text-center text-danger mt-5">
                        <strong>Error!</strong> loading payment information, please refresh page.
                        <hr>
                    </div>
                    <div v-else>
                        <div class="row justify-content-center">
                            <form id="payment-form">

                                <div id="payment-element">
                                </div>
                                <div v-if="clientSecretIsLoaded" class="form-check">
                                    <input class="form-check-input exemption" type="checkbox" value="" id="checker" />
                                    <label class="form-check-label" for="checker">
                                        <div class="fw-bol">
                                            Securely save my information for 1-click checkout
                                        </div>
                                        <!-- <span>
                                            Pay faster on Stripe Atlas and everywhere Link is accepted
                                        </span> -->
                                    </label>
                                </div>
                                <!-- <div v-if="clientSecretIsLoaded" class="small my-3">
                                    To pay your company formation fee, make sure you're not using an anonymous
                                    IP address or a VPN.
                                </div> -->

                                <!-- <div v-if="clientSecretIsLoaded" class="small mt-3">
                                    By confirming your payment, you allow Stripe Atlas to charge you for this payment
                                    and the future payments in accordance with their terms.
                                </div> -->
                                <div id="payment-message" class="hidden"></div>

                                <div class="col-12 mt-4">
                                    <button type="button" class="btn btn-secondary me-2" data-bs-dismiss="modal">
                                        Close
                                    </button>
                                    <button v-if="clientSecretIsLoaded" id="submit" class="btn btn-primary">
                                        <div class="spinner hidden" id="spinner"></div>
                                        <span id="button-text">Update Card Details</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">

                </div>
            </div>
        </div>
    </div>

</template>
<script lang="ts" setup>
import { onMounted, reactive, ref, watch, watchEffect } from 'vue';
import type { Header, Item, ServerOptions } from "vue3-easy-data-table";
import api from '@/stores/Helpers/axios'
import { useParamsStore } from './CompanyDetails/paramsStore';
import useFxn from '@/stores/Helpers/useFunctions';
import { onBeforeRouteLeave, useRoute } from 'vue-router';
import { useToast } from 'vue-toast-notification';

const paramsStore = useParamsStore()
const toast = useToast()
const route = useRoute()

onMounted(() => {
    getInvoices()
    getPaymentInfo()
    getSubscription()
    getSubscriptionPlan()
})

const paymentData = reactive({
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

const SubscriptionPlan = reactive<{
    active_subs: any[],
    cancelled_subs: any[],
    subscription: any[],
    isSaving: boolean,
    seletedSubPlan: any,
}>({
    active_subs: [],
    cancelled_subs: [],
    subscription: [],
    isSaving: false,
    seletedSubPlan: null,
})


async function getPaymentInfo() {
    try {
        const resp = await api.getPaymentInfo()
        // console.log(resp, 'payment Information Data')
        const data = resp.data
        paymentData.card_name = data.card_name
        paymentData.card_no = data.card_no
        paymentData.country = data.country
        paymentData.expiry = data.expiry
        paymentData.email = data.email
        paymentData.name = data.name
    } catch (err) {
        // console.log(err);

    }
}

async function getSubscription() {
    try {
        const resp = await api.getUserSubscription()
        // console.log(resp, 'getUserSubscription')
        const data = resp.data;
        Subscription.plan_name = data.plans.plan
        Subscription.expiry_date = data.expiry_date
        Subscription.amount_paid = data.amount_paid
        Subscription.payment_id = data.payment_id
        Subscription.duration = data.plans.duration + ' Days'
        Subscription.last_paid = data.plans.created_at
    } catch (err) {
        console.log(err);

    }
}



async function getSubscriptionPlan() {
    try {
        const resp = await api.getUserSubscriptionPlan()
        // console.log(resp, 'getUserSubscriptionPlan')
        const data = resp.data;
        SubscriptionPlan.active_subs = data?.active_subs ?? []
        SubscriptionPlan.cancelled_subs = data?.cancelled_subs ?? []
        SubscriptionPlan.subscription = data?.subscription ?? []
    } catch (err) {
        // console.log(err);
    }
}






// table
async function getInvoices() {
    try {
        const { data } = await api.userInvoices()
        const invoice = data?.invoice
        // console.log(data, 'Get User Invoice')
        totalBillings.value = invoice?.total ?? 0
        billings.value = invoice?.data ?? []
        billingsLoading.value = false

    } catch (error) {
        // console.log(error);
        billingsLoading.value = false
    }
}

const serverOptions = ref<ServerOptions | any>({
    page: 1,
    rowsPerPage: 15,
    // sortType: 'desc',
    // sortBy: ''
});

const totalBillings = ref(0)
const billings = ref([])
const billingsLoading = ref(true)
const headers = [
    { text: "COMPANY NAME", value: "company_name" },
    { text: "SUBSCRIPTION STATUS", value: "reg_date" },
    // { text: "BILLING CYCLE", value: "next_billing_cycle" },
    { text: "PAYMENT DATE", value: "last_payment_date" },
    { text: "NEXT BILLING DATE", value: "next_billing_cycle" },
    { text: "AMOUNT DUE", value: "amount_due" },
    { text: "PAYMENT STATUS", value: "status" },
    { text: "INVOICE", value: "hosted_invoice_url" },
];

watch(serverOptions, (value) => { getInvoices(); }, { deep: true });


// SubcriptionModal
const subscriptionPlanModalOpen = ref<any>(null)
const subscriptionPlanModalClose = ref<any>(null)

function manageSubscriptionPlan() {
    SubscriptionPlan.seletedSubPlan = null
    subscriptionPlanModalOpen.value.click()
}

async function updateSubscription(action: 'resume' | 'pause') {
    try {
        SubscriptionPlan.isSaving = true
        const resp = action == 'pause' ?
            await api.pauseSubscriptionPlan(SubscriptionPlan.seletedSubPlan.subscription_id)
            : await api.resumeSubscriptionPlan(SubscriptionPlan.seletedSubPlan.subscription_id)
        console.log(resp, 'ssssssss');
        toast.success('Subcription Plan updated', { position: 'top-right' })
        getSubscriptionPlan()
        subscriptionPlanModalClose.value.click()
        SubscriptionPlan.isSaving = false
    } catch (error) {
        toast.error('Sorry something went wrong', { position: 'top-right' })
        SubscriptionPlan.isSaving = false
    }
}




// card details
const cardDetailsModalOpen = ref<any>(null)
const cardDetailsModalClose = ref<any>(null)
async function openCardDetailsModal() {
    await getPaymentIntent()
    cardDetailsModalOpen.value.click()
}


const STRIPE_PUBLISHABLE_KEY = "pk_test_51P7LhqRxBSKsFyqbPdmjZpG4tFsnyLZEV6Tn38aic7H4oeWOSub5gTRnjF4vgdRbBJutMM0G3d2x3c9VFz2g1dkX00bPRK5pYT"; // Replace with your actual key
// @ts-ignore
const stripePromise = Stripe(STRIPE_PUBLISHABLE_KEY);
let clientSecret = ''
let elements: any = ''
const clientSecretIsLoaded = ref(false)
const intentHasError = ref(false)
async function getPaymentIntent() {
    try {
        intentHasError.value = false
        const { data } = await api.upateCardInfo()

        clientSecret = data.client_secret
        if (data?.client_secret)
            clientSecretIsLoaded.value = true
        elements = stripePromise.elements({ clientSecret });
        const paymentElementOptions = {
            layout: "tabs",
        };
        const paymentElement = elements.create("payment", paymentElementOptions);
        paymentElement.mount("#payment-element");
        document.querySelector("#payment-form")
        document.addEventListener("submit", handleSubmit);
    } catch (error) {
        console.log(error)
        intentHasError.value = true
    }
}

async function handleSubmit(event: any) {
    event.preventDefault();
    setLoading(true);
    const { error } = await stripePromise.confirmPayment({
        elements,
        confirmParams: {
            return_url: window.location.href //,
        },
    });


    if (error.type === "card_error" || error.type === "validation_error") {
        showMessage(error.message);
    } else {
        showMessage("An unexpected error occurred.");
    }

    setLoading(false);
}

// ------- UI helpers -------

function showMessage(messageText: any) {
    const messageContainer: any = document.querySelector("#payment-message");

    messageContainer.classList.remove("hidden");
    messageContainer.textContent = messageText;

    setTimeout(function () {
        messageContainer.classList.add("hidden");
        messageContainer.textContent = "";
    }, 4000);
}

// Show a spinner on payment submission
function setLoading(isLoading: any) {
    if (isLoading) {
        // Disable the button and show a spinner
        //@ts-ignore
        document.querySelector("#submit").disabled = true;
        //@ts-ignore
        document.querySelector("#spinner").classList.remove("hidden");
        //@ts-ignore
        document.querySelector("#button-text").classList.add("hidden");
    } else {
        //@ts-ignore
        document.querySelector("#submit").disabled = false;
        //@ts-ignore
        document.querySelector("#spinner").classList.add("hidden");
        //@ts-ignore
        document.querySelector("#button-text").classList.remove("hidden");
    }
}


watchEffect(() => {
    if (route?.query?.payment_intent) {
        paymentConfirm(route.query.payment_intent)
    }
})

async function paymentConfirm(intent: any) {
    try {
        const resp = await api.makeDefaultPament(intent)
        getPaymentInfo()
        toast.success('Card details updated', { position: 'top-right' })
    } catch (error) {
        // console.log(error);
        toast.error('Sorry, Something went wrong', { position: 'top-right' })

    }
}





onBeforeRouteLeave(() => {
    subscriptionPlanModalClose.value.click()
    cardDetailsModalClose.value.click()
})






</script>
<style lang="css" scoped>
.border-grey {
    border: 1px #8080802f solid !important;
}
</style>