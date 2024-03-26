import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'


export const nameForm = defineStore('name', () => {


    const isSecond = ref(false)
    const isThird = ref(false)
    const isForth = ref(false)
    const isFifth = ref(false)

    const isSaving = ref(false)

    const choice_level1 = reactive<any>({
        eng_name: '',
        chn_name: '',
        prefix: 'Limited',
        chn_prefix: '有限公司',
    })

    const choice_level2 = reactive<any>({
        eng_name: '',
        chn_name: '',
        prefix: 'Limited',
        chn_prefix: '有限公司',
    })

    const choice_level3 = reactive<any>({
        eng_name: '',
        chn_name: '',
        prefix: 'Limited',
        chn_prefix: '有限公司',
    })

    const choice_level4 = reactive<any>({
        eng_name: '',
        chn_name: '',
        prefix: 'Limited',
        chn_prefix: '有限公司',
    })

    const choice_level5 = reactive<any>({
        eng_name: '',
        chn_name: '',
        prefix: 'Limited',
        chn_prefix: '有限公司',
    })

    return {
        choice_level1,
        choice_level2,
        choice_level3,
        choice_level4,
        choice_level5,
        isSecond,
        isThird,
        isForth,
        isFifth,
        isSaving,
    }
})
