<?php

namespace App\Services;

use App\Models\AdminBilling;
use App\Models\Invoices;
use App\Models\Plan;
use Stripe\Stripe;
use App\Models\UserSubscription;
use Carbon\Carbon;

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

    public function GetStripeInvoices($amount = 0, $count = 0, $total_open=0, $open_amount = 0, $paid_amount = 0,$overDue_amount = 0, $active = [], $inactive = [], $overdue_invoice=0)
    {
        $invoices = \Stripe\Invoice::all([
            'created' => [
                'gte' => strtotime('2024-10-01')
            ]
        ]);
       if(count($invoices) > 0) {
        foreach ($invoices as $invoice) {
            $amount += $invoice->amount_due / 100;
            if($invoice->status == 'paid')
            {
                $total_paid = count($invoice);
                $paid_amount += $invoice->amount_due/100;
            }
            if($invoice->status == 'open')
            {
                $total_open = count($invoice);
                $open_amount += $invoice->amount_due/100;
            }
            if (isset($invoice->due_date) && $invoice->due_date < time()) {
                $overdue_invoice = count($invoice);
                $overDue_amount += $invoice->amount_due / 100;
            }
            $count++;
        }
   
        $subscribers = \Stripe\Subscription::all([
            'created' => [
                'gte' => strtotime('2024-10-01')
            ]
        ]);
        if (!empty($subscribers)) {
            foreach ($subscribers as $subs) {
                if ($subs->status == "active") {
                    $active[] = $subs;
                } else {
                    $inactive[] = $subs;
                }
            }
        }
        $this->TapInvoice($invoices);
        $this->processBilling($count, $amount, $total_paid, $paid_amount, $total_open, $open_amount, $overdue_invoice, $overDue_amount,$active, $inactive);
        }
     $data = $this->generateData();
      return $data;
    }




    protected function TapInvoice($invoices)
    {
        foreach ($invoices as $invoice) {
            $bill = UserSubscription::where('customer', $invoice->customer)->first();
            Invoices::updateOrcreate([
                'invoice_id'=> $invoice->id,
            ],
          [
            'user_id' => $bill?->user_id,
            'customer' => $invoice->customer,
            'customer_email'=> $invoice->customer_email,
            'invoice_id'=> $invoice->id,
            'amount_due'=> $invoice->amount_due/100,
            'amount_paid'=> $invoice->amount_paid/100 ,
            'amount_remaining'=> $invoice->amount_remaining/100,
            'currency'=> $invoice->currency,
            'customer_name'=> $invoice->customer_name,
            'hosted_invoice_url'=> $invoice->hosted_invoice_url,
            'invoice_pdf'=> $invoice->invoice_pdf,
            'description'=> $invoice->description,
            'invoice_date'=> date('d-m-Y', $invoice->created),
            'due_date'=> date('d-m-Y',$invoice->due_date),
            'total' => $invoice->total/100,
            'status' => $invoice->status
        ]);
    }
    }



    protected function processBilling($count, $amount, $total_paid, $paid_amount, $total_open, $open_amount, $overdue_invoice, $overDue_amount,$active, $inactive)
    {
        AdminBilling::updateOrcreate(
            [
                'id' => 1
            ],
            [    
            'total_invoices' => $count??0,
             'total_invoice_amount' => $amount??0,
             'paid_invoice' => $total_paid??0,
             'paid_invoice_amount' => $paid_amount??0,
             'unpaid_invoice' => $total_open??0,
             'unpaid_invoice_amount' => $open_amount??0,
             'overdue_invoices' =>$overdue_invoice??0,
             'overdue_invoices_amount' => $overDue_amount??0,
             'active_subscriptions' => count($active),
             'cancelled_subscriptions' => count($inactive)
        ]);
    }

    
    protected function generateData()
    {
        $data['subscription_summary'] = AdminBilling::latest()->first();
        $data['invoice_paid_this_monthly'] = Invoices::where('status', 'paid')->whereBetween('created_at', [Carbon::now()->subDays(30)->startOfDay(),  Carbon::now()->addDays(1)->endOfDay()])->count();
        $data['invoice_paid_monthly_amount'] = Invoices::where('status', 'paid')->whereBetween('created_at', [Carbon::now()->subDays(30)->startOfDay(),  Carbon::now()->addDays(1)->endOfDay()])->sum('amount_due');
        $data['invoice_unpaid_monthly'] = Invoices::where('status', 'open')->whereBetween('created_at', [Carbon::now()->subDays(30)->startOfDay(),  Carbon::now()->addDays(1)->endOfDay()])->count();
        $data['invoice_unpaid_monthly_amount'] = Invoices::where('status', 'open')->whereBetween('created_at', [Carbon::now()->subDays(30)->startOfDay(),  Carbon::now()->addDays(1)->endOfDay()])->sum('amount_due');
        $data['invoices'] = Invoices::with('subscription')->paginate(10);
         return $data;
    }


}
