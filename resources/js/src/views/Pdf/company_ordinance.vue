<template>
    <div>
        
          
  
  <div style="padding-top:20px"></div>
  <hr>
    <h3 style="padding-top: 10pt;padding-left: 16pt;text-indent: 0pt;text-align: center;">THE COMPANIES ORDINANCE
        (CHAPTER 622)</h3>
    <p style="padding-top: 3pt;text-indent: 0pt;text-align: left;"><br /></p>
    <h3 style="padding-left: 107pt;text-indent: 0pt;line-height: 112%;text-align: center;">Private Company Limited by
        Shares ARTICLES OF ASSOCIATION</h3>
    <h3 style="padding-left: 16pt;text-indent: 0pt;line-height: 16pt;text-align: center;">OF</h3>
    <p style="text-indent: 0pt;text-align: left;"><br /></p>
    <p class="s73" style="padding-left: 16pt;text-indent: 0pt;text-align: center;">
        {{startCompanyStore?.companyInProgress?.names[0].eng_name?startCompanyStore?.companyInProgress?.names[0].eng_name + " " +startCompanyStore?.companyInProgress?.names[0].eng_prefix :startCompanyStore?.companyInProgress?.names[0].chn_name +" "+ startCompanyStore?.companyInProgress?.names[0].chn_prefix}}</p>
    <p style="text-indent: 0pt;text-align: left;"><br /></p>
    <p class="7" style="padding-left: 11pt;text-indent: 0pt;text-align: left;">Part A Mandatory Articles</p>
    <ol id="l18">
        <li data-list-text="1.">
            <p class="s" style="padding-top: 5pt;padding-left: 23pt;text-indent: -12pt;text-align: left;font-size:16px; font-weight:bold">1. Company Name
                <span class="p">The name of the company is</span></p>
            <p class="s" style="padding-top: 9pt;padding-left: 16pt;text-indent: 0pt;text-align: center; font-size:16px; font-weight:bold">
                {{startCompanyStore?.companyInProgress?.names[0].eng_name?startCompanyStore?.companyInProgress?.names[0].eng_name + " " +startCompanyStore?.companyInProgress?.names[0].eng_prefix :startCompanyStore?.companyInProgress?.names[0].chn_name +" "+ startCompanyStore?.companyInProgress?.names[0].chn_prefix}}
            </p>
            <p style="text-indent: 0pt;text-align: left;"><br /></p>
        </li>
        <li data-list-text="2.">
            <p class="s" style="padding-left: 23pt;text-indent: -12pt;text-align: left; font-size:16px; font-weight:bold">2. Members’ Liabilities</p>
            <p style="padding-top: 5pt;padding-left: 11pt;text-indent: 0pt;text-align: left;">The liability of the
                members is limited.</p>
            <p style="padding-top: 10pt;text-indent: 0pt;text-align: left;"><br /></p>
        </li> 
        <li data-list-text="">
            <p class="s7" style="padding-left: 23pt;text-indent: -12pt;text-align: left;font-size:16px; font-weight:bold">3. Liabilities or Contributions
                of Members</p>
            <p style="padding-top: 5pt;padding-left: 11pt;text-indent: 0pt;text-align: left;">The liability of the
                members is limited to any amount unpaid on the shares held by the members.</p>
            <p style="padding-top: 10pt;text-indent: 0pt;text-align: left;"><br /></p>
        </li>
        <li data-list-text="4.">
            <p class="" style="padding-left: 23pt;text-indent: -12pt;text-align: left;font-size:16px; font-weight:bold">4. Share Capital and Initial
                Shareholdings (on the company’s formation)</p>
            <p style="padding-top: 11pt;text-indent: 0pt;text-align: left;"><br /></p>
            <table style="border-collapse:collapse;margin-left:3pt" cellspacing="0">
                <tr style="height:36pt">
                    <td style=" width:400px;" >
                        The total number of
                        shares that the company proposes to issue
                        

                    </td>
                    <td
                        style="width:189pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                        <p class="s17" style="padding-top: 3pt;text-indent: 0pt;text-align: center;">
                             {{startCompanyStore?.companyInProgress?.shares[0].no_of_share}} 
                        </p>
                    </td>
                </tr>
                <tr style="height:36pt">
                    <td>
                        The total amount of share
                capital to be subscribed by the <br> company’s founder members
                    </td>

                    <td
                        style="width:189pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                        <p class="s17" style="padding-left: 24pt;text-indent: 0pt;text-align: left;">    {{startCompanyStore?.companyInProgress?.shares[0].currency}}    {{startCompanyStore?.companyInProgress?.shares[0].total_amount_paid}} </p>
                    </td>
                </tr>
                <tr style="height:37pt">
                    <td style=" width:400px;" >
                        <p style="padding-left:20px"> (I) 
                        The amount to
                        be paid up or to be regarded as paid up
                        </p>

                    </td>
                    <td
                        style="width:189pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                        <p class="s17" style="padding-top: 1pt;padding-left: 23pt;text-indent: 0pt;text-align: left;">
                            {{startCompanyStore?.companyInProgress?.shares[0].currency}}    {{startCompanyStore?.companyInProgress?.shares[0].total_amount_paid}} 
                            </p>
                    </td>
                </tr>
                <tr style="height:36pt" >
                    <td style=" width:400px;" >
                        <p style="padding-left:20px"> (I) 

                        The amount to  remain unpaid or to be  regarded as remaining unpaid
                        </p>
                    </td>
                    <td
                        style="width:189pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                        <p class="s17" style="padding-left: 24pt;text-indent: 0pt;text-align: left;">HKD 0</p>
                    </td>
                </tr>
            </table>
            
        </li>
    </ol>
    <p style="text-indent: 0pt;text-align: left;"><br /></p>
    <p class="" style="padding-right: 80pt;text-indent: 0pt;line-height: 88%;text-align: right;">
        Document Ref. No.: <br>
        Submission Date: <br>
         Resubmission Date:</p>
    </div>
</template>

<script setup lang="ts">
import { useStartCompanyStore } from '../StartCompany/StartCompany_store';
const startCompanyStore = useStartCompanyStore();

</script>

<style scoped>
@import '@/assets/pdf2.css';
</style>