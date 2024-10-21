<?php

namespace App\Jobs;

use App\Models\AdminBilling;
use App\Models\CompanyEntity;
use App\Models\Invoices;
use App\Models\User;
use App\Models\UserSubscription;
use Carbon\Carbon;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;
use \Spatie\WebhookClient\Jobs\ProcessWebhookJob;
use Spatie\WebhookClient\Models\WebhookCall;
use Stripe\Invoice;

class StripeWebhookJob  extends ProcessWebhookJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     */
    public $stripeClient;
    public function __construct(WebhookCall $webhookCall)
    {
        $this->webhookCall = $webhookCall;
        $this->stripeClient = new \Stripe\StripeClient('sk_test_51P7LhqRxBSKsFyqbRwW3yHYcBxVldQori1jhWvT2yS8VtNSloJWAlI4bB2Yyqwh1ywjJeU6oMWUkAxSMKbldViKb00SP28Wht2');
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        $event = json_decode($this->webhookCall, true)['payload'];
        $data = $event['data'];
        logger($data);
        if ($data['object']['status'] == 'paid') {
            $subscription = UserSubscription::where('customer', $data['object']['customer'])->first();
            Invoices::updateOrcreate(
                [
                    'invoice_id' => $data['object']['id']
                ],
                [
                    'invoice_id' => $data['object']['id'],
                    'user_id' => $subscription?->user_id,
                    'customer' => $data['object']['customer'],
                    'customer_email'  => $data['object']['customer_email'],
                    'amount_due' => $data['object']['amount_due'],
                    'amount_paid' => $data['object']['amount_paid'],
                    'amount_remaining' => $data['object']['amount_remaining'],
                    'currency' => $data['object']['currency'],
                    'customer_name' => $data['object']['customer_name'],
                    'hosted_invoice_url' => $data['object']['hosted_invoice_url'],
                    'invoice_pdf' => $data['object']['invoice_pdf'],
                    'description' => $data['object']['billing_reason'],
                    'invoice_date' => date('d-m-Y', $data['object']['created']),
                    'due_date' => date('d-m-Y', $data['object']['due_date']),
                    'total' => $data['object']['amount_due'],
                    'status' => $data['object']['status'],
                ]
            );
            $billing = AdminBilling::latest()->first();
            if ($data['object']['status'] == 'paid') {
                if ($subscription) {
                    $subscription?->update([
                        'expiry_date' => Carbon::now()->addDays(365),
                        'latest_invoice' => Carbon::now(),
                        'current_period_start' => Carbon::now(),
                    ]);
                }
            $billing->update([
                    'total_invoices' => $billing->total_invoices + 1 ,
                    'total_invoice_amount' =>  $billing->total_invoice_amount + $data['object']['amount_due'],
                    'paid_invoice' =>  $billing->paid_invoice + 1 ,
                    'paid_invoice_amount'  =>  $billing->paid_invoice_amount + $data['object']['amount_paid'],
                ]);
            }else{
            
                   $billing->update([
                        'total_invoices' => $billing->total_invoices + 1 ,
                        'total_invoice_amount' =>  $billing->total_invoice_amount + $data['object']['amount_due'],
                        'unpaid_invoice'=>  $billing->unpaid_invoice + 1,
                        'unpaid_invoice_amount' =>  $billing->unpaid_invoice_amount + $data['object']['amount_remaining'],
                        'overdue_invoices' =>  $billing->total_invoice_amount + 1,
                    ]);
            }
        }
    }
}
