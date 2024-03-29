<!DOCTYPE html
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

    <title>NNC1 - Incorporation Form (Company Limited by Shares) 法團成立表格 (股份有限公司)</title>
    <meta name="author" content="Companies Registry 公司註冊處" />
   <link rel="stylesheet" href="{{asset('pdf.css')}}"> 
   <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="main">
    <section> 
         
@include('pdf.company')

 @include('pdf.company_info')


<p style="text-indent: 0pt;text-align: left; padding:20px"  ><br /></p>
<hr>

@foreach ($company->shareholder as $entity) 
@if ($entity->Individual !== null) 
@include('pdf.founders_individual')
@endif
@endforeach

 
{{-- @include('pdf.founders_corporate') --}}

@include('pdf.company_secretary')


{{-- @include('pdf.directors') --}}



@foreach ( $company->directors as $corporate )
@if ($corporate->Corporate !== null)
@include('pdf.first_directors')
@endif
@endforeach

@include('pdf.founder_statement') <!--done -->

@foreach ( $company->individualDirector as $individualDirector )
@if ($individualDirector->Individual !== null)
@include('pdf.pi-ncc_secretary') <!-- static-->
@endif
@endforeach
@include('pdf.notice_to_business') <!-- done -->

@include('pdf.company_ordinance') 

@include('pdf.class_of_shares')

@include('pdf.founder_sign')

{{-- @include('pdf.articles') --}}
</section>
</div>
</html>  