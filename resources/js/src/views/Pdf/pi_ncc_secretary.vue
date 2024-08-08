<template>
     <hr style="width: 100%; font-weight: 800;">
            <div style="padding-top: 50px;"> </div>
            <div class="row">
                <div class="col-12">
                    <h1 style="padding-top: 3pt;padding-left: 32pt;text-indent: 0pt;text-align: left;">PI-NNC1</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                <p class="s4" style="padding-top: 1pt;padding-left: 32pt;text-indent: 0pt;text-align: left;">建議採用的公司英文<u>或</u>中文名稱
                    <span class="s55">Proposed English </span><span class="s56">OR</span><span class="s55"> Chinese Company
                        Name</span></p>
                        <div class="textbox" style="margin-left: 32pt; border:1.0pt solid #000000;display:block;min-height:48.2pt;width:440.1pt;">
                            <p class="s8" style="text-indent: 0pt;">
                 <span v-if="startCompanyStore?.companyInProgress?.names[0]" >Choice  1:
                <span v-if="startCompanyStore?.companyInProgress?.names[0]?.eng_name">  {{ startCompanyStore?.companyInProgress?.names[0]?.eng_name }} {{ startCompanyStore?.companyInProgress?.names[0]?.eng_prefix }}   </span>  
                 <span v-if="startCompanyStore?.companyInProgress?.names[0].chn_name"> &nbsp; {{ startCompanyStore?.companyInProgress?.names[0]?.chn_name }}{{ startCompanyStore?.companyInProgress?.names[0]?.chn_prefix }} </span> 
                 <br />
            </span>
            <span v-if="startCompanyStore?.companyInProgress?.names[1]">Choice 2: 
                <span v-if="startCompanyStore?.companyInProgress?.names[1]?.eng_name" >  {{ startCompanyStore?.companyInProgress?.names[1]?.eng_name }} {{ startCompanyStore?.companyInProgress?.names[1]?.eng_prefix }}  </span> 
                <span v-if="startCompanyStore?.companyInProgress?.names[1]?.chn_name">  &nbsp;{{ startCompanyStore?.companyInProgress?.names[1]?.chn_name }}{{ startCompanyStore?.companyInProgress?.names[1]?.chn_prefix }}</span>
                <br />
            </span>
            <span v-if="startCompanyStore?.companyInProgress?.names[2]">Choice 3: 
                <span v-if="startCompanyStore?.companyInProgress?.names[2]?.eng_name">  {{ startCompanyStore?.companyInProgress?.names[2]?.eng_name }} {{ startCompanyStore?.companyInProgress?.names[2]?.eng_prefix }} </span> 
                <span v-if="startCompanyStore?.companyInProgress?.names[2]?.chn_name">  {{ startCompanyStore?.companyInProgress?.names[2]?.chn_name }} &nbsp; {{ startCompanyStore?.companyInProgress?.names[2]?.chn_prefix }} </span>
                <br />
            </span>
             <span v-if="startCompanyStore?.companyInProgress?.names[3]">Choice 4:
                <span v-if="startCompanyStore?.companyInProgress?.names[3]?.eng_name"> {{ startCompanyStore?.companyInProgress?.names[3]?.eng_name }} {{ startCompanyStore?.companyInProgress?.names[3]?.eng_prefix }}  </span> 
                <span v-if="startCompanyStore?.companyInProgress?.names[3]?.chn_name">  {{ startCompanyStore?.companyInProgress?.names[3]?.chn_name }} &nbsp;{{ startCompanyStore?.companyInProgress?.names[3]?.chn_prefix }} </span>
                <br />
            </span>
             <span v-if="startCompanyStore?.companyInProgress?.names[4]">Choice 5:
                <span v-if="startCompanyStore?.companyInProgress?.names[4]?.eng_name"> {{ startCompanyStore?.companyInProgress?.names[4]?.eng_name }} {{ startCompanyStore?.companyInProgress?.names[4]?.eng_prefix }}</span> 
                 <span v-if="startCompanyStore?.companyInProgress?.names[4]?.chn_name">  {{ startCompanyStore?.companyInProgress?.names[4]?.chn_name }}&nbsp; {{ startCompanyStore?.companyInProgress?.names[4]?.chn_prefix }} </span>
            </span>
                            </p>
                            </div>
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <p class="s57" style="padding-top: 2pt;padding-left: 32pt;text-indent: 0pt;line-height: 22pt;text-align: left;">
                        首任公司秘書／董事<span class="h2">(</span>自然人<span class="h2">) </span><span class="s58"></span><span class="s59">
                        </span>受保護資料</p>
                        <h2 style="padding-left: 32pt;padding-right: 57pt;text-indent: 0pt;text-align: left;">First Company Secretary<span
                            class="s3">／</span>Director (Natural Person) – Protected Information</h2>
                </div>
            </div>
            <div class="row">
                <div style="width: 100px; padding-left: 43px;">
                    <p style="padding-left: 9pt;text-indent: 0pt;line-height: 27pt;text-align: left; border: 1px solid #000; padding-top: 8px;"><span
                        style=" color: black; font-family:Arial, sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 42pt;">X</span>
                    </p>
                </div>
                <div class="col-8">
                    <div class="textbox"
                    style="margin-left: 0px; background:#040404;display:block;left:0.2pt;min-height:43.0pt;top:48.8pt;width:400.1pt;">
                    <p style="text-indent: 0pt;line-height: 23pt;text-align: center; ">
                        <span style=" color: #FFF; font-family:MingLiU, monospace; font-style: normal; font-weight: normal; text-decoration: none; font-size: 17pt;">公
                            眾 紀 錄 不 會 顯 示 此 頁</span></p>
                    <p style="padding-left: 4pt;text-indent: 0pt;line-height: 18pt;text-align: left;"><span
                            style=" color: #FFF; font-family:Arial, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 16pt;">This
                            page will not be shown on the public record</span></p>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <ul id="l16">
                        <li data-list-text="-">
                            <p class="s60"
                                style="padding-top: 10pt;padding-left: 48pt;text-indent: -9pt;line-height: 15pt;text-align: left;">
                                請於本頁申報首任公司秘書的香港身分證或護照的<u>完整號碼</u>。</p>
                            <p class="s7" style="padding-left: 42pt;text-indent: 0pt;text-align: left;">The <u>full number</u> of Hong
                                Kong Identity Card or passport of the first company secretary should be reported on this page.</p>
                        </li>
                        <li data-list-text="-">
                            <p class="s60"
                                style="padding-top: 5pt;padding-left: 48pt;text-indent: -9pt;line-height: 15pt;text-align: left;">
                                請於本頁申報首任董事的香港身分證或護照的<u>完整號碼</u>及<u>通常住址</u>。</p>
                        </li>
                        </ul>
                        
                </div>
            </div>

            <div class="row">
                <div class="col-12" style="padding-top: 20px;">
                    <p class="s9" style="padding-left: 49pt;text-indent: 0pt;text-align: left;">請在適用的空格內加上 <span
                        class="s10"></span><span class="s11"> </span>號 <span class="s12">Please tick the relevant box(es)</span>
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-4">
                    <p class="s30" style="padding-top: 7pt;padding-left: 32pt;text-indent: 0pt;text-align: left;">身分 <span
                        class="s2">Capacity</span></p>
                </div>
           
                <div class="col-8">
                   <div class="row">
                    <div class="row">
                        <div class="col-4">
                            <p class="s16" style="padding-left: 20pt;text-indent: 0pt;line-height: 9pt;text-align: left;">  <input type="checkbox" style="width: 20px; height: 20px;">  董事 <br>Company Secretary </p>
                            <p class="s30" style="padding-top: 6pt;padding-left: 33pt;text-indent: 0pt;line-height: 12pt;text-align: left;"> </p>
                        </div>
                        <div class="col-4">     
                            <p class="s16" style="padding-left: 20pt;text-indent: 0pt;line-height: 9pt;text-align: left;">  <input type="checkbox" style="width: 20px; height: 20px;" checked disabled>  董 事  <br>Director</p>
                            <p class="s30" style="padding-top: 6pt;padding-left: 33pt;text-indent: 0pt;line-height: 12pt;text-align: left;"> </p>
                      
                        </div>
                        <div class="col-2">

                        </div>
                    </div>
            </div>
            </div>
            </div>


            <div class="row">
                <div class="col-3">
                    <p class="s30" style="padding-top: 0pt;padding-left: 32pt;text-indent: 0pt;line-height: 12pt;text-align: left;">中文姓名
                    </p>
                  <p class="s2" style="padding-left: 32pt;text-indent: 0pt;line-height: 9pt;text-align: left;">Name in Chinese</p>
                
                </div>
                <div class="col-9">
                   <div class="row">
                    <div class="row" style="padding-top: px;">
                        <div class="col-2">
                            <p class="s15"
                                style="padding-top: 7pt;padding-left: 0pt;text-indent: 0pt;line-height: 11pt;text-align: right;">
                              </p>
                            <p class="s16" style="padding-left: 0pt;text-indent: 0pt;line-height: 9pt;text-align: right;">
                                </p>
                        </div>
                        <div class="col-8">
                            <div class="textbox" style="border:1.0pt solid #000000;display:block;min-height:28.0pt; min-width: 400px;">
                                <p class="s17" style="text-indent: 0pt;line-height: 17pt;;"> {{ director?.chn_last_name }}{{ director?.chn_first_name }}</p>
                            </div>
        
                        </div>
                    </div>

                    
            </div>
            </div>
            </div>

            <div class="row">
                <div class="col-3">
                    <p class="s30" style="padding-top: 5pt;padding-left: 32pt;text-indent: 0pt;line-height: 12pt;text-align: left;">中文姓名
                    </p>
                    <p class="s2" style="padding-left: 32pt;text-indent: 0pt;line-height: 10pt;text-align: left;">Name in English</p>
                    <p style="text-indent: 0pt;text-align: left;"><br /></p> 
                </div>
                <div class="col-9">
                    <div class="row" style="padding-top: 5px;">
                        <div class="col-2">
                            <p class="s15"
                                style="padding-top: 0pt;padding-left: 0pt;text-indent: 0pt;line-height: 11pt;text-align: right;">
                                英文姓名 </p>
                            <p class="s16" style="padding-left: 7pt;text-indent: 0pt;line-height: 9pt;text-align: right;">
                                Surname</p>
                        </div>
                        <div class="col-9">
                            <div class="textbox" style="border:1.0pt solid #000000;display:block;min-height:28.0pt; min-width: 400px;">
                                <p class="s8" style="text-indent: 0pt;line-height: 17pt;">{{ director?.last_name }}</p>
                            </div>
        
                        </div>
                 
            </div>
            </div>
            </div>
            <div class="row">
                <div class="col-3">
                </div>
                <div class="col-9">
                    <div class="row" style="padding-top: 5px;">
                        <div class="col-2">
                            <p class="s15"
                                style="padding-top: 0pt;padding-left: 0pt;text-indent: 0pt;line-height: 11pt;text-align: right;">
                                名 字 </p>
                            <p class="s16" style="padding-left: 7pt;text-indent: 0pt;line-height: 9pt;text-align: right;">
                                Other Names</p>
                        </div>
                        <div class="col-9">
                            <div class="textbox" style="border:1.0pt solid #000000;display:block;min-height:28.0pt; min-width: 400px;">
                                <p class="s8" style="text-indent: 0pt;line-height: 17pt;">{{ director?.first_name }} </p>
                            </div>
                        </div>
            </div>
            </div>
            </div>

            <div class="row">
                <div class="col-6">
                    <div class="row">
                        <div class="col-12">
                            <p class="s30" style="padding-top: pt;padding-left: 32pt;text-indent: 0pt;line-height: 13pt;text-align: left;">身分識別
                                <span class="s2">Identification</span></p>
                                <p class="s15" style="padding-left: 32pt;text-indent: 0pt;line-height: 8pt;text-align: left;"><span class="s16">(a )
                                </span>香港身分證 <span class="s27">( </span><u>完整 </u> 號碼 <span class="s27">)</span></p>
                                <p class="s16" style="padding-left: 65pt;text-indent: 0pt;line-height: 12pt;text-align: left;">Hong Kong Identity
                                Card (<u><b>Full</b></u><b> </b>Number) <span class="s63"></span></p>
                               
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <p class="s16" style="padding-top: 8pt;padding-left: 32pt;text-indent: 0pt;line-height: 11pt;text-align: left;">(b )
                                <span class="s15">護照 </span></p>
                            <p class="s16" style="padding-left: 65pt;text-indent: 0pt;line-height: 9pt;text-align: left;">Passport</p>
                        </div>
                        <div class="col-6">
                            <p class="s15" style="padding-top: 5pt;text-indent: 0pt;line-height: 11pt;text-align: right;">簽發國家
                                ／地區 </p>
                            <p class="s16" style="padding-top: 0pt;text-indent: 0pt;line-height: 11pt;text-align: right;">Issuing Country<span
                                class="s15">／</span>Region</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6">
                        </div>
                        <div class="col-6">
                            <p class="s15" style="padding-top: 5pt;text-indent: 0pt;line-height: 11pt;text-align: right;">
                                完 整 號 碼 </p>
                            <p class="s16" style="padding-top: 0pt;text-indent: 0pt;line-height: 11pt;text-align: right;"> <span class="s27"><u>Full</u> </span>  Number</p>
                        </div>
                    </div>
                </div>

                <div class="col-6" style="padding-top:20px;">
                    <div class="row">
                        <div class="col-9">

                            <div class="textbox" style=" border:1.0pt solid #000000; display:block;min-height:22.7pt;width:182.4pt;">
                                <p class="s17" style="padding-top: 4pt;text-indent: 0pt;text-align: center;">   
                                    {{ director.get_identity.identity_no  == 'undefined' ||  director.get_identity.identity_no  == null?'': director.get_identity.identity_no}}    
                                </p>
                                </div>
                        </div>
                        <div class="col-3">
                            <label for="" style="display: inline-flex; align-items: center; position: relative;">
                                <span style="position: relative;">(&nbsp; </span>
                                <div class="textbox" style="border:1.0pt solid #000000; display:inline-block; min-height:22.7pt; width:32.4pt; margin: 0 2px;">
                                  <p class="s17" style="margin: 0; padding-top: 4pt; text-indent: 0pt; text-align: center;">{{  director?.get_identity?.identity_no_suffix == 'undefined' && director?.get_identity?.identity_no_suffix == null ?'':director?.get_identity?.identity_no_suffix  }}</p>
                                </div>
                                <span style="position: relative;"> &nbsp; )</span>
                              </label>
                        </div>
                    </div>
                        <p style="padding-top:5px;"></p>
                        <div class="textbox" style="border:1.0pt solid #000000;display:block;min-height:22.7pt;width:242.4pt;">
                            <p class="s8" style="padding-top: 4pt;text-indent: 0pt;">{{ director?.get_identity?.issueing_country == 'undefined'?'':director?.get_identity?.issueing_country   }}</p>
                            </div>
                            <p style="padding-top:5px;"></p>
                            <div class="textbox" style="border:1.0pt solid #000000;display:block;min-height:22.7pt;width:242.4pt;">
                                <p class="s8" style="padding-top: 4pt;text-indent: 0pt;">       {{ director?.get_identity?.passport_no == 'undefined' || director?.get_identity?.passport_no == null? ' ':director?.get_identity?.passport_no }} </p>
                                </div>
                </div>
            </div>


            <div class="row">
                <div class="col-12">
                    <p class="s1" style="padding-top: 4pt;padding-left: 32pt;text-indent: 0pt;text-align: left;">董事的通常住址 <span
                        class="s5">Usual Residential Address of Director</span></p>
                </div>
            </div>
            <div class="row">
                <div class="col-4">
                    <p class="s15" style="padding-left: 32pt;text-indent: 0pt;line-height: 11pt;text-align: left;">室 ／樓 ／座 等  </p>
                    <p class="s16" style="padding-left: 32pt;text-indent: 0pt;line-height: 9pt;text-align: left;">Flat／Floor／Block etc.</p>
                    <p style="padding-top: 3pt;text-indent: 0pt;text-align: left;"><br /></p>
                </div>
                <div class="col-8">
                    <div class="textbox" style="border:1.0pt solid #000000;display:block;min-height:28.4pt;width:320.8pt;">
                        <p class="s8" style="text-indent: 0pt;line-height: 17pt;">{{ director?.res_address?.flat }}
                            </p>
                        </div>
                </div>
            </div>

            <div class="row">
                <div class="col-4">
                    <p class="s15" style="padding-left: 32pt;text-indent: 0pt;line-height: 11pt;text-align: left;">大廈 </p>
                    <p class="s16" style="padding-left: 32pt;text-indent: 0pt;line-height: 9pt;text-align: left;">Building</p>
                    <p style="padding-top: 3pt;text-indent: 0pt;text-align: left;"><br /></p>
                </div>
                <div class="col-8">
                    <div class="textbox" style="border:1.0pt solid #000000;display:block;min-height:28.4pt;width:320.8pt;">
                        <p class="s8" style="text-indent: 0pt;line-height: 17pt;">{{ director?.res_address?.building }}
                            </p>
                        </div>
                </div>
            </div>
            <div class="row">
                <div class="col-4">
                    <p class="s15" style="padding-left: 32pt;text-indent: 0pt;line-height: 11pt;text-align: left;">街道 ／屋苑 ／地段 ／村 等</p>
                    <p class="s16" style="padding-left: 32pt;text-indent: 0pt;line-height: 11pt;text-align: left;">Street<span
                        class="s15">／</span>Estate<span class="s15">／</span>Lot<span class="s15">／</span>Village etc<span
                        class="s18">.</span></p>
                        <p style="padding-top: 3pt;text-indent: 0pt;text-align: left;"><br /></p>
                </div>
                <div class="col-8">
                    <div class="textbox" style="border:1.0pt solid #000000;display:block;min-height:28.4pt;width:320.8pt;">
                        <p class="s8" style="text-indent: 0pt;line-height: 17pt;">{{ director?.res_address?.street }}
                            </p>
                        </div>
                </div>
            </div>
            <div class="row">
                <div class="col-4">
                    <p class="s16" style="padding-left: 32pt; text-indent: 0pt;line-height: 82%;text-align: left;"><span
                        class="s15">區／市／省／ 州／ 郵遞區號等 </span>District<span class="s21">／</span>City<span class="s21">／
                    </span>Province<span class="s21">／ </span>State<span class="s15">／ </span>Postal Code etc.</p>
                    <p style="padding-top: 3pt;text-indent: 0pt;text-align: left;"><br /></p>
                </div>
                <div class="col-8">
                    <div class="textbox" style="border:1.0pt solid #000000;display:block;min-height:28.4pt;width:320.8pt;">
                        <p class="s8" style="text-indent: 0pt;line-height: 17pt;">{{ director?.res_address?.state }}
                            </p>
                        </div>
                </div>
            </div>
            <div class="row">
                <div class="col-4">
                    <p class="s15" style="padding-left: 32pt;text-indent: 0pt;line-height: 11pt;text-align: left;">國家
                        ／地區 </p>
                        <p class="s16" style="padding-left: 32pt;text-indent: 0pt;line-height: 11pt;text-align: left;">Country <span
                            class="s21">／</span>Region</p>
                            <p style="padding-top: 3pt;text-indent: 0pt;text-align: left;"><br /></p>
                </div>
                <div class="col-8">
                    <div class="textbox" style="border:1.0pt solid #000000;display:block;min-height:28.4pt;width:320.8pt;">
                        <p class="s8" style="text-indent: 0pt;line-height: 17pt;">{{ director?.res_address?.country }}
                            </p>
                        </div>
                </div>
            </div>
            <div class="row">
                <div class="col-4">
                    <p class="s15" style="padding-left: 32pt;text-indent: 0pt;line-height: 11pt;text-align: left;">室 ／樓
                        ／座等 </p>
                        <p class="s16" style="padding-left: 32pt;text-indent: 0pt;line-height: 11pt;text-align: left;">Flat<span
                            class="s15">／</span>Floor<span class="s15">／</span>Block etc.</p>
                            <p style="padding-top: 3pt;text-indent: 0pt;text-align: left;"><br /></p>
                </div>
                <div class="col-8">
                    <div class="textbox" style="border:1.0pt solid #000000;display:block;min-height:28.4pt;width:320.8pt;">
                        <p class="s17" style="padding-left: 1pt;text-indent: 0pt;line-height: 17pt;text-align: left;">Wanchai Commercial
                            Centre</p>
                        </div>
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <p style="text-indent: 0pt;text-align: right; float: right;"><span>
                        <img width="62" height="62"
                        src="data:image/png;base64,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" />
                
                    </span></p>
                </div>
            </div>
            <div class="row" style="padding-top: 20px;">
                <div class=" col-10 col-md-10">
                    <p class="s19" style="padding-top: 4pt;padding-left: 35pt;text-indent: 0pt;text-align: left;">指明編號
                        <span class="s20">1/2023(2023 </span>年 <span class="s20">12 </span>月<span class="s20">)
                            Specification No.
                            1/2023 (December 2023)</span>
                    </p>
                </div>
                <div class="col-2 col-md-2">
                    <p class="s21" style="padding-top: 4pt;padding-left: 35pt;text-indent: 0pt;text-align: right;">Page
                        2/9頁</p>
                </div>
            </div>
</template>

<script setup lang="ts">
import { useStartCompanyStore } from '../StartCompany/StartCompany_store';
const startCompanyStore = useStartCompanyStore();

const props = defineProps<{
    director: any
}>();
</script>

<style scoped>
@import '@/assets/pdf.css';
</style>