<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class FounderAuthPerson extends Model
{
    use HasFactory;

    protected $fillable = [''];

    public function founderCorperate():BelongsTo
    {
        return $this->belongsTo(FounderCorperate::class);
    }

}

