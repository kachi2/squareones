<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class OwnershipShare extends Model
{
    use HasFactory;
    protected $fillable = ['company_id', 'company_share_id',  'total_amount', 'entity_id'];


    public function company():BelongsTo
    {
        return $this->belongsTo(Company::class);
    }

}
