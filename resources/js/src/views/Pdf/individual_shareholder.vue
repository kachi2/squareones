<template>
    <div>


        <div style="padding-top:40px">
        </div>
        <p style="text-indent: 0pt;text-align: left;"><br /></p>


        <table style="border-collapse:collapse" cellspacing="0">
            <tr style="height:12pt">
                <td style="width:33pt">
                    <p class="s1"
                        style="padding-left: 1pt;padding-right: 5pt;text-indent: 0pt;line-height: 11pt;text-align: center;">
                        表格 </p>
                </td>
                <td style="width:141pt" rowspan="2">
                    <p class="s7" style="padding-left: 6pt;text-indent: 0pt;line-height: 31pt;text-align: left;">NNC1
                    </p>
                </td>
            </tr>
            <tr style="height:20pt">
                <td style="width:33pt">
                    <p class="s33" style="padding-left: 1pt;padding-right: 6pt;text-indent: 0pt;text-align: center;">
                        Form
                    </p>
                </td>
            </tr>
            <tr style="height:13pt">
                <td style="width:174pt" colspan="2">
                    <p class="s13" style="padding-left: 2pt;text-indent: 0pt;line-height: 12pt;text-align: left;">6
                        <span class="s12">創辦成員 </span>Founder Members</p>
                </td>
            </tr>
        </table>


        <p class="s56" style="padding-left: 23pt;text-indent: 0pt;text-align: left;"><span>
                <table border="0" cellspacing="0" cellpadding="0">
                    <tr>
                        <td><img width="17" height="17"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABKUlEQVQ4ja2UsW6DMBCGDV7ivUMnRo4d2+FhYGjfIHmEzvgdkOBdLNlmjmDsxsAYqJQIdzIiTZtEpCf9kpf75P90/3nWWrSscRw3ZVlmWmtW1zVtmiYEgDaOY8MY01mWlYSQr4sma+0sKWUCAAeEkP1LAHCQUm6XffMjz/M9xvh8C+CEMT7neb6/gEgpk0cBS5CUMrHWIjQMA7ln4Za1YRg2OAiC96Io3tCK6vv+JQiCT18pxdYAXGmtOZ6m6aPrute1kGmaPEQIOaIV83AihBx9AGifsQMAjR/HsXkGQimtfc65egbCGFP/siduY7crNvbkMjRnRwixwxifHgUIIXZXAXQ/umctiqKrFHu/3ZOqqjKlFDPG0LZtwzAMW0qp4ZyrNE2rn/fkGx+6L0zJqPX9AAAAAElFTkSuQmCC" />
                        </td>
                    </tr>
                </table>
            </span> </p>
        <p style="text-indent: 0pt;text-align: left;"> </p>
        <p style="text-indent: 0pt;text-align: left;"></p>
        <p style="text-indent: 0pt;text-align: left;"></p>
        <p style="text-indent: 0pt;text-align: left;"></p>
        <p class="s18" style="padding-left: 63pt;text-indent: 0pt;text-align: left;">(<span class="s15">如超過一名創辦成員，請用續頁
            </span>A <span class="s15">填報 </span>Use Continuation Sheet A if more than 1 founder member)</p>


        <table style="border-collapse:collapse;margin-left:30.884pt; margin-bottom:10px" cellspacing="0">
            <tr style="height:33pt">
                <td style="width:20%">
                    <p class="s8" style="padding-left: 2pt;text-indent: 0pt;line-height: 10pt;text-align: left;">中 文姓 名／
                        名稱
                    </p>
                    <p class="s9" style="padding-left: 2pt;text-indent: 0pt;text-align: left;">Name in Chinese</p>
                </td>
                <td style="width:49pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s8" style="padding-left: 27pt;text-indent: 0pt;line-height: 10pt;text-align: left;">
                        <!-- 姓氏 -->
                    </p>
                    <p class="s29" style="padding-left: 14pt;text-indent: 0pt;line-height: 9pt;text-align: left;">
                        <!-- Surname First -->
                    </p>
                </td>
                <td style="width:80%;border:1px solid #000">
                    <p style="text-indent: 0pt;text-align: center;">{{ shareholder?.chn_first_name }}
                        {{ shareholder?.chn_last_name }}<br /></p>
                </td>
            </tr>
        </table>

        <table style="border-collapse:collapse;margin-left:30.884pt" cellspacing="0">
            <tr style="height:33pt; padding-top:5px">
                <td style="width:20%">
                    <p class="s8" style="padding-left: 2pt;text-indent: 0pt;line-height: 10pt;text-align: left;">英 文姓 名
                    </p>
                    <p class="s9" style="padding-left: 2pt;text-indent: 0pt;text-align: left;">Name in English</p>
                </td>
                <td style="width:49pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s8" style="padding-left: 27pt;text-indent: 0pt;line-height: 10pt;text-align: left;">姓氏
                    </p>
                    <p class="s29" style="padding-left: 14pt;text-indent: 0pt;line-height: 9pt;text-align: left;">
                        Surname
                    </p>
                </td>
                <td style="width:80%;border:1px solid #000">
                    <p style="text-indent: 0pt;text-align: center;"> {{ shareholder?.first_name }}
                      <br /></p>
                </td>
            </tr>
            <tr style="height:10pt">

            </tr>

            <tr style="height:34pt">
                <td style="width:20%">
                    <p style="text-indent: 0pt;text-align: left;"><br /></p>
                </td>
                <td style="width:49pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s8" style="padding-left: 27pt;text-indent: 0pt;line-height: 10pt;text-align: left;">名字
                    </p>
                    <p class="s29" style="text-indent: 0pt;text-align: left;">Other Names</p>
                </td>
                <td style="width:80%; border:1px solid #000">
                    <p style="text-indent: 0pt;text-align: center;">  {{ shareholder?.last_name }}<br /></p>
                </td>
            </tr>
            <tr style="height:17pt">
                <td style="width:80pt">
                    <p class="s34" style="padding-top: 2pt;padding-left: 2pt;text-indent: 0pt;text-align: left;">或 <span
                            class="s35">OR</span></p>
                </td>

            </tr>
        </table>
        <table style="border-collapse:collapse;margin-left:30.884pt" cellspacing="0">
            <tr style="height:33pt">
                <td style="width:20%">
                    <p class="s8" style="padding-left: 2pt;text-indent: 0pt;text-align: left;">英文名稱 </p>
                    <p class="s9" style="padding-left: 2pt;text-indent: 0pt;text-align: left;">Name in English</p>
                </td>
                <td style="width:80%; border:1px solid #000">
                    <p style="text-indent: 0pt;text-align: center;"> 
                        <!-- {{ shareholder?.first_name }}
                        {{ shareholder?.last_name }} -->
                        <br /></p>
                </td>
                <td>
                </td>
            </tr>
        </table>
        <table style="border-collapse:collapse;margin-left:30.884pt; margin-top:10px" cellspacing="">
            <tr style="height:22pt; ">
                <td style="width:20%">
                    <p class="s28" style="padding-top: 3pt;padding-left: 2pt;text-indent: 0pt;text-align: left;">地址
                        <span class="s2">Address</span>
                    </p>
                    <p class="s8"
                        style="padding-top: 5pt;padding-left: 2pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                        室／樓／座等 </p>
                    <p class="s29" style="padding-left: 2pt;text-indent: 0pt;line-height: 11pt;text-align: left;">Flat
                        <span class="s36">／</span>Floor<span class="s36">／</span>Block etc.
                    </p>
                </td>
                <td style="border:1px solid #000; width:80%">
                    <p style="text-indent: 0pt;text-align: center;"> {{ shareholder?.res_address.flat }} <br /></p>
                </td>
                <td></td>
            </tr>
        </table>
        <table style="border-collapse:collapse;margin-left:30.884pt; margin-top:10px" cellspacing="0">
            <tr style="height:34pt">
                <td style="width:20%">
                    <p class="s8"
                        style="padding-top: 5pt;padding-left: 3pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                        大廈
                    </p>
                    <p class="s29" style="padding-left: 3pt;text-indent: 0pt;line-height: 9pt;text-align: left;">
                        Building
                    </p>
                </td>
                <td style="width:80%;border:1px solid #000">
                    <p style="text-indent: 0pt;text-align: center;">{{ shareholder?.res_address?.building }}<br /> </p>
                </td>
                <td>
                </td>
            </tr>
        </table>
        <table style="border-collapse:collapse;margin-left:30.884pt; margin-top:10px" cellspacing="0">
            <tr style="height:34pt">
                <td style="width:20%;" colspan="0">
                    <p class="s8"
                        style="padding-top: 5pt;padding-left: 2pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                        街道／屋苑／地段／村等</p>
                    <p class="s29" style="padding-left: 2pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                        Street<span class="s36">／</span>Estate<span class="s36">／</span>
                        Lot<span class="s36">／</span>Village etc.</p>
                </td>

                <td style="width:80%;border:1px solid #000">
                    <p style="text-indent: 0pt;text-align: center;">{{ shareholder?.res_address?.street }}<br /></p>
                </td>
                <td></td>
            </tr>
        </table>
        <table style="border-collapse:collapse;margin-left:30.884pt; margin-top:10px" cellspacing="0">
            <tr style="height:34pt">
                <td style="width:20%;border-right-style:solid;border-right-width:1pt">
                    <p class="s29"
                        style="padding-top: 1pt;padding-left: 2pt;text-indent: 0pt;line-height: 93%;text-align: left;">
                        <span class="s8">區／ 市／ 省／ 州／ 郵遞 區號 等 </span> <br>District<span class="s37">／</span>City<span
                            class="s37">／ </span>Province<span class="s37">／ </span>State<span class="s36">／
                        </span>Postal
                        Code etc.
                    </p>
                </td>
                <td style="width:80%;border:1px solid #000">
                    <p style="text-indent: 0pt;text-align: center;">{{ shareholder?.res_address?.city }}<br /></p>
                </td>
                <td></td>
            </tr>
        </table>
        <table style="border-collapse:collapse;margin-left:30.884pt; margin-top:10px" cellspacing="0">
            <tr style="height:33pt">
                <td style="width:20%">
                    <p class="s8"
                        style="padding-top: 5pt;padding-left: 3pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                        國家／
                        地區 </p>
                    <p class="s29" style="padding-left: 3pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                        Country<span class="s36">／</span>Region</p>
                </td>
                <td style="width:80%;border:1px solid #000">
                    <p style="text-indent: 0pt;text-align: center;">{{ shareholder?.res_address?.country }}<br /></p>
                </td>
                <td></td>
            </tr>
        </table>
        <table style="border-collapse:collapse;margin-left:33.884pt; margin-top:10px" cellspacing="0">
            <tr style="height:29pt; margin-top:10px">
                <td style="width:129pt;border-right-style:solid;border-right-width:1pt" colspan="2">
                    <p class="s8" style="padding-left: 2pt;text-indent: 0pt;line-height: 10pt;text-align: left;">認 購的 股本
                    </p>
                    <p class="s9" style="padding-left: 2pt;text-indent: 0pt;text-align: left;">Share Capital to be
                        Subscribed</p>
                </td>
                <td style="width:121pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
                    rowspan="4">
                    <p style="text-indent: 0pt;text-align: left;"><br /></p>
                    <p class="s8" style="padding-right: 1pt;text-indent: 0pt;line-height: 11pt;text-align: center;">股 份的
                        類別
                    </p>
                    <p class="s9"
                        style="padding-left: 1pt;padding-right: 1pt;text-indent: 0pt;line-height: 11pt;text-align: center;">
                        ( <span class="s8">如 普 通股 ／ 優先 股等 </span>)</p>
                    <p class="s29"
                        style="padding-left: 2pt;padding-right: 1pt;text-indent: 0pt;line-height: 9pt;text-align: center;">
                        Class of Shares</p>
                    <p class="s29"
                        style="padding-left: 2pt;padding-right: 1pt;text-indent: 0pt;line-height: 11pt;text-align: center;">
                        (e.g. Ordinary<span class="s36">／</span>Preference etc.)</p>

                    <p style="padding:10px">ORDINARY</p>
                </td>
                <td style="width:240pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
                    colspan="3">
                    <p class="s8"
                        style="padding-top: 3pt;padding-left: 36pt;padding-right: 37pt;text-indent: 0pt;line-height: 11pt;text-align: center;">
                        建 議向 該成員 發行 的股份 數目</p>
                    <p class="s29"
                        style="padding-left: 38pt;padding-right: 37pt;text-indent: 0pt;line-height: 9pt;text-align: center;">
                        Shares Proposed to be Issued to the Member</p>
                </td>
            </tr>
            <tr style="height:29pt">
                <td style="width:129pt;border-right-style:solid;border-right-width:1pt" colspan="2">
                    <p style="text-indent: 0pt;text-align: left;"><br /></p>
                </td>
                <td
                    style="width:87pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s8"
                        style="padding-top: 3pt;padding-left: 18pt;padding-right: 17pt;text-indent: 0pt;line-height: 11pt;text-align: center;">
                        總數 </p>
                    <p class="s29"
                        style="padding-left: 18pt;padding-right: 17pt;text-indent: 0pt;line-height: 9pt;text-align: center;">
                        Total Number</p>
                </td>
                <td
                    style="width:57pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s38"
                        style="padding-top: 3pt;padding-left: 8pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                        貨幣單
                        位</p>
                    <p class="s29" style="padding-left: 12pt;text-indent: 0pt;line-height: 9pt;text-align: left;">
                        Currency
                    </p>
                </td>
                <td
                    style="width:96pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s8"
                        style="padding-top: 3pt;padding-left: 2pt;padding-right: 4pt;text-indent: 0pt;line-height: 11pt;text-align: center;">
                        總 款額</p>
                    <p class="s29"
                        style="padding-left: 3pt;padding-right: 2pt;text-indent: 0pt;line-height: 9pt;text-align: center;">
                        Total Amount</p>
                </td>
            </tr>
            <tr style="height:28pt">
                <td style="width:129pt;border-right-style:solid;border-right-width:1pt" colspan="2">
                    <p style="text-indent: 0pt;text-align: left;"><br /></p>
                </td>
                <td
                    style="width:87pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">

                    <p style="text-indent: 0pt;text-align: center;">
                        {{ shareholder?.company_shares[0]?.no_of_share }}<br /></p>
                </td>
                <td
                    style="width:57pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style="text-indent: 0pt;text-align: center;">{{ shareholder?.company_shares[0]?.currency }}<br />
                    </p>
                </td>
                <td
                    style="width:96pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style="text-indent: 0pt;text-align: center;">
                        {{ shareholder?.company_shares[0]?.total_amount_paid }}<br /></p>
                </td>
            </tr>
            <tr style="height:28pt">
                <td style="width:129pt;border-right-style:solid;border-right-width:1pt" colspan="2">
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
            <tr style="height:56pt">
                <td style="width:129pt" colspan="2">
                    <p style="text-indent: 0pt;text-align: left;"><br /></p>
                </td>
                <td
                    style="width:121pt;border-top-style:solid;border-top-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style="text-indent: 0pt;text-align: left;"><br /></p>
                    <p class="s28" style="padding-left: 67pt;text-indent: 0pt;text-align: left;">總值 <span
                            class="s2">Total</span></p>
                </td>
                <td
                    style="width:87pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style="text-indent: 0pt;text-align: center;">
                        {{ shareholder?.company_shares[0]?.no_of_share }}<br /></p>
                </td>
                <td
                    style="width:57pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style="text-indent: 0pt;text-align: left;"><br /></p>
                </td>
                <td
                    style="width:96pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style="text-indent: 0pt;text-align: center;">
                        {{ shareholder?.company_shares[0]?.total_amount_paid }}<br /></p>
                </td>
            </tr>
        </table>

    </div>
</template>

<script setup lang="ts">

let props = defineProps<{
    shareholder: any
}>()

// console.log(props.shareholder)

</script>

<style scoped>
@import '@/assets/pdf.css';
</style>