<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CompanyOwnershipShare extends Model
{
    use HasFactory;

    protected $fillable = ['company_id', 'share_type', 'no_of_share', 'total_amount_paid'];


    public function company():BelongsTo
    {
        return $this->belongsTo(Company::class);
    }

}
