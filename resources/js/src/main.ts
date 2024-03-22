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

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.component('VueDatePicker', VueDatePicker);
app.component('vSelect', vSelect);

app.use(createPinia())
app.use(router)

app.mount('#app')
