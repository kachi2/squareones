<template>
    <StartCompany_template>
        <template #main>
            <section class="section">
                <h5 class="fw-bolder">Summary</h5>
                <span>Please make sure the following information is correct. We'll use
                    it to generate your documents.</span>
            </section>

            <section class="section">
                <div class="fw-bold mb-2">Company</div>

                <section class="card bg-light border-0">
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                                <span>
                                    Name
                                    <span class="float-end">
                                        <i @click="startCompanyStore.currentStage = 2" class="bi bi-pencil-square"></i>
                                    </span>
                                    <div class="small text-muted text-capitalize">{{ data.company_name }}</div>
                                </span>

                            </li>
                            <li class="list-group-item">
                                <span>
                                    Description
                                    <span class="float-end">
                                        <i @click="startCompanyStore.currentStage = 3" class="bi bi-pencil-square"></i>
                                    </span>
                                    <div class="small text-muted">
                                        {{ data.description }}</div>
                                </span>

                            </li>
                            <li class="list-group-item">
                                <span>
                                    Nature of business
                                    <span @click="startCompanyStore.currentStage = 3" class="float-end">
                                        <i class="bi bi-pencil-square"></i>
                                    </span>
                                    <div class="small text-muted">{{ data.business_nature }}</div>
                                </span>

                            </li>
                            <li class="list-group-item">
                                <span>
                                    Website, social media, or app
                                    <span class="float-end">
                                        <i class="bi bi-pencil-square"></i>
                                    </span>
                                    <div class="small text-muted">{{ data.website }}</div>
                                </span>

                            </li>
                        </ul>
                    </div>
                </section>
            </section>

            <section class="section">
                <div class="fw-bold mb-2">Registered Adrress</div>

                <section class="card bg-light border-0">
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                                <span>
                                    Flat
                                    <span class="float-end">
                                        <i @click="startCompanyStore.currentStage = 4" class="bi bi-pencil-square"></i>
                                    </span>
                                    <div class="small text-muted text-capitalize">{{ data.flat }}</div>
                                </span>

                            </li>
                            <li class="list-group-item">
                                <span>
                                    Building
                                    <span class="float-end">
                                        <i @click="startCompanyStore.currentStage = 4" class="bi bi-pencil-square"></i>
                                    </span>
                                    <div class="small text-muted">
                                        {{ data.building }}</div>
                                </span>

                            </li>
                            <li class="list-group-item">
                                <span>
                                    Street
                                    <span @click="startCompanyStore.currentStage = 4" class="float-end">
                                        <i class="bi bi-pencil-square"></i>
                                    </span>
                                    <div class="small text-muted">{{ data.street }}</div>
                                </span>

                            </li>
                            <li class="list-group-item">
                                <span>
                                    State
                                    <span class="float-end">
                                        <i class="bi bi-pencil-square"></i>
                                    </span>
                                    <div class="small text-muted">{{ data.state }}</div>
                                </span>

                            </li>
                            <li class="list-group-item">
                                <span>
                                    Country
                                    <span @click="startCompanyStore.currentStage = 4" class="float-end">
                                        <i class="bi bi-pencil-square"></i>
                                    </span>
                                    <div class="small text-muted">{{ data.country }}</div>
                                </span>

                            </li>
                        </ul>
                    </div>
                </section>
            </section>



            <!-- <section class="section">
                <section class="card bg-light border-0">
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                                <span class="fw-bold">
                                    Ownership
                                    <span class="float-end">
                                        <i @click="startCompanyStore.currentStage = 6" class="bi bi-pencil-square"></i>
                                    </span>
                                </span>

                            </li>
                        </ul>
                    </div>
                </section>
            </section> -->

            <!-- <section class="section">
                <section class="card bg-light border-0">
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                                <span class="fw-bold">
                                    Company Secretary
                                    <span class="float-end">
                                        <i @click="startCompanyStore.currentStage = 7" class="bi bi-pencil-square"></i>
                                    </span>
                                </span>

                            </li>
                        </ul>
                    </div>
                </section>
            </section> -->

            <section class="section">
                <div class="fw-bold mb-2">Founders (Individual)</div>

                <section v-for="founder in data.founders_individual" class="card bg-light border-0 section">
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                                <span>
                                    Name
                                    <span @click="startCompanyStore.currentStage = 5" class="float-end">
                                        <i class="bi bi-pencil-square"></i>
                                    </span>
                                    <div class="small text-muted text-capitalize">
                                        {{ founder.first_name }} {{ founder.last_name }}
                                    </div>
                                </span>

                            </li>
                            <li class="list-group-item">
                                <span>
                                    Email
                                    <span @click="startCompanyStore.currentStage = 5" class="float-end">
                                        <i class="bi bi-pencil-square"></i>
                                    </span>
                                    <div class="small text-muted">
                                        {{ founder.email }}
                                    </div>
                                </span>

                            </li>
                            <li class="list-group-item">
                                <span>
                                    Phone
                                    <span @click="startCompanyStore.currentStage = 5" class="float-end">
                                        <i class="bi bi-pencil-square"></i>
                                    </span>
                                    <div class="small text-muted">
                                        {{ founder.phone }}
                                    </div>
                                </span>

                            </li>

                            <li class="list-group-item">
                                <span>
                                    Date of birth
                                    <span @click="startCompanyStore.currentStage = 5" class="float-end">
                                        <i class="bi bi-pencil-square"></i>
                                    </span>
                                    <div class="small text-muted">
                                        {{ useFxn.dateDisplay(founder.dob) }}
                                    </div>
                                </span>

                            </li>
                            <li class="list-group-item">
                                <span>
                                    Occupation
                                    <span @click="startCompanyStore.currentStage = 5" class="float-end">
                                        <i class="bi bi-pencil-square"></i>
                                    </span>
                                    <div class="small text-muted">
                                        {{ founder.occupation }}
                                    </div>
                                </span>
                            </li>

                        </ul>
                    </div>
                </section>



            </section>

            <section class="section">
                <div class="fw-bold mb-2">Founders (Corporate)</div>
                <section v-for="founder in data.founders_corporate" class="card bg-light border-0 section">
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                                <span>
                                    Company Name
                                    <span @click="startCompanyStore.currentStage = 5" class="float-end">
                                        <i class="bi bi-pencil-square"></i>
                                    </span>
                                    <div class="small text-muted text-capitalize">
                                        {{ founder.company_name }}
                                    </div>
                                </span>

                            </li>
                            <li class="list-group-item">
                                <span>
                                    Address
                                    <span @click="startCompanyStore.currentStage = 5" class="float-end">
                                        <i class="bi bi-pencil-square"></i>
                                    </span>
                                    <div class="small text-muted text-capitalize">
                                        {{ founder.street_no }},
                                        {{ founder.address }},
                                        {{ founder.city }},
                                        {{ founder.state }}.
                                    </div>
                                </span>

                            </li>


                            <li class="list-group-item">
                                <span>
                                    Business Nature
                                    <span @click="startCompanyStore.currentStage = 5" class="float-end">
                                        <i class="bi bi-pencil-square"></i>
                                    </span>
                                    <div class="small text-muted">
                                        {{ businesNatureName(founder.business_nature_id) }}
                                    </div>
                                </span>
                            </li>

                            <li class="list-group-item">
                                <span>
                                    Date incorporated
                                    <span @click="startCompanyStore.currentStage = 5" class="float-end">
                                        <i class="bi bi-pencil-square"></i>
                                    </span>
                                    <div class="small text-muted">
                                        {{ useFxn.dateDisplay(founder.date_incorporated) }}
                                    </div>
                                </span>

                            </li>
                        </ul>
                    </div>
                </section>
            </section>


            <section class="section">
                <div class="fw-bold mb-2">Source of Funds</div>
                <section class="card bg-light border-0">
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                                <span>
                                    Expected Source of Funds
                                    <span class="float-end">
                                        <i @click="startCompanyStore.currentStage = 8" class="bi bi-pencil-square"></i>
                                    </span>
                                    <div class="small text-muted text-capitalize">{{ data.income_expected_source }}
                                    </div>
                                </span>

                            </li>
                            <li class="list-group-item">
                                <span>
                                    Origin Source of Funds
                                    <span class="float-end">
                                        <i @click="startCompanyStore.currentStage = 8" class="bi bi-pencil-square"></i>
                                    </span>
                                    <div class="small text-muted">
                                        {{ data.origin_funds }}</div>
                                </span>

                            </li>
                            <li class="list-group-item">
                                <span>
                                    Source of Wealth
                                    <span @click="startCompanyStore.currentStage = 8" class="float-end">
                                        <i class="bi bi-pencil-square"></i>
                                    </span>
                                    <div class="small text-muted">{{ data.wealth_initial_source }}</div>
                                </span>

                            </li>
                            <li class="list-group-item">
                                <span>
                                    Ongoing Source of Wealth
                                    <span @click="startCompanyStore.currentStage = 8" class="float-end">
                                        <i class="bi bi-pencil-square"></i>
                                    </span>
                                    <div class="small text-muted">{{ data.income_outgoing_source }}</div>
                                </span>

                            </li>
                        </ul>
                    </div>
                </section>
            </section>

            <section class="section">
                <div class="fw-bold mb-2">Activity</div>

                <section class="card bg-light border-0">
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                                <span>
                                    Activity Level
                                    <span class="float-end">
                                        <i @click="startCompanyStore.currentStage = 9" class="bi bi-pencil-square"></i>
                                    </span>
                                    <div class="small text-muted text-capitalize">{{ data.activity_level }}</div>
                                </span>

                            </li>
                            <li class="list-group-item">
                                <span>
                                    Activity Nature
                                    <span class="float-end">
                                        <i @click="startCompanyStore.currentStage = 9" class="bi bi-pencil-square"></i>
                                    </span>
                                    <div class="small text-muted">
                                        {{ data.activity_nature }}</div>
                                </span>

                            </li>
                            <li class="list-group-item">
                                <span>
                                    Description
                                    <span @click="startCompanyStore.currentStage = 9" class="float-end">
                                        <i class="bi bi-pencil-square"></i>
                                    </span>
                                    <div class="small text-muted">{{ data.activity_description }}</div>
                                </span>

                            </li>
                            <li class="list-group-item">
                                <span>
                                    Customer Location Operation
                                    <span @click="startCompanyStore.currentStage = 9" class="float-end">
                                        <i class="bi bi-pencil-square"></i>
                                    </span>
                                    <div class="small text-muted">{{ data.activity_customer_location_operation }}</div>
                                </span>

                            </li>
                            <li class="list-group-item">
                                <span>
                                    Country
                                    <span @click="startCompanyStore.currentStage = 9" class="float-end">
                                        <i class="bi bi-pencil-square"></i>
                                    </span>
                                    <div class="small text-muted">{{ data.activity_country }}</div>
                                </span>

                            </li>
                        </ul>
                    </div>
                </section>
            </section>



            <div class="movement-buttons my-5">
                <button @click="switchStage('-')" class="btn btn-outline-dark me-3">
                    <i class="bi bi-arrow-left"></i> Back
                </button>
                <button @click="switchStage('+')" class="btn btn-primary">
                    Save & Continue <i class="bi bi-arrow-right"></i>
                </button>
            </div>

        </template>

        <template #info>
            <section class="section">
                <div class="fw-bold">
                    What are the basic requirements to be a founder?
                </div>
                <div>

                    A founder must be at least 18 years old.
                    There is no residency requirement to be
                    a founder, and our form allows for up to
                    6 founders to be registered.
                </div>
            </section>
            <section class="section">
                <div class="fw-bold">
                    Is it possible to change founder details after the company has been incorporated?
                </div>
                <div>
                    Yes, amendments to founder details can
                    be made post-incorporation.
                </div>
            </section>
            <section class="section">
                <div class="fw-bold">
                    Is it possible to change founder details after the company has been incorporated?
                </div>
                <div>
                    No, you must provide a physical
                    residential address as it is mandatory.
                </div>
            </section>
        </template>
    </StartCompany_template>
