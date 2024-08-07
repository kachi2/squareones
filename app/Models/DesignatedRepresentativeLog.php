<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DesignatedRepresentativeLog extends Model
{
    use HasFactory;

    protected $fillable = [
      'representative_id', 'entry_date', 'name', 'remarks', 'identity_info', 'place_of_registration', 'nature_of_control_over_the_company'
          ];
}
