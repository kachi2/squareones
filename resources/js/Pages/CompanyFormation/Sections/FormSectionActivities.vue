<script setup>
import FormContainer from "@/Components/Form/FormContainer.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import TextInput from "@/Components/TextInput.vue";
import TextArea from "@/Components/TextArea.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import { ArrowLeftIcon, ArrowRightIcon } from "@placetopay/iconsax-vue/twotone";
import ComboMenu from "@/Components/ComboMenu.vue";
</script>

<template>
    <FormContainer>
        <div class="mb-6">
            <h1 class="text-2xl font-bold text-gray-700">Activities</h1>
            <p class="text-gray-600 mb-4">
                Detail your company's primary business operations below.
            </p>

            <div class="my-5">
                <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="business-activities"
                >
                    Describe your expected business activities
                </label>
                <span class="text-sm text-gray-700"
                    >Provide a brief but clear description of your anticipated
                    business activities. Be as specific as possible to ensure
                    accurate representation in your business</span
                >
                <TextArea id="business-activities" rows="5" />
                <p class="text-sm text-gray-700 mb-6 text-right">
                    No minimum characters required
                </p>
            </div>

            <div class="my-5">
                <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="level-activity"
                >
                    Level of activity
                </label>
                <ComboMenu :options="[]" />
            </div>

            <div class="my-5">
                <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="nature-activity"
                >
                    Nature of activity
                </label>
                <ComboMenu :options="[]" />
            </div>

            <div class="my-5">
                <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="customer-location"
                >
                    Customer location and operation
                </label>
                <ComboMenu :options="[]" />
            </div>

            <div class="my-5">
                <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="list-countries"
                >
                    List of countries
                </label>
                <ComboMenu :options="[]" />
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
        </div>
    </FormContainer>
    <div class="w-2/5 p-5 text-sm" style="background: #f6f9fb">
        <div class="h-full p-5"></div>
    </div>
</template>