</template>
<script lang="ts" setup>
import { computed, reactive, onMounted } from 'vue';
import StartCompany_template from '../StartCompany_template.vue';
import { useStartCompanyStore } from '../StartCompany_store';
import useFxn from '@/stores/Helpers/useFunctions';

const startCompanyStore = useStartCompanyStore()

interface SummaryInterface {
    // structure: string,
    company_name: string,
    description: string,
    address: string,
    business_nature: string,
    website: string,
    phone_number: string,

    flat: string,
    building: string,
    street: string,
    state: string,
    country: string,

    income_expected_source: string,
    income_outgoing_source: string,
    origin_funds: string,
    wealth_initial_source: string,

    activity_nature: string,
    activity_level: string,
    activity_description: string,
    activity_country: string,
    activity_customer_location_operation: string,

    founders_individual: any[],
    founders_corporate: any[],
}

const data = reactive<SummaryInterface>({
    // structure: 'LLC',
    company_name: '',
    description: '',
    address: '',
    business_nature: '',
    website: '',
    phone_number: '',

    flat: '',
    building: '',
    street: '',
    state: '',
    country: '',

    income_expected_source: '',
    income_outgoing_source: '',
    origin_funds: '',
    wealth_initial_source: '',

    activity_nature: '',
    activity_level: '',
    activity_description: '',
    activity_country: '',
    activity_customer_location_operation: '',

    founders_individual: [],
    founders_corporate: [],
})

