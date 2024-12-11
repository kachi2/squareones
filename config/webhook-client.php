<?php

use App\Http\Controllers\stripeSignatureValidator;
use App\Http\Controllers\stripeWebhookProfile;

return [
    'configs' => [
        [
            'name' => 'Complycub_webhooks',
            'signing_secret' => '19b2cc1badb45034129161d86ab8b297',
            'signature_header_name' => 'complycube-signature',
            'signature_validator' => \Spatie\WebhookClient\SignatureValidator\DefaultSignatureValidator::class,
            'webhook_profile' => \Spatie\WebhookClient\WebhookProfile\ProcessEverythingWebhookProfile::class,
            'webhook_response' => \Spatie\WebhookClient\WebhookResponse\DefaultRespondsTo::class,
            'webhook_model' => \Spatie\WebhookClient\Models\WebhookCall::class,
            'store_headers' => [
            ],
            'process_webhook_job' => \App\Jobs\HandleComplycubJob::class,
        ], 
        [
            'name' => 'Stripe_webhooks',
            'signing_secret' => 'whsec_S88O4eCFDRsq8EF4VbPzGJqezbS7FKbD',
            'signature_header_name' => 'Stripe-Signature',
            'signature_validator' => stripeSignatureValidator::class,
            'webhook_profile' => stripeWebhookProfile::class,
            'webhook_response' => \Spatie\WebhookClient\WebhookResponse\DefaultRespondsTo::class,
            'webhook_model' => \Spatie\WebhookClient\Models\WebhookCall::class,
            'store_headers' => [
            ],
            'process_webhook_job' => \App\Jobs\StripeWebhookJob::class,
        ],
    ],
    'delete_after_days' => 3000,
];
