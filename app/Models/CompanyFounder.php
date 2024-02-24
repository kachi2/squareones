<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CompanyFounder extends Model
{
    use HasFactory;

    protected $fillable = ['founder_type_id', 'capacity', 'company_id'];


    public function company():BelongsTo
    {
        return $this->belongsTo(Company::class);
    }

    public function founderType(){
        return $this->belongsTo(FounderType::class);
    }
}
