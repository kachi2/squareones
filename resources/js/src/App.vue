<template>
  <RouterView />
</template>

<script setup lang="ts">
import { watchEffect } from 'vue';
import { useTemplateStore } from './stores/templateStore';
const templateStore = useTemplateStore()

watchEffect(() => {
  document.body.style.backgroundColor = templateStore.appMode === 'light' ? '#eee' : '#212935f2';
});
</script>

<style>
.card:not(.exemption) {
  background-color: v-bind('templateStore.cardBg') !important;
  color: v-bind('templateStore.cardTextColor');
  border: 1px solid v-bind('templateStore.borderInDark') !important;
}

.bg-dynamic {
  color: v-bind('templateStore.cardTextColor');
  background-color: v-bind('templateStore.cardBg') !important;
}


.py-4 {
  background:v-bind('templateStore.cardBg') !important;
  padding:8px;
}

input:not(.exemption),
select,
textarea,
.list-group-item,
.nav-link,
table tr th,
table tr td {
  background-color: transparent !important;
  color: v-bind('templateStore.textColor') !important;
}

.v-select,
.v-select *,
.modal-content,
.dropdown-menu {
  background-color: v-bind('templateStore.bgColor') !important;
  color: v-bind('templateStore.textColor') !important;
}


.dropdown-menu {
  border: 1px solid v-bind('templateStore.border') !important;
}

.v-select {
  border: 1px solid v-bind('templateStore.borderInDark') !important;
}

.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active {
  font-weight: bolder;
  border-bottom: 2px solid var(--bs-primary) !important;
  color: v-bind('templateStore.textColor') !important;
}

.vue3-easy-data-table {
  border: none !important;
}

.vue3-easy-data-table__main,
.vue3-easy-data-table__footer {
  background-color: v-bind('templateStore.cardBg') !important;
  color: v-bind('templateStore.cardTextColor') !important;
  border: none !important;
}

.vue3-easy-data-table__header,
.vue3-easy-data-table__header .text-muted {
  background-color: v-bind('templateStore.easyTableHeaderBG') !important;
  color: v-bind('templateStore.cardTextColor') !important;
}

.easy-data-table__rows-selector ul.select-items li {
  background-color: v-bind('templateStore.bgColor') !important;
  color: v-bind('templateStore.textColor') !important;
}

.vue3-easy-data-table__message,
input::placeholder,
textarea::placeholder,
.dropdown-item {
  color: v-bind('templateStore.textColor') !important;
}


/* .dropdown-item:hover {
  background-color: red !important;
} */

.dropdown-item:hover:not(.exemption) {
  background-color: #92b3d5 !important;
}


input[type="text"]:disabled,
.form-select:disabled,
.vs--disabled .vs__selected-options,
.vs--disabled .vs__selected {
  background-color: v-bind('templateStore.disabledBg') !important;
}





/* form floating custom */
.form-floating-custom {
  position: relative;
}

.form-floating-custom .form-control,
.form-floating-custom .form-select,
.form-floating-custom textarea {

  height: auto;
  padding: 1rem 0.75rem 0.75rem 1.0rem;

  /* border: 1px solid #ced4da; */
  /* border-radius: 0.25rem; */
}

.form-floating-custom label {
  position: absolute;
  top: 1rem;
  left: 0.75rem;
  transition: all 0.1s ease-in-out;
  pointer-events: none;
  padding: 0 0.25rem;
  background: transparent;
  border: none;
  color: #6c757d;
}

.form-floating-custom .form-control:focus~label,
.form-floating-custom .form-control:not(:placeholder-shown)~label,
.form-floating-custom .form-select:focus~label,
.form-floating-custom .form-select:not([value=""])~label,
.form-floating-custom textarea:focus~label,
.form-floating-custom textarea:not(:placeholder-shown)~label {
  top: -0.75em;
  left: 0.75rem;
  font-size: 0.85em;
  color: #6c757d;
  background-color: v-bind('templateStore.bgColor');
  padding: 0 0.25rem;
  border-radius: 0.25rem;
  z-index: 1;
}

.form-floating-custom .form-control:focus,
.form-floating-custom .form-control:not(:placeholder-shown),
.form-floating-custom .form-select:focus,
.form-floating-custom .form-select:not([value=""]),
.form-floating-custom textarea:focus,
.form-floating-custom textarea:not(:placeholder-shown) {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.form-floating-custom .form-select,
.form-floating-custom textarea {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}




.fixed-label-custom {
  position: relative;
  /* margin-top: 1.5em; */
}

.fixed-label-custom label {
  position: absolute;
  top: -0.7em;
  left: 1em;
  color: #6c757d;
  background-color: v-bind('templateStore.bgColor');
  padding: 0 0.5em;
  font-size: 0.8em;
  /* z-index: 2; */
}

.fixed-label-custom .vs__dropdown-toggle {
  /* padding-left: 0.7em !important; */
  border-radius: var(--bs-border-radius);
}

.fixed-label-custom .dp__input,
.fixed-label-custom .vti__input {
  line-height: 2.70rem;
}

.vs--single .v__selected {
  padding-left: .50rem;

  /* border: 1px solid #ced4da; */
  /* border-radius: 0.25rem; */
}

.fixed-label-custom .vue-tel-input {
  padding-left: .50rem;

  /* border: 1px solid #ced4da; */
  /* border-radius: 0.25rem; */
}
</style>
