<template>
    <div class="row g-3">
        <regOfDirectorsTable />

        <regOfShareholdersTable />

        <regOfSecretaryTable />
        <regOfAllotmentsTable />
        <regOfTransferTable />
        <regOfNameChangeTable />

        <regOfChargeTable />

        <sigControllerTable />

        <!-- <designatedRepTable /> -->
    </div>

</template>

<script lang="ts" setup>
import designatedRepTable from './tables/designatedRepTable.vue';
import regOfChargeTable from './tables/regOfChargeTable.vue';
import regOfDirectorsTable from './tables/regOfDirectorsTable.vue';
import regOfShareholdersTable from './tables/regOfShareholdersTable.vue';
import sigControllerTable from './tables/sigControllerTable.vue';
import regOfNameChangeTable from './tables/regOfNameChangeTable.vue';
import regOfSecretaryTable from './tables/regOfSecretaryTable.vue';
import regOfAllotmentsTable from './tables/regOfAllotmentsTable.vue';
import regOfTransferTable from './tables/regOfTransferTable.vue';
</script>

<style lang="css" scoped>
/* Custom CSS for progress bar with phases */
.progress-container {
    position: relative;
    height: 50px;
}

.progress-line {
    width: 100%;
    height: 0.1px;
    background-color: var(--bs-warning);
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}


.phase {
    position: absolute;
    top: 50%;
    font-size: 1.2rem;
    white-space: nowrap;
    transform: translate(-50%, -50%);
    fill: aqua !important;
}

.phase-label {
    position: absolute;
    top: calc(50% + 50px);
    font-size: 0.8rem;
    text-align: center;
    transform: translate(-50%, -50%);
}

/* Adjust phase positions */
.phase-1 {
    left: 0%;
}

.phase-2 {
    left: 25%;
}

.phase-3 {
    left: 50%;
}

.phase-4 {
    left: 75%;
}

.phase-5 {
    /* right: 0%; */
    left: 100%;
}

.dropdown-toggle::after {
    content: none !important;
}

.dropdown-menu {
    border-radius: 0px;
}
</style>
