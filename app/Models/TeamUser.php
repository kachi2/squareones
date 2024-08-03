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

    public function users()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function teams()
    {
        return $this->belongsTo(Team::class,'team_id', 'id');
    }

}
