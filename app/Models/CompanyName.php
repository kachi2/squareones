<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CompanyName extends Model
{
    use HasFactory;

    protected $fillable = ['company_id', 'eng_name', 'chn_name', 'choice_level', 'eng_prefix', 'chn_prefix', 'selected_name'];

    public function company():BelongsTo
    {
        return $this->belongsTo(Company::class);
    }
}
