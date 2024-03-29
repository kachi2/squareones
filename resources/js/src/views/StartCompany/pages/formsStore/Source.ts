import { defineStore } from 'pinia'
import { useForm } from 'vee-validate';
// @ts-ignore
import * as yup from 'yup';


export const sourceForm = defineStore('source', () => {

    const rules = {
        income_expected_source: yup.string().required('Required field'),
        origin_funds: yup.string().required('Required field'),
        wealth_initial_source: yup.string().required('Required field'),
        income_outgoing_source: yup.string().required('Required field'),
    };

    const { errors, handleSubmit, defineField, setFieldValue } = useForm({
        validationSchema: yup.object(rules),
    });

    const [income_expected_source] = defineField('income_expected_source');
    const [origin_funds] = defineField('origin_funds');
    const [wealth_initial_source] = defineField('wealth_initial_source');
    const [income_outgoing_source] = defineField('income_outgoing_source');
    const isSaving = false

    return {
        income_expected_source,
        origin_funds,
        wealth_initial_source,
        income_outgoing_source,
        isSaving,

        errors,
        handleSubmit,
        setFieldValue
    }
})
