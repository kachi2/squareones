<template>
  <hr style="width: 100%; font-weight: 800;">
            <div style="padding-top: 50px;"> </div>
            <div class="row">
                <div class="col-2">
                    <p style="padding-top: 0pt;text-indent: 0pt;text-align: left; padding-left: 54px;">
                    <img width="64" height="54"
                    src="data:image/png;base64,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" />
                    </p>
                </div>
                <div class="col-10">
                    <p class="s4" style="padding-top: 20px; padding-left: 10pt;text-indent: 0pt;text-align: left;">致商業登記署通知書 <span class="s55">Notice to
                        Business Registration Office </span><span class="s64">( 1) </span></p>
                    <p style="text-indent: 0pt;text-align: left;"><br /></p>
                </div>
            </div>

            <div class="row">
                <div class="col-12" style="padding-top: 80px;">

                    <p class="s1" style="padding-left: 47pt;text-indent: 0pt;line-height: 93%;text-align: left;">
                        以下收集的資料只用作商業登記用途。這等資料會傳送給稅務局局長處理。在商業登記申請獲批准後，這等資料會存放在商業登記冊上，供公眾查閱，但不會存放在公司註冊處的登記冊上。</p>
                </div>
            </div>

            <div class="row">
                <div class="col-12" style="padding-top: 20px;">
                    <p class="s5" style="padding-top: 11pt;padding-left: 47pt;text-indent: 0pt;text-align: justify;">The following
                        information is only collected for the purpose of Business Registration. The information will be transmitted to
                        the Commissioner of Inland Revenue for processing. After the business registration application has been
                        approved, the information will be kept under the Business Register, but not in the Companies Registry’s
                        register, for public search.</p>
                </div>
            </div>

            <div class="row">
                <div class="col-12" style="padding-top: 40px;">
                    <p class="s30" style="padding-left: 47pt;text-indent: 0pt;line-height: 93%;text-align: justify;">如在此後任何時間有任何適用商業登記證
                        <span class="s2">( </span>在《商業登記條例》<span class="s2">( </span>第 <span class="s2">310 </span>章 <span class="s2">)
                        </span>第 <span class="s2">6 </span>條中界定 <span class="s2">) </span>就本公司 發出， 本人欲選擇該等商業登記證內所註明的屆滿日期均為自其內所註明的生效日期起計的
                        <span class="s2">3 </span>年屆滿之日。 </p>
                </div>
            </div>
            <div class="row">
                <div class="col-12" style="padding-top: 20px;">
                    <p class="s2" style="padding-top: 10pt;padding-left: 47pt;text-indent: 0pt;text-align: justify;">I elect that the
                        expiry date to be endorsed on all applicable business registration certificates (as defined in section 6 of the
                        Business Registration Ordinance (Cap. 310)) to be issued at any time hereafter in respect of this company shall
                        be the date of the expiration of 3 years from the date of commencement endorsed thereon.</p>
                </div>
            </div>

            <div class="row" style="padding-top: 20px;">
                <div class="col-6" >
                    <p class="s30" style="padding-left: 47pt;text-indent: 0pt;text-align: left;">
                        <span class="s67">(2) </span>
                        <img width="13" height="14" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAOCAYAAAD0f5bSAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAhUlEQVQoke3SMQrDMAyF4f/VPYKHDJk8+yBZcz0fS5OHgM+QPaAOoaYtpIRm7Zu0fDyEJEnu7pyNJO4A8zwTY0QS7o6kQ1BK2dEwDOScGcfxsCGEQGsNYEcAKSWmaTpEy7J0dDu9zEv+6Arqd5JErbXPn1nX9R1t24aZYWZfG57H1S8P+wD2mig/s60cLgAAAABJRU5ErkJgggAA" />
                    <span class="s68"> </span>是 <span class="s2">Yes </span>
                    </p>
                    </div>
                        <div class="col-6">
                        <!-- <img width="13" height="16" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAQCAYAAADNo/U5AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAgUlEQVQoke3TKw6DIRSE0Y9SwQbAsADCThAs8l8PFkuCYA0YzK1o0ocgfbgmHT1HTHKvAoQPcwbIOWOtfVkWEY7juCLvPTFGnHNbYIxhjHFHACEEUkpb1FpjjAHA6d0dj/mj30C3i9BaU2vdFuecz2itRSkFEUEptYW9dwAUX7zGBSV7JKoz0sskAAAAAElFTkSuQmCC" />       -->
                   <input type="checkbox" checked disabled>
                        <span class="s69"> </span>否 <span class="s2">No</span>
                </div>
            </div>

            <div class="row">
                <div class="col-12" style="padding-top: 200px;">
                    <ol id="l17">
                        <li data-list-text="(1)">
                            <p class="s15" style="padding-left: 64pt;text-indent: -13pt;line-height: 93%;text-align: left;">
                                根據《商業登記條例》
                                <span class="s16">(</span>第 <span class="s16">310 </span>章<span class="s16">) </span>第 <span
                                    class="s16">5A(1) </span>及 <span class="s16">5D(2) </span>條的規定，提出成立法團的申請人須把本通知書和訂明的商業登記費及徵費連同相關的申請表格
                                <span class="s16">(</span>表格<span class="s16">NNC1 </span>或 <span class="s16">NNC1G) </span>一併提交公司註冊處。
                            </p>
                            <p class="s16" style="padding-left: 64pt;text-indent: 0pt;text-align: justify;">According to sections 5A(1)
                                and 5D(2) of the Business Registration Ordinance (Cap. 310), an applicant for company incorporation must
                                submit this notice and the prescribed business registration fee and levy together with the related
                                application form (Form NNC1 or NNC1G) to the Companies Registry.</p>
                            <p style="text-indent: 0pt;text-align: left;"><br /></p>
                        </li>
                        <li data-list-text="(2)">
                            <p class="s15" style="padding-left: 63pt;text-indent: -13pt;line-height: 11pt;text-align: left;">請在適用的空格內加上
                                <span class="s70"></span><span class="s71"> </span>號<span class="s21">。</span></p>
                        </li>
                        </ol>
                </div>
            </div>

            <div class="row" style="padding-top: 100px; padding-bottom: 40px;">
                <div class="col-4">
                    <p class="s14" style="padding-left: 46pt;text-indent: 0pt;text-align: left;">IRBR1(10/2013)</p>
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

<style scoped>
@import '@/assets/pdf2.css';
</style>