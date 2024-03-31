import { defineStore } from 'pinia'
import { descriptionForm } from './pages/formsStore/Description';


export const useFormsUpdater = defineStore('formsUpdater', () => {

    const description_form = descriptionForm()
    function updateForms() {
        console.log('Updated form store!');
        console.log(description_form);

    }


    return {
        updateForms
    }
})
