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
                                    <div class="small text-mut text-capitalize" v-if="data?.company_name[0]"> First
                                        Choice: {{ data?.company_name[0]?.eng_name }} {{ data?.company_name[0]?.chn_name
                                        }}
                                    </div>
                                    <div class="small text-mut text-capitalize" v-if="data?.company_name[1]"> Second
                                        Choice: {{ data?.company_name[1]?.eng_name }} {{ data?.company_name[1]?.chn_name
                                        }}
                                    </div>
                                    <div class="small text-mut text-capitalize" v-if="data?.company_name[2]"> Third
                                        Choice: {{ data?.company_name[2]?.eng_name }} {{ data?.company_name[2]?.chn_name
                                        }}
                                    </div>
                                    <div class="small text-mut text-capitalize" v-if="data?.company_name[3]">Forth
                                        Choice: {{ data?.company_name[3]?.eng_name }} {{ data?.company_name[3]?.chn_name
                                        }}
                                    </div>
                                    <div class="small text-mut text-capitalize" v-if="data?.company_name[4]">Fifth
                                        Choice: {{ data?.company_name[4]?.eng_name }} {{ data?.company_name[5]?.chn_name
                                        }}
                                    </div>
                                </span>

                            </li>
                            <li class="list-group-item">
                                <span>
                                    Description
                                    <span class="float-end">
                                        <i @click="startCompanyStore.currentStage = 3" class="bi bi-pencil-square"></i>
                                    </span>
                                    <div class="small text-mut">
                                        {{ data.description }}</div>
                                </span>

                            </li>
                            <li class="list-group-item">
                                <span>
                                    Nature of business
                                    <span @click="startCompanyStore.currentStage = 3" class="float-end">
                                        <i class="bi bi-pencil-square"></i>
                                    </span>
                                    <div class="small text-mut">{{ data.business_nature }}</div>
                                </span>

                            </li>
                            <li class="list-group-item">
                                <span>
                                    Website, social media, or app
                                    <span class="float-end">
                                        <i class="bi bi-pencil-square"></i>
                                    </span>
                                    <div class="small text-mut">{{ data?.website }}</div>
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
                                    <div class="small text-mut text-capitalize">{{ data.flat }}</div>
                                </span>

                            </li>
                            <li class="list-group-item">
                                <span>
                                    Building
                                    <span class="float-end">
                                        <i @click="startCompanyStore.currentStage = 4" class="bi bi-pencil-square"></i>
                                    </span>
                                    <div class="small text-mut">
                                        {{ data.building }}</div>
                                </span>

                            </li>
                            <li class="list-group-item">
                                <span>
                                    Street
                                    <span @click="startCompanyStore.currentStage = 4" class="float-end">
                                        <i class="bi bi-pencil-square"></i>
                                    </span>
                                    <div class="small text-mut">{{ data.street }}</div>
                                </span>

                            </li>
                            <li class="list-group-item">
                                <span>
                                    State
                                    <span class="float-end" @click="startCompanyStore.currentStage = 4">
                                        <i class="bi bi-pencil-square"></i>
                                    </span>
                                    <div class="small text-mut">{{ data.state }}</div>
                                </span>

                            </li>
                            <li class="list-group-item">
                                <span>
                                    Country
                                    <span @click="startCompanyStore.currentStage = 4" class="float-end">
                                        <i class="bi bi-pencil-square"></i>
                                    </span>
                                    <div class="small text-mut">{{ data.country }}</div>
                                </span>

                            </li>
                        </ul>
                    </div>
                </section>
            </section>
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
                                    <div class="small text-mut text-capitalize">
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
                                    <div class="small text-mut">
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
                                    <div class="small text-mut">
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
                                    <div class="small text-mut">
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
                                    <div class="small text-mut">
                                        {{ founder.occupation }}
                                    </div>
                                </span>
                            </li>

                            <li class="list-group-item">
                                <span>
                                    Flat
                                    <span @click="startCompanyStore.currentStage = 5" class="float-end">
                                        <i class="bi bi-pencil-square"></i>
                                    </span>
                                    <div class="small text-mut">
                                        {{ founder.res_address.flat }}
                                    </div>
                                </span>
                            </li>
                            <li class="list-group-item">
                                <span>
                                    Street
                                    <span @click="startCompanyStore.currentStage = 5" class="float-end">
                                        <i class="bi bi-pencil-square"></i>
                                    </span>
                                    <div class="small text-mut">
                                        {{ founder.res_address.street }}
                                    </div>
                                </span>
                            </li>
                            <li class="list-group-item">
                                <span>
                                    Building
                                    <span @click="startCompanyStore.currentStage = 5" class="float-end">
                                        <i class="bi bi-pencil-square"></i>
                                    </span>
                                    <div class="small text-mut">
                                        {{ founder.res_address.building }}
                                    </div>
                                </span>
                            </li>
                            <li class="list-group-item">
                                <span>
                                    State
                                    <span @click="startCompanyStore.currentStage = 5" class="float-end">
                                        <i class="bi bi-pencil-square"></i>
                                    </span>
                                    <div class="small text-mut">
                                        {{ founder.res_address.state }}
                                    </div>
                                </span>
                            </li>
                            <li class="list-group-item">
                                <span>
                                    Country
                                    <span @click="startCompanyStore.currentStage = 5" class="float-end">
                                        <i class="bi bi-pencil-square"></i>
                                    </span>
                                    <div class="small text-mut">
                                        {{ founder.res_address.country }}
                                    </div>
                                </span>
                            </li>
                            <li class="list-group-item">
                                <span>
                                    Passport /HKID
                                    <span @click="startCompanyStore.currentStage = 5" class="float-end">
                                        <i class="bi bi-pencil-square"></i>
                                    </span>
                                    <div class="small text-mut">
                                        {{ founder.get_identity.identity_no != null ? founder.get_identity.identity_no +
                                            "-" + founder.get_identity.identity_no_suffix : founder.get_identity.passport_no
                                        }}
                                    </div>
                                </span>
                            </li>
                            <li class="list-group-item" v-if="founder.get_identity.identity_no != null">
                                <span>
                                    Issueing country
                                    <span @click="startCompanyStore.currentStage = 5" class="float-end">
                                        <i class="bi bi-pencil-square"></i>
                                    </span>
                                    <div class="small text-mut">
                                        {{ founder.get_identity.issueing_country != 'undefined' ?
                                            founder.get_identity.issueing_country : '' }}
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
                                    <div class="small text-mut text-capitalize">
                                        {{ founder.company_name }}
                                    </div>
                                </span>

                            </li>
                            <li class="list-group-item">
                                <span>
                                    Business Nature
                                    <span @click="startCompanyStore.currentStage = 5" class="float-end">
                                        <i class="bi bi-pencil-square"></i>
                                    </span>
                                    <div class="small text-mut">
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
                                    <div class="small text-mut">
                                        {{ useFxn.dateDisplay(founder.date_incorporated) }}
                                    </div>
                                </span>

                            </li>
                            <li class="list-group-item">
                                <span>
                                    Flat
                                    <span @click="startCompanyStore.currentStage = 5" class="float-end">
                                        <i class="bi bi-pencil-square"></i>
                                    </span>
                                    <div class="small text-mut">
                                        {{ founder.flat }}
                                    </div>
                                </span>
                            </li>
                            <li class="list-group-item">
                                <span>
                                    Street
                                    <span @click="startCompanyStore.currentStage = 5" class="float-end">
                                        <i class="bi bi-pencil-square"></i>
                                    </span>
                                    <div class="small text-mut">
                                        {{ founder.street }}
                                    </div>
                                </span>
                            </li>
                            <li class="list-group-item">
                                <span>
                                    Building
                                    <span @click="startCompanyStore.currentStage = 5" class="float-end">
                                        <i class="bi bi-pencil-square"></i>
                                    </span>
                                    <div class="small text-mut">
                                        {{ founder.building }}
                                    </div>
                                </span>
                            </li>
                            <li class="list-group-item">
                                <span>
                                    State
                                    <span @click="startCompanyStore.currentStage = 5" class="float-end">
                                        <i class="bi bi-pencil-square"></i>
                                    </span>
                                    <div class="small text-mut">
                                        {{ founder.state }}
                                    </div>
                                </span>
                            </li>
                            <li class="list-group-item">
                                <span>
                                    Country
                                    <span @click="startCompanyStore.currentStage = 5" class="float-end">
                                        <i class="bi bi-pencil-square"></i>
                                    </span>
                                    <div class="small text-mut">
                                        {{ founder.country }}
                                    </div>
                                </span>
                            </li>
                            <li class="list-group-item">
                                <span>
                                    Authorized Person's Name
                                    <span @click="startCompanyStore.currentStage = 5" class="float-end">
                                        <i class="bi bi-pencil-square"></i>
                                    </span>
                                    <div class="small text-mut">
                                        {{ founder.authorized_persons.first_name }} {{
                                            founder.authorized_persons.last_name }}
                                    </div>
                                </span>
                            </li>
                            <li class="list-group-item">
                                <span>
                                    Authorized Person's Email
                                    <span @click="startCompanyStore.currentStage = 5" class="float-end">
                                        <i class="bi bi-pencil-square"></i>
                                    </span>
                                    <div class="small text-mut">
                                        {{ founder.authorized_persons.email }}
                                    </div>
                                </span>
                            </li>
                            <li class="list-group-item">
                                <span>
                                    Authorized Person's Phone
                                    <span @click="startCompanyStore.currentStage = 5" class="float-end">
                                        <i class="bi bi-pencil-square"></i>
                                    </span>
                                    <div class="small text-mut">
                                        {{ founder.authorized_persons.phone }}
                                    </div>
                                </span>
                            </li>
                        </ul>
                    </div>
                </section>
            </section>

            <section class="section">
                <div class="fw-bold mb-2">Ownership</div>
                <section class="card bg-light border-0">
                    <div class="card-body">
                        <ul class="list-group list-group-flush">

                            <li class="list-group-item">
                                <span class="fw-bold">
                                    Share Type
                                    <span class="float-end">
                                        <i @click="startCompanyStore.currentStage = 6" class="bi bi-pencil-square"></i>
                                    </span>
                                    <div class="small text-mut">Ordinary</div>
                                </span>
                            </li>
                            <li class="list-group-item">
                                <span class="fw-bold">
                                    No of Shares
                                    <span class="float-end">
                                        <i @click="startCompanyStore.currentStage = 6" class="bi bi-pencil-square"></i>
                                    </span>
                                    <div class="small text-mut">{{ data.no_of_share }}</div>
                                </span>
                            </li>
                            <li class="list-group-item">
                                <span class="fw-bold">
                                    Total Amount Paid
                                    <span class="float-end">
                                        <i @click="startCompanyStore.currentStage = 6" class="bi bi-pencil-square"></i>
                                    </span>
                                    <div class="small text-mut">{{ data.total_amount_paid }}</div>
                                </span>
                            </li>
                            <li class="list-group-item">
                                <span class="fw-bold">
                                    Currency
                                    <span class="float-end">
                                        <i @click="startCompanyStore.currentStage = 6" class="bi bi-pencil-square"></i>
                                    </span>
                                    <div class="small text-mut">{{ data.currency }}</div>
                                </span>
                            </li>
                            <li class="list-group-item">
                                <span class="fw-bold card border-0 shadow-sm">
                                    <div class="card-body">
                                        <div class="fw-bold">
                                            Shareholders <span style="float:right"> No of Shares</span>
                                        </div>
                                        <ul class="list-group list-group-flush">

                                            <li class="list-group-item" v-for="share in data.ownerShares">
                                                <span class="float-end text-right">
                                                    {{ share.amount }}
                                                </span>
                                                <div class="small text-mut">{{ share.name }}</div>
                                            </li>
                                        </ul>
                                    </div>
                                </span>
                            </li>

                        </ul>
                    </div>
                </section>

            </section>



            <section class="section">
                <div class="fw-bold mb-2">Company Secretary</div>
                <section class="card bg-light border-0">
                    <div class="card-body">
                        <ul class="list-group list-group-flush">

                            <li class="list-group-item">
                                <span class="fw-bold">
                                    Name
                                    <span class="float-end">
                                        <i @click="startCompanyStore.currentStage = 7" class="bi bi-pencil-square"></i>
                                    </span>
                                    <div class="small text-mut">{{ data.secretary_name }}</div>
                                </span>
                            </li>
                            <!-- <li class="list-group-item">
                                <span class="fw-bold">
                                    Chinese Name
                                    <span class="float-end">
                                        <i @click="startCompanyStore.currentStage = 7" class="bi bi-pencil-square"></i>
                                    </span>
                                    <div class="small text-mut">{{ data.secretary_chname  }}</div>
                                </span>
                            </li> -->
                            <li class="list-group-item">
                                <span class="fw-bold">
                                    company Reg No
                                    <span class="float-end">
                                        <i @click="startCompanyStore.currentStage = 7" class="bi bi-pencil-square"></i>
                                    </span>
                                    <div class="small text-mut">{{ data.secretary_company_reg_no }}</div>
                                </span>
                            </li>
                            <li class="list-group-item">
                                <span class="fw-bold">
                                    Country Registered
                                    <span class="float-end">
                                        <i @click="startCompanyStore.currentStage = 7" class="bi bi-pencil-square"></i>
                                    </span>
                                    <div class="small text-mut">{{ data.secretary_country_registered }}</div>
                                </span>
                            </li>
                            <li class="list-group-item">
                                <span class="fw-bold">
                                    Licence No
                                    <span class="float-end">
                                        <i @click="startCompanyStore.currentStage = 7" class="bi bi-pencil-square"></i>
                                    </span>
                                    <div class="small text-mut">{{ data.secretary_licence_no }}</div>
                                </span>
                            </li>
                            <li class="list-group-item">
                                <span class="fw-bold">
                                    Flat
                                    <span class="float-end">
                                        <i @click="startCompanyStore.currentStage = 7" class="bi bi-pencil-square"></i>
                                    </span>
                                    <div class="small text-mut">{{ data.secretary_flat }}</div>
                                </span>
                            </li>
                            <li class="list-group-item">
                                <span class="fw-bold">
                                    Street
                                    <span class="float-end">
                                        <i @click="startCompanyStore.currentStage = 7" class="bi bi-pencil-square"></i>
                                    </span>
                                    <div class="small text-mut">{{ data.secretary_street }}</div>
                                </span>
                            </li>
                            <li class="list-group-item">
                                <span class="fw-bold">
                                    City/State
                                    <span class="float-end">
                                        <i @click="startCompanyStore.currentStage = 7" class="bi bi-pencil-square"></i>
                                    </span>
                                    <div class="small text-mut">{{ data.secretary_state }}</div>
                                </span>
                            </li>
                            <li class="list-group-item">
                                <span class="fw-bold">
                                    Country
                                    <span class="float-end">
                                        <i @click="startCompanyStore.currentStage = 7" class="bi bi-pencil-square"></i>
                                    </span>
                                    <div class="small text-mut">{{ data.secretary_country }}</div>
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
                                    <div class="small text-mut text-capitalize">{{ data.income_expected_source }}
                                    </div>
                                </span>

                            </li>
                            <li class="list-group-item">
                                <span>
                                    Origin Source of Funds
                                    <span class="float-end">
                                        <i @click="startCompanyStore.currentStage = 8" class="bi bi-pencil-square"></i>
                                    </span>
                                    <div class="small text-mut">
                                        {{ data.origin_funds }}</div>
                                </span>

                            </li>
                            <li class="list-group-item">
                                <span>
                                    Source of Wealth
                                    <span @click="startCompanyStore.currentStage = 8" class="float-end">
                                        <i class="bi bi-pencil-square"></i>
                                    </span>
                                    <div class="small text-mut">{{ data.wealth_initial_source }}</div>
                                </span>

                            </li>
                            <li class="list-group-item">
                                <span>
                                    Ongoing Source of Wealth
                                    <span @click="startCompanyStore.currentStage = 8" class="float-end">
                                        <i class="bi bi-pencil-square"></i>
                                    </span>
                                    <div class="small text-mut">{{ data.income_outgoing_source }}</div>
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
                                    <div class="small text-mut text-capitalize">{{ data.activity_level }}</div>
                                </span>

                            </li>
                            <li class="list-group-item">
                                <span>
                                    Activity Nature
                                    <span class="float-end">
                                        <i @click="startCompanyStore.currentStage = 9" class="bi bi-pencil-square"></i>
                                    </span>
                                    <div class="small text-mut">
                                        {{ data.activity_nature }}</div>
                                </span>

                            </li>
                            <li class="list-group-item">
                                <span>
                                    Description
                                    <span @click="startCompanyStore.currentStage = 9" class="float-end">
                                        <i class="bi bi-pencil-square"></i>
                                    </span>
                                    <div class="small text-mut">{{ data.activity_description }}</div>
                                </span>

                            </li>
                            <li class="list-group-item">
                                <span>
                                    Customer Location Operation
                                    <span @click="startCompanyStore.currentStage = 9" class="float-end">
                                        <i class="bi bi-pencil-square"></i>
                                    </span>
                                    <div class="small text-mut">{{ data.activity_customer_location_operation }}</div>
                                </span>

                            </li>
                            <li class="list-group-item">
                                <span>
                                    Country
                                    <span @click="startCompanyStore.currentStage = 9" class="float-end">
                                        <i class="bi bi-pencil-square"></i>
                                    </span>
                                    <div class="small text-mut">{{ data.activity_country }}</div>
                                </span>

                            </li>
                        </ul>
                    </div>
                </section>
            </section>



            <div class="movement-buttons my-5">
                <button @click="switchStage('-')" class="btn btn-outline-info me-3">
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
import { computed, reactive, onMounted, ref } from 'vue';
import StartCompany_template from '../StartCompany_template.vue';
import { useStartCompanyStore } from '../StartCompany_store';
import useFxn from '@/stores/Helpers/useFunctions';

