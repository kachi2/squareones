<template>
    <StartCompany_template>
        <template #main>
            <section>
                <div class="fw-bolder fs-5">Founders/Directors</div>
                <span>Tell us the details about the founder and director.</span>
            </section>

            <section>
                <div class="fw-bold">What is the type of founder/director? </div>

                <div class="row justify-content- mt-1">
                    <div @click="founderType = 'individual'" class="col-4 cursor-pointer">
                        <i v-if="founderType == 'individual'" class="bi bi-record-circle-fill text-primary me-1"></i>
                        <i v-else class="bi bi-circle me-1"></i>
                        Individual
                    </div>

                    <div @click="founderType = 'corporate'" class="col-4 cursor-pointer">
                        <i v-if="founderType == 'corporate'" class="bi bi-record-circle-fill text-primary me-1"></i>
                        <i v-else class="bi bi-circle me-1"></i>
                        Corporate
                    </div>
                </div>
            </section>

            <section>
                <div class="fw-bold">What is the Capacity of this individual? shareholder </div>
                <div class="row justify-content- mt-1">
                    <div class="col-4 ">
                        <div class="form-check ">
                            <input v-model="startCompanyStore.checkedEntityCapacity"
                                class="form-check-input cursor-pointer" type="checkbox" id="shareholder" value="1" />
                            <label class="form-check-label" for="shareholder">Shareholder</label>
                        </div>
                    </div>

                    <div class="col-4 ">
                        <div class="form-check ">
                            <input class="form-check-input" type="checkbox" id="director" value="2"
                                v-model="startCompanyStore.checkedEntityCapacity" />
                            <label class="form-check-label" for="director">Director</label>
                        </div>
                    </div>
                </div>
            </section>

            <Founders_individual v-if="founderType == 'individual'" />
            <Founders_corporate v-else />

        </template>

        <template #info>
            <section v-if="foundersAdded.length">
                <div class="card small">
                    <div class="card-header border-0">FOUNDERS ADDED

                        <span class="badge rounded-pill text-bg-warning small">{{ foundersAdded.length }}</span>

                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-sm">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Type</th>
                                        <th>Remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in foundersAdded" :key="item">
                                        <td>{{ item.first_name + ' ' + item.last_name }}</td>
                                        <td>{{ item.entity_type_id == '1' ? 'Individual' : 'Corporate' }}</td>
                                        <td>
                                            <button @click="deleteFounder(item)"
                                                class="btn btn-link text-danger p-0 m-0">
                                                <i class="bi bi-x-lg"></i>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>


            <section>
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
            <section>
                <div class="fw-bold">
                    Is it possible to change founder details after the company has been incorporated?
                </div>
                <div>
                    Yes, amendments to founder details can
                    be made post-incorporation.
                </div>
            </section>
            <section>
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
import { ref, computed } from 'vue';
import StartCompany_template from '../StartCompany_template.vue';
import { useStartCompanyStore } from '../StartCompany_store';
import useFxn from '@/stores/Helpers/useFunctions';

import Founders_corporate from './Founders_corporate.vue';
import Founders_individual from './Founders_individual.vue';

const founderType = ref<'individual' | 'corporate'>('individual')
const startCompanyStore = useStartCompanyStore()

const foundersAdded = computed(() => {
    const individual = startCompanyStore.companyInProgress?.company_entity[0]?.individual ?? []
    const corporate = startCompanyStore.companyInProgress?.company_entity[0]?.corporate ?? []

    return [...individual, ...corporate]
})


function deleteFounder(item: any) {
    useFxn.confirm('Delete this Record?', 'Yes, Delete')
        .then((resp) => {
            if (resp.isConfirmed) {
                // 
            }
        })
}

</script>
<style lang="css" scoped>
.form-check-label {
    cursor: pointer;
}
</style>
