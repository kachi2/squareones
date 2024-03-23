<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CompanyEntity extends Model
{
    use HasFactory;



    protected $fillable = [ 'company_id', 'entity_type_id', 'entity_capacity_id'];

    public function company():BelongsTo
    {
        return $this->belongsTo(Company::class);
    }

    public function entityType(){
        return $this->belongsTo(EntityType::class);
    }

    public function Individual(){
        return $this->hasOne(Individual::class);
    }

    public function Corporate(){
        return $this->hasOne(Corporate::class);
    }

    public function individualFounder(){
        return $this->hasMany(Individual::class, 'company_entity_id', 'id');
    }
}
