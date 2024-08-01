<?php 
namespace App\Interfaces;

interface TeamsInterface {

public function Create($request,  $company, $role, $user);
public function Edit($request, $team,  $user);
public function viewMembers($team,  $user);
public function deleteMember($team, $user);
public function addMember($team, $user);
public function viewReports($team, $user, $company);
}