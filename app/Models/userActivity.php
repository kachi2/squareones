<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class userActivity extends Model
{
    use HasFactory;

    protected $fillable = [
        'action', 'name', 'status', 'type', 'user_id','location','ip_address'
    ];
}
