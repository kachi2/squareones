<template>
    <div>
        <div style="padding-top:40px"></div>
        <p style="text-indent: 0pt;text-align: left;"><br /></p>
        <p style="text-indent: 0pt;text-align: left;"></p>

        <p style="text-indent: 0pt;text-align: left;"></p>
        <table style="border-collapse:collapse;margin-left:42.404pt" cellspacing="0">
            <tr style="height:12pt">
                <td style="width:30pt">
                    <p class="s1" style="padding-left: 2pt;text-indent: 0pt;line-height: 11pt;text-align: left;">表格 </p>
                </td>
                <td style="width:476pt" rowspan="2">
                    <p class="s7" style="padding-left: 9pt;text-indent: 0pt;line-height: 31pt;text-align: left;">NNC1
                    </p>
                </td>
            </tr>
            <tr style="height:29pt">
                <td style="width:30pt">
                    <p class="s33" style="padding-left: 2pt;text-indent: 0pt;text-align: left;">Form</p>
                </td>
            </tr>
            <tr style="height:25pt">
                <td style="width:506pt" colspan="2">
                    <p class="s13" style="padding-top: 7pt;padding-left: 2pt;text-indent: 0pt;text-align: left;"><span
                            class="s12">首任公司秘書 </span>First Company Secretary <span class="s51"></span>
                        <span class="s8">續上頁 </span><span class="s9">cont’d</span>
                    </p>
                </td>
            </tr>
            <tr style="height:18pt">
                <td>
                    <!-- <p class="s13" style="padding-top: 3pt;text-indent: 0pt;text-align: left;"></p>  -->
                </td>
                <td style="width:476pt">
                    <p class="s1" style="padding-top: 3pt;text-indent: 0pt;line-height: 13pt;text-align: left;">
                        公司秘書<span class="s6">( </span>法人團體<span class="s6">) Company Secretary (Body Corporate)</span>
                    </p>
                </td>
            </tr>
            <tr style="height:10pt">
                <td style="width:30pt">
                    <p style="text-indent: 0pt;text-align: left;"><br /></p>
                </td>
                <td style="width:476pt">
                    <p class="s39" style="text-indent: 0pt;line-height: 9pt;text-align: left;">(<span
                            class="s40">如超過一名公司秘書屬法人團體，請用續頁 </span>C <span class="s40">填報 </span>Use Continuation Sheet
                        C if
                        more than 1 company secretary is a body corporate)</p>
                </td>
            </tr>
        </table>
        <table style="border-collapse:collapse;margin-left:60.884pt" cellspacing="0">
            <tr style="height:33pt">
                <td style="width:80pt">
                    <p class="s8" style="padding-left: 2pt;text-indent: 0pt;line-height: 10pt;text-align: left;">中 文姓 名／
                        名稱
                    </p>
                    <p class="s9" style="padding-left: 2pt;text-indent: 0pt;text-align: left;">Name in Chinese</p>
                </td>
                <td style="width:49pt;border-right-style:solid;border-right-width:1pt">
                    <p style="text-indent: 0pt;text-align: left;"><br /></p>
                </td>
                <td
                    style="width:121pt;padding-left:30px; border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
                    <p style="text-indent: 0pt;text-align: left;"><br /></p>
                </td>
                <td
                    style="width:87pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
                    <p style="text-indent: 0pt;text-align: left;">{{ data?.secretary?.chn_name }}<br /></p>
                </td>
                <td
                    style="width:57pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
                    <p style="text-indent: 0pt;text-align: left;"><br /></p>
                </td>
                <td
                    style="width:96pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style="text-indent: 0pt;text-align: left;"><br /></p>
                </td>
            </tr>
            <tr style="height:10pt">

            </tr>

            <tr style="height:33pt; padding-top:5px">
                <td style="width:80pt">
                    <p class="s8" style="padding-left: 2pt;text-indent: 0pt;line-height: 10pt;text-align: left;">英 文姓 名
                    </p>
                    <p class="s9" style="padding-left: 2pt;text-indent: 0pt;text-align: left;">Name in English</p>
                </td>
                <td style="width:49pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s8" style="padding-left: 27pt;text-indent: 0pt;line-height: 10pt;text-align: left;"> </p>
                    <p class="s29" style="padding-left: 14pt;text-indent: 0pt;line-height: 9pt;text-align: left;">
                    </p>
                </td>
                <td
                    style="width:121pt; padding-left:30px; border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
                    <p style="text-indent: 0pt;text-align: left;"><br /></p>
                </td>
                <td
                    style="width:87pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
                    <p style="text-indent: 0pt;text-align: left;">{{ data?.secretary?.name }}<br /></p>
                </td>
                <td
                    style="width:57pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
                    <p style="text-indent: 0pt;text-align: left;"><br /></p>
                </td>
                <td
                    style="width:96pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style="text-indent: 0pt;text-align: left;"><br /></p>
                </td>
            </tr>
            <tr style="height:10pt">

            </tr>
        </table>
        <li data-list-text="3">
            <p class="s14"
                style="padding-left: 60px; padding-top:20px; text-indent: 0px;line-height: 15px;text-align: left;">
            </p>
            <h4 style="padding-left: 60px;text-indent: 0px;line-height: 12pt;text-align: left;">香港地址 Hong Kong Address
            </h4>
            <p class="s18" style="padding-left: 67px;text-indent: 0px;text-align: left;">(<span
                    class="s15">本處不接納「轉交」地址及郵政信箱號碼 </span>‘Care of ’ addresses and post office box numbers are not
                acceptable)
            </p>

            <div class="row" style="float: right; margin-top:20px">
                <table style="border-collapse:collapse;" cellspacing="0">
                    <tr style="height:25px; ">
                        <td
                            style="width:355pt; padding-left:30px;  padding-top:10px; border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                            <p style="text-indent: 0px;text-align: left;">{{ data?.secretary?.flat }}<br /> </p>
                        </td>

                    </tr>
                    <tr style="height:16px; ">
                    </tr>
                    <tr style="height:26pt">
                        <td
                            style="width:355pt; padding-left:30px; border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                            <p style="text-indent: 0px;text-align: left;">{{ data?.secretary?.building }}<br /></p>
                        </td>
                    </tr>

                    <tr style="height:16px; ">
                    </tr>
                    <tr style="height:26pt">
                        <td
                            style="width:355pt;padding-left:30px; border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                            <p style="text-indent: 0px;text-align: left;">{{ data?.secretary?.street }}<br /> </p>
                        </td>
                    </tr>

                    <tr style="height:16px; ">
                    </tr>
                    <tr style="height:26pt">
                        <td
                            style="width:355pt;padding-left:30px; border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                            <p style="text-indent: 0px;text-align: left;">
                                {{ data?.secretary?.city ?? data?.secretary?.state }}<br /></p>
                        </td>
                    </tr>

                    <tr style="height:16px; ">
                    </tr>
                    <tr style="height:23pt">
                        <td
                            style="width:355pt;padding-left:30px; border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                            <p class="s23"
                                style="padding-top: 1pt;padding-left: 1pt;text-indent: 0px;text-align: left;">
                                <span class="">{{ data?.secretary?.country }}</span>
                            </p>
                        </td>

                    </tr>

                    <tr style="height:16px; ">
                    </tr>
                    <tr style="height:23pt">
                        <td
                            style="width:355pt;padding-left:30px; border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                            <p class="s23"
                                style="padding-top: 1pt;padding-left: 1pt;text-indent: 0px;text-align: left;">
                                <span class="s24"></span><span class="s25"></span>
                            </p>
                        </td>

                    </tr>
                </table>
            </div>

            <div style="margin-top:20px">
                <p style="text-indent: 0px;text-align: left;"> </p>
                <p class="s21"
                    style="padding-top: 10px;padding-left: 50px;text-indent: 0px;line-height: 11pt;text-align: left;">
                    室／樓／座等
                </p>
                <p class="s22" style="padding-left: 50px; text-indent: 0px;line-height: 11pt;text-align: left;">
                    Flat<span class="s26">／</span>Floor<span class="s26">／</span>Block etc.</p>
                <p class="s21"
                    style="padding-top: 18px;padding-left: 50px;text-indent: 0px;line-height: 11pt;text-align: left;">大廈
                </p>
                <p class="s22" style="padding-left: 50px;text-indent: 0px;line-height: 11pt;text-align: left;">Building
                </p>
                <p class="s21"
                    style="padding-top: 18px;padding-left: 50px;text-indent: 0px;line-height: 11pt;text-align: left;">
                    街道／屋苑／地段／村等</p>
                <p class="s22" style="padding-left: 50px;text-indent: 0px;line-height: 11pt;text-align: left;">
                    Street<span class="s26">／</span>Estate<span class="s26">／</span>Lot<span class="s26">／</span>Village
                    etc<span class="s27">.</span></p>
                <p class="s21"
                    style="padding-top: 15pt;padding-left: 50px;text-indent: 0px;line-height: 11px;text-align: left;">區
                </p>
                <p class="s22" style="padding-left: 50px;  text-indent: 0px;line-height: 9pt;text-align: left;">District
                </p>
                <p class="s21"
                    style="padding-top: 6px;padding-left: 50px;text-indent: 0px;text-align: left; padding-top:20px">地區
                </p>
                <p class="s22"
                    style="padding-top: 2px;padding-left: 50px; padding-top: 1pt; text-indent: 0px;text-align: left;">
                    Region</p>
                <p class="s21"
                    style="padding-top: 1px;padding-left: 50px;text-indent: 0px;text-align: left; padding-top:20px">地區
                </p>
                <p class="s22" style="padding-top: 2px;padding-left: 50px;text-indent: 0px;text-align: left;">Email
                    Address</p>
                <p style="padding-left: 70px;text-indent: 0px;line-height: 9pt;text-align: left;"> </p>
            </div>

        </li>

        <p class="s41" style="padding-left: 50pt;text-indent: 0pt;text-align: left; padding-top:40px">商業登記號碼 <span
                class="s42">Business
                Registration Number</span>
            <span style="text-indent: 0pt; float:right">
                <input style="width: 200px; height:30px;padding-left:30px; " :value="data?.secretary?.company_reg_no"
                    readonly>
                <br /></span>
        </p>

        <p style="padding-top: 20pt;padding-left: 50pt;text-indent: 0pt;text-align: left;"><span
                style=" color: #FFF; font-family:Arial, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 7pt;"></span>
        </p>
        <table style="border-collapse:collapse" cellspacing="0">
            <tr style="height:12pt">
                <td style="width:479pt" colspan="4">
                    <p class="s28" style="padding-left: 50pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                        信託或公司服務提供者牌照 <span class="s2">Trust or Company Service Provider Licence</span></p>
                </td>
            </tr>
            <tr style="height:19pt">
                <td style="width:479pt" colspan="4">
                    <p class="s40" style="padding-left: 50pt;text-indent: 0pt;text-align: left;">請填報牌照編號或在適用的空格內加上<span
                            class="s48"></span><span class="s49"> </span>號 <span class="s39">Please provide the licence
                            no.
                            or tick the relevant box</span></p>
                </td>
            </tr>
            <tr style="height:66pt">
                <td style="width:54pt;border-right-style:solid;border-right-width:1pt; ">
                    <p class="s8" style="padding-left: 20pt;text-indent: 0pt;line-height: 11pt;text-align: left;">牌 照編 號
                    </p>
                    <p class="s29" style="padding-left: 20pt;text-indent: 0pt;line-height: 9pt;text-align: left;">Licence
                        No.
                    </p>
                </td>
                <td
                    style="width:78pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-right-style:solid;border-right-width:1pt; border-bottom-style:solid;border-bottom-width:1pt">
                    <p style="text-indent: 0pt;text-align: left;"> {{ data?.secretary?.licence_no }}<br /> </p>
                </td>
                <td
                    style="width:114pt;border-left-style:solid;border-left-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s8" style="padding-left: 43pt;padding-right: 8pt;text-indent: 0pt;text-align: left;">
                        <input type="checkbox"> 無 須領 有牌照
                        <span class="s29">Not required to obtain a licence</span>
                    </p>
                </td>
                <td
                    style="width:233pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s50" style="padding-left: 1pt;text-indent: 0pt;line-height: 11pt;text-align: left;">原因
                        <span class="s39">Reason:</span> </p>
                </td>
            </tr>
        </table>

    </div>
    <div style="height:200px;  border-bottom:5px solid #eee">
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