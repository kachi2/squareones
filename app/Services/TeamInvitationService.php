<?php 
namespace App\Services;
use App\Interfaces\TeamsInterface;
use App\Models\Company;
use App\Models\Team;
use App\Models\TeamInvitation;
use App\Models\TeamUser;
use App\Models\User;
use Illuminate\Validation\Rule;
use Laravel\Jetstream\Mail\TeamInvitation as TeamInvitations;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use stdClass;

class TeamInvitationService
{

    public function sendInvitation($request)
    {
        $team = Team::where('id', $request['team_id'])->first();
        $ss = validator::make($request, $this->rules($team));
        if($ss->fails())
        {
            $token = Str::random(20);
            $invitation = TeamInvitation::whereEmail($request['email'])->first();
            $invitation->token = $token;
            Mail::to($request['email'])->send(new TeamInvitations($invitation));
            return $invitation;
        }

        if(!$this->checkIfUserExist($request['user_id'], $request['team_id']))
        {
            $token = Str::random(20);
            $invitation = TeamInvitation::create([
                'team_id' =>  $request['team_id'],
                'email' => $request['email'],
                'token' => $token,
                'role' => $request['role']
            ]);
    
          Mail::to($request['email'])->send(new TeamInvitations($invitation));
        return $invitation;

        }
      return [
        'error' => 'User already exist in the team'
      ];
    }

    public function rules(Team $team) 
    {
      return  array_filter([
            'email' => [
            'required' => 'email',
              Rule::unique('team_invitations')->where(function($builder) use ($team) {
                    $builder->where('team_id', $team->id);
                }),
            ],
            ]);

    }


    public function checkIfUserExist($user_id, $team_id)
    {
        $team = TeamUser::where('team_id', $team_id)->pluck('user_id');
        if($team->contains($user_id)){
            return true;
        }
        return false;
        
    }


    public function AcceptInvitation($token)
    {
        $team = TeamInvitation::whereToken($token)->first();
        if($team){
            $user = User::whereEmail($team->email)->first();
            if(!$this->checkIfUserExist($user->id, $team->id)){
          $teamUsers =  tap(new TeamUser(), function($teamUser) use ($team, $user){
                $teamUser->team_id = $team->team_id;
                $teamUser->user_id = $user->id;
                $teamUser->role = $team->role;
                $teamUser->save();
        });
        $team->delete();
        return [
            'data' => $teamUsers,
            'message' => 'Team Invitation accepted successfully'
           ];
          }
       }
        return [
            'error' => 'User already belongs to this team'
        ];
    }


}