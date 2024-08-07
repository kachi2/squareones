<?php

use App\Http\Controllers\TeamsController;
use Illuminate\Support\Facades\Route;

Route::post('teams/invitation', [TeamsController::class, 'SendInvitation']);
Route::post('/team/invitation/accept', [TeamsController::class, 'acceptInvitation']);
Route::post('/team/remove/member', [TeamsController::class, 'removeUser']);
Route::post('/team/load/members', [TeamsController::class, 'loadMembers']);
Route::post('/team/roles/', [TeamsController::class, 'loadRolePermission']);
Route::post('/team/get/users', [TeamsController::class,'getAllUserTeam']);