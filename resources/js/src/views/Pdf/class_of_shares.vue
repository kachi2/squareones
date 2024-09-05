<template style="page-break-after: always">
    <hr style="width: 100%; font-weight: 800;">
    <div style="padding-top: 50px;"> </div>

    <div class="row">
        <div class="col-6">
            <p style="text-indent: 0pt;text-align: left;"> </p>
            <p style="padding-left: 11pt;text-indent: 0pt;line-height: 142%;text-align: left;">Class of Shares</p>
            <p style="padding-top: 50px; padding-left: 11pt;text-indent: 0pt;line-height: 142%;text-align: left;">The
                total number of
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
            <table style="border-collapse:collapse;margin-left:20pt; width:300px" cellspacing="0">
                <tr style="height:36pt">
                    <td
                        style="width:209pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                        <p class="s8" style="padding-top: 3pt;text-indent: 0pt;text-align: center;">Orindary</p>
                    </td>
                </tr>
                <tr style="height:36pt">
                    <td
                        style="width:209pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                        <p class="s8" style="padding-top: 3pt;text-indent: 0pt;text-align: center;">
                            {{ startCompanyStore?.companyInProgress?.shares[0].currency }}
                            {{ startCompanyStore?.companyInProgress?.shares[0].total_amount_paid.replace(/(\d)(?=(\d{3})+(?!\d))/g,
                            "$1,") }} </p>
                    </td>
                </tr>
                <tr style="height:36pt">
                    <td
                        style="width:189pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                        <p class="s8" style="padding-left: 24pt;text-indent: 0pt;text-align: left;">
                            {{ startCompanyStore?.companyInProgress?.shares[0].currency }} <span
                                style="float:right; padding-right: 50px;">
                                {{ startCompanyStore?.companyInProgress?.shares[0].total_amount_paid.replace(/(\d)(?=(\d{3})+(?!\d))/g,
                                "$1,") }} </span> </p>
                    </td>

                </tr>
                <tr style="height:37pt">
                    <td
                        style="width:189pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                        <p class="s8" style="padding-left: 24pt;text-indent: 0pt;text-align: left;">
                            {{ startCompanyStore?.companyInProgress?.shares[0].currency }} <span
                                style="float:right; padding-right: 50px;">
                                {{ startCompanyStore?.companyInProgress?.shares[0].total_amount_paid.replace(/(\d)(?=(\d{3})+(?!\d))/g,
                                "$1,") }} </span> </p>
                    </td>
                </tr>
                <tr style="height:36pt">
                    <td
                        style="width:189pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                        <p class="s8" style="padding-left: 24pt;text-indent: 0pt;text-align: left;">HKD <span
                                style="float:right; padding-right: 50px;">0</span> </p>
                    </td>
                </tr>
            </table>
        </div>
    </div>

    <div class="row" style="padding-top: 50px;">
        <div class="col-6">
            <p style="text-indent: 0pt;text-align: left;"> </p>
            <p style="padding-left: 11pt;text-indent: 0pt;line-height: 142%;text-align: left;">Class of Shares</p>
            <p style="padding-top: 50px; padding-left: 11pt;text-indent: 0pt;line-height: 142%;text-align: left;">The
                total number of
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
            <table style="border-collapse:collapse;margin-left:20pt" cellspacing="0">
                <tr style="height:36pt">
                    <td
                        style="width:209pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                        <!-- <p class="s17" style="padding-top: 3pt;text-indent: 0pt;text-align: center;">Orindary</p> -->
                    </td>
                </tr>
                <tr style="height:36pt">
                    <td
                        style="width:209pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                        <p class="s17" style="padding-top: 3pt;text-indent: 0pt;text-align: center;"></p>
                    </td>
                </tr>
                <tr style="height:36pt">
                    <td
                        style="width:189pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                        <!-- <p class="s17" style="padding-left: 24pt;text-indent: 0pt;text-align: left;">HKD <span style="float:right; padding-right: 50px;">10000</span> </p> -->
                    </td>

                </tr>
                <tr style="height:37pt">
                    <td
                        style="width:189pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                        <!-- <p class="s17" style="padding-left: 24pt;text-indent: 0pt;text-align: left;">HKD <span style="float:right; padding-right: 50px;">10000</span> </p> -->
                    </td>
                </tr>
                <tr style="height:36pt">
                    <td
                        style="width:189pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                        <!-- <p class="s17" style="padding-left: 24pt;text-indent: 0pt;text-align: left;">HKD <span style="float:right; padding-right: 50px;">10000</span> </p> -->
                    </td>
                </tr>
            </table>
        </div>
    </div>

</template>

<script setup lang="ts">
import { useStartCompanyStore } from '../StartCompany/StartCompany_store';
const startCompanyStore = useStartCompanyStore();

</script>

<style scoped>
@import '@/assets/pdf.css';
</style>