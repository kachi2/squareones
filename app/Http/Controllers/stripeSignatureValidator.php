<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Spatie\WebhookClient\Exceptions\InvalidConfig;
use Spatie\WebhookClient\SignatureValidator\SignatureValidator;
use Spatie\WebhookClient\WebhookConfig;

class stripeSignatureValidator extends Controller implements SignatureValidator
{
    
    public function isValid(Request $request, WebhookConfig $config):bool
    {
        $signature = $request->header($config->signatureHeaderName);
        $clientSecret = $config->signingSecret;

     Log::info('data', $request->headers->all());
     
        if(!$signature)
        {
            return false;
        }

        if(empty($clientSecret))
        {
            throw InvalidConfig::signingSecretNotSet();
        }

        $computedSignature = hash_hmac('256', $request->header(), $clientSecret);
        return hash_equals($computedSignature, $signature);

    }
}
