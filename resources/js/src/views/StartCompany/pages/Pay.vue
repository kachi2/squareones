<template>
    <StartCompany_template>
        <template #main>

            <div v-if="paymentStatus" class="row justify-content-center">
                <div class="alert alert-success text-center" role="alert">
                    <i style="font-size: 2.56rem;" class="bi bi-check-circle"></i>
                    <h5> Payment Completed </h5>
                    <p>We have received your request, please exercise patience while we setup your company</p>

                </div>
            </div>

            <div v-else class="d-flex justify-content-center mt-3">
                <button :disabled="proceeding" class="btn btn-primary w-100" @click="goToPaymentPage">
                   Proceed to Payment
                </button>
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

const startCompanyStore = useStartCompanyStore()
const paymentStatus = computed(() => {
    const status = startCompanyStore.companyInProgress?.billing?.status
    return status;
})

const proceeding = ref(false)

const goToPaymentPage = async ()=>{
    try {
        proceeding.value = true
        const { data } = await api.paymentIntent()
        window.location.href = data.original
    } catch (error) {
        console.log(error)
        proceeding.value = false
    }
}

onMounted(async () => {
    // checkStatus()
})

</script>
<style lang="css" scoped>

</style>
