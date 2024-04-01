<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class IdentityInfo extends Model
{
    use HasFactory;
    protected $fillable = ['identity_type','individual_id', 'passport_no', 'issueing_country', 'identity_no', 'dob', 'card_name'];


    public function IdType(){
        return $this->belongsTo(IdentityType::class);
    }

}
