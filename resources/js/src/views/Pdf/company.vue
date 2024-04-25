<template>

    <p style="text-indent: 0px;text-align: left;"><br /></p>
    <table style="border-collapse:collapse;margin-left:5.78pt" cellspacing="0">
        <tr style="height:79pt">
            <td style="width:148pt">
                <p style="text-indent: 0px;text-align: left;"><br />

                </p>
                <p class="s1" style="padding-left: 39pt;text-indent: 0px;line-height: 14pt;text-align: left;">
                    <!-- <img src="" style="width: 100px"> <br> -->
                    公 司 註 冊 處
                </p>
                <p class="s2" style="padding-left: 39pt;text-indent: 0px;line-height: 10px;text-align: left;">Companies
                    Registry</p>
            </td>
            <td style="width:319pt">
                <p class="s3"
                    style="padding-left: 72pt;padding-right: 123pt;text-indent: 0px;line-height: 18pt;text-align: center;">
                    法團成立表格</p>
                <p class="s4"
                    style="padding-left: 73pt;padding-right: 123pt;text-indent: 0px;line-height: 21pt;text-align: center;">
                    (<span class="s3">股份有限公司</span>)</p>
                <p class="s4" style="padding-left: 22pt;padding-right: 70px;text-indent: 0px;text-align: center;">
                    Incorporation Form (Company Limited by Shares)</p>
            </td>
            <td style="width:80px">
                <p style="text-indent: 0px;text-align: left;"><br /></p>
            </td>
        </tr>
        <tr style="height:34px">
            <td style="width:148px">
                <p style="text-indent: 0px;text-align: left;"><br /></p>
            </td>
            <td style="width:319px">
                <p class="s5" style="padding-left: 281pt;text-indent: 0px;line-height: 17pt;text-align: left;">表格</p>
                <p class="s6" style="padding-left: 281pt;text-indent: 0px;line-height: 11pt;text-align: left;">Form</p>
            </td>
            <td style="width:80px">
                <p class="s7"
                    style="padding-top: 1pt;padding-left: 10px;text-indent: 0px;line-height: 31pt;text-align: left;">
                    NNC1</p>
            </td>
        </tr>
        <tr style="height:11px">
            <td style="" colspan="2">
                <p class="s8" style="padding-left: 2pt;text-indent: 0px;line-height: 9pt;text-align: left;">註
                    <span class="s9">Note</span>
                </p>
            </td>
            <td style="width:80px">
                <p style="text-indent: 0px;text-align: left;"><br /></p>
            </td>
        </tr>
        <tr style="height:17pxpx">
            <td style="width:20px" colspan="2">
                <p class="s10" style="padding-left: 50px;text-indent: 0px;text-align: left">

                    <span class="s12">建議採用的公司名稱 </span>
                    <span class="s13">Proposed Company Name</span>
                </p>
            </td>
            <td style="width:80px">
                <p style="text-indent: 0px;text-align: left;"> <br /> </p>
            </td>
        </tr>

        <tr style="height:17px; ">
            <td style="width:100%" colspan="2">
                <p class="s1"
                    style="padding-top: 3pt;padding-left: 50px;text-indent: 0px;line-height: 13pt;text-align: left;">
                    建議採用的公司英文名稱 <span class="s6">Proposed English Company Name</span></p>
            </td>
        </tr>
        <tr style="height:51pt">
            <td style="width:100%;border-style:solid;border-width:1pt; border-bottom-width:1pt" colspan="3">
                <p style="text-indent: 0px;text-align: left; padding-left:40px"> {{ companyInfo?.names[0].eng_name }} {{
                    companyInfo?.names[0]?.eng_prefix }} <br />
                </p>
            </td>
        </tr>
        <tr style="height:17px; ">
            <td style="width:100%" colspan="2">
                <p class="s1"
                    style="padding-top: 3pt;padding-left: 50px;text-indent: 0px;line-height: 13pt;text-align: left;">
                    建議採用的公司英文名稱 <span class="s6">Proposed Chinese Company Name</span></p>
            </td>
        </tr>
        <tr style="height:51pt">
            <td style="width:100%;border-style:solid;border-width:1pt; border-bottom-width:1pt" colspan="3">
                <p style="text-indent: 0px;text-align: left; padding-left:40px"> {{ companyInfo?.names[0].chn_name }} {{
                    companyInfo?.names[0]?.chn_prefix }}<br />

                </p>
            </td>
        </tr>
    </table>
    <li data-list-text="2">
        <p class="s14"
            style="padding-top: 3pt;padding-left: 50pt;text-indent: -22px;line-height: 15px;text-align: left;">公司類別
            <span class="h4">Type of Company</span>
        </p>
        <p class="s15" style="padding-left: 50px;text-indent:0pt;line-height: 12px;text-align:">請在適用的空格內加上
            <span class="s16"></span><span class="s17"> </span>號 <span class="s18">Please tick the relevant box</span>
        </p>
        <p style="text-indent: 0pt;text-align: left;"> </p>
        <p style="text-indent: 0pt;text-align: left;"></p>
        <p class="s19" style="padding-top: 2px;padding-left: 64px;text-indent: 0pt;">
            <input type="checkbox" checked style="width: 20px; height:20px; background:#000">
            <span class="p" style="padding:3px; "> 私人 Private </span>
            <input type="checkbox" style="width: 20px; height:20px;">
            <span class="p"> 公眾 Public</span>
        </p>

        <p class="s19" style="padding-top: 15pt;padding-bottom: 2px;padding-left: 50px;text-indent: 0px;">
            擬經營業務性質 <span class="s20">Nature of Proposed Business</span></p>
    </li>

    <li data-list-text="2">
        <p class="s19" style="padding-top: 10px;padding-bottom: 10px;padding-left: 20px;text-indent: 0px;">
            <textarea cols="10" rows="4">  {{ companyInfo?.business_nature?.code }}</textarea> <textarea cols="50" rows="4" class="">
        {{ companyInfo?.business_nature?.name }}
        </textarea>
        </p>
        <p class="s21" style="padding-left: 68px;text-indent: 0pt;line-height: 9px;text-align: left;">
            <span class="s22"> 編碼 Code </span><span class="s22" style="padding-left:40px"> 描述 Description</span>
        </p>
    </li>
    <li data-list-text="3">
        <p class="s14"
            style="padding-left: 50px; padding-top:20px; text-indent: 0px;line-height: 15px;text-align: left;">
            公司在香港的註冊辦事處的建議地址</p>
        <h4 style="padding-left: 50px;text-indent: 0px;line-height: 12pt;text-align: left;">Proposed Address of the
            Company’s Registered Office in Hong Kong</h4>
        <p class="s18" style="padding-left: 67px;text-indent: 0px;text-align: left;">(<span
                class="s15">本處不接納「轉交」地址及郵政信箱號碼 </span>‘Care of’ addresses and post office box numbers are not
            acceptable)</p>

        <div class="row" style="float: right; margin-top:20px">
            <table style="border-collapse:collapse" cellspacing="0">
                <tr style="height:40px;">
                    <td
                        style="width:355pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                        <p style="text-indent: 0px;text-align: left; padding-left:10px"> {{ companyInfo?.flat }} <br />
                        </p>
                    </td>
                </tr>
                <tr style="height:35pt">
                    <td
                        style="width:355pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                        <p style="text-indent: 0px;text-align: left;padding-left:10px"> {{ companyInfo?.building
                            }}<br /> </p>
                    </td>
                </tr>
                <tr style="height:30pt">
                    <td
                        style="width:355pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                        <p style="text-indent: 0px;text-align: left;padding-left:10px"> {{ companyInfo?.city }}<br />
                        </p>
                    </td>
                </tr>
                <tr style="height:23pt">
                    <td
                        style="width:355pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                        <p style="text-indent: 0px;text-align: left;padding-left:10px"> {{ companyInfo?.state }}<br />
                        </p>
                    </td>
                </tr>
                <tr style="height:23pt">
                    <td
                        style="width:355pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                        <p class=""
                            style="padding-top: 1pt;padding-left: 1pt;text-indent: 0px;text-align: left;padding-left:10px">
                            {{ companyInfo?.country }}
                            <span class="s24"> </span><span class="s25"></span>
                        </p>
                    </td>
                </tr>
            </table>
        </div>

        <div style="margin-top:20px">
            <p style="text-indent: 0px;text-align: left;"></p>
            <p class="s21"
                style="padding-top: 4px;padding-left: 50px;text-indent: 0px;line-height: 11pt;text-align: left;">室／樓／座等
            </p>
            <p class="s22" style="padding-left: 50px;text-indent: 0px;line-height: 11pt;text-align: left;">Flat<span
                    class="s26">／</span>Floor<span class="s26">／</span>Block etc.</p>
            <p class="s21"
                style="padding-top: 7px;padding-left: 50px;text-indent: 0px;line-height: 11pt;text-align: left;">大廈 </p>
            <p class="s22" style="padding-left: 50px;text-indent: 0px;line-height: 11pt;text-align: left;">Building</p>
            <p class="s21"
                style="padding-top: 7px;padding-left: 50px;text-indent: 0px;line-height: 11pt;text-align: left;">
                街道／屋苑／地段／村等</p>
            <p class="s22" style="padding-left: 50px;text-indent: 0px;line-height: 11pt;text-align: left;">Street<span
                    class="s26">／</span>Estate<span class="s26">／</span>Lot<span class="s26">／</span>Village etc<span
                    class="s27">.</span></p>
            <p class="s21"
                style="padding-top: 7pt;padding-left: 50px;text-indent: 0px;line-height: 11px;text-align: left;">區</p>
            <p class="s22" style="padding-left: 50px;text-indent: 0px;line-height: 9pt;text-align: left;">District</p>
            <p class="s21" style="padding-top: 6px;padding-left: 50px;text-indent: 0px;text-align: left;">地區 </p>
            <p class="s22" style="padding-top: 2px;padding-left: 50px;text-indent: 0px;text-align: left;">Region</p>
            <p style="padding-left: 70px;text-indent: 0px;line-height: 9pt;text-align: left;" />
        </div>

        <p style="text-indent: 0px;text-align: left;"><br /></p>
        <p style="padding-top: 2pt;text-indent: 0px;text-align: center;"><span
                style=" color: #FFF; font-family:Arial, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 7pt;">4</span>
        </p>
    </li>
    <li data-list-text="4">
        <table style="border-collapse:collapse" cellspacing="0">
            <tr style="height:26px">

                <td
                    style="padding-left:50px; width:462pt; height:100px; border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style="text-indent: 0px;text-align: left;"><br />

                        本處專用 For Official Use</p>
                </td>
            </tr>
        </table>
        <p style="text-indent: 0px;text-align: left;" />
    </li>
</template>

<script setup lang="ts">

const props = defineProps<{
    companyInfo: any
}>()

// console.log(props.companyInfo)

</script>

<style scoped>
@import '@/assets/pdf.css';
</style>