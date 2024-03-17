<?php 

if(!function_exists('auth_user')){

    function auth_user(){
        // return auth()->user()->id;
        return 1;
    }


   function filter($query, $relationship, $delimeter, $pointer = "id")
	{
			$query->whereHas($relationship, function ($queries) use ($delimeter, $pointer) {
				$queries->where($pointer, [$delimeter]);
			
			});
			return $query;
		}
	
}