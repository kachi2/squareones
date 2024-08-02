<?php 
namespace App\Traits;
use App\Models\Roles;
use App\Models\Team;
use App\Models\TeamUser;

trait Teams {

    public function loadRolePermission()
    {
         $role = Roles::get();
         $roles =  $role->load('permission');
         return $roles;
     }

     public function hasTeams($company_id)
     {
        $team = Team::whereCompanyId($company_id)->first();
      return $team->load('teamUser');
     }

     public function belongsToTeam($user_id)
     {

     }

     
}