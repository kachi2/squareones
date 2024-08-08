<template style="page-break-after: always">
       <hr style="width: 100%; font-weight: 800;">
                <div style="padding-top: 50px;"> </div>

            <div class="row">
                <div class="col-12" >
                    <h3 style="padding-top: 3pt;text-indent: 0pt;text-align: center;">THE COMPANIES ORDINANCE
                        (CHAPTER 622)</h3>
                </div>
            </div>

            <div class="row">
                <div class="col-12" style="padding-top: 40px;">
                    <h3 style="text-indent: 0pt;line-height: 112%;text-align: center;">Private Company Limited by
                        Shares </h3>
                        <h3 style="text-indent: 0pt;line-height: 112%;text-align: center;"> ARTICLES OF ASSOCIATION</h3>
                        <h3 style="text-indent: 0pt;line-height: 16pt;text-align: center;">OF</h3>
                </div>
            </div>
            <div class="row" style="padding-top: 50px;">
                <div class="col-12">
                    <p class="s8" style="padding-left: 16pt;text-indent: 0pt;text-align: center;">        <span v-if="startCompanyStore?.companyInProgress?.names[0]?.eng_name" class="dataInput"> {{ startCompanyStore?.companyInProgress?.names[0]?.eng_name }} {{ startCompanyStore?.companyInProgress?.names[0]?.eng_prefix }} <br /> </span>   &nbsp;
                <span v-if="startCompanyStore?.companyInProgress?.names[0].chn_name" class="dataInput">  {{ startCompanyStore?.companyInProgress?.names[0]?.chn_name }}{{ startCompanyStore?.companyInProgress?.names[0]?.chn_prefix }}<br /> </span>
                <span v-if="startCompanyStore?.companyInProgress?.names[1]?.eng_name" class="dataInput">  {{ startCompanyStore?.companyInProgress?.names[1]?.eng_name }} {{ startCompanyStore?.companyInProgress?.names[1]?.eng_prefix }}<br /> </span>  &nbsp;
                <span v-if="startCompanyStore?.companyInProgress?.names[1]?.chn_name" class="dataInput">  {{ startCompanyStore?.companyInProgress?.names[1]?.chn_name }}{{ startCompanyStore?.companyInProgress?.names[1]?.chn_prefix }}<br /> </span>
                <span v-if="startCompanyStore?.companyInProgress?.names[2]?.eng_name" class="dataInput">  {{ startCompanyStore?.companyInProgress?.names[2]?.eng_name }} {{ startCompanyStore?.companyInProgress?.names[2]?.eng_prefix }}<br />  </span>  &nbsp;
                <span v-if="startCompanyStore?.companyInProgress?.names[2]?.chn_name" class="dataInput">  {{ startCompanyStore?.companyInProgress?.names[2]?.chn_name }}{{ startCompanyStore?.companyInProgress?.names[2]?.chn_prefix }}<br /> </span>
                <span v-if="startCompanyStore?.companyInProgress?.names[3]?.eng_name" class="dataInput">{{ startCompanyStore?.companyInProgress?.names[3]?.eng_name }} {{ startCompanyStore?.companyInProgress?.names[3]?.eng_prefix }} <br /> </span>  &nbsp;
                <span v-if="startCompanyStore?.companyInProgress?.names[3]?.chn_name" class="dataInput">  {{ startCompanyStore?.companyInProgress?.names[3]?.chn_name }}{{ startCompanyStore?.companyInProgress?.names[3]?.chn_prefix }}<br /> </span>
                <span v-if="startCompanyStore?.companyInProgress?.names[4]?.eng_name" class="dataInput"> {{ startCompanyStore?.companyInProgress?.names[4]?.eng_name }} {{ startCompanyStore?.companyInProgress?.names[4]?.eng_prefix }} <br /> </span>  &nbsp;
                    <span v-if="startCompanyStore?.companyInProgress?.names[4]?.chn_name" class="dataInput">  {{ startCompanyStore?.companyInProgress?.names[4]?.chn_name }}{{ startCompanyStore?.companyInProgress?.names[4]?.chn_prefix }}<br /> </span></p>
                </div>
            </div>
            <div class="row" style="padding-top: 20px;">
                <div class="col-12">
                    <p class="s7" style="padding-left: 11pt;text-indent: 0pt;text-align: left;">Part A Mandatory Articles</p>
                    <ol id="l18">
                        <li data-list-text="1.">
                            <p class="s7" style="padding-top: 5pt;padding-left: 23pt;text-indent: -12pt;text-align: left;">Company Name
                                <span class="p">The name of the company is</span></p>
                            <p class="s73" style="padding-top: 20pt;padding-left: 16pt;text-indent: 0pt;text-align: center;">
                                <span v-if="startCompanyStore?.companyInProgress?.names[0]?.eng_name" class="dataInput"> {{ startCompanyStore?.companyInProgress?.names[0]?.eng_name }} {{ startCompanyStore?.companyInProgress?.names[0]?.eng_prefix }} <br /> </span>   &nbsp;
                <span v-if="startCompanyStore?.companyInProgress?.names[0].chn_name" class="dataInput">  {{ startCompanyStore?.companyInProgress?.names[0]?.chn_name }}{{ startCompanyStore?.companyInProgress?.names[0]?.chn_prefix }}<br /> </span>
                <span v-if="startCompanyStore?.companyInProgress?.names[1]?.eng_name" class="dataInput">  {{ startCompanyStore?.companyInProgress?.names[1]?.eng_name }} {{ startCompanyStore?.companyInProgress?.names[1]?.eng_prefix }}<br /> </span>  &nbsp;
                <span v-if="startCompanyStore?.companyInProgress?.names[1]?.chn_name" class="dataInput">  {{ startCompanyStore?.companyInProgress?.names[1]?.chn_name }}{{ startCompanyStore?.companyInProgress?.names[1]?.chn_prefix }}<br /> </span>
                <span v-if="startCompanyStore?.companyInProgress?.names[2]?.eng_name" class="dataInput">  {{ startCompanyStore?.companyInProgress?.names[2]?.eng_name }} {{ startCompanyStore?.companyInProgress?.names[2]?.eng_prefix }}<br />  </span>  &nbsp;
                <span v-if="startCompanyStore?.companyInProgress?.names[2]?.chn_name" class="dataInput">  {{ startCompanyStore?.companyInProgress?.names[2]?.chn_name }}{{ startCompanyStore?.companyInProgress?.names[2]?.chn_prefix }}<br /> </span>
                <span v-if="startCompanyStore?.companyInProgress?.names[3]?.eng_name" class="dataInput">{{ startCompanyStore?.companyInProgress?.names[3]?.eng_name }} {{ startCompanyStore?.companyInProgress?.names[3]?.eng_prefix }} <br /> </span>  &nbsp;
                <span v-if="startCompanyStore?.companyInProgress?.names[3]?.chn_name" class="dataInput">  {{ startCompanyStore?.companyInProgress?.names[3]?.chn_name }}{{ startCompanyStore?.companyInProgress?.names[3]?.chn_prefix }}<br /> </span>
                <span v-if="startCompanyStore?.companyInProgress?.names[4]?.eng_name" class="dataInput"> {{ startCompanyStore?.companyInProgress?.names[4]?.eng_name }} {{ startCompanyStore?.companyInProgress?.names[4]?.eng_prefix }} <br /> </span>  &nbsp;
                    <span v-if="startCompanyStore?.companyInProgress?.names[4]?.chn_name" class="dataInput">  {{ startCompanyStore?.companyInProgress?.names[4]?.chn_name }}{{ startCompanyStore?.companyInProgress?.names[4]?.chn_prefix }}<br /> </span>
                            </p>
                            <p style="text-indent: 0pt;text-align: left;"><br /></p>
                        </li>
                        <li data-list-text="2.">
                            <p class="s7" style="padding-top: 40pt; padding-left: 23pt;text-indent: -12pt;text-align: left;">Members’ Liabilities</p>
                            <p style="padding-top: 5pt;padding-left: 11pt;text-indent: 0pt;text-align: left;">The liability of the
                                members is limited.</p>
                            <p style="padding-top: 10pt;text-indent: 0pt;text-align: left;"><br /></p>
                        </li>
                        <li data-list-text="3.">
                            <p class="s7" style="padding-left: 23pt;text-indent: -12pt;text-align: left;">Liabilities or Contributions
                                of Members</p>
                            <p style="padding-top: 5pt;padding-left: 11pt;text-indent: 0pt;text-align: left;">The liability of the
                                members is limited to any amount unpaid on the shares held by the members.</p>
                            <p style="padding-top: 10pt;text-indent: 0pt;text-align: left;"><br /></p>
                        </li>
                        <li data-list-text="4.">
                            <p class="s7" style="padding-left: 23pt;text-indent: -12pt;text-align: left;">Share Capital and Initial
                                Shareholdings (on the company’s formation)</p>
                            <p style="padding-top: 11pt;text-indent: 0pt;text-align: left;"><br /></p>
                            <div class="row">
                                <div class="col-6">
                                    <p style="text-indent: 0pt;text-align: left;"> </p>
                                    <p style="padding-left: 11pt;text-indent: 0pt;line-height: 142%;text-align: left;">The total number of
                                        shares that the company proposes to issue</p>
                                    <p style="padding-left: 11pt;text-indent: 0pt;line-height: 142%;text-align: left;">The total amount of share
                                        capital to be subscribed by the company’s founder members</p>
                                    <ol id="l19">
                                        <li data-list-text="(i)">
                                            <p style="padding-left: 63pt;text-indent: -19pt;line-height: 142%;text-align: left;">The amount to
                                                be paid up or to be regarded as paid up</p>
                                        </li>
                                        <li data-list-text="(ii)">
                                            <p style="padding-left: 64pt;text-indent: -20pt;line-height: 142%;text-align: left;">The amount to
                                                remain unpaid or to be regarded as remaining unpaid</p>
                                        </li>
                                    </ol>
                                </div>

                                <div class="col-6">
                                    <table style="border-collapse:collapse;margin-left:20pt; width:300px" cellspacing="0"  >
                                        <tr style="height:36pt">
                                            <td
                                                style="width:209pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                                                <p class="s17" style="padding-top: 3pt;text-indent: 0pt;text-align: center;"> {{startCompanyStore?.companyInProgress?.shares[0].no_of_share.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") }} </p>
                                            </td>
                                        </tr>
                                        <tr style="height:36pt">
                                            <td
                                                style="width:189pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                                                <p class="s17" style="padding-left: 24pt;text-indent: 0pt;text-align: left;"> {{startCompanyStore?.companyInProgress?.shares[0].currency}}    <span style="float:right; padding-right: 50px;"> {{startCompanyStore?.companyInProgress?.shares[0].total_amount_paid.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") }} </span> </p>
                                            </td>
                                            
                                        </tr>
                                        <tr style="height:37pt">
                                            <td
                                            style="width:189pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                                            <p class="s17" style="padding-left: 24pt;text-indent: 0pt;text-align: left;">                            {{startCompanyStore?.companyInProgress?.shares[0].currency}}     <span style="float:right; padding-right: 50px;">{{startCompanyStore?.companyInProgress?.shares[0].total_amount_paid.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") }} </span> </p>
                                        </td>
                                        </tr>
                                        <tr style="height:36pt">
                                            <td
                                            style="width:189pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                                            <p class="s17" style="padding-left: 24pt;text-indent: 0pt;text-align: left;">               {{startCompanyStore?.companyInProgress?.shares[0].currency}}   <span style="float:right; padding-right: 50px;">0</span> </p>
                                        </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </li>
                        </ol>
                </div>
            </div>

            <div class="row" style="padding-top: 100px; padding-bottom: 40px;">
                <div class="col-4">

                </div>
                <div class="col-4">

                </div>

                <div class="col-4">
                    <p class="s72" style="padding-top: 0pt;padding-right: 46pt;text-indent: 0pt;line-height: 84%;text-align: right;">
                        Document Ref. No.: <br>
                         Submission Date: <br>
                          Resubmission Date:</p>
                </div>
            </div>
</template>

<script setup lang="ts">
import { useStartCompanyStore } from '../StartCompany/StartCompany_store';
const startCompanyStore = useStartCompanyStore();

</script>

<style scoped>
@import '@/assets/pdf2.css';
</style>