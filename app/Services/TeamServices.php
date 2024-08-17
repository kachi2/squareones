<?php 
namespace App\Services;
use App\Interfaces\TeamsInterface;
use App\Models\Company;
use App\Models\Team;
use App\Models\TeamUser;
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

    public function loadMembers($team){
        $member = TeamUser::where('team_id',$team)->paginate(10);
            $member?->load('users');
            return $member;
    }

    public function deleteMember($team,  $user)
    {
    if($this->checkIfUserExists($team, $user)) return ['data' => 'User removed from team successfully'];
    return [ 'error' => 'No member found with this information'];
    }


    public function checkIfUserExists($team,  $user)
    {
        $team = TeamUser::where(['team_id' => $team, 'user_id' => $user])->first();
        if($team){
          return $team->delete();
        }
        return false;
    }

    public function EditTeam($request)
    {
       $team = Team::where('id', $request->team)->first();
       if($team){
        $team->update([
            'name' => $request->name
        ]);
        return $team;
       } 
     return false;
    }

    public function getUserTeams($user_id)
    {
            $userTeams = TeamUser::whereHas('teams', function($teams) use ($user_id){
               return  $teams->where('user_id', $user_id);
            })->paginate(10);
    
        if(count($userTeams) > 0) return $userTeams->load('teams', 'users');
        return false;
    }
}