<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

use Laravel\Fortify\TwoFactorAuthenticatable;
use Laravel\Jetstream\HasProfilePhoto;
use Laravel\Jetstream\HasTeams;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens;
    use HasFactory;
    use HasProfilePhoto;
    use HasTeams;
    use Notifiable;
    use TwoFactorAuthenticatable;
 
    
    CONST BLOCKED = 2;
    CONST ACTIVE = 1;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name', 'email', 'password','client_id', 'user_token','kyc_status', 'status', 'last_login', 'login_ip','barcode', 'google2fa_secret', '2fa_verified', 'enable_2fa_at',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
        'two_factor_recovery_codes',
        'two_factor_secret',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array<int, string>
     */
    protected $appends = [
        'profile_photo_url',
    ];

    public function company(){
        return $this->hasMany(Company::class);
    }

    public function getUserDocuments(){
        return $this->hasMany(UserDocument::class);
    }

    public function GetTeams(){
        return $this->hasMany(UserTeam::class, 'id', 'user_id');
    }

    public function createTeam($company_id, $user_id){
       
        $teams = UserTeam::whereCompanyId($company_id)->first();
        if($teams){
            $team = array_push($teams->members, $user_id);
          $teams->update([
            'members' => $team
          ]);
          return $team;
        }
        $team = new UserTeam();
        $team->user_id = $this->user;
    
    }
}
