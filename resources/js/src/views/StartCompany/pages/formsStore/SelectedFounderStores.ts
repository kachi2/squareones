import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'


export const useSelectedFounder = defineStore('SelectedFounder', () => {
    const founders = reactive({
        company_entity_id: '',
        signature: '',
        name:''
    });

  const founderSelected_storage: any =  useStorage('foundersSelected.company_entity_id', '')
  const selectedSignature_storage: any =  useStorage('foundersSelected.signature', '')
  const selectedName_storage: any =  useStorage('foundersSelected.name', '')

  function saveToLocalStorage()
  {
    founderSelected_storage.value = founders.company_entity_id
    selectedSignature_storage.value = founders.signature
    selectedName_storage.value = founders.name
  }

  return {
    saveToLocalStorage,
    founders
  }
});