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
                    <span style="font-weight: 800;">6</span>
                </div>
                <div class=" col-11 col-md-11">
                    <p class="s6" style="padding-top: 0pt;padding-left: 35pt;text-indent: -22pt;text-align: left;">創辦成員
                        <span class="s7">Founder Members</span>
                    </p>
                </div>
            </div>
            <div class="row" style="padding-top: 5px;">
                <div class="col-4 col-md-4">
                    <p style="text-indent: 0pt;text-align: left;" />
                    <p class="contents s21"
                        style="text-indent: 0pt;padding-left: 35pt; line-height: 12pt;text-align: left;">1
                        <span class="s26">中文姓名 ／ 名稱 </span>
                    </p>
                    <p class="s27" style="padding-left: 35pt;text-indent: 0pt;line-height: 9pt;text-align: left;">Name
                        in Chinese</p>
                    <p style="padding-top: 3pt;text-indent: 0pt;text-align: left;"><br /></p>
                </div>
                <div class="col-8 col-md-8">
                    <div class="textbox" style="border:1.0pt solid #000000;display:block;min-height:34.0pt; ">
                        <p class="s17" style="text-indent: 0pt;line-height: 17pt;">  {{ corporateShare?.chn_company_name }}</p>
                    </div>

                </div>
            </div>
            <div class="row" style="padding-top: 5px;">
                <div class="col-4">
                    <p class="s15" style="padding-top: 3pt;padding-left: 35pt;text-indent: 0pt;text-align: left;">英文姓名
                        <span style="float:right"> 姓氏 </span>
                    </p>
                    <p class="s27" style="padding-left: 35pt;text-indent: 0pt;text-align: left;">Name in English <span
                            style="float:right">Surname</span> </p>
                </div>
                <div class="col-8">
                    <div class="textbox" style="border:1.0pt solid #000000;display:block;min-height:34.0pt; ">
                        <p class="s8" style="text-indent: 0pt;line-height: 17pt;"></p>
                    </div>

                </div>
            </div>
            <div class="row" style="padding-top: 5px;">
                <div class="col-4">
                    <p class="s15" style="padding-top: 3pt;padding-left: 35pt;text-indent: 0pt;text-align: left;"><span
                            style="float:right;">名 字 </span></p><br>
                    <p class="s27" style="padding-left: 35pt;text-indent: 0pt;text-align: left;"> <span
                            style="float:right; ">Other Names </span> </p>
                </div>
                <div class="col-8">
                    <div class="textbox" style="border:1.0pt solid #000000;display:block;min-height:34.0pt; ">
                        <p class="s8" style="text-indent: 0pt;line-height: 17pt;"> </p>
                    </div>

                </div>
            </div>
            <div class="row" style="padding-top: 5px;">
                <div class="col-12">
                    <p class="s27"
                        style="padding-left: 35pt;text-indent: 0pt;text-align: left; text-decoration: underline; "> 或 OR
                    </p>
                </div>
            </div>
            <div class="row" style="padding-top: 5px;">
                <div class="col-4">
                    <p class="s15" style="padding-top: 3pt;padding-left: 35pt;text-indent: 0pt;text-align: left;">英文姓名
                    </p>
                    <p class="s27" style="padding-left: 35pt;text-indent: 0pt;text-align: left;">Name in English</p>
                </div>
                <div class="col-8">
                    <div class="textbox" style="border:1.0pt solid #000000;display:block;min-height:34.0pt; ">
                        <p class="s8" style="text-indent: 0pt;line-height: 17pt;text-align: left;">
                            {{ corporateShare?.company_name }}
                        </p>
                    </div>

                </div>
            </div>

            <div class="row" style="padding-top: 5px;">
                <div class="col-12">
                    <p class="s30" style="padding-left: 35pt;text-indent: 0pt;text-align: left;">地址 <span
                            class="s2">Address</span></p>
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
                        <p class="s8" style="text-indent: 0pt;line-height: 17pt;"> {{ corporateShare?.flat }}</p>
                    </div>

                </div>
            </div>
            <div class="row" style="padding-top: 5px;">
                <div class="col-4">
                    <p class="s15" style="padding-top: 3pt;padding-left: 35pt;text-indent: 0pt;text-align: left;">大 廈 </p>
                    <p class="s27" style="padding-left: 35pt;text-indent: 0pt;text-align: left;">
                        Building </p>
                </div>
                <div class="col-8">
                    <div class="textbox" style="border:1.0pt solid #000000;display:block;min-height:34.0pt; ">
                        <p class="s8" style="text-indent: 0pt;line-height: 17pt;">{{ corporateShare?.building }}</p>
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
                        <p class="s8" style="text-indent: 0pt;line-height: 17pt;">{{ corporateShare?.street }}</p>
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
                        <p class="s8" style="text-indent: 0pt;line-height: 17pt;">{{ corporateShare?.city ?? corporateShare?.state }}</p>
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
                        <p class="s8" style="text-indent: 0pt;line-height: 17pt;">{{ corporateShare?.country }}</p>
                    </div>

                </div>
            </div>

            <div class="row" style="padding-top: 5px;">
                <div class="col-4">
                    <p class="s15" style="padding-left: 35pt;text-indent: 0pt;text-align: left;">認購的股本 </p>
                    <p class="s27" style="padding-left: 35pt;text-indent: 0pt;text-align: left;">Share Capital to be
                        Subscribed</p>
                </div>
                <div class="col-8">
                    <table style="border-collapse:collapse;margin-left:0pt" cellspacing="0" min-width="500px">
                        <tr style="height:29pt">
                            <td style="width:121pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
                                rowspan="2">
                                <p class="s31"
                                    style="padding-top: 8pt;text-indent: 0pt;line-height: 11pt;text-align: center;">
                                    股份的類別
                                </p>
                                <p class="s32" style="text-indent: 0pt;line-height: 11pt;text-align: center;">( <span
                                        class="s31">如普通股 ／
                                        優先股等 </span>)</p>
                                <p class="s33" style="text-indent: 0pt;line-height: 9pt;text-align: center;">Class of
                                    Shares</p>
                                <p class="s33" style="text-indent: 0pt;line-height: 11pt;text-align: center;">(e.g.
                                    Ordinary<span class="s31">／</span>Preference etc.)</p>
                            </td>
                            <td style="width:240pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
                                colspan="3">
                                <p class="s31"
                                    style="padding-top: 4pt;padding-right: 1pt;text-indent: 0pt;line-height: 11pt;text-align: center;">
                                    建議向該成員發行的股份數目</p>
                                <p class="s33"
                                    style="padding-left: 1pt;padding-right: 1pt;text-indent: 0pt;line-height: 9pt;text-align: center;">
                                    Shares Proposed to be Issued to the Member</p>
                            </td>
                        </tr>
                        <tr style="height:29pt">
                            <td
                                style="width:87pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                                <p class="s31"
                                    style="padding-top: 4pt;text-indent: 0pt;line-height: 11pt;text-align: center;">總數
                                </p>
                                <p class="s33" style="text-indent: 0pt;line-height: 9pt;text-align: center;">Total
                                    Number</p>
                            </td>
                            <td
                                style="width:57pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                                <p class="s34"
                                    style="padding-top: 3pt;padding-left: 8pt;text-indent: 0pt;text-align: left;">貨幣 單 位
                                </p>
                                <p class="s33" style="padding-left: 12pt;text-indent: 0pt;text-align: left;">Currency
                                </p>
                            </td>
                            <td
                                style="width:96pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                                <p class="s31"
                                    style="padding-top: 3pt;padding-left: 1pt;text-indent: 0pt;text-align: center;">總款額
                                </p>
                                <p class="s33" style="padding-left: 1pt;text-indent: 0pt;text-align: center;">Total
                                    Amount</p>
                            </td>
                        </tr>
                        <tr style="height:28pt">
                            <td
                                style="width:121pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                                <p class="s17"
                                    style="padding-left: 39pt;text-indent: 0pt;line-height: 17pt;text-align: left;">
                                    Ordinary
                                </p>
                            </td>
                            <td
                                style="width:87pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                                <p class="s17" style="text-indent: 0pt;line-height: 17pt;text-align: center;">{{corporateShare?.owner_shares?.total_amount.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")   }}</p>
                            </td>
                            <td
                                style="width:57pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                                <p class="s17" style="padding-top: 6pt;text-indent: 0pt;text-align: center;">{{corporateShare?.company_shares[0]?.currency }}</p>
                            </td>
                            <td
                                style="width:96pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                                <p class="s17"
                                    style="padding-left: 1pt;text-indent: 0pt;line-height: 17pt;text-align: center;">
                                    {{corporateShare?.owner_shares?.total_amount.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")  }}</p>
                            </td>
                        </tr>
                        <tr style="height:28pt">
                            <td
                                style="width:121pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                                <p style="text-indent: 0pt;text-align: left;"><br /></p>
                            </td>
                            <td
                                style="width:87pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                                <p style="text-indent: 0pt;text-align: left;"><br /></p>
                            </td>
                            <td
                                style="width:57pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                                <p style="text-indent: 0pt;text-align: left;"><br /></p>
                            </td>
                            <td
                                style="width:96pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                                <p style="text-indent: 0pt;text-align: left;"><br /></p>
                            </td>
                        </tr>
                        <tr style="height:28pt">
                            <td style="width:121pt;border-top-style:solid;border-top-width:1pt;border-right-style:solid;border-right-width:1pt"
                                rowspan="2">
                                <p style="padding-top: 9pt;text-indent: 0pt;text-align: left;"><br /></p>
                                <p class="s22" style="padding-left: 67pt;text-indent: 0pt;text-align: left;">總值 <span
                                        class="s23">Total</span></p>
                            </td>
                            <td style="width:87pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
                                rowspan="2">
                                <p class="s17" style="text-indent: 0pt;line-height: 17pt;text-align: center;"> {{corporateShare?.owner_shares?.total_amount.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")   }}</p>
                            </td>
                            <td
                                style="width:57pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                                <p class="s17" style="padding-top: 6pt;text-indent: 0pt;text-align: center;"> {{corporateShare?.company_shares[0]?.currency }}</p>
                            </td>
                            <td
                                style="width:96pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                                <p class="s17"
                                    style="padding-left: 1pt;text-indent: 0pt;line-height: 17pt;text-align: center;">
                                    {{ corporateShare?.owner_shares?.total_amount.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")  }}</p>
                            </td>
                        </tr>
                        <tr style="height:28pt">
                            <td
                                style="width:57pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                                <p style="text-indent: 0pt;text-align: left;"><br /></p>
                            </td>
                            <td
                                style="width:96pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                                <p style="text-indent: 0pt;text-align: left;"><br /></p>
                            </td>
                        </tr>
                    </table>
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
            
            <div style="padding-top: 50px;"> </div>
            
</template>


<script setup lang="ts">

const props = defineProps<{
    corporateShare: any
}>();

// console.log('herer')
// console.log(props.corporateShare)
</script>

<style scoped>
@import '@/assets/pdf.css';
</style>