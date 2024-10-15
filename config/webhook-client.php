<?php

use App\Http\Controllers\stripeSignatureValidator;
use App\Http\Controllers\stripeWebhookProfile;

return [
    'configs' => [
        [
            'name' => 'Complycub_webhooks',
            'signing_secret' => 'dadc778c0f766b4ade9b285f0839ec8d',
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
            'signing_secret' => 'dadc778c0f766b4ade9b285f0839ec8d',
            'signature_header_name' => 'complycube-signature',
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
