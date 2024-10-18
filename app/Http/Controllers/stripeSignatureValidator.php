<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Spatie\WebhookClient\Exceptions\InvalidConfig;
use Spatie\WebhookClient\SignatureValidator\SignatureValidator;
use Spatie\WebhookClient\WebhookConfig;
use Stripe\Webhook;

class stripeSignatureValidator extends Controller implements SignatureValidator
{
    
    public function isValid(Request $request, WebhookConfig $config):bool
    {
        $signature = $request->header($config->signatureHeaderName);
        $payload = $request->getContent();
        $clientSecret = $config->signingSecret;
        if(!$signature && empty($clientSecret)){return false;}
        $signatures = explode(',', $signature);
        // log::info(['signature' => $signatures]);

        $timestamp = isset($signatures[0])?substr($signatures[0],2):'';
        $actualSignature = isset($signatures[2])?substr($signatures[2],3):'';
        $signedPayload = $timestamp.'.'.$payload;
  
        $computedSignature = hash_hmac('sha256',$signedPayload, $clientSecret);

        return true;
        return hash_equals($computedSignature, $actualSignature);
    }
}
