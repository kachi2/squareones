// @ts-nocheck
import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useForm } from 'vee-validate';
import { useStorage } from '@vueuse/core'
// @ts-ignore
import * as yup from 'yup';


export const nameForm = defineStore('name', () => {

    const isSecond = useStorage('name_isSecond', false)
    const isThird = useStorage('name_isThird', false)
    const isForth = useStorage('name_isForth', false)
    const isFifth = useStorage('name_isFifth', false)

    const chineseCheck = (value: any) => {
        var pattern = /^[\u4E00-\u9FFF\u3400-\u4DBF\s*\(\)\,]+$/;
        return pattern.test(value)
    }

    const rules = {
        // choice_level1_chn_name: yup.string().test('chineseCheck', 'Please input only Chinese characters', chineseCheck),
        // choice_level2_chn_name: yup.string().test('chineseCheck', 'Please input only Chinese characters', chineseCheck),
        // choice_level3_chn_name: yup.string().test('chineseCheck', 'Please input only Chinese characters', chineseCheck),
        // choice_level4_chn_name: yup.string().test('chineseCheck', 'Please input only Chinese characters', chineseCheck),
        // choice_level5_chn_name: yup.string().test('chineseCheck', 'Please input only Chinese characters', chineseCheck),

        // choice_level1_eng_name: yup.string(),
        // choice_level2_eng_name: yup.string(),
        // choice_level3_eng_name: yup.string(),
        // choice_level4_eng_name: yup.string(),
        // choice_level5_eng_name: yup.string(),
    };

    const { errors, handleSubmit, defineField, setFieldValue, resetForm, resetField } = useForm({
        validationSchema: yup.object(rules),

        initialValues: {
            choice_level1_prefix: 'Limited',
            choice_level1_chn_prefix: '有限公司',

            choice_level2_prefix: 'Limited',
            choice_level2_chn_prefix: '有限公司',


            choice_level3_prefix: 'Limited',
            choice_level3_chn_prefix: '有限公司',

            choice_level4_prefix: 'Limited',
            choice_level4_chn_prefix: '有限公司',

            choice_level5_prefix: 'Limited',
            choice_level5_chn_prefix: '有限公司',
        },
    });

    const [choice_level1_eng_name] = defineField('choice_level1_eng_name');
    const [choice_level1_chn_name] = defineField('choice_level1_chn_name');
    const [choice_level1_prefix] = defineField('choice_level1_prefix');
    const [choice_level1_chn_prefix] = defineField('choice_level1_chn_prefix');

    const [choice_level2_eng_name] = defineField('choice_level2_eng_name');
    const [choice_level2_chn_name] = defineField('choice_level2_chn_name');
    const [choice_level2_prefix] = defineField('choice_level2_prefix');
    const [choice_level2_chn_prefix] = defineField('choice_level2_chn_prefix');

    const [choice_level3_eng_name] = defineField('choice_level3_eng_name');
    const [choice_level3_chn_name] = defineField('choice_level3_chn_name');
    const [choice_level3_prefix] = defineField('choice_level3_prefix');
    const [choice_level3_chn_prefix] = defineField('choice_level3_chn_prefix');

    const [choice_level4_eng_name] = defineField('choice_level4_eng_name');
    const [choice_level4_chn_name] = defineField('choice_level4_chn_name');
    const [choice_level4_prefix] = defineField('choice_level4_prefix');
    const [choice_level4_chn_prefix] = defineField('choice_level4_chn_prefix');

    const [choice_level5_eng_name] = defineField('choice_level5_eng_name');
    const [choice_level5_chn_name] = defineField('choice_level5_chn_name');
    const [choice_level5_prefix] = defineField('choice_level5_prefix');
    const [choice_level5_chn_prefix] = defineField('choice_level5_chn_prefix');

    const isSaving = false

    // localStorage
    const choice_level1_eng_name_storage = useStorage('squareOne-name-choice_level1_eng_name', '');
    const choice_level1_chn_name_storage = useStorage('squareOne-name-choice_level1_chn_name', '');
    const choice_level1_prefix_storage = useStorage('squareOne-name-choice_level1_prefix', '');
    const choice_level1_chn_prefix_storage = useStorage('squareOne-name-choice_level1_chn_prefix', '');

    const choice_level2_eng_name_storage = useStorage('squareOne-name-choice_level2_eng_name', '');
    const choice_level2_chn_name_storage = useStorage('squareOne-name-choice_level2_chn_name', '');
    const choice_level2_prefix_storage = useStorage('squareOne-name-choice_level2_prefix', '');
    const choice_level2_chn_prefix_storage = useStorage('squareOne-name-choice_level2_chn_prefix', '');

    const choice_level3_eng_name_storage = useStorage('squareOne-name-choice_level3_eng_name', '');
    const choice_level3_chn_name_storage = useStorage('squareOne-name-choice_level3_chn_name', '');
    const choice_level3_prefix_storage = useStorage('squareOne-name-choice_level3_prefix', '');
    const choice_level3_chn_prefix_storage = useStorage('squareOne-name-choice_level3_chn_prefix', '');

    const choice_level4_eng_name_storage = useStorage('squareOne-name-choice_level4_eng_name', '');
    const choice_level4_chn_name_storage = useStorage('squareOne-name-choice_level4_chn_name', '');
    const choice_level4_prefix_storage = useStorage('squareOne-name-choice_level4_prefix', '');
    const choice_level4_chn_prefix_storage = useStorage('squareOne-name-choice_level4_chn_prefix', '');

    const choice_level5_eng_name_storage = useStorage('squareOne-name-choice_level5_eng_name', '');
    const choice_level5_chn_name_storage = useStorage('squareOne-name-choice_level5_chn_name', '');
    const choice_level5_prefix_storage = useStorage('squareOne-name-choice_level5_prefix', '');
    const choice_level5_chn_prefix_storage = useStorage('squareOne-name-choice_level5_chn_prefix', '');

    function saveToLocalStorage() {
        if (choice_level1_eng_name.value) choice_level1_eng_name_storage.value = choice_level1_eng_name.value
        if (choice_level1_chn_name.value) choice_level1_chn_name_storage.value = choice_level1_chn_name.value
        if (choice_level1_prefix.value) choice_level1_prefix_storage.value = choice_level1_prefix.value
        if (choice_level1_chn_prefix.value) choice_level1_chn_prefix_storage.value = choice_level1_chn_prefix.value

        if (choice_level2_eng_name.value) choice_level2_eng_name_storage.value = choice_level2_eng_name.value
        if (choice_level2_chn_name.value) choice_level2_chn_name_storage.value = choice_level2_chn_name.value
        if (choice_level2_prefix.value) choice_level2_prefix_storage.value = choice_level2_prefix.value
        if (choice_level2_chn_prefix.value) choice_level2_chn_prefix_storage.value = choice_level2_chn_prefix.value

        if (choice_level3_eng_name.value) choice_level3_eng_name_storage.value = choice_level3_eng_name.value
        if (choice_level3_chn_name.value) choice_level3_chn_name_storage.value = choice_level3_chn_name.value
        if (choice_level3_prefix.value) choice_level3_prefix_storage.value = choice_level3_prefix.value
        if (choice_level3_chn_prefix.value) choice_level3_chn_prefix_storage.value = choice_level3_chn_prefix.value

        if (choice_level4_eng_name.value) choice_level4_eng_name_storage.value = choice_level4_eng_name.value
        if (choice_level4_chn_name.value) choice_level4_chn_name_storage.value = choice_level4_chn_name.value
        if (choice_level4_prefix.value) choice_level4_prefix_storage.value = choice_level4_prefix.value
        if (choice_level4_chn_prefix.value) choice_level4_chn_prefix_storage.value = choice_level4_chn_prefix.value

        if (choice_level5_eng_name.value) choice_level5_eng_name_storage.value = choice_level5_eng_name.value
        if (choice_level5_chn_name.value) choice_level5_chn_name_storage.value = choice_level5_chn_name.value
        if (choice_level5_prefix.value) choice_level5_prefix_storage.value = choice_level5_prefix.value
        if (choice_level5_chn_prefix.value) choice_level5_chn_prefix_storage.value = choice_level5_chn_prefix.value
    }

    function updateFields(companyInProgress: any) {
        if (choice_level1_eng_name_storage.value.length > 1)
            choice_level1_eng_name.value = choice_level1_eng_name_storage.value
        if (choice_level1_chn_name_storage.value.length > 1)
            choice_level1_chn_name.value = choice_level1_chn_name_storage.value
        if (choice_level1_prefix_storage.value.length > 1)
            choice_level1_prefix.value = choice_level1_prefix_storage.value
        if (choice_level1_chn_prefix_storage.value.length > 1)
            choice_level1_chn_prefix.value = choice_level1_chn_prefix_storage.value

        if (choice_level2_eng_name_storage.value.length > 1)
            choice_level2_eng_name.value = choice_level2_eng_name_storage.value
        if (choice_level2_chn_name_storage.value.length > 1)
            choice_level2_chn_name.value = choice_level2_chn_name_storage.value
        if (choice_level2_prefix_storage.value.length > 1)
            choice_level2_prefix.value = choice_level2_prefix_storage.value
        if (choice_level2_chn_prefix_storage.value.length > 1)
            choice_level2_chn_prefix.value = choice_level2_chn_prefix_storage.value


        if (choice_level3_eng_name_storage.value.length > 1)
            choice_level3_eng_name.value = choice_level3_eng_name_storage.value
        if (choice_level3_chn_name_storage.value.length > 1)
            choice_level3_chn_name.value = choice_level3_chn_name_storage.value
        if (choice_level3_prefix_storage.value.length > 1)
            choice_level3_prefix.value = choice_level3_prefix_storage.value
        if (choice_level3_chn_prefix_storage.value.length > 1)
            choice_level3_chn_prefix.value = choice_level3_chn_prefix_storage.value


        if (choice_level4_eng_name_storage.value.length > 1)
            choice_level4_eng_name.value = choice_level4_eng_name_storage.value
        if (choice_level4_chn_name_storage.value.length > 1)
            choice_level4_chn_name.value = choice_level4_chn_name_storage.value
        if (choice_level4_prefix_storage.value.length > 1)
            choice_level4_prefix.value = choice_level4_prefix_storage.value
        if (choice_level4_chn_prefix_storage.value.length > 1)
            choice_level4_chn_prefix.value = choice_level4_chn_prefix_storage.value


        if (choice_level5_eng_name_storage.value.length > 1)
            choice_level5_eng_name.value = choice_level5_eng_name_storage.value
        if (choice_level5_chn_name_storage.value.length > 1)
            choice_level5_chn_name.value = choice_level5_chn_name_storage.value
        if (choice_level5_prefix_storage.value.length > 1)
            choice_level5_prefix.value = choice_level5_prefix_storage.value
        if (choice_level5_chn_prefix_storage.value.length > 1)
            choice_level5_chn_prefix.value = choice_level5_chn_prefix_storage.value
    }

    return {
        choice_level1_eng_name,
        choice_level1_chn_name,
        choice_level1_prefix,
        choice_level1_chn_prefix,

        choice_level2_eng_name,
        choice_level2_chn_name,
        choice_level2_prefix,
        choice_level2_chn_prefix,

        choice_level3_eng_name,
        choice_level3_chn_name,
        choice_level3_prefix,
        choice_level3_chn_prefix,

        choice_level4_eng_name,
        choice_level4_chn_name,
        choice_level4_prefix,
        choice_level4_chn_prefix,

        choice_level5_eng_name,
        choice_level5_chn_name,
        choice_level5_prefix,
        choice_level5_chn_prefix,


        isSecond,
        isThird,
        isForth,
        isFifth,
        isSaving,

        errors,
        handleSubmit,
        setFieldValue,

        updateFields,
        saveToLocalStorage,
        resetForm,

        resetField,
        chineseCheck
    }
})
