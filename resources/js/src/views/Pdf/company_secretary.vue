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
                <div class="col-1">
                    <h1 style="padding-left: 0pt;text-align: left;">NNC1</h1>
                </div>
                <div class="col-10">
                </div>
            </div>
            <div class="row" style="padding-top: 5px;">
                <div class=" col-1 col-md-1">
                    <span style="font-weight: 800;">7</span>
                    <span style="font-weight: 800;">B</span>
                </div>
                <div class=" col-11 col-md-11">
                    <p class="s6" style="padding-left: 40pt;text-indent: -28pt;text-align: left;">首任公司秘書 <span
                            class="s7">First
                            Company Secretary </span><span class="s41">( </span><span class="s15">續上頁 </span><span
                            class="s27">cont’d)</span></p>
                    <p class="s35" style="padding-top: 0pt;padding-left: 40pt;text-indent: -29pt;text-align: left;">
                        公司秘書 <span class="s36">( </span>法人團體 <span class="s36">) Company Secretary (Body
                            Corporate)</span></p>
                </div>
            </div>
            <div class="row" style="padding-top: 20px;">
                <div class="col-3 col-md-3">
                    <p style="text-indent: 0pt;text-align: left;" />
                    <p class="s30" style="padding-left: 35pt;text-indent: 0pt;line-height: 12pt;text-align: left;">中文姓名
                    </p>
                    <p class="s2" style="padding-left: 35pt;text-indent: 0pt;line-height: 10pt;text-align: left;">Name
                        in Chinese</p>
                </div>
                <div class="col-8 col">
                    <div class="textbox"
                        style="border:1.0pt solid #000000;display:block;min-height:40.0pt;width:351.4pt;">
                        <p class="s17" style="text-indent: 0pt;line-height: 17pt;">{{ data?.secretary?.chn_name }}</p>
                    </div>
                </div>
            </div>
            <div class="row" style="padding-top: 20px;">
                <div class="col-3">
                    <p class="s30" style="padding-left: 35pt;text-indent: 0pt;line-height: 12pt;text-align: left;">英文名稱
                    </p>
                    <p class="s2" style="padding-left: 35pt;text-indent: 0pt;line-height: 10pt;text-align: left;">Name
                        in English</p>
                </div>
                <div class="col-9">
                    <div class="textbox"
                        style="border:1.0pt solid #000000;display:block;min-height:40.0pt;width:351pt;">
                        <p class="s8" style="text-indent: 0pt;line-height: 17pt; padding-top:10px">{{ data?.secretary?.name }}</p>
                    </div>

                </div>
            </div>
            <div class="col-12" style="padding-top: 20px;">
                <p class="s30" style="padding-left: 35pt;text-indent: 0pt;line-height: 12pt;text-align: left;">香港地址
                    <span class="s2">Hong Kong Address</span></p>
                <p class="s12" style="padding-left: 35pt;text-indent: 0pt;line-height: 11pt;text-align: left;">(<span
                        class="s9">本處不接納「轉交」地址及郵政信箱號碼 </span>‘Care of’ addresses and post office box numbers are not
                    acceptable)</p>
                <p style="padding-top: 2pt;text-indent: 0pt;text-align: left;"><br /></p>
            </div>
            <div class="row" style="padding-top: 5px;">
                <div class="col-4">
                    <p class="s15" style="padding-left: 35pt;text-indent: 0pt;line-height: 11pt;text-align: left;">室 ／樓
                        ／座等 </p>
                    <p class="s16" style="padding-left:35pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                        Flat<span class="s15">／</span>Floor<span class="s15">／</span>Block etc.</p>
                    <p style="padding-top: 3pt;text-indent: 0pt;text-align: left;"><br /></p>
                </div>
                <div class="col-8">
                    <div class="textbox" style="border:1.0pt solid #000000;display:block;min-height:34.0pt; ">
                        <p class="s8" style="text-indent: 0pt;line-height: 17pt;">{{ data?.secretary?.flat }}</p>
                    </div>

                </div>
            </div>

            <div class="row" style="padding-top: 5px;">
                <div class="col-4">
                    <p class="s15" style="padding-left: 35pt;text-indent: 0pt;line-height: 11pt;text-align: left;">大廈
                    </p>
                    <p class="s16" style="padding-left: 35pt;text-indent: 0pt;line-height: 9pt;text-align: left;">
                        Building</p>
                </div>
                <div class="col-8">
                    <div class="textbox" style="border:1.0pt solid #000000;display:block;min-height:34.0pt; ">
                        <p class="s8" style="text-indent: 0pt;line-height: 17pt;">{{ data?.secretary?.building }}</p>
                    </div>

                </div>
            </div>

            <div class="row" style="padding-top: 5px;">
                <div class="col-4">
                    <p class="s15" style="padding-left: 35pt;text-indent: 0pt;line-height: 11pt;text-align: left;">街道
                        ／屋苑 ／地段 ／村 等</p>
                    <p class="s16" style="padding-left: 35pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                        Street<span class="s15">／</span>Estate<span class="s15">／</span>Lot<span
                            class="s15">／</span>Village etc<span class="s18">.</span></p>
                </div>
                <div class="col-8">
                    <div class="textbox" style="border:1.0pt solid #000000;display:block;min-height:34.0pt; ">
                        <p class="s8" style="text-indent: 0pt;line-height: 17pt;">{{ data?.secretary?.street }}</p>
                    </div>

                </div>
            </div>


            <div class="row" style="padding-top: 5px;">
                <div class="col-4">
                    <p class="s15" style="padding-left: 35pt;text-indent: 0pt;line-height: 10pt;text-align: left;">區</p>
                    <p class="s16" style="padding-left: 35pt;text-indent: 0pt;line-height: 8pt;text-align: left;">
                        District</p>
                </div>
                <div class="col-8">
                    <div class="textbox" style="border:1.0pt solid #000000;display:block;min-height:34.0pt; ">
                        <p class="s8" style="text-indent: 0pt;line-height: 17pt;">{{ data?.secretary?.state }}</p>
                    </div>

                </div>
            </div>


            <div class="row" style="padding-top: 5px;">
                <div class="col-4">
                    <p class="s15" style="padding-left: 35pt;text-indent: 0pt;line-height: 10pt;text-align: left;">地區
                    </p>
                    <p class="s16" style="padding-left: 35pt;text-indent: 0pt;line-height: 8pt;text-align: left;">Region
                    </p>
                </div>
                <div class="col-8">
                    <div class="textbox" style="border:1.0pt solid #000000;display:block;min-height:34.0pt; ">
                        <p class="s8" style="text-indent: 0pt;line-height: 17pt;">{{ data?.secretary?.country }}</p>
                    </div>

                </div>
            </div>

            <div class="row" style="padding-top: 5px;">
                <div class="col-4">
                    <p class="s30" style="padding-left: 35pt;text-indent: 0pt;line-height: 12pt;text-align: left;">電郵地址
                    </p>
                    <p class="s2" style="padding-left: 35pt;text-indent: 0pt;line-height: 10pt;text-align: left;">Email
                        Address</p>
                </div>
                <div class="col-8">
                    <div class="textbox" style="border:1.0pt solid #000000;display:block;min-height:34.0pt; ">
                        <!-- <p class="s17" style="text-indent: 0pt;line-height: 17pt;text-align: center;">陳大文</p> -->
                    </div>

                </div>
            </div>
            <div class="row" style="padding-top: 20px;">
                <div class="col-6">
                    <p class="s30" style="padding-left: 35pt;text-indent: 0pt;text-align: left;">商業登記號碼 <span
                            class="s2">Business
                            Registration Number</span></p>
                </div>
                <div class="col-6">
                    <div class="textbox"
                        style="border:1.0pt solid #000000;display:block;min-height:24.0pt;width:237.4pt;">
                        <p class="s8" style="text-indent: 0pt;line-height: 17pt;">{{data?.secretary?.company_reg_no}}</p>
                    </div>

                </div>
            </div>

            <div class="row" style="padding-top: 5px;">
                <div class="item col-12">
                    <p style="padding-top: 7pt;text-indent: 0pt;text-align: left;"><br /></p>
                    <p class="s30" style="padding-left: 10pt;text-indent: 0pt;line-height: 13pt;text-align: left;">
                        信託或公司服務提供者牌照 <span class="s2">Trust or Company Service Provider Licence</span></p>
                    <p class="s9"
                        style="padding-left: 10pt;text-indent: 0pt;line-height: 12pt;text-align: left; padding-top: 5px;">
                        請填報牌照編號或在適用的空格內加上<span class="s10"></span><span class="s11"> </span>號 <span class="s12">Please
                            provide the licence no. or tick the
                            relevant box</span></p>
                </div>
            </div>


            <div class="row" style="padding-top: 5px;">
                <div class="col-2 col-md-2">
                    <p class="s15"
                        style="padding-top: 6pt;padding-left:30pt;text-indent: 0pt;line-height: 11pt;text-align: right;">
                        牌照編號
                    </p>
                    <p class="s16" style="padding-left: 30pt;text-indent: 0pt;line-height: 9pt;text-align: right;">
                        Licence No.</p>
                </div>
                <div class="col-2 col-md-2">
                    <div class="textbox"
                        style="margin-left: 3pt;border:1.0pt solid #000000; display:block; min-height:29.6pt; width:48.9pt; margin-top: 10px;">
                        <p class="s39" style="text-indent: 0pt;line-height: 11pt;text-align: left;"> </p>
                    </div>
                </div>
                <div style="width: 20px;">
                    <div class="textbox"
                        style="border:1.0pt solid #000000;display:block;height:12.6pt;width:12.9pt; margin-top: 10px;">
                        <p class="s39" style="text-indent: 0pt;line-height: 11pt;text-align: left;"> </p>
                    </div>
                </div>
                <div class="col-2">
                    <p class="s15" style="padding-top: 6pt;padding-left:3pt;text-indent: 0pt;text-align: left;">無須領 有 牌照
                        <span class="s16"></span></p>
                    <p class="s15" style="padding-top: 1pt;padding-left:3pt;text-indent: 0pt;text-align: left;"> <span
                            class="s16">Not required to obtain a licence</span></p>
                </div>

                <div class="col-5">
                    <div class="textbox"
                        style="border:1.0pt solid #000000;display:block;min-height:59.6pt;width:220.9pt; margin-top: 10px;">
                        <p class="s39" style="text-indent: 0pt;line-height: 11pt;text-align: left;">原因 <span
                                class="s40">Reason:</span></p>
                    </div>

                </div>


            </div>

            <div class="row" style="padding-top: 20px;">
                <div class=" col-10">
                    <p class="s19" style="padding-top: 4pt;padding-left: 35pt;text-indent: 0pt;text-align: left;">指明編號
                        <span class="s20">1/2023(2023 </span>年 <span class="s20">12 </span>月<span class="s20">)
                            Specification No.
                            1/2023 (December 2023)</span>
                    </p>
                </div>
                <div class="col-2">
                    <p class="s21" style="padding-top: 4pt;padding-left: 35pt;text-indent: 0pt;text-align: right;">Page
                        5/9頁</p>
                </div>
            </div>


</template>

<script setup lang="ts">
import { useStartCompanyStore } from "../StartCompany/StartCompany_store";

const startCompanyStore = useStartCompanyStore()
let data = startCompanyStore.companyInProgress
// console.log(secretary)
</script>

<style scoped>
@import '@/assets/pdf.css';
</style>