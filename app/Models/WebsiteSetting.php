<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WebsiteSetting extends Model
{
    use HasFactory;

    protected $fillable = ['website_nmae', 'website_title', 'website_logo', 'website_fav', 'sidebar_color', 'website_email', 'website_phone', 'navbar_color', 'footer'];
}
