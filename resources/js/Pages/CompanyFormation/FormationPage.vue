<template>
    <AppLayout title="CompanyFormation">

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden border border-sidebar-100 shadow-xl sm:rounded-sm">
                    <FormLayout :currentSection="currentSection" :navigationData="navigationData" @updateSection="setCurrentSection">
                        <template v-slot:form-content>
                            <FormContent>
                                <FormSectionStructure v-if="currentSection === 'structure'" />
                                <FormSectionName v-if="currentSection === 'name'" />
                                <FormSectionDescription v-if="currentSection === 'description'" />
                                <FormSectionAddress v-if="currentSection === 'address'" />
                                <FormSectionFounders v-if="currentSection === 'founders'" />
                                <FormSectionOwnership v-if="currentSection === 'ownership'" />
                                <FormSectionCompanySecretary v-if="currentSection === 'company-secretary'" />
                                <FormSectionSource v-if="currentSection === 'source'" />
                                <FormSectionActivities v-if="currentSection === 'activities'" />
                                <FormSectionSummary v-if="currentSection === 'summary'" />
                                <FormSectionSign v-if="currentSection === 'sign'" />
                            </FormContent>
                        </template>

                    </FormLayout>
                </div>
            </div>
        </div>
    </AppLayout>
</template>

<script setup>
    import { ref } from 'vue'
    import AppLayout from '@/Layouts/AppLayout.vue'
    import FormLayout from '@/Layouts/FormLayout.vue'
    import FormContent from '@/Components/Form/FormContent.vue'

    import FormSectionStructure from '@/Pages/CompanyFormation/Sections/FormSectionStructure.vue'
    import FormSectionName from '@/Pages/CompanyFormation/Sections/FormSectionName.vue'
    import FormSectionDescription from '@/Pages/CompanyFormation/Sections/FormSectionDescription.vue'
    import FormSectionAddress from '@/Pages/CompanyFormation/Sections/FormSectionAddress.vue'
    import FormSectionFounders from '@/Pages/CompanyFormation/Sections/FormSectionFounders.vue'
    import FormSectionOwnership from '@/Pages/CompanyFormation/Sections/FormSectionOwnership.vue'
    import FormSectionCompanySecretary from '@/Pages/CompanyFormation/Sections/FormSectionCompanySecretary.vue'
    import FormSectionSource from '@/Pages/CompanyFormation/Sections/FormSectionSource.vue'
    import FormSectionActivities from '@/Pages/CompanyFormation/Sections/FormSectionActivities.vue'
    import FormSectionSign from '@/Pages/CompanyFormation/Sections/FormSectionSign.vue'
    import FormSectionSummary from '@/Pages/CompanyFormation/Sections/FormSectionSummary.vue'


    const currentSection = ref('structure')

    const navigationData = ref([
        { id: 'structure', label: 'Company Structure', icon: 'structure-icon' },
        { id: 'name', label: 'Company Name', icon: 'name-icon' },
        { id: 'description', label: 'Company Description', icon: 'description-icon' },
        { id: 'address', label: 'Address', icon: 'addresses-icon' },
        { id: 'founders', label: 'Founders/Directors', icon: 'founders-icon' },
        { id: 'ownership', label: 'Ownership', icon: 'ownership-icon' },
        { id: 'company-secretary', label: 'Company Secretary', icon: 'company-secretary-icon' },
        { id: 'source', label: 'Source', icon: 'source-icon' },
        { id: 'activities', label: 'Activities', icon: 'activities-icon' },
        { id: 'summary', label: 'Summary', icon: 'summary-icon' },
        { id: 'sign', label: 'Sign', icon: 'sign-icon' },
        { id: 'pay', label: 'Pay', icon: 'pay-icon' }
    ])

    const setCurrentSection = (section) => {
        currentSection.value = section
    }
</script>
