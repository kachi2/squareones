<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class AdminMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next)
    {
        return auth('admin')->user()??response()->json(['error' => 'Unauthorized']);
        
        if(!auth('admin')->user())
        {
            return response()->json(['error' => 'Unauthorized']);
        }
        return $next($request);
    }
}
