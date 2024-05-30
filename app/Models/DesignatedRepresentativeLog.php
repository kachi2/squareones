<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DesignatedRepresentativeLog extends Model
{
    use HasFactory;

    protected $fillable = [
        'designated_representative_id','entry_date','name','remarks'
          ];
}
