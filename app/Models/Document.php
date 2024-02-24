<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Document extends Model
{
    use HasFactory;

    protected $fillable = ['company_id', 'document_type_id', 'document', 'status', 'facial_verified'];

    public function company():BelongsTo
    {
        return $this->belongsTo(Company::class);
    }

}
