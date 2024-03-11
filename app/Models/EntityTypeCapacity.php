<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EntityTypeCapacity extends Model
{
    use HasFactory;

    protected $fillable = ['company_entity_id', 'entity_type_id', 'entity_capacity_id'];
}
