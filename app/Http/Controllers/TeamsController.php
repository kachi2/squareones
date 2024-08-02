<?php

namespace App\Http\Controllers;

use App\Services\TeamInvitationService;
use App\Http\Requests\TeamInvitationRequest;
use App\Models\User;
use App\Services\TeamServices;
use Cloudinary\Api\HttpStatusCode;
use Illuminate\Http\Request;

class TeamsController extends Controller
{
    //

    public function __construct(
        public readonly TeamInvitationService $teamInvitationService,
        public readonly TeamServices $teamServices
    )
    {
        
    }

    public function SendInvitation(TeamInvitationRequest $request)
    {
        $invitation = $this->teamInvitationService->sendInvitation($request->validated());
        return response()->json([ 'data' => $invitation], HttpStatusCode::OK);
    }

    public function acceptInvitation(Request $request)
    {
        $user = User::where('id', auth_user())->first();
        if(!$user->TokenEmailExist($request->token)) return ['error' => 'Invitation Token cannot be found or  has expired'];
      $data =  $this->teamInvitationService->acceptInvitation($request->token);
      return response()->json($data, HttpStatusCode::UNAUTHORIZED);
    }

    public function removeUser(Request $request)
    {
       return $this->teamServices->deleteMember($request->team_id, $request->user_id); 
    }
    
    public function loadMembers(Request $request)
    {
        $member = $this->teamServices->loadMembers($request->team_id); 
        if($member)
        {
            return response()->json($member, HttpStatusCode::OK);
        }
        return response()->json(['error' => 'No Team found with id provided'], HttpStatusCode::NOT_FOUND);
    }
}
