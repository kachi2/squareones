<template>
      <hr style="width: 100%; font-weight: 800;">
            <div style="padding-top: 50px;">
            </div>
            <div class="row">
                <div style="width: 50px ;">
                    <p class="s4" style="padding-left: 5pt;text-indent: 0pt;line-height: 17pt;text-align: left;">表格</p>
                    <p class="s5" style="padding-left: 5pt;text-indent: 0pt;line-height: 11pt;text-align: left;">Form
                    </p>
                </div>
                <div class="col-1 col-md-1">
                    <h1 style="padding-left: 0pt;text-align: left;">NNC1</h1>
                </div>
                <div class="col-10 col-md10">
                </div>
            </div>
            <div class="row" style="padding-top: 5px;">
                <div class="col-1 col-md-1">
                    <span style="font-weight: 800;">8</span><br>
                    <span style="font-weight: 800;">B</span>
                </div>
                <div class=" col-11 col-md-11">
                    <p class="s7" style="padding-left: 15pt;text-indent: 0pt;text-align: left;"><span class="s6">首任董事
                        </span>First
                        Directors <span class="s41">( </span><span class="s15">續上頁 </span><span
                            class="s27">cont’d)</span></p>
                    <p class="s1" style="padding-top: 5pt;padding-left: 15pt;text-align: left;">董事 <span class="s5">(
                        </span>法人團體 <span class="s5">) Director (Body Corporate)</span></p>
                </div>
            </div>
            <div class="row" style="padding-top: 5px;">
                <div class="col-4 col-md-4">
                    <p style="text-indent: 0pt;text-align: left;" />
                    <p class="contents s21"
                        style="text-indent: 0pt;padding-left: 15pt; line-height: 12pt;text-align: left;">1
                        <span class="s26" style="text-indent: 0pt;padding-left: 15pt;">中文姓名 ／ 名稱 </span>
                    </p>
                    <p class="s27" style="padding-left: 35pt;text-indent: 0pt;line-height: 9pt;text-align: left;">Name
                        in Chinese</p>
                    <p style="padding-top: 3pt;text-indent: 0pt;text-align: left;"><br /></p>
                </div>
                <div class="col-8 col-md-8">
                    <div class="textbox" style="border:1.0pt solid #000000;display:block;min-height:34.0pt; ">
                        <p class="s17" style="text-indent: 0pt;line-height: 17pt;">{{ corporate?.chn_company_name }}</p>
                    </div>

                </div>
            </div>
            <div class="row" style="padding-top: 5px;">
                <div class="col-4">
                    <p class="s15" style="padding-top: 3pt;padding-left: 35pt;text-indent: 0pt;text-align: left;">英文姓名
                        <!-- <span style="float:right"> 姓氏 </span> -->
                    </p>
                    <p class="s27" style="padding-left: 35pt;text-indent: 0pt;text-align: left;">Name in English <span
                            style="float:right"></span> </p>
                </div>
                <div class="col-8">
                    <div class="textbox" style="border:1.0pt solid #000000;display:block;min-height:34.0pt; ">
                        <p class="s8" style="text-indent: 0pt;line-height: 17pt;">{{ corporate?.company_name }}</p>
                    </div>

                </div>
            </div>
            <!-- <div class="row" style="padding-top: 5px;">
                <div class="col-4">
                    <p class="s15" style="padding-top: 3pt;padding-left: 35pt;text-indent: 0pt;text-align: left;"><span
                            style="float:right;">名 字 </span></p><br>
                    <p class="s27" style="padding-left: 35pt;text-indent: 0pt;text-align: left;"> <span
                            style="float:right; ">Other Names </span> </p>
                </div>
                <div class="col-8">
                    <div class="textbox"
                        style="border:1.0pt solid #000000;display:block;min-height:34.0pt; ">
                        <p class="s17" style="text-indent: 0pt;line-height: 17pt;text-align: center;">陳大文</p>
                    </div>

                </div>
            </div> -->

            <div class="row" style="padding-top: 5px;">
                <div class="col-12">
                    <p class="s30" style="padding-left: 35pt;text-indent: 0pt;text-align: left;">地址 <span
                            class="s2">Address</span></p>
                    <p class="s12" style="padding-left: 35pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                        (<span class="s9">本處不接納「轉交」地址及郵政信箱號碼 </span>‘Care of ’ addresses and post office box numbers are
                        not acceptable)
                    </p>
                </div>
            </div>
            <div class="row" style="padding-top: 5px;">
                <div class="col-4">
                    <p class="s15" style="padding-top: 3pt;padding-left: 35pt;text-indent: 0pt;text-align: left;">室／樓／座
                        等</p>
                    <p class="s27" style="padding-left: 35pt;text-indent: 0pt;text-align: left;"> Flat／Floor／Block etc
                    </p>
                </div>
                <div class="col-8">
                    <div class="textbox" style="border:1.0pt solid #000000;display:block;min-height:34.0pt;">
                        <p class="s8" style="text-indent: 0pt;line-height: 17pt;">{{ corporate?.flat }}</p>
                    </div>

                </div>
            </div>
            <div class="row" style="padding-top: 5px;">
                <div class="col-4">
                    <p class="s15" style="padding-top: 3pt;padding-left: 35pt;text-indent: 0pt;text-align: left;">大 廈
                    </p>
                    <p class="s27" style="padding-left: 35pt;text-indent: 0pt;text-align: left;"> Building
                    </p>
                </div>
                <div class="col-8">
                    <div class="textbox" style="border:1.0pt solid #000000;display:block;min-height:34.0pt;">
                        <p class="s8" style="text-indent: 0pt;line-height: 17pt;">{{ corporate?.building }}</p>
                    </div>

                </div>
            </div>
            <div class="row" style="padding-top: 5px;">
                <div class="col-4">
                    <p class="s15" style="padding-top: 3pt;padding-left: 35pt;text-indent: 0pt;text-align: left;">街 道 ／屋
                        苑 ／地 段 ／村 等 </p>
                    <p class="s27" style="padding-left: 35pt;text-indent: 0pt;text-align: left;">
                        Street／Estate／Lot／Village etc </p>
                </div>
                <div class="col-8">
                    <div class="textbox" style="border:1.0pt solid #000000;display:block;min-height:34.0pt; ">
                        <p class="s8" style="text-indent: 0pt;line-height: 17pt;">{{ corporate?.street }}</p>
                    </div>

                </div>
            </div>
            <div class="row" style="padding-top: 5px;">
                <div class="col-4">
                    <p class="s15" style="padding-top: 3pt;padding-left: 35pt;text-indent: 0pt;text-align: left;">
                        區／市／省／州／郵遞區號等</p>
                    <p class="s27" style="padding-left: 35pt;text-indent: 0pt;text-align: left;"> District／ City／
                        Province／ State／ Postal Code etc</p>
                </div>
                <div class="col-8">
                    <div class="textbox" style="border:1.0pt solid #000000;display:block;min-height:34.0pt; ">
                        <p class="s8" style="text-indent: 0pt;line-height: 17pt;">{{ corporate?.state ?? corporate?.city }}</p>
                    </div>

                </div>
            </div>

            <div class="row" style="padding-top: 5px;">
                <div class="col-4">
                    <p class="s15" style="padding-top: 3pt;padding-left: 35pt;text-indent: 0pt;text-align: left;">國 家 ／
                        地 區</p>
                    <p class="s27" style="padding-left: 35pt;text-indent: 0pt;text-align: left;"> Country／Region</p>
                </div>
                <div class="col-8">
                    <div class="textbox" style="border:1.0pt solid #000000;display:block;min-height:34.0pt; ">
                        <p class="s8" style="text-indent: 0pt;line-height: 17pt;">{{ corporate?.country }}</p>
                    </div>

                </div>
            </div>

            <div class="row" style="padding-top: 20px;">
                <div class="col-8">
                    <p class="s30" style="padding-left: 35pt;text-indent: 0pt;line-height: 12pt;text-align: left;">
                        商業登記號碼 <span class="s2">Business Registration Number</span></p>
                    <p class="s12" style="padding-left: 35pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                        (<span class="s9">只適用於在香港註冊的法人團體 </span>Only applicable to body corporate registered in Hong
                        Kong)</p>
                    <p style="text-indent: 0pt;text-align: left;"><br /></p>
                </div>
                <div class="col-4">
                    <div class="textbox"
                        style="border:1.0pt solid #000000;display:block;min-height:24.0pt;width:155.4pt;">
                        <p class="s17" style="text-indent: 0pt;line-height: 17pt;text-align: center;">陳大文</p>
                    </div>

                </div>
            </div>

            <div class="row">
                <div style="width: 50px;">

                </div>

                <div class="textbox"
                    style="border:1.0pt solid #000000;display:block;min-height:37.7pt;top:0.5pt;width:73.2pt;">
                    <p class="s31" style="padding-top: 8pt;text-indent: 0pt;line-height: 11pt;text-align: center;">提示
                    </p>
                    <p class="s32" style="text-indent: 0pt;line-height: 9pt;text-align: center;">Advisory Note</p>
                </div>
                <div class="textbox"
                    style="border:1.0pt solid #000000;display:block;left:0.5pt;min-height:37.7pt;top:73.6pt;width:355.1pt;">
                    <p class="s31" style="padding: 3pt;text-indent: 0pt;text-align: justify;">
                        所有公司董事均應閱讀公司註冊處編製的《董事責任指引》，
                        並熟悉該指引所概述的董事一般責任。 <span class="s32">All directors of the company are advised to read ‘A Guide on
                            Directors’
                            Duties’ published by the Companies Registry and acquaint themselves with the general duties
                            of directors
                            outlined in the Guide.</span></p>
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <p class="s30"
                        style="padding-top: 5pt;padding-left: 35pt;text-indent: 0pt;line-height: 12pt;text-align: left;">
                        出任董事職位同意書 <span class="s2">Consent to Act as Director</span></p>
                    <p style="text-indent: 0pt;text-align: left;" />
                    <p class="s9" style="padding-left: 35pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                        請在適用的空格內加上 <span class="s10"></span><span class="s11"> </span>號 <span class="s12">Please tick
                            the relevant box</span></p>

                    <div class="row">
                        <div style="width: 45px;">

                        </div>
                        <div style="width: 30px;">
                            <input type="checkbox" style="width: 20px; height: 20px;">
                        </div>
                        <div class="col-9">

                            <p class="s30"
                                style="padding-top: 2pt;padding-left: 3pt;text-indent: 0pt;line-height: 12pt;text-align: left;">
                                本人獲上述法人團體授權確認上述法人團體同意在公司成立為法團時擔任其董事。 </p>
                            <p class="s27" style="padding-left: 3pt;text-indent: 0pt;text-align: left;">I, being
                                authorized by the above body
                                corporate, confirm that the body corporate consents to be a director of this company on
                                its incorporation.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col">
                <table style="border-collapse:collapse; margin-top:0px; margin-left:40px" cellspacing="0">
                    <tr style="height:3pt">
                        <td style="width:82pt">
                            <p style="text-indent: 0pt;text-align: left;"><br /></p>
                            <p class="s15" style="padding-left: 28pt;text-indent: 0pt;text-align: left;">簽署 <span
                                    class="s16">Signed: </span></p>
                        </td>
                        <td style="width:250pt">
                            <!-- <p style="text-indent: 0pt;text-align: left;"><br /></p> -->
                            <p class="s33"style="border-bottom:1px solid #000; background-color: yellow; padding-left: 6pt; padding-top: 10px;text-indent: 0pt;text-align: left;">
                                <!-- INSERT SIGNATURE HERE -->
                                <!-- <img width="100" :src="startCompanyStore?.signatureImage" alt=""> -->
                                <img width="100" :src="corporate?.signature" alt="">
                            </p>
                        </td>
                        <td style="width:55pt">
                            <p style="text-indent: 0pt;text-align: left;"><br /></p>
                        </td>
                    </tr>
                 <tr style="height:3pt">
                    <td style="width:82pt">
                        <p style="text-indent: 0pt;text-align: left;"><br /></p>
                        <p class="s15" style="padding-left: 28pt;text-indent: 0pt;text-align: left;">姓 名<span
                                class="s16">Name:</span></p>
                    </td>
                    <td style="width:350pt">
                        <p style="text-indent: 0pt;text-align: left;"><br /></p>
                        <p class="s16"
                            style="border-bottom:1px solid #000; padding-left: 6pt;text-indent: 0pt;text-align: left;">
                            <!-- {{ corporate?.authorized_persons.first_name }} {{ corporate?.authorized_persons.last_name }} -->
                        </p>
                    </td>
                    <td style="width:55pt">
                        <p style="text-indent: 0pt;text-align: left;"><br /></p>
                    </td>
                </tr> 
                    <tr style="height:44pt">
                        <td style="width:82pt">
                            <!-- <p style="text-indent: 0pt;text-align: left; padding-top: 10px;"><br /></p> -->
                            <p class="s15" style="padding-left: 28pt;text-indent: 0pt;text-align: left;">身 分 <span
                                    class="s16">Capacity:</span></p>
                        </td>
                        <td style="width:250pt">
                            <p style="text-indent: 0pt;text-align: left; padding-top: 0px;"><br /></p>
                            <p class="s16"
                                style="border-bottom:1px solid #000; padding-left: 6pt;text-indent: 0pt;text-align: left;">
                                DIRECTOR
                            </p>
                        </td>
                        <td style="width:55pt">
                            <p style="text-indent: 0pt;text-align: left;"><br /></p>
                        </td>
                    </tr>
                </table>
            </div>

            <div class="row" style="padding-top: 30px;">
                <div class="col-12">
                    <div class="row">
                        <div style="width: 45px;">

                        </div>
                        <div style="width: 30px;">
                            <input type="checkbox" style="width: 20px; height: 20px;" disabled checked>
                        </div>
                        <div class="col-9">

                            <p class="s30"
                                style="padding-top: 2pt;padding-left: 3pt;text-indent: 0pt;line-height: 12pt;text-align: left;">
                                出任董事職位同意書會 於公司成立 為法團的日期 後 15 日 內 交 付 登記。 </p>
                            <p class="s27" style="padding-left: 3pt;text-indent: 0pt;text-align: left;">The Consent to
                                Act as Director will be delivered for registration not later than 15 days after the date
                                of incorporation of
                                the company.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row" style="padding-top: 200px;">
                <div class=" col-10 col-md-10">
                    <p class="s19" style="padding-top: 4pt;padding-left: 35pt;text-indent: 0pt;text-align: left;">指明編號
                        <span class="s20">1/2023(2023 </span>年 <span class="s20">12 </span>月<span class="s20">)
                            Specification No.
                            1/2023 (December 2023)</span>
                    </p>
                </div>
                <div class="col-2 col-md-2">
                    <!-- <p class="s21" style="padding-top: 4pt;padding-left: 35pt;text-indent: 0pt;text-align: right;">Page
                        2/9頁</p> -->
                </div>
            </div>
</template>

<script setup lang="ts">
import { useStartCompanyStore } from '../StartCompany/StartCompany_store';
import {computed} from 'vue'
const startCompanyStore = useStartCompanyStore();

const props = defineProps<{
    corporate: any
}>();

const checkCountryRegistered = computed(()=> {

    if(props.corporate.country_registered != "Hong Kong"){
        return ''
    }else{
        return props.corporate.registeration_no
    }
});


</script>

<style scoped>
@import '@/assets/pdf.css';
</style>