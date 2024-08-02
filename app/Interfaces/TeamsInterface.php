<?php 
namespace App\Interfaces;

interface TeamsInterface {

public function Create($request,  $company, $role, $user);
public function loadMembers($team);
public function deleteMember($team, $user);
}