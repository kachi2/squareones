<?php

namespace App\Jobs;

use App\Models\CompanyEntity;
use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;
use \Spatie\WebhookClient\Jobs\ProcessWebhookJob;
use Spatie\WebhookClient\Models\WebhookCall;

class HandleComplycubJob  extends ProcessWebhookJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /** 
     * Create a new job instance.
     */
    public function __construct(WebhookCall $webhookCall)
    {
        $this->webhookCall = $webhookCall;
    }

    /**
     * Execute the job.
     */
    public function handle()
    {
        $payload = $this->webhookCall->payload;
        // $event = $payload['event'] ?? null;
        //  Log::info('Received ComplyCube webhdsdsdook: ', $payload);
        switch ($payload['type']) {
            case 'check.completed':
                $this->updateStatus($payload['payload']['clientId'], 'Completed');
                break;

            case 'check.completed.clear':
                $this->updateStatus($payload['payload']['clientId'], 'Completed');
                break;
            case 'check.updated':
                break;
            case 'check.completed.rejected':
                $this->updateStatus($payload['payload']['clientId'], 'Rejected');
                break;
            case 'check.failed':
                $this->updateStatus($payload['payload']['clientId'], 'Rejected');
                break;
            case 'check.pending':
                    $this->updateStatus($payload['payload']['clientId'], 'Processing');
                    break;
            case 'document.created':
                $this->updateStatus($payload['payload']['clientId'], 'Processing');
                break;
            // case 'client.created':
            //     $this->updateStatus($payload['payload']['clientId'], 'Processing');
            //     break;
            // case 'client.updated':
            //     $this->updateStatus($payload['payload']['clientId'], 'Processing');
            //     break;
                
            default:
            Log::info('Unknown Payload: ', $payload);
                break;
        }
    }


    public function updateStatus($clientId, $status)
    {
        $Entity = CompanyEntity::where('client_id', $clientId)->first();
        if($Entity)
        {
            $Entity->update(['kyc_status' => $status]);
            $Entity?->company->update(['is_complete' => 1]);
            // ActivityLogs('Initiated KYC Verifications, awaiting confirmation',  'KYC Verification');
        }else{
            $Entity = User::where('client_id', $clientId)->first();
            $Entity?->update(['kyc_status' => $status]);
            $Entity?->company[0]->update(['is_complete' => 1]);
            // ActivityLogs('Initiated KYC Verifications, awaiting conformation',  'KYC Verification');
        }
        return $Entity;
         Log::info('upated from method: ', ['status' => $status]);
    }


    public function UpdateActivity()
    {

    }
}
