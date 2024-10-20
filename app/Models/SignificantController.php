<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SignificantController extends Model
{
    use HasFactory;
    protected $fillable = [
        'company_id', 'company_entity_id','entry_date', 'type', 'date_becoming_rep_person','date_ceased_to_be_rep_person','legal_entity_name' 
    ];

    public function ControllersParticulars(){
        return $this->hasOne(ControllersParticulars::class);
    }
}
