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
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class TeamInvitationService
{

    public function sendInvitation(Request  $request)
    {
        $team = Team::where('team_id', $request->team_id)->first();
         $request->validate($this->rules($team));


        if(!$this->checkIfUserExist($request->user_id, $request->team_id))
        {
            $token = Str::random_bytes(20);
            $team = TeamInvitation::create([
                'team_id' =>  $request->team_id,
                'email' => $request->email,
                'token' => $token
            ]);
    
            Mail::to($request->email)->send(new TeamInvitations($team));

        }
    }

    public function rules(Team $team) 
    {

        return array_filter([
            'email' => [
                'email' => 'required',
                Rule::unique('team_invitation')->where(function($builder) use ($team) {
                    $builder->where('team_id', $team->id);
                }),
            ]
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


}