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
                                        Hello {{ $incorporated->company->Users->name}}
                                    </td>
                                </tr>

                                <tr>
                                    <td style="padding:0 30px">
                                        <p> Your Company ({{$incorporated->company_registered_name}}) has been incorporated, with the following details</p>
                                        <table width="100%">
                                            <tbody>
                                                <tr>
                                                    <td width="150">Company Name</td>
                                                    <td width="25">&nbsp;&nbsp;:&nbsp;&nbsp;</td>
                                                    <td> {{ $incorporated->company_registered_name }}</td>
                                                </tr>
                                                <tr>
                                                    <td width="150">Business Registered Number</td>
                                                    <td width="25">&nbsp;&nbsp;:&nbsp;&nbsp;</td>
                                                    <td>{{ $incorporated->business_registered_number}} </td>
                                                </tr>
                                                <tr>
                                                    <td width="150">Incorporated Date</td>
                                                    <td width="25">&nbsp;&nbsp;:&nbsp;&nbsp;</td>
                                                    <td> {{ $incorporated->incorporated_date }}</td>
                                                </tr>
                                                <tr>
                                                    <td width="150">Company Structure</td>
                                                    <td width="25">&nbsp;&nbsp;:&nbsp;&nbsp;</td>
                                                    <td> {{$incorporated->company_structure}}</td>
                                                    
                                                </tr>
                                                <tr>
                                                    <td width="150">business_classification</td>
                                                    <td width="25">&nbsp;&nbsp;:&nbsp;&nbsp;</td>
                                                    <td> {{ $incorporated->business_classification }}</td>
                                                    
                                                </tr>
                                                <tr>
                                                    <td width="150">Tax Id</td>
                                                    <td width="25">&nbsp;&nbsp;:&nbsp;&nbsp;</td>
                                                    <td> {{ $incorporated->tax_id}}</td>
                                                    
                                                </tr>
                                            </tbody>
                                        </table>
                                        <p>If you have any issues or complaints regarding any Information, kindly send
                                            us an email at support@squareOne.com</p>

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