const startCompanyStore = useStartCompanyStore()

interface SummaryInterface {
    // structure: string,
    company_name: any[],
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
    secretary_name: string,
    secretary_chname: string,
    secretary_company_reg_no: string
    secretary_country_registered: string,
    secretary_licence_no: string,
    secretary_email: string,
    secretary_flat: string,
    secretary_street: string,
    secretary_city: string,
    secretary_state: string,
    secretary_country: string,

    share_type_id: string,
    no_of_share: string,
    total_amount_paid: string,
    currency: string
    ownerShares: any[]

}

const data = reactive<SummaryInterface>({
    // structure: 'LLC',
    company_name: [],
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

    secretary_name: '',
    secretary_chname: '',
    secretary_company_reg_no: '',
    secretary_country_registered: '',
    secretary_licence_no: '',
    secretary_email: '',
    secretary_flat: '',
    secretary_street: '',
    secretary_city: '',
    secretary_state: '',
    secretary_country: '',

    share_type_id: '',
    no_of_share: '',
    total_amount_paid: '',
    currency: '',
    ownerShares: []
})

onMounted(() => {
    const companyInProgress = startCompanyStore.companyInProgress
    // console.log(companyInProgress, 'use');


    if (companyInProgress) {

        // Names & Description
        const namesArray = companyInProgress.names
        console.log(namesArray, 'Name array')
        const coy = namesArray.find((x: any) => x.choice_level == 1);
        data.company_name = namesArray
        data.description = companyInProgress.description
        data.business_nature = companyInProgress?.business_nature?.name ?? ''
        data.website = companyInProgress.website

        //secretary 
        data.secretary_name = companyInProgress?.secretary?.name ?? ''
        data.secretary_chname = companyInProgress?.secretary?.chn_name ?? ''
        data.secretary_company_reg_no = companyInProgress?.secretary?.company_reg_no ?? ''
        data.secretary_country_registered = companyInProgress?.secretary?.country_registered ?? ''
        data.secretary_licence_no = companyInProgress?.secretary?.licence_no ?? ''
        data.secretary_email = companyInProgress?.secretary?.email ?? ''
        data.secretary_flat = companyInProgress?.secretary?.flat ?? ''
        data.secretary_street = companyInProgress?.secretary?.street ?? ''
        data.secretary_city = companyInProgress?.secretary?.city ?? ''
        data.secretary_state = companyInProgress?.secretary?.state ?? ''
        data.secretary_country = companyInProgress?.secretary?.country ?? ''

        // Address
        data.flat = companyInProgress?.flat ?? ''
        data.building = companyInProgress?.building ?? ''
        data.street = companyInProgress?.street ?? ''
        data.state = companyInProgress?.state ?? ''
        data.country = companyInProgress?.country ?? ''

        //Ownership

        data.share_type_id = companyInProgress?.shares[0]?.share_type_id ?? ''
        data.no_of_share = companyInProgress?.shares[0]?.no_of_share ?? ''
        data.total_amount_paid = companyInProgress?.shares[0]?.total_amount_paid ?? ''
        data.currency = companyInProgress?.shares[0]?.currency ?? ''
        // data.ownerShares = companyInProgress?.shares



        // Fund Source
        data.income_expected_source = companyInProgress.fund_source?.income_expected_source ?? ''
        data.income_outgoing_source = companyInProgress.fund_source?.income_outgoing_source ?? ''
        data.origin_funds = companyInProgress.fund_source?.origin_funds ?? ''
        data.wealth_initial_source = companyInProgress.fund_source?.wealth_initial_source ?? ''


        // Activity
        data.activity_nature = companyInProgress.activity?.activity_nature ?? ''
        data.activity_level = companyInProgress.activity?.activity_level ?? ''
        data.activity_description = companyInProgress.activity?.description ?? ''
        data.activity_customer_location_operation = companyInProgress.activity?.customer_location_operation ?? ''
        data.activity_country = companyInProgress.activity?.country ?? ''

        // founders
        const entity = startCompanyStore.companyInProgress?.company_entity ?? [];

        if (entity.length) {
            const individuals = entity.filter((x: any) => x.entity_type_id == 1)
            individuals.forEach((el: any) => {
                const founder = el.individual
                // founder.is_founder = el.is_founder == 0 ? 'No' : 'Yes'
                data.founders_individual.push(founder)

                data.ownerShares.push({
                    name: founder.first_name || founder.chn_first_name + ' ' + founder.last_name || founder.chn_last_name,
                    amount: founder.owner_shares?.total_amount ?? 0
                })
            });

            const coporates = entity.filter((x: any) => x.entity_type_id == 2)
            coporates.forEach((el: any) => {
                const founder = el.corporate
                // founder.is_founder = el.is_founder == 0 ? 'No' : 'Yes'
                data.founders_corporate.push(founder)

                data.ownerShares.push({
                    name: founder.company_name || founder.chn_company_name,
                    amount: founder.owner_shares?.total_amount ?? 0
                })
            });
        }
    }

    console.log('shers:', data.ownerShares);

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
