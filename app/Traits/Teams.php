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
        if($team){
            return $team->load('teamUser');
        }
      return false;
     }

     public function belongsToTeam($user_id)
     {
        $user = TeamUser::whereUserId($user_id)->first();
        $team_id = $user->team_id;
        $teams = $user->whereHas('teams', function($teams) use ($team_id)  {
           return $teams->where('id', 90);
        });
        dd($teams);
        return $teams;

     }  
}