<template>
  <RouterView />
</template>

<script setup lang="ts">
import { watchEffect } from 'vue';
import { useTemplateStore } from './stores/templateStore';
const templateStore = useTemplateStore()

watchEffect(() => {
  document.body.style.backgroundColor = templateStore.appMode === 'light' ? '#fff' : '#212935f2';
});
</script>

<style>
.card:not(.exemption) {
  background-color: v-bind('templateStore.cardBg') !important;
  color: v-bind('templateStore.cardTextColor');
  border: 1px solid v-bind('templateStore.borderInDark') !important;
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

.vue3-easy-data-table__main,
.vue3-easy-data-table__footer,
.vue3-easy-data-table__header .text-muted {
  background-color: v-bind('templateStore.cardBg') !important;
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

.dropdown-item:hover {
  background-color: var(--bs-info) !important;
}
</style>
