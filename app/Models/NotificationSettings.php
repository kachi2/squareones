<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NotificationSettings extends Model
{
    use HasFactory;

    protected $fillable = ['type', 'name', 'status', 'user_id'];

    public function UserNotify()
    {
        return $this->belongsTo(User::class);
    }
}
