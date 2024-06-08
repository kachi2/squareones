<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserTeam extends Model
{
    use HasFactory;


    public function TeamOwner(){
        return $this->belongsTo(User::class)->withPivot('company_id');
    }

}
