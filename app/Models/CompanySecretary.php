<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CompanySecretary extends Model
{
    use HasFactory;

    protected $fillable = ['company_id', 'business_nature_id', 'name', 'chn_name', 'company_reg_no', 'country_registered', 'licence_no', 'email', 'address', 'city', 'state', 'postal_code', 'country'];

    public function company():BelongsTo
    {
        return $this->belongsTo(Company::class);
    }

}
