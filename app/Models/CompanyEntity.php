<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CompanyEntity extends Model
{
    use HasFactory;


    protected $fillable = ['is_founder', 'company_id'];

    public function company():BelongsTo
    {
        return $this->belongsTo(Company::class);
    }

    public function entityType(){
        return $this->belongsTo(EntityType::class);
    }
}
