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
                        <i v-if="founderType == 'individual'" class="bi bi-circle-fill text-primary me-1"></i>
                        <i v-else class="bi bi-circle me-1"></i>
                        Individual
                    </div>

                    <div @click="founderType = 'corporate'" class="col-4 cursor-pointer">
                        <i v-if="founderType == 'corporate'" class="bi bi-circle-fill text-primary me-1"></i>
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
                            <input class="form-check-input cursor-pointer" type="checkbox" id="shareholder"
                                value="shareholder" />
                            <label class="form-check-label" for="shareholder">Shareholder</label>
                        </div>
                    </div>

                    <div class="col-4 ">
                        <div class="form-check ">
                            <input class="form-check-input" type="checkbox" id="director" value="director" />
                            <label class="form-check-label" for="director">Director</label>
                        </div>
                    </div>
                </div>
            </section>

            <Founders_individual v-if="founderType == 'individual'" />
            <Founders_corporate v-else />

        </template>

        <template #info>
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
import { ref } from 'vue';
import StartCompany_template from '../StartCompany_template.vue';
import { useStartCompanyStore } from '../StartCompany_store';

import Founders_corporate from './Founders_corporate.vue';
import Founders_individual from './Founders_individual.vue';

const founderType = ref<'individual' | 'corporate'>('individual')

const startCompanyStore = useStartCompanyStore()

</script>
<style lang="css" scoped>
.form-check-label {
    cursor: pointer;
}
</style>
