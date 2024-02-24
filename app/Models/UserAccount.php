<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserAccount extends Model
{
    use HasFactory;

    protected $fillable = ['last_login', 'login_ip', 'account_status', 'identity_verified', 'is_image_verified'];
}
