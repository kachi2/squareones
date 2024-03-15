<!DOCTYPE html
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>NNC1 - Incorporation Form (Company Limited by Shares) 法團成立表格 (股份有限公司)</title>
    <meta name="author" content="Companies Registry 公司註冊處" />
   <link rel="stylesheet" href="{{asset('pdf.css')}}"> 
</head>

<body>

    <div class="main">
    <section> 

        {{-- ======start =========== --}}
   @include('pdf.company')
{{-- <breakpoin></breakpoin> --}}

 @include('pdf.company_info')

{{-- end of company information  --}}

<p style="text-indent: 0pt;text-align: left; padding:20px"  ><br /></p>


<hr>

{{-- start of founders information  --}}

@include('pdf.founders')

{{-- star to company screteray page  --}}

{{-- ==========================starting here ================= --}}

@include('pdf.company_secretary')

{{-- =================end of secretary page ======================= --}}
{{-- directos/persons  --}}
@include('pdf.directors')

{{-- ===========end of coperate directors =================== --}}


{{-- beginning of  E Continuation Sheet E --}}

@include('pdf.first_directors')


@include('pdf.founder_statement')

@include('pdf.pi-ncc_secretary')

@include('pdf.notice_to_business')

@include('pdf.company_ordinance')
</section>
</div>
</html>