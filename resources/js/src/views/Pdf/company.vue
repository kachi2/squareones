<template>
           <div class="row">
                <div class="col-3 col-md-3">
                    <p style="padding-left: 60px;text-indent: 0pt;text-align: left;">
                            <img width="82" height="51"
                                src="data:image/png;base64,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" />
                    </p>
                    <p class="s1"
                        style="padding-top: 2pt;padding-left: 35pt;text-indent: 0pt;line-height: 14pt;text-align: left;">
                        公 司 註 冊 處</p>
                    <p class="s2" style="padding-left: 35pt;text-indent: 0pt;line-height: 10pt;text-align: left;">
                        Companies Registry</p>
                </div>
                <div class=" col-6 col-md-6" style="text-align: center;">
                    <p class="s3">法團成立表格</p>
                    <h2>(<span class="s3">股份有限公司</span>)</h2>
                    <h2>Incorporation Form <br>(Company Limited by Shares) </h2>
                </div>
                <div class=" col-3 col-md3">

                </div>
            </div>
            <!-- <div style="float:right"> -->
            <div class="row">
                <div class="col-lg-8 col-md-8 col-8">
                </div>
                <div class="col-lg-2 col-md-2 col-2">
                    <!-- <div> -->
                    <p class="s4" style="padding-left: 0pt;text-indent: 0pt;line-height: 17pt;text-align: right;">表格
                    </p>
                    <p class="s5" style="padding-left: 0pt;text-indent: 0pt;line-height: 11pt;text-align: right;">
                        Form</p>
                </div>
                <div class="col-2 col-md-2 col-lg-2">
                    <h1 style="padding-left: 4pt;text-indent: 0pt;text-align: left;">NNC1</h1>
                </div>
                <!-- </div> -->
            </div>

            <div class="row" style="padding-top: 40px;">
                <div class="col-1 col-md-1">
                    <span style="font-weight: 800;">1</span>
                </div>
                <div class="col-11 col-md-11 col-lg-11">
                    <p class="s6" style="text-align: left;">建議採用的公司名稱 <span class="s7">Proposed Company Name</span></p>
                    <p class="s6" style="padding-top: 5pt;text-indent: 0pt;text-align: left;">建議採用的公司英文名稱 <span
                            class="s5">Proposed English Company Name</span></p>
                    <div class="textbox"
                        style="border:1.0pt solid #000000;display:block;min-height:53.9pt; min-width: 600px;">
                        <p class="s8" style="text-indent: 0pt;text-align: left; padding-left:10px">                
                Choice 1:  <span v-if="companyInfo?.names[0]?.eng_name">  {{ companyInfo?.names[0]?.eng_name }} {{ companyInfo?.names[0]?.eng_prefix }} </span> <span v-else> - </span> <br /> 
                Choice 2: <span v-if="companyInfo?.names[1]?.eng_name"> {{ companyInfo?.names[1]?.eng_name }} {{ companyInfo?.names[1]?.eng_prefix }}</span>  <span v-else> - </span><br />
                Choice 3:  <span v-if="companyInfo?.names[2]?.eng_name" >{{ companyInfo?.names[2]?.eng_name }} {{ companyInfo?.names[2]?.eng_prefix }} </span><span v-else> - </span> <br />
                Choice 4: <span v-if="companyInfo?.names[3]?.eng_name"> {{ companyInfo?.names[3]?.eng_name }} {{ companyInfo?.names[3]?.eng_prefix }}</span> <span v-else> - </span> <br />
                Choice 5:  <span v-if="companyInfo?.names[4]?.eng_name"> {{ companyInfo?.names[4]?.eng_name }} {{ companyInfo?.names[4]?.eng_prefix }} </span> <span v-else> - </span></p>
                    </div>
                    <p class="s1" style="padding-top: 3pt;text-indent: 0pt;text-align: left;">建議採用的公司中文名稱 <span
                            class="s5">Proposed Chinese Company Name</span></p>
                    <div class="textbox"
                        style="border:1.0pt solid #000000;display:block;min-height:53.9pt; min-width: 600px;">
                        <p class="s8" style="text-indent: 0pt;text-align: left; padding-left: 10px">
                    Choice 1:<span v-if="companyInfo?.names[0]">  {{ companyInfo?.names[0]?.chn_name }}{{ companyInfo?.names[0]?.chn_prefix }} </span><span v-else> - </span><br />
                    Choice 2:<span v-if="companyInfo?.names[1]?.chn_name"> {{ companyInfo?.names[1]?.chn_name }}{{ companyInfo?.names[1]?.chn_prefix }}</span><span v-else> - </span><br /> 
                    Choice 3:<span v-if="companyInfo?.names[2]?.chn_name"> {{ companyInfo?.names[2]?.chn_name }}{{ companyInfo?.names[2]?.chn_prefix }} </span><span v-else> - </span><br />
                    Choice 4:<span v-if="companyInfo?.names[3]?.chn_name"> {{ companyInfo?.names[3]?.chn_name }}{{ companyInfo?.names[3]?.chn_prefix }} </span><span v-else> - </span><br />
                    Choice 5:<span v-if="companyInfo?.names[4]?.chn_name">  {{ companyInfo?.names[4]?.chn_name }}{{ companyInfo?.names[4]?.chn_prefix }} </span><span v-else> - </span><br />
                        </p>
                    </div>
                </div>
            </div>
            <div class="row" style="padding-top: 10px;">
                <div class="col-md-1 col-1">
                    <span style="font-weight: 800;">2</span>
                </div>
                <div class=" col-11 col-md-11">
                    <p class="s6">公司類別 <span class="s7">Type of Company</span></p>
                    <p class="s9" style="text-indent: 0pt;line-height: 12pt;text-align: left;">請在適用的空格內加上
                        <span class="s10"></span><span class="s11"> </span>號 <span class="s12">Please tick the relevant
                            box</span>
                    </p>
                    <p style="padding-left: 2pt;text-indent: 0pt;text-align: left;">

                    </p>
                </div>
            </div>
            <div class="row">
                <div class=" col-6 col-md-6">
                    <p class="s1" style="padding-top: 1pt;padding-left: 102pt;text-indent: 0pt;">
                        <span
                            style=" display: inline; color: black; font-style: normal; z-index: 1000;  font-weight: normal; text-decoration: none; font-size: 12pt;"></span>
                            <input type="checkbox" checked style="width: 20px; height:20px; border:2px solid #000 " disabled>
                              私人 <span class="s13"> Private </span>
                    </p>
                </div>
                <div class="  col-6 col-md-6">
                    <img width="20" height="22"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAWCAYAAADAQbwGAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAkUlEQVQ4je2VsQnDMBBFn4ITkNACWiFqs4AHMwHtpQlUKxtkA0HAmLsUdpnGUasHv7zHdQ9AnHMN0D8mx/RwyGSt/SzLkmKMLzqotd5TSk8AyTnPqsrZiQgigqqSc54BufR89YshHMIhHMIh3Jm8962U8ljX9bZt2/XMsapijAH2BHjvGxyRCiG86YiUtbYB8gWo/niWrLIvEwAAAABJRU5ErkJgggAA" />
               公眾 <span class="s13">Public </span>
                </div>
            </div>
            <div class="row">
                <div class=" col-12 col-md-12" style="padding-left: 35px;">
                    <p class="s1" style="padding-top: 4pt;padding-left: 0pt;text-indent: 0pt;text-align: left;">
                        擬經營業務性質 <span class="s5">Nature of Proposed Business</span></p>
                </div>
            </div>
            <div class="row">
                <div class=" col-3 col-md-3" style="padding-left: 35px;">
                    <div class="textbox" style="border:1.0pt solid #000000;min-height:53.9pt;width:120px">
                        <p class="s8" style="text-indent: 0pt;text-align: left;">{{ companyInfo?.business_nature?.code }}</p>
                    </div>
                    <p class="s15" style="text-indent: 0pt;text-align: left;padding-left: 30px;"> 編碼 <span
                            class="s16">Code </span></p>
                </div>
                <div class=" col-9 col-md-9">
                    <div class="textbox"
                        style="border:1.0pt solid #000000; min-height:53.9pt;width:470px;  ">
                        <p class="s8" >{{ companyInfo?.business_nature?.name }}</p>
                    </div>
                    <p class="s15" style="text-indent: 0pt;text-align: left;padding-left: 30px;"> <span
                            style="padding-left: 70px;"> 描述 <span class="s16">Description</span> </span> </p>
                </div>
            </div>
            <div class="row">
                <div class="  col-1 col-md-1">
                    <span style="font-weight: 800;">3</span>
                </div>
                <div class="col-11 col-md-11">
                    <p class=" s6" style="padding-top: 5pt;padding-left: 0pt;line-height: 15pt;text-align: left;">
                        公司在香港的註冊辦事處的建議地址 </p>
                    <p class="s7" style="text-indent: 0pt;line-height: 12pt;text-align: left;">
                        Proposed
                        Address of the Company&#39;s Registered Office in Hong Kong</p>
                    <p class=" s12" style="text-indent: 0pt;text-align: left;">(<span class="s9">本處不接納「轉交」地址及郵政信箱號碼
                        </span>‘Care of’ addresses and post office box numbers are not
                        acceptable)</p>
                </div>
            </div>
            <div class="row">
                <div class="col-4 col-md-4" style="padding-top: 10px;">
                    <p class="contents s15" style="text-indent: 0pt;line-height: 10pt;text-align: left;">
                        室／樓／座等 </p>
                    <p class=" contents s16" style="text-indent: 0pt;line-height: 10pt;text-align: left;">
                        Flat<span class="s15">／</span>Floor<span class="s15">／</span>Block etc.</p>
                </div>
                <div class="col-8 col-md-8" style="padding-top: 10px;">
                    <div class="textbox" style="border:1.0pt solid #000000;display:block;min-height:28.4pt; width: 420px ; ">
                        <p class="s8" style="text-indent: 0pt;line-height: 17pt;text-align: left;">
                            {{ companyInfo?.flat }} </p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class=" col-4" style="padding-top: 10px;">
                    <p class="contents s15" style="text-indent: 0pt;line-height: 11pt;text-align: left;">大廈
                    </p>
                    <p class="contents s16" style="text-indent: 0pt;line-height: 9pt;text-align: left;">Building</p>
                </div>
                <div class="col-8" style="padding-top: 10px">
                    <div class="textbox" style="border:1.0pt solid #000000;display:block;min-height:28.4pt; width: 420px ; ">
                        <p class="s8" style="text-indent: 0pt;line-height: 17pt;text-align: left;">
                            {{ companyInfo?.building}}</p>
                    </div>
                </div>

            </div>
            <div class="row">
                <div class="  col-4" style="padding-top: 10px;">
                    <p class="contents s15" style="text-indent: 0pt;line-height: 11pt;text-align: left;">街道
                        ／屋苑 ／地段 ／村 等</p>
                    <p class="contents s16" style="text-indent: 0pt;line-height: 11pt;text-align: left;">
                        Street<span class="s15">／</span>Estate<span class="s15">／</span>Lot<span
                            class="s15">／</span>Village etc<span class="s18">.</span></p>
                </div>
                <div class="col-8" style="padding-top: 10px">
                    <div class="textbox" style="border:1.0pt solid #000000;display:block;min-height:28.4pt; width: 420px ; ">
                        <p class="s8" style="text-indent: 0pt;line-height: 17pt;text-align: left;">
                            {{ companyInfo?.city }}</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="  col-4" style="padding-top: 10px;">
                    <p class="contents s15" style="text-indent: 0pt;line-height: 10pt;text-align: left;">區</p>
                    <p class="contents s16" style="text-indent: 0pt;line-height: 8pt;text-align: left;">
                        District</p>
                </div>
                <div class="col-8" style="padding-top: 10px">
                    <div class="textbox" style="border:1.0pt solid #000000;display:block;min-height:28.4pt; width: 420px ; ">
                        <p class="s8" style="text-indent: 0pt;line-height: 17pt;text-align: left;">
                            {{ companyInfo?.state }}</p>
                    </div>
                </div>

            </div>
            <div class="row">
                <div class="  col-4" style="padding-top: 10px;">
                    <p class="contents s15" style="text-indent: 0pt;line-height: 11pt;text-align: left;">地區
                    </p>
                    <p class=" contents s16" style="text-indent: 0pt;line-height: 9pt;text-align: left;">Region
                    </p>
                </div>
                <div class="col-8" style="padding-top: 10px">
                    <div class="textbox" style="border:1.0pt solid #000000;display:block;min-height:28.4pt; width: 420px ; ">
                        <p class="s8" style="text-indent: 0pt;line-height: 17pt;text-align: left;">
                            {{ companyInfo?.country }}</p>
                    </div>
                </div>

            </div>
            <div class="row" style="padding-top:20px ;">
                <div class="col-10" style="margin-left: 65px;">
                    <div class="textbox"
                        style="border:1.0pt solid #000000;display:block;min-height:100.4pt; width: 565px;">
                        <p class="s22" style="padding-left: 1pt;text-indent: 0pt;text-align: left;">本處專用 <span
                                style=" color: black; font-family:Arial, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 10pt;">For
                                Official Use</span></p>
                        <p class="s25" style="padding-left: 27pt;text-indent: 0pt;line-height: 86%;text-align: center;">
                            Document Ref.
                            No.: <br> Submission Date:<br> Resubmission Dte:</p>

                        <p style="float: inline-end;"><img width="46" height="38"
                                src="data:image/png;base64,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" />
                        </p>
                    </div>
                    <p class="s19" style="padding-top: 7pt;padding-left: 61pt;text-indent: 0pt;text-align: left;">指明編號
                        <span class="s20">1/2023(2023 </span>年 <span class="s20">12 </span>月<span class="s20">)
                            Specification No. 1/2023
                            (December 2023)</span>
                    </p>
                    <!-- <p style="text-indent: 0pt;text-align: left;"><br /></p>
                    <p class="s21" style="text-indent: 0pt;text-align: right;">Page 1/9頁</p> -->
                </div>
            </div>
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