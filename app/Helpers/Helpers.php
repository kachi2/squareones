<?php 

if(!function_exists('auth_user')){

    function auth_user(){
         return auth()->user()->id;
    }
}

if(!function_exists('auth_name')){

    function auth_name(){
         return auth()->user()->name;
    }
}


   function filter($query, $relationship, $delimeter, $pointer = "id")
	{
			$query->whereHas($relationship, function ($queries) use ($delimeter, $pointer) {
				$queries->where($pointer, [$delimeter]);
			
			});
			return $query;
}

if(!function_exists('filter_vars'))
{
    function filter_vars($text)
    {
        if($text == 'undefined' || $text == 'null')
    {
        return null;
    }
    return $text;
    }
}
	
