<script setup>
import FormContainer from "@/Components/Form/FormContainer.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import TextInput from "@/Components/TextInput.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import { ArrowLeftIcon, ArrowRightIcon } from "@placetopay/iconsax-vue/twotone";
import ComboMenu from "@/Components/ComboMenu.vue";
</script>

<template>
    <FormContainer>
        <div class="mb-6">
            <h2 class="text-2xl font-bold text-gray-700">Registered Address</h2>
            <label class="block text-gray-600 mb-1"
                >Registered office address</label
            >
            <div class="my-3 w-full">
                <TextInput id="first" type="text" />
            </div>
            <div class="my-3 w-full">
                <TextInput id="second" type="text" />
            </div>
            <div class="my-3 w-full">
                <TextInput id="third" type="text" />
            </div>
            <div class="my-3 w-full">
                <TextInput id="fourth" type="text" />
            </div>
            <div class="my-3">
                <ComboMenu :options="[]" />
            </div>
        </div>
        <div class="flex space-x-3">
            <SecondaryButton>
                <div class="flex space-x-2">
                    <ArrowLeftIcon class="text-black h-5 w-5 my-auto" />
                    <div>Back</div>
                </div>
            </SecondaryButton>
            <PrimaryButton>
                <div class="flex space-x-2">
                    <div>Continue</div>
                    <ArrowRightIcon class="text-white h-5 w-5 my-auto" />
                </div>
            </PrimaryButton>
        </div>
    </FormContainer>

    <div class="w-2/5 p-5 text-sm" style="background: #f6f9fb">
        <div class="h-full p-5">
            <h3 class="font-semibold mb-3">
                What is registered office address?
            </h3>
            <p class="mb-5">
                A registered office address is the official legal address of a
                company, where formal communications and notices are sent.
            </p>
            <h3 class="font-semibold mb-3">
                Why can't I change the registered office address?
            </h3>
            <p class="mb-5">
                The registered office address provided is part of our initial
                service. You can update it into a new address after the
                incorporation is completed.
            </p>
        </div>
    </div>
</template>
