<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserTask extends Model
{
    use HasFactory;

    protected $fillable = 
           ['user_id',
            'title',
            'content',
            'priority',
            'status',
            'assigned_by',
            'due_date',
            'is_new'
        ];


    public function UserTask()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

}

