<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TeamUser extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'team_id', 'role'];
    protected $table = 'team_user';


    public function TeamOwner(){
        return $this->belongsTo(User::class);
    }

}
