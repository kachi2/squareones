<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CompanyShare extends Model
{
    use HasFactory;
    use HasFactory;
    protected $fillable = ['company_id', 'share_type_id', 'no_of_share', 'total_amount_paid', 'currency'];


    public function company():BelongsTo
    {
        return $this->belongsTo(Company::class);
    }
}
