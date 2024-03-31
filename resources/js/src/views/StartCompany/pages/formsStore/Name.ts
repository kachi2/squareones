// @ts-nocheck
import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'
import { useForm } from 'vee-validate';
// @ts-ignore
import * as yup from 'yup';

export const nameForm = defineStore('name', () => {

    const isSecond = ref(false)
    const isThird = ref(false)
    const isForth = ref(false)
    const isFifth = ref(false)

    const chineseCheck = (value: any) => {
        var pattern = /^[\u4E00-\u9FFF\u3400-\u4DBF]+$/;
        return pattern.test(value)
    }

    const rules = {
        choice_level1_chn_name: yup.string().required('').test('chineseCheck', 'Please input only Chinese characters', chineseCheck),
        choice_level2_chn_name: yup.string().required('').test('chineseCheck', 'Please input only Chinese characters', chineseCheck),
        choice_level3_chn_name: yup.string().required('').test('chineseCheck', 'Please input only Chinese characters', chineseCheck),
        choice_level4_chn_name: yup.string().required('').test('chineseCheck', 'Please input only Chinese characters', chineseCheck),
        choice_level5_chn_name: yup.string().required('').test('chineseCheck', 'Please input only Chinese characters', chineseCheck),

        choice_level1_eng_name: yup.string().required(''),
        choice_level2_eng_name: yup.string().required(''),
        choice_level3_eng_name: yup.string().required(''),
        choice_level4_eng_name: yup.string().required(''),
        choice_level5_eng_name: yup.string().required(''),
    };

    const { errors, handleSubmit, defineField, setFieldValue } = useForm({
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

    const [choice_level1_eng_name] = defineField('choice_level1_eng_name',);
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
        setFieldValue
    }
})
