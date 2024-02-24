<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CompanyFundSource extends Model
{
    use HasFactory;

    protected $fillable = ['company_id', 'income_expected_source', 'origin_funds', 'wealth_initial_source', 'income_outgoing_source'];
}
