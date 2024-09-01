<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Plan extends Model
{
    use HasFactory;

    protected $fillable = ['plan', 'amount', 'duraction', 'currency', 'stripe_product_id', 'default_price_id', 'recurring'];
    protected $table = 'plans';
}
