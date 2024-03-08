<script setup>
import SecondaryButton from "@/Components/SecondaryButton.vue";
import TextInput from "@/Components/TextInput.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import { ArrowLeftIcon } from "@placetopay/iconsax-vue/twotone";
import { ArrowRightIcon } from "@placetopay/iconsax-vue/twotone";
import FormContainer from "@/Components/Form/FormContainer.vue";
import ComboMenu from "@/Components/ComboMenu.vue";
</script>

<template>
    <FormContainer>
        <div class="mb-6">
            <h1 class="text-2xl font-bold text-gray-700">Name</h1>
            <p class="text-gray-600">
                Enter your preferred company names in order of priority.
            </p>
        </div>

        <div class="mb-6">
            <label
                class="mb-2 block text-sm font-bold text-gray-700"
                for="primary-choice"
            >
                Primary Choice
            </label>
            <p class="mb-2 text-gray-600">
                This is your most preferred company name. Ensure it is the legal
                name intended for registration.
            </p>
            <div class="mt-4 flex space-x-1">
                <div class="w-3/5 my-auto">
                    <TextInput
                        id="primary-choice-english"
                        type="text"
                        placeholder="This text for English name"
                    />
                </div>
                <div class="w-2/5 my-auto">
                    <ComboMenu
                        :options="[
                            { id: 1, name: 'Lol' },
                            { id: 2, name: 'Wow' },
                            { id: 3, name: 'Wow' },
                            { id: 4, name: 'Wow' },
                            { id: 5, name: 'Wow' },
                            { id: 6, name: 'Wow' },
                            { id: 7, name: 'Wow' },
                            { id: 8, name: 'Wow' },
                            { id: 9, name: 'Wow' },
                            { id: 10, name: 'Wow' },
                        ]"
                    />
                </div>
            </div>
            <div class="mt-4 flex space-x-1">
                <div class="w-3/5 my-auto">
                    <TextInput
                        id="primary-choice-chinese"
                        type="text"
                        placeholder="This text for Chinese name"
                    />
                </div>
                <div class="w-2/5 my-auto">
                    <ComboMenu :options="[]" />
                </div>
            </div>
        </div>

        <div class="mb-6">
            <label
                class="mb-2 block text-sm font-bold text-gray-700"
                for="secondary-choices"
            >
                Secondary Choices
            </label>
            <p class="mb-2 text-gray-600">
                These are alternative names you would consider should your
                primary choice be unavailable. List them in descending order of
                preference.
            </p>
            <div class="mt-4 flex space-x-1">
                <div class="w-3/5 my-auto">
                    <TextInput
                        id="secondary-choice-english"
                        type="text"
                        placeholder="This text for English name"
                    />
                </div>
                <div class="w-2/5 my-auto">
                    <ComboMenu :options="[]" />
                </div>
            </div>
            <div class="mt-4 flex space-x-1">
                <div class="w-3/5 my-auto">
                    <TextInput
                        id="secondary-choice-chinese"
                        type="text"
                        placeholder="This text for Chinese name"
                    />
                </div>
                <div class="w-2/5 my-auto">
                    <ComboMenu :options="[]" />
                </div>
            </div>
        </div>

        <!-- <div class="flex items-center justify-between">
                        
                        <p
                            class="inline-block align-baseline text-sm font-bold text-blue-500 hover:text-blue-800"
                            onclick="alert('You can suggest up to 5 names. Once you reach the limit, this button will be disabled.')"
                        >
                            ?
                        </p>
                    </div> -->

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
    <div class="w-2/5 p-5 text-sm bg-sidebar-100">
        <div class="h-full p-5">
            <h3 class="font-semibold mb-3">
                What are the restrictions on naming my company?
            </h3>
            <p class="mb-5">
                Your company name should be unique and not be too similar to any
                existing company registered in Hong Kong. It must end with
                'Limited' or ‘有限公司’ for Chinese to signify limited liability
                and should not contain restricted terms or imply government
                affiliation without permission.
            </p>
            <h3 class="font-semibold mb-3">
                Can I include both English and Chinese in my company name?
            </h3>
            <p class="mb-5">
                Yes, you can register a name in English, Chinese, or both.
                However, the Chinese name must not be a direct translation of
                the English name and only Traditional Chinese characters are
                accepted by the Hong Kong Companies Registry.
            </p>
            <h3 class="font-semibold mb-3">
                What should I do if my preferred company name is already taken?
            </h3>
            <p class="mb-5">
                It's advisable to have alternative names ready. You can
                prioritize your preferred names when filling out this form, and
                we will register in order of preference. If all listed names are
                taken, you will be contacted to provide additional names.
            </p>
        </div>
    </div>
</template>
