<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Creagia\LaravelSignPad\Concerns\RequiresSignature;
use Creagia\LaravelSignPad\Contracts\CanBeSigned;

class SignDocument extends Model implements CanBeSigned
{
    protected  $fillable = ['user_id', 'signature', 'signature_path', 'date_signed', 'company_id', 'document', 'signed_document'];


    use HasFactory;
    use RequiresSignature;


    public function company(){
        return $this->belongsTo(Company::class)->withDefault();
    }

    public function User(){
        return $this->belongsTo(User::class)->withDefault();
    }
}
