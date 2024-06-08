<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Creagia\LaravelSignPad\Contracts\CanBeSigned;

class UserDocument extends Model 
{
    protected  $fillable = ['user_id','title', 'document'];


    use HasFactory;

    public function User(){
        return $this->belongsTo(User::class);
    }
}