onMounted(() => {
    const companyInProgress = startCompanyStore.companyInProgress
    console.log(companyInProgress, 'use');


    if (companyInProgress) {

        // Names & Description
        const namesArray = companyInProgress.names
        const coy = namesArray.find((x: any) => x.choice_level == 1);
        data.company_name = coy.eng_name
        data.description = companyInProgress.description
        data.business_nature = companyInProgress?.business_nature?.name ?? ''
        data.website = companyInProgress.website

        // Address
        data.flat = companyInProgress.flat
        data.building = companyInProgress.building
        data.street = companyInProgress.street
        data.state = companyInProgress.state
        data.country = companyInProgress.country

        // Fund Source
        data.income_expected_source = companyInProgress.fund_source[0]?.income_expected_source ?? ''
        data.income_outgoing_source = companyInProgress.fund_source[0]?.income_outgoing_source ?? ''
        data.origin_funds = companyInProgress.fund_source[0]?.origin_funds ?? ''
        data.wealth_initial_source = companyInProgress.fund_source[0]?.wealth_initial_source ?? ''


        // Activity
        data.activity_nature = companyInProgress.activity?.activity_nature ?? ''
        data.activity_level = companyInProgress.activity?.activity_level ?? ''
        data.activity_description = companyInProgress.activity?.description ?? ''
        data.activity_customer_location_operation = companyInProgress.activity?.customer_location_operation ?? ''
        data.activity_country = companyInProgress.activity?.country ?? ''

        const entity = startCompanyStore.companyInProgress?.company_entity ?? [];

        if (entity.length) {
            const individuals = entity.filter((x: any) => x.entity_type_id == 1)
            individuals.forEach((el: any) => {
                const founder = el.individual
                // founder.is_founder = el.is_founder == 0 ? 'No' : 'Yes'
                data.founders_individual.push(founder)
            });

            const coporates = entity.filter((x: any) => x.entity_type_id == 2)
            coporates.forEach((el: any) => {
                const founder = el.corporate
                // founder.is_founder = el.is_founder == 0 ? 'No' : 'Yes'
                data.founders_corporate.push(founder)
            });
        }
    }
})

const businesNatureName = (id: any) => {
    const b_nature = startCompanyStore.businessNatures.find((x: { id: string | number }) => x.id == id)
    return !b_nature ? '..' : b_nature.name
}


function switchStage(command: string) {
    startCompanyStore.switchStage(command)
}

</script>
<style lang="css" scoped>
.list-group-item {
    background: transparent;
    padding-inline: 0px;
}

.bi {
    cursor: pointer;
}
</style>
