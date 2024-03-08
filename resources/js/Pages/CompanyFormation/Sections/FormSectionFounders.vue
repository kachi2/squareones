<script setup>
import FormContainer from "@/Components/Form/FormContainer.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import TextInput from "@/Components/TextInput.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import {
    ArrowLeftIcon,
    ArrowRightIcon,
    AddCircleIcon,
} from "@placetopay/iconsax-vue/twotone";
import ComboMenu from "@/Components/ComboMenu.vue";
import RadioButton from "@/Components/RadioButton.vue";
</script>

<template>
    <FormContainer>
        <div class="mb-6">
            <h1 class="mb-2 text-2xl font-bold text-gray-700">
                Founders / Directors
            </h1>
            <p class="mb-5 text-gray-600">
                Tell us the details about the founder and director
            </p>

            <div
                class="bg-[#EFF3F6] rounded px-4 text-gray-800 w-full py-4 cursor-pointer hover:bg-gray-200"
            >
                <div class="flex justify-center space-x-2">
                    <AddCircleIcon class="h-5 w-5" />
                    <div class="text-gray-600">
                        Add a new founder / director
                    </div>
                </div>
            </div>

            <div class="my-5">
                <label class="block text-gray-700 text-sm font-bold mb-2"
                    >What is the type of founder/director?</label
                >
                <div class="flex space-x-5">
                    <label class="flex space-x-3">
                        <RadioButton v-model="type" class="my-auto" />
                        <p class="my-auto text-sm text-gray-700">Individual</p>
                    </label>
                    <label class="flex space-x-3">
                        <RadioButton v-model="type" class="my-auto" />
                        <p class="my-auto text-sm text-gray-700">Corporate</p>
                    </label>
                </div>
            </div>

            <div class="my-5">
                <label class="block text-gray-700 text-sm font-bold mb-2"
                    >What is the Capacity of this individual?</label
                >
                <div class="flex space-x-5">
                    <label class="flex space-x-3">
                        <RadioButton v-model="type" class="my-auto" />
                        <p class="my-auto text-sm text-gray-700">Shareholder</p>
                    </label>
                    <label class="flex space-x-3">
                        <RadioButton v-model="type" class="my-auto" />
                        <p class="my-auto text-sm text-gray-700">Director</p>
                    </label>
                </div>
            </div>

            <div class="my-5">
                <label class="block text-gray-700 text-sm font-bold mb-2"
                    >About You</label
                >

                <label class="block text-gray-700 text-sm font-medium mb-2"
                    >Your name in English</label
                >
                <div class="my-2">
                    <TextInput id="first_name" type="text" placeholder="First Name" />
                </div>
                <div class="my-2">
                    <TextInput id="last_name" type="text" placeholder="Last Name" />
                </div>
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
                What are the basic requirements to be a founder?
            </h3>
            <p class="mb-5">
                A founder must be at least 18 years old. There is no residency
                requirement to be a founder, and our form allows for up to 6
                founders to be registered.
            </p>
            <h3 class="font-semibold mb-3">
                Is it possible to change founder details after the company has
                been incorporated?
            </h3>
            <p class="mb-5">
                Yes, amendments to founder details can be made
                post-incorporation.
            </p>
            <h3 class="font-semibold mb-3">
                Is it possible to change founder details after the company has
                been incorporated?
            </h3>
            <p class="mb-5">
                No, you must provide a physical residential address as it is
                mandatory.
            </p>
        </div>
    </div>
</template>
