<template style="height:300">
    
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
                    <span style="font-weight: 800;">8</span> <br>
                    <span style="font-weight: 800;">A</span>
                </div>
                <div class=" col-11 col-md-11">
                    <p class="s6"
                        style="padding-top: pt;padding-left: 12pt;text-indent: 0pt;line-height: 15pt;text-align: left;">
                        首任董事
                        <span class="s7">First Directors</span>
                    </p>
                    <p class="s1" style="padding-left: 12pt;text-indent: 0pt;line-height: 14pt;text-align: left;">董事
                        <span class="s5">( </span>自然人 <span class="s5">) Director (Natural Person)</span>
                    </p>
                    <p style="padding-top: 4pt;text-indent: 0pt;text-align: left;"><br /></p>
                </div>
            </div>
            <div class="row" style="padding-top: 2px;">
                <div class="col-4">
                    <p style="text-indent: 0pt;text-align: left;" />
                    <p class="s30" style="padding-left: 25pt;text-indent: 0pt;line-height: 12pt;text-align: left;"> 1
                        中文姓名
                    </p>
                    <p class="s2" style="padding-left: 35pt;text-indent: 0pt;line-height: 10pt;text-align: left;">Name
                        in Chinese</p>
                </div>
                <div class="col-8">
                    <div class="textbox" style="border:1.0pt solid #000000;display:block;min-height:34.0pt;">
                        <p class="s17" style="text-indent: 0pt;line-height: 17pt;">{{ director?.chn_last_name }}{{ director?.chn_first_name }}</p>
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <p class="s30" style="padding-left: 35pt;text-indent: 0pt;text-align: left;">英文姓名 <br> <span
                            class="s2">
                            Name in English</span></p>
                </div>
            </div>
            <div class="row" style="padding-top: 5px;">
                <div class="col-4">
                    <p class="s15"
                        style="padding-top: 3pt;padding-left: 130pt;text-indent: 0pt;line-height: 11pt;text-align: right;">
                        姓氏 </p>
                    <p class="s16" style="padding-left: 117pt;text-indent: 0pt;line-height: 9pt;text-align: right;">
                        Surname</p>
                </div>
                <div class="col-8">
                    <div class="textbox" style="border:1.0pt solid #000000;display:block;min-height:34.0pt;">
                        <p class="s8" style="text-indent: 0pt;line-height: 17pt;">{{ director?.last_name }}</p>
                    </div>

                </div>
            </div>
            <div class="row" style="padding-top: 5px;">
                <div class="col-4">
                    <p class="s15" style="padding-left: 130pt;text-indent: 0pt;line-height: 11pt;text-align: right;">名字
                    </p>
                    <p class="s16" style="padding-left: 102pt;text-indent: 0pt;line-height: 9pt;text-align: right;">
                        Other
                        Names</p>
                </div>
                <div class="col-8">
                    <div class="textbox" style="border:1.0pt solid #000000;display:block;min-height:34.0pt; ">
                        <p class="s8" style="text-indent: 0pt;line-height: 17pt;">{{ director?.first_name }}</p>
                    </div>

                </div>
            </div>
            <div class="row" style="padding-top: 20px;">
                <div class="col-4">
                    <p style="text-indent: 0pt;text-align: left;" />
                    <p class="s30" style="padding-left: 35pt;text-indent: 0pt;line-height: 12pt;text-align: left;">前用姓 名
                    </p>
                    <p class="s2" style="padding-left: 35pt;text-indent: 0pt;line-height: 10pt;text-align: left;">
                        Previous Names</p>
                </div>
                <div class="col-8">
                    <div class="row">
                        <div class="col-4">
                            <div class="textbox"
                                style="border:1.0pt solid #000000;display:block;min-height:28.0pt;width:100.4pt;">
                                <p class="s17" style="text-indent: 0pt;line-height: 17pt;text-align: center;"></p>
                            </div>
                            <span style="padding-left: 30px;; font-size: 12px;">中 文 Chinese</span>
                        </div>
                        <div class="col-8">
                            <div class="textbox"
                                style="border:1.0pt solid #000000;display:block;min-height:28.0pt;min-width:200.4pt;">
                                <p class="s17" style="text-indent: 0pt;line-height: 17pt;text-align: center;"></p>
                            </div>
                            <span style="padding-left: 100px; font-size: 12px;"> 英 文 English</span>

                        </div>
                    </div>

                </div>
            </div>
            <div class="row" style="padding-top: 3px;">
                <div class="col-4">
                    <p style="text-indent: 0pt;text-align: left;" />
                    <p class="s30" style="padding-left: 35pt;text-indent: 0pt;line-height: 12pt;text-align: left;">別 名
                    </p>
                    <p class="s2" style="padding-left: 35pt;text-indent: 0pt;line-height: 10pt;text-align: left;">Alias
                    </p>
                </div>
                <div class="col-8">
                    <div class="row">
                        <div class="col-4">
                            <div class="textbox"
                                style="border:1.0pt solid #000000;display:block;min-height:28.0pt;width:100.4pt;">
                                <p class="s17" style="text-indent: 0pt;line-height: 17pt;text-align: center;"></p>
                            </div>
                            <span style="padding-left: 30px;; font-size: 12px;">中 文 Chinese</span>
                        </div>
                        <div class="col-8">
                            <div class="textbox"
                                style="border:1.0pt solid #000000;display:block;min-height:28.0pt;min-width:200.4pt;">
                                <p class="s17" style="text-indent: 0pt;line-height: 17pt;text-align: center;"></p>
                            </div>
                            <span style="padding-left: 100px; font-size: 12px;"> 英 文 English</span>

                        </div>
                    </div>

                </div>
            </div>
            <div class="row" style="padding-top: 2px;">
                <div style="width: 45px;">
                    <p class="s37" style="padding-top: 4pt;text-indent: 0pt;line-height: 9pt;text-align: left;">
                        (<span class="s19">須在</span></p>
                    <p class="s37" style="text-indent: 0pt;line-height: 9pt;text-align: left;">
                        PI-NNC1 <span class="s19">頁</span></p>
                    <p class="s19" style="text-indent: 0pt;line-height: 9pt;text-align: left;">填報完整
                    </p>
                    <p class="s19" style="text-indent: 0pt;line-height: 9pt;text-align: left;">身分識別號碼
                    </p>
                    <p class="s37" style="padding-left: 0pt;text-indent: 0pt;line-height: 8pt;text-align: left;">
                        Provide full</p>
                    <p class="s37" style="padding-left: 0pt;text-indent: 0pt;text-align: left;">identification number
                        in</p>
                    <p class="s37" style="padding-left: 0pt;text-indent: 0pt;line-height: 8pt;text-align: left;">
                        PI-NNC1 sheet)
                    </p>
                </div>
                <div class="col-8 col-md-8">
                    <p class="s30"
                        style="padding-top: 4pt;padding-left: 10pt;text-indent: 0pt;line-height: 12pt;text-align: left;">
                        香港通訊地址 <span class="s2">Hong Kong Correspondence Address</span></p>
                    <p class="s12" style="padding-left: 10pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                        (<span class="s9">本處不接納郵政信箱號碼 </span>Post office box numbers are not acceptable)</p>
                    <div class="row" style="padding-top: 10px;">
                        <div class="col-5">
                            <p class="s15"
                                style="padding-left: 14pt;text-indent: 0pt;line-height: 11pt;text-align: left;">室 ／樓
                                ／座等 </p>
                            <p class="s16"
                                style="padding-left:10pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                Flat<span class="s15">／</span>Floor<span class="s15">／</span>Block etc.</p>
                            <p style="padding-top: 3pt;text-indent: 0pt;text-align: left;"><br /></p>
                        </div>
                        <div class="col-7">
                            <div class="textbox"
                                style="border:1.0pt solid #000000;display:block;min-height:34.0pt; width: 410px;">
                                <p class="s8" style="text-indent: 0pt;line-height: 17pt">  {{ director?.address?.flat }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="row" style="padding-top: 5px;">
                        <div class="col-5">
                            <p class="s15"
                                style="padding-left: 10pt;text-indent: 0pt;line-height: 11pt;text-align: left;">大廈
                            </p>
                            <p class="s16"
                                style="padding-left: 10pt;text-indent: 0pt;line-height: 9pt;text-align: left;">
                                Building</p>
                        </div>
                        <div class="col-6">
                            <div class="textbox"
                                style="border:1.0pt solid #000000;display:block;min-height:34.0pt; width: 308pt; ">
                                <p class="s8" style="text-indent: 0pt;line-height: 17pt;">  {{ director?.address?.building }}</p>
                            </div>

                        </div>
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
                        <p class="s8" style="text-indent: 0pt;line-height: 17pt;">  {{ director?.address?.street }}</p>
                    </div>

                </div>
            </div>
            <div class="row" style="padding-top: 5px;">
                <div class="col-4">
                    <p class="s15" style="padding-left: 35pt;text-indent: 0pt;line-height: 10pt;text-align: left;">
                        區／市／省／州／郵遞區號等</p>
                    <p class="s16" style="padding-left: 35pt;text-indent: 0pt;line-height: 8pt;text-align: left;">
                        District／City／ Province／
                        State／ Postal Code etc.</p>
                </div>
                <div class="col-8">
                    <div class="textbox" style="border:1.0pt solid #000000;display:block;min-height:34.0pt; ">
                        <p class="s8" style="text-indent: 0pt;line-height: 17pt;"> {{ director?.address?.state ?? director?.address?.city }}</p>
                    </div>

                </div>
            </div>
            <div class="row" style="padding-top: 5px;">
                <div class="col-4">
                    <p class="s15" style="padding-left: 35pt;text-indent: 0pt;line-height: 10pt;text-align: left;">國 家
                        ／地 區
                    </p>
                    <p class="s16" style="padding-left: 35pt;text-indent: 0pt;line-height: 8pt;text-align: left;">
                        Country／Region
                    </p>
                </div>
                <div class="col-8">
                    <div class="textbox" style="border:1.0pt solid #000000;display:block;min-height:34.0pt; ">
                        <p class="s17" style="text-indent: 0pt;line-height: 17pt;">  {{ director?.address?.country }}</p>
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
                        <p class="s8" style="text-indent: 0pt;line-height: 17pt;">{{ director.email }}</p>
                    </div>

                </div>
            </div>
            <div class="row" style="padding-top: 15px;">
                <div style="width: 80px;">
                    <p class="s37" style="padding-top: 4pt;text-indent: 0pt;line-height: 9pt;text-align: left;">
                        (<span class="s19">須在</span></p>
                    <p class="s37" style="text-indent: 0pt;line-height: 9pt;text-align: left;">
                        PI-NNC1 <span class="s19">頁</span></p>
                    <p class="s19" style="text-indent: 0pt;line-height: 9pt;text-align: left;">填報完整
                    </p>
                    <p class="s19" style="text-indent: 0pt;line-height: 9pt;text-align: left;">身分識別號碼
                    </p>
                    <p class="s37" style="padding-left: 0pt;text-indent: 0pt;line-height: 8pt;text-align: left;">
                        Provide full</p>
                    <p class="s37" style="padding-left: 0pt;text-indent: 0pt;text-align: left;">identification number
                        in</p>
                    <p class="s37" style="padding-left: 0pt;text-indent: 0pt;line-height: 8pt;text-align: left;">
                        PI-NNC1 sheet)
                    </p>
                </div>
                <div class="col-5 col-md-5">
                    <p class="s30" style="padding-top: 4pt;padding-left: 0pt;text-indent: 0pt;text-align: left;">身分識別
                        <span class="s2">Identification</span>
                    </p>
                    <p class="s16" style="padding-left: 0pt;text-indent: 0pt;line-height: 11pt;text-align: left;">(a)
                        <span class="s15">香港身分證 </span><span class="s28">部 分 號碼&nbsp;</span>
                    </p>
                    <p class="s27" style="text-indent: 0pt; padding-left: 15px; line-height: 9pt;text-align: left;">
                        <u>Partial Number</u> <span class="s16">of Hong Kong Identity Card</span>
                    </p>
                    <div>
                        <span style="float: left;">
                            <p class="s16"
                                style="padding-left: 2pt; padding-top: 5pt;line-height: 10pt;text-align: left;">(b)
                                <span class="s15">護照 </span>
                            </p>
                            <p class="s16"
                                style="padding-left: 10pt;text-indent: 0pt;line-height: 9pt;text-align: left;">
                                Passport</p>
                        </span>
                        <span style="float: right;">
                            <p class="s15"
                                style="padding-left: 30pt;text-indent: 0pt;line-height: 10pt;text-align: left;">簽發國家
                                ／ 地區</p>
                            <p class="s16"
                                style="padding-left: 11pt;text-indent: 0pt;line-height: 11pt;text-align: left">
                                Issuing Country<span class="s15">／</span>Region</p>
                            <p class="s28"
                                style="padding-left: 30pt;text-indent: 0pt;line-height: 11pt;text-align: left; padding-top: 20px;">
                                部 分
                                號碼&nbsp;</p>
                            <p class="s29"
                                style="padding-left: 30pt;text-indent: 0pt;line-height: 9pt;text-align: left;">
                                Partial Number</p>
                        </span>
                    </div>
                </div>
                <div class="col-5">

                    <table style="border-collapse:collapse;margin-left:3pt;" cellspacing="0">
                        <tr style="height:26pt">
                            <td
                                style="width:151pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                                <p style="text-indent: 0pt;text-align: left; padding: 2px">                        {{ director.get_identity.identity_no  == 'undefined' ||  director.get_identity.identity_no  == null?'': director.get_identity.identity_no}} <br /></p>
                            </td>
                            <td style="width:31pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
                                bgcolor="#A7A8A7">
                                <p class="s38"
                                    style="padding-top: 6pt;padding-left: 10pt;text-indent: 0pt;text-align: left;"></p>
                            </td>
                            <!-- <td style="width:31pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
                                bgcolor="#A7A8A7">
                                <p class="s38"
                                    style="padding-top: 6pt;padding-left: 10pt;text-indent: 0pt;text-align: left;"></p>
                            </td> -->
                            <td style="width:30pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
                                bgcolor="#A7A8A7">
                                <p class="s38"
                                    style="padding-top: 6pt;padding-left: 10pt;text-indent: 0pt;text-align: left;"></p>

                            </td> 
                           <span style="font-size:20px; margin-left:20px"> (</span><td style="width:30pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
                                bgcolor="#A7A8A7">
                                <p class="s8"
                                    style="padding-top: 0pt;padding-left: 10pt;text-indent: 0pt;text-align: left;">{{ director?.get_identity?.identity_no_suffix == 'undefined' && director?.get_identity?.identity_no_suffix == null ?'':director?.get_identity?.identity_no_suffix   }}</p>
                            </td> <span style="font-size:20px"> )</span>
                        </tr>
                    </table>
                    <div class="textbox"
                        style="border:1.0pt solid #000000;display:block;min-height:29.6pt;width:218.9pt; margin-top: 10px;">
                        <p class="s8" style="text-indent: 0pt;line-height: 11pt;text-align: left; ">                       {{ director?.get_identity?.issueing_country == 'undefined'?'':director?.get_identity?.issueing_country   }}</p>
                    </div>
                    <div class="textbox"
                        style="border:1.0pt solid #000000;display:block;min-height:29.6pt;width:218.9pt; margin-top: 10px;">
                        <p class="s8" style="text-indent: 0pt;line-height: 11pt;text-align: left;">                       {{ director?.get_identity?.passport_no == 'undefined' || director?.get_identity?.passport_no == null? ' ':director?.get_identity?.passport_no }}</p>
                    </div>
                </div>
            </div>
            <div class="row" style="padding-top: 10px;">
                <div style="width: 50px;">

                </div>

                <div class="textbox"
                    style="border:1.0pt solid #000000;display:block;min-height:37.7pt;top:0.5pt;width:73.2pt;">
                    <p class="s31" style="padding-top: 8pt;text-indent: 0pt;line-height: 11pt;text-align: center;">提示
                    </p>
                    <p class="s32" style="text-indent: 0pt;line-height: 9pt;text-align: center;">Advisory Note</p>
                </div>
                <div class="textbox"
                    style="border:1.0pt solid #000000;display:block;left:0.5pt;min-height:37.7pt;top:73.6pt;width:362.1pt;">
                    <p class="s31" style="padding: 3pt;text-indent: 0pt;text-align: justify;">
                        所有公司董事均應閱讀公司註冊處編製的《董事責任指引》，
                        並熟悉該指引所概述的董事一般責任。 <span class="s32">All directors of the company are advised to read ‘A Guide on
                            Directors’
                            Duties’ published by the Companies Registry and acquaint themselves with the general duties
                            of directors
                            outlined in the Guide.</span></p>
                </div>
            </div>
            <div class="row" style="padding-top: 5px;">
                <table style="border-collapse:collapse; margin-top:0px; margin-left:20px" cellspacing="0">
                    <tr style="height:2pt">
                        <td style="width:487pt" colspan="3">
                            <p class="s19"
                                style="padding-left: 30pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                出任董事職位同意書
                                <span class="s2">Consent to Act as Director</span>
                            </p>
                            <p class="s19"
                                style="padding-left: 30pt;text-indent: 0pt;line-height: 10pt;text-align: left;">
                                請在適用的空格內加上
                                <span class="s12"></span><span class="s49"> </span>號 <span class="s39">Please tick the
                                    relevant
                                    box</span>
                            </p>
                        </td>
                    </tr>
                    <tr style="height:42pt">
                        <td style="width:487pt" colspan="5">
                            <p class="s17"
                                style="padding-left: 30pt;text-indent: 0pt;line-height: 12pt;text-align: left;">
                                本人同意在公司成立為法團時擔任其董事， 並確認本人已年滿 <span class="s2"> 18 </span>歲。</p>
                            <p class="s27"
                                style="padding-left: 28pt;text-indent: 0pt;line-height: 9pt;text-align: left;">
                                <input type="checkbox" style="width: 30px; height:20px" checked disabled> I consent
                                to be a director of the company on its incorporation and confirm that I have attained
                                the age of
                                18
                                years.
                            </p>
                        </td>
                    </tr>
                    <tr style="height:34pt">
                        <td style="width:82pt">
                            <p style="text-indent: 0pt;text-align: left;"><br /></p>
                            <p class="s15" style="padding-left: 28pt;text-indent: 0pt;text-align: left;">簽署 <span
                                    class="s16">Signed</span></p>
                        </td>
                        <td style="width:350pt">
                            <p style="text-indent: 0pt;text-align: left;"><br /></p>
                            <p class="s33"
                                style="border-bottom:1px solid #000; background:yellow; padding-left: 6pt;text-indent: 0pt;text-align: left;">
                                :
                                <img width="100" :src="director?.signature" alt="">
                            </p>
                        </td>
                        <td style="width:55pt">
                            <p style="text-indent: 0pt;text-align: left;">

                                <br />
                            </p>
                        </td>
                    </tr>
                    <tr style="height:46pt">

                        <td style="width:432pt" colspan="2">
                            <input type="checkbox" style="width: 20px; height:20px; margin-left:30px" disabled>
                            <p class="s17"
                                style="padding-top: 3pt; display:inline; padding-left: pt;text-indent: 0pt;line-height: 12pt;text-align: left;">
                                出任董事職位同意書會於公司成立為法團的日期後 <span class="s15">15 </span>日內交付登記。 </p>
                            <p class="s27" style="padding-left: 28pt;  text-indent: 0pt;text-align: left;">
                                The Consent to Act as
                                Director will be delivered for registration not later than 15 days after the date of
                                incorporation
                                of the company.</p>
                        </td>
                        <td style="width:55pt">
                            <p style="text-indent: 0pt;text-align: left;"><br /></p>
                            <p style="padding-left: 10pt;text-indent: 0pt;text-align: left;"><span>
                                    <table border="0" cellspacing="0" cellpadding="0">
                                        <tr>
                                            <td><img width="53" height="53"
                                                    src="data:image/jpg;base64,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" />
                                            </td>
                                        </tr>
                                    </table>
                                </span></p>
                        </td>
                    </tr>
                </table>
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
import { useStartCompanyStore } from '../StartCompany/StartCompany_store';
const startCompanyStore = useStartCompanyStore();

const props = defineProps<{
    director: any
}>();


</script>

<style scoped>
@import '@/assets/pdf.css';
</style>