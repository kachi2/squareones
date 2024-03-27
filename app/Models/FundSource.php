<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class FundSource extends Model
{
    use HasFactory;
    protected $fillable = ['company_id', 'income_expected_source', 'origin_funds', 'wealth_initial_source', 'income_outgoing_source'];

    public function company():BelongsTo
    {
        return $this->belongsTo(Company::class)->withDefault();
    }
}
