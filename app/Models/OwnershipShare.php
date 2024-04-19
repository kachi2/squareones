<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class OwnershipShare extends Model
{
    use HasFactory;
    protected $fillable = ['company_id', 'company_share_id',  'total_amount', 'company_entity_id'];


    public function company():BelongsTo
    {
        return $this->belongsTo(Company::class);
    }

    public function shares(){
        return $this->belongsTo(CompanyEntity::class);
    }

    public function companyShares(){
        return $this->belongsTo(CompanyShare::class);
    }

    


}
