<?php

namespace App\Exceptions;

use BadMethodCallException;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Database\QueryException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Session\TokenMismatchException;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Symfony\Component\HttpKernel\Exception\MethodNotAllowedHttpException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Routing\Exception\MethodNotAllowedException;
use Symfony\Component\Routing\Exception\RouteNotFoundException;
use Throwable;

class Handler extends ExceptionHandler
{
    /**
     * The list of the inputs that are never flashed to the session on validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     */
    // public function register(): void
    // {
    //     $this->reportable(function (Throwable $e) {
    //         //
    //     });
    // }

    public function res($err, $code)
    {
        return response(["status" => $code, "error" => $err], $code);
    }
    /**
     * Register the exception handling callbacks for the application.
     */
    public function register(): void
    {
        $this->renderable(function (Throwable $e, $request) {
            if ($request->is("api/*")) {
                if ($e instanceof ModelNotFoundException) {
                    return $this->res("model does not exist", 404);
                }

                // if ($e instanceof AuthenticationException) {
                //     return $this->res("user not found", 404);
                // }

                if ($e instanceof AuthorizationException) {
                    return $this->res("You are not authorized", 401);
                }

                if ($e instanceof RouteNotFoundException) {
                    return $this->res("unauthorized", 401);
                }

                if ($e instanceof NotFoundHttpException) {
                    return $this->res("not found", 404);
                }

                if ($e instanceof MethodNotAllowedException) {
                    return $this->res("The url you are using is not allowed ", 405);
                }

                if ($e instanceof MethodNotAllowedHttpException) {
                    return $this->res("The http specified method for the requests is invalid".$e, 405);
                }

                if ($e instanceof HttpException) {
                    return $this->res($e->getMessage(), $e->getStatusCode());
                }

                if ($e instanceof BadMethodCallException) {
                    return $this->res("method does not exist".$e, 404);
                }

                if ($e instanceof QueryException) {
                    logger($e);
                    return $this->res(" Cannot remove this resource permanently. It is related with another resource".$e, 409);
                }

                if ($e instanceof TokenMismatchException) {
                    return $this->res("invalid user ".$e, 405);
                }

                // if ($e instanceof UnexpectedValueException) {
                //     return $this->res("permission denied", 401);
                // }

                return $this->res($e->getMessage(), 500);
            }
        });
    }
}
