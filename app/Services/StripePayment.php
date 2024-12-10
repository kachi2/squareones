<?php

namespace App\Services;

use App\Models\AdminBilling;
use App\Models\Invoices;
use App\Models\Plan;
use Stripe\Stripe;
use App\Models\UserSubscription;
use Carbon\Carbon;
use Stripe\Invoice;

class StripePayment
{
    protected $stripe;
    protected $stripeClient;
    protected $stripeKey;


    public function __construct()
    {
        $this->stripeKey =  Stripe::setApiKey('sk_test_51P7LhqRxBSKsFyqbRwW3yHYcBxVldQori1jhWvT2yS8VtNSloJWAlI4bB2Yyqwh1ywjJeU6oMWUkAxSMKbldViKb00SP28Wht2');
        $this->stripeClient = new \Stripe\StripeClient('sk_test_51P7LhqRxBSKsFyqbRwW3yHYcBxVldQori1jhWvT2yS8VtNSloJWAlI4bB2Yyqwh1ywjJeU6oMWUkAxSMKbldViKb00SP28Wht2');
    }
    public function createPlan($request)
    {
        $plan = Plan::first();
        if(!isset($plan->stripe_product_id)){
        $stripe =   $this->stripeClient;
        $stripes = $stripe->products->create([
            'name' => $request->name,
            'default_price_data' => [
                'unit_amount' => $request->price,
                'currency' => $request->currency,
                'recurring' => ['interval' => $request->interval],
            ],
            'expand' => ['default_price'],
        ]);
        if ($stripes) {
           $str = $this->PlanTable($stripes);
        }
        return $str;
    }
    return [
        'error' => 'You already have an existing plan, you can only  update plan  at this time'
    ];
    }




    public function PlanTable($stripe)
    {
       $plan = Plan::create(
            [
                'plan'  => $stripe->name,
                'amount' => $stripe->default_price->unit_amount,
                'duration' => $stripe->default_price->unit_amount,
                'currency' => $stripe->default_price->currency,
                'stripe_product_id' => $stripe->default_price->product,
                'default_price_id' => $stripe->default_price->id,
                'recurring' => $stripe->default_price->recurring->interval,
            ]
        );
        return $plan;
    }

    public function UpdatePlan($request)
    {
        $stripe =  $this->stripeClient;
        $stripes = $stripe->products->update($request->stripe_product_id, ['name' => $request->name]);
        if($stripes){
        $plan = Plan::where('stripe_product_id', $request->stripe_product_id)->first();
        $plan->update(['plan' => $request->name]);
        return $plan;
        }
        return [
            'error'=>'request failed',
        ];

    }


    public function getCurrentPlan()
    {
        $plan = Plan::latest()->first();
        return $plan;
    }

    public function GetStripeInvoices()
    {
        $data['subscription_summary'] = AdminBilling::latest()->first();
        $data['invoice_paid_this_monthly'] = Invoices::where('status', 'paid')->whereBetween('created_at', [Carbon::now()->subDays(30)->startOfDay(),  Carbon::now()->addDays(1)->endOfDay()])->count();
        $data['invoice_paid_monthly_amount'] = Invoices::where('status', 'paid')->whereBetween('created_at', [Carbon::now()->subDays(30)->startOfDay(),  Carbon::now()->addDays(1)->endOfDay()])->sum('amount_due');
        $data['invoice_unpaid_monthly'] = Invoices::where('status', 'open')->whereBetween('created_at', [Carbon::now()->subDays(30)->startOfDay(),  Carbon::now()->addDays(1)->endOfDay()])->count();
        $data['invoice_unpaid_monthly_amount'] = Invoices::where('status', 'open')->whereBetween('created_at', [Carbon::now()->subDays(30)->startOfDay(),  Carbon::now()->addDays(1)->endOfDay()])->sum('amount_due');
        $data['invoices'] = Invoices::with('subscription', 'company')->paginate(10);
        return $data;
    }

}
