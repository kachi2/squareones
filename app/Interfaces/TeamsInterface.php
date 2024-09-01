<?php 
namespace App\Interfaces;

interface TeamsInterface {

public function Create($company, $role, $user);
public function loadMembers($team);
public function deleteMember($team, $user);
public function EditTeam($request);
}