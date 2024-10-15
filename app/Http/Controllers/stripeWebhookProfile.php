<?php

namespace App\Http\Controllers;

use Spatie\WebhookClient\WebhookProfile\WebhookProfile;
use Illuminate\Http\Request;

class stripeWebhookProfile extends Controller implements WebhookProfile
{
    
    public function shouldProcess(Request $request): bool
    {
        return true;
    }
}
