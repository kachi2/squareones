<template>
   <div style="padding-top: 50px;"></div>
                    <hr style="width: 100%; font-weight: 800;">
                    <div style="padding-top: 20px;"> </div>
                    <div class="row">
                        <div class="col-12">

                            <p style="padding-top: 3pt;padding-left: 6pt;text-indent: 0pt;line-height: 142%;text-align: justify;">I/WE, the
                                undersigned, wish to form a company and wish to adopt the articles of association as attached, and I/we
                                respectively agree to subscribe for the amount of share capital of the Company and to take the number of shares
                                in the Company set opposite my/our respective name(s).</p>
                        </div>
                    </div>

                    <div class="row" style="padding-top: 20px;">
                        <table style="border-collapse:collapse;margin-left:6.17pt" cellspacing="0">
                            <tr style="height:36pt">
                                <td
                                    style="width:288pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                                    <p class="s74"
                                        style="padding-top: 2pt;padding-left: 4pt;padding-right: 3pt;text-indent: 0pt;text-align: center;">
                                        Name(s) of Founder Members</p>
                                </td>
                                <td
                                    style="width:203pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                                    <p class="s74"
                                        style="padding-top: 2pt;padding-left: 2pt;padding-right: 2pt;text-indent: 0pt;text-align: center;">
                                        Number of Share(s) and</p>
                                    <p class="s74"
                                        style="padding-top: 5pt;padding-left: 2pt;padding-right: 2pt;text-indent: 0pt;text-align: center;">
                                        Total Amount of Share Capital</p>
                                </td>
                            </tr>
                            <tr style="height:216pt" v-for="shares in shareholders">
                                <td
                                    style="width:288pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                                    <p class="s8"
                                        style="padding-top: 6pt;padding-left: 4pt;text-indent: 0pt;line-height: 16pt;text-align: center;">
                                        {{shares?.first_name??''}} {{shares?.last_name??''}}  {{shares?.authorized_persons?.first_name??''}} {{shares?.authorized_persons?.last_name??''}}  </p>
                                    <p class="s17" style="padding-left: 4pt;text-indent: 0pt;line-height: 16pt;text-align: center;">
                                        {{shares?.chn_last_name}}{{shares?.chn_first_name}}
                                    </p>
                                    <p class="s8"
                                            style="padding-top: 6pt;padding-left: 4pt;text-indent: 0pt;line-height: 16pt;text-align: center">
                                                <img width="100" :src="shares?.signature" alt="">
                                            </p>
                                </td>
                                <td
                                    style="width:203pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                                    <p class="s17"
                                        style="padding-top: 7pt;padding-left: 2pt;padding-right: 2pt;text-indent: 0pt;text-align: center;">
                                        {{shares?.owner_shares?.total_amount.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") }}</p>
                                    <p class="s17"
                                        style="padding-top: 12pt;padding-left: 2pt;padding-right: 3pt;text-indent: 0pt;text-align: center;">
                                        Ordinary</p>
                                    <p class="s17"
                                        style="padding-top: 11pt;padding-left: 2pt;padding-right: 5pt;text-indent: 0pt;text-align: center;">
                                        {{shares?.company_shares[0]?.currency}} {{shares?.owner_shares?.total_amount.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") }}</p>
                                </td>
                            </tr>
                            <!-- <tr style="height:217pt">
                                <td
                                    style="width:288pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                                    <p class="s17"
                                        style="padding-top: 2pt;padding-left: 4pt;padding-right: 1pt;text-indent: 0pt;text-align: center;">
                                        SQUARE ONE LIMITED</p>
                                </td>
                                <td
                                    style="width:203pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                                    <p class="s17"
                                        style="padding-top: 2pt;padding-left: 4pt;padding-right: 2pt;text-indent: 0pt;text-align: center;">1
                                    </p>
                                    <p class="s17"
                                        style="padding-top: 12pt;padding-left: 5pt;padding-right: 2pt;text-indent: 0pt;text-align: center;">
                                        Ordinary</p>
                                    <p class="s17" style="padding-top: 11pt;padding-left: 40pt;text-indent: 0pt;text-align: left;">HKD 1</p>
                                </td>
                            </tr> -->
                            <tr style="height:198pt">
                                <td
                                    style="width:288pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                                    <p class="s17"
                                        style="padding-top: 2pt;padding-left: 4pt;padding-right: 1pt;text-indent: 0pt;text-align: center;">
                                        Total:</p>
                                </td>
                                <td
                                    style="width:203pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                                    <p class="s17"
                                        style="padding-top: 4pt;padding-left: 4pt;padding-right: 2pt;text-indent: 0pt;text-align: center;">
                                        {{shareholders?shareholders[0]?.company_shares[0]?.no_of_share:''}} </p>
                                    <p class="s17"
                                        style="padding-top: 12pt;padding-left: 3pt;padding-right: 2pt;text-indent: 0pt;text-align: center;">
                                        Ordinary</p>
                                    <p class="s17"
                                        style="padding-top: 11pt;padding-left: 4pt;padding-right: 2pt;text-indent: 0pt;text-align: center;">
                                        {{shareholders?shareholders[0]?.company_shares[0]?.currency:''}}  {{shareholders?shareholders[0]?.company_shares[0]?.total_amount_paid:''}}</p>
                                </td>
                            </tr>
                            </table>
                    </div>

</template>
<script setup lang="ts">
import { useStartCompanyStore } from "../StartCompany/StartCompany_store";
const startCompanyStore = useStartCompanyStore();
import { ref, computed } from 'vue'


const shareholders = computed(() => {
    const individualShareholder = startCompanyStore.companyInProgress?.company_entity ?? [];
    const founders: any[] = [];
    individualShareholder.forEach((shares: any) => {
        const obj = shares.individual || shares.corporate ;
        //  console.log(shares)
        let cp = shares.entity_capacity_id;
        if (obj && cp.includes(1)) {
            obj.entity_type_id = shares.entity_type_id,
                obj.capacity = shares.entity_capacity_id
            obj.company_shares = startCompanyStore.companyInProgress?.shares
            founders.push(obj)
             console.log(founders, 'shareholders signature')
        }
    })

    return founders;
})


</script>


<style scoped>
@import '@/assets/pdf2.css';
</style>