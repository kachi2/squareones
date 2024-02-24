<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class AdminActivity extends Model
{
    use HasFactory;

    protected $fillable = ['admin_id', 'login_ip', 'login_date', 'activity'];

    public function Admin():BelongsTo
    {
        return $this->belongsTo(Admin::class);
    }
}
