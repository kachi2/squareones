// @ts-nocheck

//bootstrap@5.3.2
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

//bootstrap-icons
import 'bootstrap-icons/font/bootstrap-icons.css'

//vue-select@beta
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

// vue3-datepicker
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

import './assets/main.css'

// npm install -S vue-sweetalert2
import 'sweetalert2/dist/sweetalert2.min.css';

// https://www.npmjs.com/package/vue-toast-notification
import 'vue-toast-notification/dist/theme-sugar.css';
import VueSignaturePad from 'vue-signature-pad';

// https://www.npmjs.com/package/vue3-loading-skeleton
import { SkeletonLoader } from "vue3-loading-skeleton";
import "vue3-loading-skeleton/dist/style.css";

//https://www.npmjs.com/package/vue3-apexcharts
import VueApexCharts from "vue3-apexcharts";

import VueTelInput from 'vue-tel-input';
import 'vue-tel-input/vue-tel-input.css';

//https://hc200ok.github.io/vue3-easy-data-table-doc/getting-started.html
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import isLoadingComponent from '@/components/isLoadingComponent.vue'
import appModeToggler from '@/components/appModeToggler.vue'
import modalCloseBtn from '@/components/modalCloseBtn.vue'

const app = createApp(App)

app.component('VueDatePicker', VueDatePicker);
app.component('vSelect', vSelect);
app.component("SkeletonLoader", SkeletonLoader);
app.component("isLoadingComponent", isLoadingComponent);
app.component("appModeToggler", appModeToggler);
app.component('EasyDataTable', Vue3EasyDataTable);
app.component('modalCloseBtn', modalCloseBtn);

app.use(createPinia())
app.use(VueApexCharts);
app.use(router)
app.use(VueTelInput)
app.use(VueSignaturePad);

app.mount('#app')
