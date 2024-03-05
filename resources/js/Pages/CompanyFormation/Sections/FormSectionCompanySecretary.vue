<script setup>
import FormContainer from "@/Components/Form/FormContainer.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import TextInput from "@/Components/TextInput.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import { ArrowLeftIcon, ArrowRightIcon } from "@placetopay/iconsax-vue/twotone";
import ComboMenu from "@/Components/ComboMenu.vue";

const secretaryTypes = [
    { id: 1, name: "Corporate" },
    { id: 2, name: "Customary" },
];
</script>

<template>
    <FormContainer>
        <div class="mb-6">
            <h1 class="mb-4 text-2xl font-bold text-gray-700">
                Company Secretary
            </h1>

            <div class="mb-6">
                <label
                    class="mb-2 block text-sm font-bold text-gray-700"
                    for="type"
                >
                    Company Secretary Details
                </label>

                <div class="my-5">
                    <label
                        class="mb-1 block text-sm font-bold text-gray-700"
                        for="type"
                    >
                        Type
                    </label>
                    <ComboMenu :options="secretaryTypes" />
                </div>

                <div class="my-5">
                    <label
                        class="mb-1 block text-sm font-bold text-gray-700"
                        for="name-english"
                    >
                        Name in English
                    </label>
                    <TextInput
                        id="name-english"
                        type="text"
                        placeholder="Company name"
                    />
                </div>

                <div class="my-5">
                    <label
                        class="mb-1 block text-sm font-bold text-gray-700"
                        for="name-chinese"
                    >
                        Name in Chinese
                    </label>
                    <TextInput
                        id="name-chinese"
                        type="text"
                        placeholder="Company name in Chinese"
                    />
                </div>

                <div class="my-5">
                    <label
                        class="mb-1 block text-sm font-bold text-gray-700"
                        for="registration-no"
                    >
                        Company registration no.
                    </label>
                    <TextInput id="registration-no" type="text" />
                </div>
                <div class="my-5">
                    <label
                        class="mb-1 block text-sm font-bold text-gray-700"
                        for="country-registered"
                    >
                        Country registered in
                    </label>
                    <ComboMenu :options="[]" />
                </div>

                <label
                    class="mb-1 block text-sm font-bold text-gray-700"
                    for="address"
                >
                    Address
                </label>
                <div class="my-3">
                    <TextInput id="first" type="text" />
                </div>
                <div class="my-3">
                    <TextInput id="second" type="text" />
                </div>
                <div class="my-3">
                    <TextInput id="third" type="text" />
                </div>
                <div class="my-3">
                    <TextInput id="fourth" type="text" />
                </div>
                <div class="my-3">
                    <ComboMenu :options="[]" />
                </div>

                <div class="my-5">
                    <label
                        class="mb-1 block text-sm font-bold text-gray-700"
                        for="license-no"
                    >
                        License No.
                    </label>
                    <TextInput id="license-no" type="text" />
                </div>

                <div class="my-5">
                    <label
                        class="mb-1 block text-sm font-bold text-gray-700"
                        for="email"
                    >
                        Email
                    </label>
                    <TextInput id="email" type="email" />
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
                        <div>Save and Continue</div>
                        <ArrowRightIcon class="text-white h-5 w-5 my-auto" />
                    </div>
                </PrimaryButton>
                <SecondaryButton>
                    <div class="flex space-x-2">
                        <ArrowRightIcon class="text-black h-5 w-5 my-auto" />
                        <div>Skip</div>
                    </div>
                </SecondaryButton>
            </div>
        </div>
    </FormContainer>
    <div class="w-2/5 p-5 text-sm" style="background: #f6f9fb">
        <div class="h-full p-5"></div>
    </div>
</template>
