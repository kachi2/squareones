<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CompanyOwnership extends Model
{
    use HasFactory;

    protected $fillable = ['company_id', 'company_ownership_share_id', 'share_percentage', 'total_amount'];
}
