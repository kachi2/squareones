<template>
    <StartCompany_template>
        <template #main>

            <div v-if="paymentStatus" class="row justify-content-center">
                <div id="complycube-mount"></div>
                <div class="alert alert-success text-center" role="alert">
                    <i style="font-size: 2.56rem;" class="bi bi-check-circle"></i>
                    <h5> Payment Completed </h5>
                    <p>We have received your request, please exercise patience while we setup your company</p>

                    <small>If you have not completed your KYC, please <a :href="returnUrl"> click here </a> </small>
                </div>
            </div>
            <div v-else="">
                <div v-if="intentHasError" class="text-center text-danger mt-5">
                    <strong>Error!</strong> loading payment information, please refresh page.
                    <hr>
                </div>
                <div v-else>
                    <div class="row justify-content-center">
                        <form id="payment-form">
                            <div class="row my-2">
                                <div class="col-12">
                                    <label for="" class="form-label">Card holder's name</label>
                                    <input type="text" class="form-control" placeholder="Full name on Card">
                                </div>
                            </div>
                            <div id="payment-element">
                            </div>
                            <div v-if="clientSecretIsLoaded" class="form-check">
                                <input class="form-check-input exemption" type="checkbox" value="" id="checker" />
                                <label class="form-check-label" for="checker">
                                    <div class="fw-bold">
                                        Securely save my information for 1-click checkout
                                    </div>
                                    <span>
                                        Pay faster on Stripe Atlas and everywhere Link is accepted
                                    </span>
                                </label>
                            </div>
                            <div v-if="clientSecretIsLoaded" class="small my-3">
                                To pay your company formation fee, make sure you're not using an anonymous
                                IP address or a VPN.
                            </div>
                            <button v-if="clientSecretIsLoaded" id="submit">
                                <div class="spinner hidden" id="spinner"></div>
                                <span id="button-text">Pay now</span>
                            </button>

                            <div v-if="clientSecretIsLoaded" class="small mt-3">
                                By confirming your payment, you allow Stripe Atlas to charge you for this payment
                                and the future payments in accordance with their terms.
                            </div>
                            <div id="payment-message" class="hidden"></div>
                        </form>
                    </div>
                </div>
            </div>
        </template>
        <template #info>
        </template>
    </StartCompany_template>
</template>
<script lang="ts" setup>
import StartCompany_template from '../StartCompany_template.vue';
import { useStartCompanyStore } from '../StartCompany_store';
import api from '@/stores/Helpers/axios'
import { ref, onMounted, computed } from 'vue';

// import axios from 'axios'
// import { StripeElementCard } from '@vue-stripe/vue-stripe';
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/vue-stripe-js";


const startCompanyStore = useStartCompanyStore()
const paymentStatus = computed(() => {
    const status = startCompanyStore.companyInProgress?.billing?.status
    return status;
})
const STRIPE_PUBLISHABLE_KEY = "pk_test_51P7LhqRxBSKsFyqbPdmjZpG4tFsnyLZEV6Tn38aic7H4oeWOSub5gTRnjF4vgdRbBJutMM0G3d2x3c9VFz2g1dkX00bPRK5pYT"; // Replace with your actual key
// @ts-ignore
const stripePromise = Stripe(STRIPE_PUBLISHABLE_KEY);

const clientSecretIsLoaded = ref(false)
const intentHasError = ref(false)
let clientSecret = ''
let elements: any
const items = [{ id: "xl-tshirt" }];

onMounted(async () => {
    checkStatus()
    try {
        intentHasError.value = false
        const { data } = await api.paymentIntent()
        //  console.log(data, 'patent int');
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
})

const returnUrl = computed(() => { return 'https://squareone.portrec.ng/kyc/verifications' })

async function handleSubmit(event: any) {
    event.preventDefault();
    setLoading(true);
    const { error } = await stripePromise.confirmPayment({
        elements,
        confirmParams: {
            return_url: `https://squareone.portrec.ng/kyc/verifications` //,
        },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
        showMessage(error.message);
    } else {
        showMessage("An unexpected error occurred.");
    }

    setLoading(false);
}

// Fetches the payment intent status after payment submission
async function checkStatus() {
    const clientSecret = new URLSearchParams(window.location.search).get(
        "payment_intent_client_secret"
    );
    if (!clientSecret) {
        return;
    }


    const { paymentIntent } = await stripePromise.retrievePaymentIntent(clientSecret);
    switch (paymentIntent.status) {
        case "succeeded":
            // initialize();
            showMessage("Payment succeeded!");
            break;
        case "processing":
            showMessage("Your payment is processing.");
            break;
        case "requires_payment_method":
            showMessage("Your payment was not successful, please try again.");
            break;
        default:
            showMessage("Something went wrong.");
            break;
    }
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



</script>
<style lang="css" scoped>
/* Variables */
* {
    box-sizing: border-box;
}

body {
    font-family: Inter, sans-serif;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    display: flex;
    justify-content: center;
    align-content: center;
    height: 100vh;
    width: 100vw;
}

form {
    width: 30vw;
    min-width: 500px;
    align-self: center;
    box-shadow: 0px 0px 0px 0.5px rgba(50, 50, 93, 0.1),
        0px 2px 5px 0px rgba(50, 50, 93, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.07);
    border-radius: 7px;
    padding: 40px;
}

.hidden {
    display: none;
}

#payment-message {
    color: rgb(105, 115, 134);
    font-size: 16px;
    line-height: 20px;
    padding-top: 12px;
    text-align: center;
}

#payment-element {
    margin-bottom: 24px;
}

/* Buttons and links */
button {
    background: #5469d4;
    font-family: Arial, sans-serif;
    color: #ffffff;
    border-radius: 4px;
    border: 0;
    padding: 12px 16px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    display: block;
    transition: all 0.2s ease;
    box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
    width: 100%;
}

button:hover {
    filter: contrast(115%);
}

button:disabled {
    opacity: 0.5;
    cursor: default;
}

/* spinner/processing state, errors */
.spinner,
.spinner:before,
.spinner:after {
    border-radius: 50%;
}

.spinner {
    color: #ffffff;
    font-size: 22px;
    text-indent: -99999px;
    margin: 0px auto;
    position: relative;
    width: 20px;
    height: 20px;
    box-shadow: inset 0 0 0 2px;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
}

.spinner:before,
.spinner:after {
    position: absolute;
    content: "";
}

.spinner:before {
    width: 10.4px;
    height: 20.4px;
    background: #5469d4;
    border-radius: 20.4px 0 0 20.4px;
    top: -0.2px;
    left: -0.2px;
    -webkit-transform-origin: 10.4px 10.2px;
    transform-origin: 10.4px 10.2px;
    -webkit-animation: loading 2s infinite ease 1.5s;
    animation: loading 2s infinite ease 1.5s;
}

.spinner:after {
    width: 10.4px;
    height: 10.2px;
    background: #5469d4;
    border-radius: 0 10.2px 10.2px 0;
    top: -0.1px;
    left: 10.2px;
    -webkit-transform-origin: 0px 10.2px;
    transform-origin: 0px 10.2px;
    -webkit-animation: loading 2s infinite ease;
    animation: loading 2s infinite ease;
}

@-webkit-keyframes loading {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }

    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}

@keyframes loading {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }

    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}

@media only screen and (max-width: 600px) {
    form {
        width: 80vw;
        min-width: initial;
    }
}
</style>
