<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App\Support\Google2FAAuthenticator;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;
use Cloudinary\Api\HttpStatusCode;

class TwoFactoreMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $user = Auth::user();
        if($user && !$user->google2fa_secret && ($user->enable2fa)){
            return response()->json(['error' => 'Unauthorized, 2fa authentication failed'], HttpStatusCode::INTERNAL_SERVER_ERROR);
        }
        return $next($request);
    }
}
