<script setup>
import TextArea from "@/Components/TextArea.vue";
import TextInput from "@/Components/TextInput.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import { ArrowLeftIcon } from "@placetopay/iconsax-vue/twotone";
import { ArrowRightIcon } from "@placetopay/iconsax-vue/twotone";
import FormContainer from "@/Components/Form/FormContainer.vue";
import ComboMenu from "@/Components/ComboMenu.vue";

const categories = [
    { id: 1, name: "ICT" },
    { id: 2, name: "Marketing" },
];
</script>

<template>
    <FormContainer>
        <div class="mb-6">
            <h1 class="mb-2 text-2xl font-bold text-gray-700">Description</h1>
            <p class="mb-4 text-gray-600">
                This information facilitates a faster review process by our team
                and remains strictly confidential.
            </p>

            <div class="my-5">
                <label
                    class="mb-2 block text-sm font-bold text-gray-700"
                    for="product-description"
                >
                    Describe your product or service
                </label>
                <p class="mb-2 text-gray-600">
                    Please briefly describe the product or service you are
                    developing. Aim for a concise overview in one or two
                    sentences.
                </p>
                <TextArea
                    minlength="150"
                    placeholder="Minimum 150 characters needed"
                    rows="5"
                />
            </div>

            <div class="my-5">
                <label
                    class="mb-2 block text-sm font-bold text-gray-700"
                    for="nature-of-business"
                >
                    Nature of business
                </label>
                <span class="text-sm text-gray-500"
                    >Choose the primary category that best represents the
                    business nature of your company.</span
                >
                <br />

                <ComboMenu :options="categories" />
            </div>

            <div class="my-5">
                <label
                    class="mb-2 mt-4 block text-sm font-bold text-gray-700"
                    for="website-social"
                >
                    Website or social media
                </label>
                <TextInput
                    id="website-social"
                    type="text"
                    placeholder="https://example.com"
                />
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
        <div class="h-full p-5"></div>
    </div>
</template>
