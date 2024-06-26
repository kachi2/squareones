<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DesignatedRepresentative extends Model
{
    use HasFactory;

    protected $fillable = [
  'company_id','entry_date','name','remarks'
    ];

    public function DesignatedParticulars(){
      return $this->hasOne(DesignatedParticulars::class);
    }
}
