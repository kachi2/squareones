<?php 
namespace App\Services;
use App\Interfaces\TeamsInterface;
use App\Models\Company;
use App\Models\Team;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class TeamServices implements TeamsInterface
{
    
    public function Create($request, $company, $role, $user){
        if(!$company->hasTeams()){
            $team =  tap(new Team(), function($team) use ($company, $user) {
                $team->company_id = $company->id;
                $team->name = $company->names['0']->eng_name. $company->names['0']->chn_eng_name;
                $team->personal_team = true;
                $team->user_id = $user->id;
                $team->save();
               });
               return $user->assignUser($role, $team); 
        }
        return false;
     
    }
    public function Edit($request, $team,  $user){

    }
    public function viewMembers($team,  $user){

    }
    public function deleteMember($team,  $user){

    }
    public function addMember($team,  $user){

    }
    public function viewReports($team,  $user,  $company)
    {

    }

    

}