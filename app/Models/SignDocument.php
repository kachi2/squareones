<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Creagia\LaravelSignPad\Contracts\CanBeSigned;

class SignDocument extends Model 
{
    protected  $fillable = ['user_id', 'signature', 'signature_path', 'date_signed', 'company_id', 'document', 'signed_document'];


    use HasFactory;

    public function company(){
        return $this->belongsTo(Company::class);
    }

    public function User(){
        return $this->belongsTo(User::class);
    }
}
