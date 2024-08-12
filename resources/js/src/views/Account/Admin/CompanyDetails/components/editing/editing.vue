<template>
    <div class="row g-3">
        <div class="col-lg-3">
            <div class="card exemption bg-dynamic shadow-sm">
                <ul class="list-group list-group-flush">
                    <li v-for="i in menuList" @click="goToNextStage(i.stage)" class="list-group-item border-0"
                        :class="{ 'activee': currentStage == i.stage }">
                        {{ i.name }}
                    </li>
                </ul>
            </div>

        </div>
        <div class="col-lg-9">
            <div class="card exemption bg-dynamic shadow-sm  h-100 ">
                <div class="card-header fw-bold bg-transparent border-0">
                    {{ menuList.find(x => x.stage == currentStage)?.name }}
                </div>
                <div class="card-body">
                    <stage1 v-if="currentStage == 1" @done="goToNextStage(2)" />
                    <stage2 v-if="currentStage == 2" @done="goToNextStage(3)" />
                    <stage3 v-if="currentStage == 3" @done="goToNextStage(4)" />
                    <stage4 v-if="currentStage == 4" @done="goToNextStage(5)" />
                    <stage5 v-if="currentStage == 5" @done="goToNextStage(6)" />
                    <stage6 v-if="currentStage == 6" @done="goToNextStage(7)" />
                    <stage7 v-if="currentStage == 7" @done="goToNextStage(8)" />
                    <stage8 v-if="currentStage == 8" @done="goToNextStage(9)" />
                    <stage9 v-if="currentStage == 9" @done="goToNextStage(10)" />
                    <stage10 v-if="currentStage == 10" @done="goToNextStage(11)" />
                    <stage11 v-if="currentStage == 11" @done="emit('done')" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import stage1 from './components/stage1.vue';
import stage2 from './components/stage2.vue';
import stage3 from './components/stage3.vue';
import stage4 from './components/stage4.vue';
import stage5 from './components/stage5.vue';
import stage6 from './components/stage6.vue';
import stage7 from './components/stage7.vue';
import stage8 from './components/stage8.vue';
import stage9 from './components/stage9.vue';
import stage10 from './components/stage10.vue';
import stage11 from './components/stage11.vue';

const emit = defineEmits(['done'])

const currentStage = ref<string | number>(1)

function goToNextStage(stage: string | number) {
    currentStage.value = stage
}

const menuList = [
    { stage: 1, name: 'Information' },
    { stage: 2, name: 'Incorporation' },
    { stage: 3, name: 'Registered Office and Contact' },
    { stage: 4, name: 'Compliance and Reporting' },
    { stage: 5, name: 'Register of Directors' },
    { stage: 6, name: 'Register of Shareholders' },
    { stage: 7, name: 'Secretary’s Register' },
    { stage: 8, name: 'Register of Company Name Changes' },
    { stage: 9, name: 'Register of Charges' },
    { stage: 10, name: 'Register of Significant Controllers' },
    { stage: 11, name: 'Designated Representative' },
]

</script>

<style lang="css" scoped>
.list-group-item {
    cursor: pointer;
}

.list-group-item:hover,
.activee {
    color: var(--bs-primary) !important;
}

.cardd {
    border-left: 1px solid #ccc;
}
</style>
