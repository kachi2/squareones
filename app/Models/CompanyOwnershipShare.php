<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CompanyOwnershipShare extends Model
{
    use HasFactory;

    protected $fillable = ['company_id', 'share_type', 'no_of_share', 'total_amount_paid'];
}
