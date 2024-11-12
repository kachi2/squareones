<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TaskComment extends Model
{
    use HasFactory;

    protected $fillable = 
    [
        'task_id',
        'sender_id',
        'comment'
    ];

    public function TaskComment() 
    {
        return $this->belongsTo(UserTask::class);
    }
}
