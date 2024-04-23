<template>
    <div>
        <hr>
        <li data-list-text="2" style="padding-top:50px">
            <div style="display: flex; flex-direction:column">
                <p class="s19"
                    style="padding-top: 5px; display:inline; padding-left: 4px;text-indent: 0pt;line-height: 14px;text-align: left;">
                    表格 </p>
                <p style="padding-left:4px; display:inline; text-indent: 0px;line-height: 11px;text-align: left;">Form
                </p>

                <h1 style="text-indent: 0px; display:inline;line-height: 1px;padding-left:40px">NNC1</h1>
                <p style="text-indent: 0px;text-align: left;"> </p>
            </div>
        </li>
        <li data-list-text="4">
            <p class="s14" style="padding-top: 20px;padding-left: 45px;text-indent: -17px;text-align: left;">公司的聯絡資料
                <span class="h4">Contact Information of the Company</span>
            </p>
            <p style="text-indent: 0pt;text-align: left;"> </p>
            <p class="s19"
                style="padding-top: 5px;padding-left: 30px;text-indent: 0pt;line-height: 14pt;text-align: left;">電郵地址
            </p>
            <p style="padding-left: 30px;text-indent: 0px;line-height: 11pt;text-align: left; display:inline">Email
                Address</p>
            <input style="width:60%; height:40px; float: right;" :value="companyInfo?.users?.email" readonly>
            <p style="text-indent: 0pt;text-align: left;"> </p>
            <p class="s19"
                style="padding-top: 7px;padding-left: 30px;text-indent: 0pt;line-height: 14pt;text-align: left; padding-top:30px">
                香港聯絡電話號碼</p>
            <p style="padding-left: 30px;text-indent: 0pt;line-height: 11pt;text-align: left; ">Hong Kong Contact
                Telephone Number
                <input style="width:60%; height:40px; float: right;" :value="companyInfo?.users?.phone" readonly>
            </p>
            <p style="text-indent: 0px;text-align: left;"><br /></p>

        </li>
        <li data-list-text="5">
            <p class="s14"
                style="padding-left: 62px;text-indent: -17px;line-height: 15pt;text-align: left; padding-top:30px">
                公司組成時的股本及最初的股份持有情況</p>
        </li>
        <!-- </ol> -->

        <h4 style="padding-bottom: 1pt;padding-left: 63pt;text-indent: 0pt;line-height: 12pt;text-align: left;">Share
            Capital and Initial Shareholdings on the Company’s Formation</h4>
        <table style="border-collapse:collapse;margin-left:43.484pt" cellspacing="0">
            <tr style="height:17pt">
                <td
                    style="width:102pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style="text-indent: 0pt;text-align: left;"><br /></p>
                </td>
                <td
                    style="width:78pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style="text-indent: 0pt;text-align: left;"><br /></p>
                </td>
                <td
                    style="width:42pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style="text-indent: 0pt;text-align: left;"><br /></p>
                </td>
                <td
                    style="width:96pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style="text-indent: 0pt;text-align: left;"><br /></p>
                </td>
                <td
                    style="width:96pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s28"
                        style="padding-top: 5pt;padding-left: 3pt;padding-right: 4pt;text-indent: 0pt;line-height: 10pt;text-align: center;">
                        建議發行的股份的</p>
                </td>
                <td
                    style="width:94pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s28"
                        style="padding-top: 5pt;padding-left: 1pt;padding-right: 2pt;text-indent: 0pt;line-height: 10pt;text-align: center;">
                        建議發行的股份的</p>
                </td>
            </tr>
            <tr style="height:10pt">
                <td
                    style="width:102pt;border-left-style:solid;border-left-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style="text-indent: 0pt;text-align: left;"><br /></p>
                </td>
                <td
                    style="width:78pt;border-left-style:solid;border-left-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style="text-indent: 0pt;text-align: left;"><br /></p>
                </td>
                <td
                    style="width:42pt;border-left-style:solid;border-left-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style="text-indent: 0pt;text-align: left;"><br /></p>
                </td>
                <td
                    style="width:96pt;border-left-style:solid;border-left-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s28"
                        style="padding-left: 3pt;padding-right: 4pt;text-indent: 0pt;line-height: 9pt;text-align: center;">
                        創辦成員認購的</p>
                </td>
                <td
                    style="width:96pt;border-left-style:solid;border-left-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s28"
                        style="padding-left: 3pt;padding-right: 4pt;text-indent: 0pt;line-height: 9pt;text-align: center;">
                        將要繳付或視為</p>
                </td>
                <td
                    style="width:94pt;border-left-style:solid;border-left-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s28"
                        style="padding-left: 1pt;padding-right: 2pt;text-indent: 0pt;line-height: 9pt;text-align: center;">
                        尚未繳付或視為</p>
                </td>
            </tr>
            <tr style="height:64pt">
                <td
                    style="width:102pt;border-left-style:solid;border-left-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s28"
                        style="padding-top: 1pt;padding-left: 23pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                        股份的類別 </p>
                    <p class="s2"
                        style="padding-left: 18pt;padding-right: 1pt;text-indent: -17pt;line-height: 86%;text-align: left;">
                        ( <span class="s28">如普通股／ 優先股等</span>) <span class="s30">Class of Shares (e.g.
                            Ordinary</span><span class="s31">／ </span><span class="s30">Preference etc.)</span></p>
                </td>
                <td
                    style="width:78pt;border-left-style:solid;border-left-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s28"
                        style="padding-top: 1pt;padding-left: 4pt;padding-right: 3pt;text-indent: 0pt;line-height: 86%;text-align: center;">
                        建議發行的 股份總數 <span class="s30">Total Number of Shares Proposed</span></p>
                    <p class="s30"
                        style="padding-left: 4pt;padding-right: 3pt;text-indent: 0pt;line-height: 10pt;text-align: center;">
                        to be Issued</p>
                </td>
                <td
                    style="width:42pt;border-left-style:solid;border-left-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style="text-indent: 0pt;text-align: left;"><br /></p>
                    <p class="s32"
                        style="padding-left: 9pt;padding-right: 8pt;text-indent: 0pt;line-height: 80%;text-align: center;">
                        貨幣 單位</p>
                    <p class="s30"
                        style="padding-left: 1pt;padding-right: 1pt;text-indent: 0pt;line-height: 9pt;text-align: center;">
                        Currency</p>
                </td>
                <td
                    style="width:96pt;border-left-style:solid;border-left-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s28"
                        style="padding-left: 3pt;padding-right: 2pt;text-indent: 0pt;line-height: 10pt;text-align: center;">
                        股本總額 </p>
                    <p class="s30"
                        style="padding-left: 3pt;padding-right: 2pt;text-indent: 0pt;line-height: 9pt;text-align: center;">
                        Total Amount of</p>
                    <p class="s30" style="padding-left: 5pt;padding-right: 4pt;text-indent: 0pt;text-align: center;">
                        Share
                        Capital to be Subscribed by Founder Members</p>
                </td>
                <td
                    style="width:96pt;border-left-style:solid;border-left-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s28"
                        style="padding-left: 3pt;padding-right: 2pt;text-indent: 0pt;line-height: 90%;text-align: center;">
                        已繳付的總款額 <span class="s30">Total Amount to be Paid Up or to be</span></p>
                    <p class="s30" style="padding-left: 2pt;padding-right: 1pt;text-indent: 0pt;text-align: center;">
                        Regarded as Paid Up on the Shares Proposed to be Issued</p>
                </td>
                <td
                    style="width:94pt;border-left-style:solid;border-left-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s28"
                        style="padding-left: 2pt;padding-right: 1pt;text-indent: 0pt;line-height: 90%;text-align: center;">
                        尚未繳付的總款額 <span class="s30">Total Amount to Remain Unpaid or to</span></p>
                    <p class="s30" style="padding-left: 1pt;text-indent: 0pt;text-align: center;">be Regarded as Unpaid
                        on
                        the Shares Proposed to be Issued</p>
                </td>
            </tr>
            <tr style="height:16pt">
                <td
                    style="width:102px;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style="text-indent: 0pt;text-align: left;"><br /></p>
                </td>
                <td
                    style="width:78px;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style="text-indent: 0pt;text-align: left;"><br /></p>
                </td>
                <td
                    style="width:42px;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style="text-indent: 0pt;text-align: left;"><br /></p>
                </td>
                <td
                    style="width:96px;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s30"
                        style="padding-top: 3pt;padding-left: 3pt;padding-right: 3pt;text-indent: 0pt;text-align: center;">
                        (
                        a)</p>
                </td>
                <td
                    style="width:96px;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s30"
                        style="padding-top: 3pt;padding-left: 3pt;padding-right: 3pt;text-indent: 0pt;text-align: center;">
                        (
                        b)</p>
                </td>
                <td
                    style="width:94px;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s30"
                        style="padding-top: 3pt;padding-left: 2pt;padding-right: 2pt;text-indent: 0pt;text-align: center;">
                        (
                        a) – ( b)</p>
                </td>
            </tr>
            <tr style="height:28pt">
                <td
                    style="width:102px;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style="text-indent: 0pt;text-align: center;"><br /> ORDINARY</p>
                </td>
                <td
                    style="width:78px;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style="text-indent: 0pt;text-align: center;"> {{ companyInfo?.shares[0]?.no_of_share }}<br />
                    </p>
                </td>
                <td
                    style="width:42px;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style="text-indent: 0pt;text-align: center;">{{ companyInfo?.shares[0]?.currency }}<br /></p>
                </td>
                <td
                    style="width:96px;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style="text-indent: 0pt;text-align: center;">{{ companyInfo?.shares[0].total_amount_paid }}<br />
                    </p>
                </td>
                <td
                    style="width:96px;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style="text-indent: 0pt;text-align: center;">{{
                companyInfo?.shares[0]?.ownershares?.reduce((initial:any, item:any) => parseInt(initial['total_amount'])
                    + parseInt(item['total_amount'])), 0 }}<br /> </p>
                </td>
                <td
                    style="width:94px;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style="text-indent: 0pt;text-align: center;"><br />0</p>
                </td>
            </tr>

            <tr style="height:28pt">
                <td
                    style="width:102px;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style="text-indent: 0pt;text-align: center;"><br /></p>
                </td>
                <td
                    style="width:78pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style="text-indent: 0pt;text-align: left;"><br /></p>
                </td>
                <td
                    style="width:42px;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style="text-indent: 0pt;text-align: left;"><br /></p>
                </td>
                <td
                    style="width:96px;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style="text-indent: 0pt;text-align: left;"><br /></p>
                </td>
                <td
                    style="width:96px;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style="text-indent: 0pt;text-align: left;"><br /></p>
                </td>
                <td
                    style="width:94px;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style="text-indent: 0pt;text-align: left;"><br /></p>
                </td>
            </tr>
            <tr style="height:28pt">
                <td style="width:102px;border-top-style:solid;border-top-width:1pt;border-right-style:solid;border-right-width:1pt"
                    rowspan="2">
                    <p class="s28" style="padding-top: 7pt;padding-left: 50pt;text-indent: 0pt;text-align: left;">總值
                        <span class="s2">Total</span></p>
                </td>
                <td style="width:78pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
                    rowspan="2">
                    <p style="text-indent: 0pt;text-align: center;">{{ companyInfo?.shares[0]?.no_of_share }}<br /> </p>
                </td>
                <td
                    style="width:42pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style="text-indent: 0pt;text-align: left;"><br /></p>
                </td>
                <td
                    style="width:96pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style="text-indent: 0pt;text-align: center;">{{ companyInfo?.shares[0]?.total_amount_paid
                        }}<br /></p>
                </td>
                <td
                    style="width:96pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style="text-indent: 0pt;text-align: center;">{{
                companyInfo?.shares[0]?.ownershares.reduce((initial:any, item:any) => parseInt(initial['total_amount'])
                        + parseInt(item['total_amount']) ), 0}}<br /> </p>
                </td>
                <td
                    style="width:94pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style="text-indent: 0pt;text-align: center;">0<br /></p>
                </td>
            </tr>
            <tr style="height:28pt">
                <td
                    style="width:42pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style="text-indent: 0pt;text-align: left;"><br /></p>
                </td>
                <td
                    style="width:96pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style="text-indent: 0pt;text-align: left;"><br /></p>
                </td>
                <td
                    style="width:96pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style="text-indent: 0pt;text-align: left;"><br /></p>
                </td>
                <td
                    style="width:94pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style="text-indent: 0pt;text-align: left;"><br /></p>
                </td>
            </tr>
        </table>
        <p style="padding-top: 2pt;padding-left: 2pt;text-indent: 0pt;text-align: left;"><span
                style=" color: #FFF; font-family:Arial, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 7pt;">14</span>
        </p>
        <p style="text-indent: 0pt;text-align: left;"><span>
                <table border="0" cellspacing="0" cellpadding="0">
                    <tr>
                        <td><img width="17" height="17"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABO0lEQVQ4jaWUPY7CMBCFjaeJ+y22SulJv7bhMKHgCIgbbJ3cASk5C47i0IKScisaSsxKRMw2GwT7C8lIT3IznzTWe29EROx6jsdjkOd57JwzVVW91HWNiFgrpdZa6zKO41wI8X6zREQXFUUxjqJowxij3xRF0aYoCnO9d3mkaToHgNNfgE4AcErTdH4DsdaOAaC9B3ANstaOiYgx732AiNtHAJ0Qceu9DyAMw9lyuZyxHrPf75/CMHzjZVmaPoBunHMGiOh1t9s994Wcz+cRE0IcWI//6CSEOHApZTPkHESsuVKqGgJRSq25McYNgWitS+a9FwN9IhgRsdVqNeGcP+rY1lo7uclOkiSLe60PAG2SJItvAfzM0OS/0xBx22Wm0+iHPhFZll36pGkaKaVslFKV1tpNp9Psa598ADhSL0/Buj2pAAAAAElFTkSuQmCC" />
                        </td>
                    </tr>
                </table>
            </span></p>
        <h4 style="padding-top: 8pt;padding-left: 44pt;text-indent: 0pt;line-height: 15pt;text-align: left;"><span
                class="s14">股份所附帶的權利的詳情 </span>Particulars of Rights Attached to Shares</h4>
        <p class="s18" style="padding-left: 68pt;text-indent: 0pt;line-height: 11pt;text-align: left;">(<span
                class="s15">只適用於發行超過一類股份的公司 </span>Only applicable to company issuing more than 1 class of shares)</p>
        <p style="text-indent: 0pt;text-align: left;"><br /></p>
        <table style="border-collapse:collapse;margin-left:43.484pt" cellspacing="0">
            <tr style="height:74pt">
                <td
                    style="width:104pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style="text-indent: 0pt;text-align: left;"><br /></p>
                    <p class="s28" style="padding-left: 24pt;text-indent: 0pt;line-height: 11pt;text-align: left;">股份的類別
                    </p>
                    <p class="s2"
                        style="padding-left: 20pt;padding-right: 2pt;text-indent: -17pt;line-height: 86%;text-align: left;">
                        ( <span class="s28">如普通股／ 優先股等</span>) <span class="s30">Class of Shares (e.g.
                            Ordinary</span><span class="s31">／ </span><span class="s30">Preference etc.)</span></p>
                </td>
                <td
                    style="width:406pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s28"
                        style="padding-top: 1pt;padding-left: 7pt;padding-right: 8pt;text-indent: 0pt;line-height: 12pt;text-align: center;">
                        附帶的權利的詳情</p>
                    <p class="s30"
                        style="padding-left: 7pt;padding-right: 8pt;text-indent: 0pt;line-height: 12pt;text-align: center;">
                        (<span class="s31">包括表決權； 在分派股息時參與該項分派的權利；</span></p>
                    <p class="s31"
                        style="padding-left: 9pt;padding-right: 8pt;text-indent: 0pt;line-height: 12pt;text-align: center;">
                        在分派股本時參與該項分派的權利； 該類別股份是否屬可贖回股份等<span class="s30">)</span></p>
                    <p class="s30" style="padding-left: 9pt;padding-right: 8pt;text-indent: 0pt;text-align: center;">
                        Particulars of Rights Attached</p>
                    <p class="s30"
                        style="padding-top: 2pt;padding-left: 9pt;padding-right: 8pt;text-indent: 0pt;text-align: center;">
                        (Including voting rights; rights to participate in a distribution as respects dividends;</p>
                    <p class="s30"
                        style="padding-top: 2pt;padding-left: 9pt;padding-right: 8pt;text-indent: 0pt;line-height: 9pt;text-align: center;">
                        rights to participate in a distribution as respects capital; whether the shares are redeemable,
                        etc.)</p>
                </td>
            </tr>
            <tr style="height:224pt">
                <td
                    style="width:104pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style="text-indent: 0pt;text-align: left;"><br /></p>
                </td>
                <td
                    style="width:406pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style="text-indent: 0pt;text-align: left;"><br /></p>
                </td>
            </tr>
        </table>
    </div>
</template>
<script setup lang="ts">
const props = defineProps<{
    companyInfo: any
}>()


</script>

<style scoped>
@import '@/assets/pdf.css';
</style>