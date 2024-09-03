<div width="100%" style="margin:0;padding:0!important;background-color:#f5f6fa">
    <center style="width:100%;background-color:#f5f6fa">
        <table width="100%" border="0" cellpadding="0" cellspacing="0" bgcolor="#f5f6fa">
            <tbody>
                <tr>
                    <td style="padding:30px 0">
                        <table style="width:100%;max-width:620px;margin:0 auto">
                            <tbody>
                                <tr>
                                    <td style="text-align:center;padding-bottom:15px">
                                        <img style="max-height:50px;width:auto" src="https://squareone.portrec.ng/icons/sidebar/squareone_main.png"
                                            alt="SquareOne Logo" class="CToWUd">
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table style="width:100%;max-width:620px;margin:0 auto;background-color:#ffffff">
                            <tbody>
                                <tr>
                                    <td style="padding:10px 30px 10px">
                                        Hello 
                                        {{ $company->Users->name}} 
                                    </td>
                                </tr>

                                <tr>
                                    <td style="padding:0 30px">
                                        <p> You have completed the filling of company registration form to registered your company, Here is the summary of the registration informaiton </p>
                                        <table width="100%">
                                            <tbody>
                                                <tr>
                                                    <td width="150">Selected Company Names</td>
                                                    <td width="25"> 
                                                       @foreach ($company->names as  $name)
                                                           <p> {{$name->eng_name}} {{$name->chn_eng_name}} </p>
                                                       @endforeach
                                                    </td>
                                                   
                                                </tr>
                                                <tr>
                                                    <td width="150">Company Shares Information</td>
                                                    <td width="25">  <p> Share Type: ORDINARY</p> <P>Share Amount: {{$company->Shares[0]->amount}}</P>  </td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td width="150">Total Number of Directors/Shareholders</td>
                                                    <td width="25">&nbsp;&nbsp;:&nbsp;&nbsp;</td>
                                                    <td> </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <p>To ensure we have a smooth registrations process, kindly advise all the Directors/Shareholders to sign on the company registration PDF document and as well complete their KYC verificaitons</p>
                                        <p> Failure to complete the above stated will delay the incorporation of the company.</p>


                                    </td>
                                </tr>

                            </tbody>
                        </table>
                        <table style="width:100%;max-width:620px;margin:0 auto">
                            <tbody>
                                <tr>
                                    <td style="text-align:center;padding:25px 20px 0">
                                        <p style="font-size:13px">support@squareOne.com © {{ Date('Y') }}.</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
    </center>
    <div class="yj6qo"></div>
    <div class="adL">
    </div>
</div>
