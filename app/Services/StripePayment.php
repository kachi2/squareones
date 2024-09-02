<?php

namespace App\Services;

use App\Models\AdminBilling;
use App\Models\Billing;
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
            $this->PlanTable($stripes);
        }

        return $stripes;
    }




    public function PlanTable($stripe)
    {
        Plan::UpdateOrcreate(
            [
                'plan' => $stripe->name
            ],
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
    }

    public function UpdatePlan($request)
    {
        $stripe =  $this->stripeClient;
        $stripes = $stripe->products->update($request->stripe_product_id, ['name' => $request->name]);
        return $stripes;
    }


    public function getCurrentPlan()
    {
        $plan = Plan::latest()->first();
        return $plan;
    }

    public function GetStripeInvoicesTotal()
    {
        $invoices = \Stripe\Invoice::all([]);
        $amount = 0;
        $count = 0;
        foreach ($invoices as $invoice) {
            $amount += $invoice->amount_due / 100;
            $count++;
        }
        $billing = AdminBilling::latest()->first();
        if ($billing) {
            $billing->update(['total_invoices' => $count, 'total_invoice_amount' => $amount]);
        } else {
            AdminBilling::create(['total_invoices' => $count, 'total_invoice_amount' => $amount]);
        }
        return $invoices;
    }

    public function GetPaidInvoices()
    {
        $invoices = \Stripe\Invoice::all([
            'status' => 'paid'
        ]);
        $amount = 0;
        $count = 0;
        foreach ($invoices as $invoice) {
            $amount += $invoice->amount_due / 100;
            $count++;
        }
        $billing = AdminBilling::latest()->first();
        if ($billing) {
            $billing->update(['paid_invoice' => $count, 'paid_invoice_amount' => $amount]);
        }
        return $billing;
    }

    public function GetUnPaidInvoices()
    {
        $invoices = \Stripe\Invoice::all([
            'status' => 'open'
        ]);
        $amount = 0;
        $count = 0;
        $overdue_invoices = [];
        $overDue_amount = 0;

        foreach ($invoices as $invoice) {
            $amount += $invoice->amount_due / 100;
            $count++;
            if (isset($invoice->due_date) && $invoice->due_date < time()) {
                $overdue_invoices[] = $invoice;
            }
        }
        $billing = AdminBilling::latest()->first();
        if ($billing) {
            foreach ($overdue_invoices as $overdus) {
                $overDue_amount += $overdus->amount_due / 100;
            }
            $billing->update([
                'unpaid_invoice' => $count,
                'unpaid_invoice_amount' => $amount,
                'overdue_invoices' => count($overdue_invoices),
                'overdue_invoices_amount' => $overDue_amount
            ]);
        }

        return $billing;
    }

    public function getActiveSubsribers()
    {
        $active = [];
        $inactive = [];
        $subscribers = \Stripe\Subscription::all([]);
        if (!empty($subscribers)) {
            foreach ($subscribers as $subs) {
                if ($subs->status == "active") {
                    $active[] = $subs;
                } else {
                    $inactive[] = $subs;
                }
            }
        }
        $billing = AdminBilling::latest()->first();

        $billing->update([
            'active_subscriptions' => count($active),
            'cancelled_subscriptions' => count($inactive)
        ]);

        return $billing;
    }


    public function UpdateInvoiceTable()
    {
        $invoices = \Stripe\Invoice::all([
            'status' => 'paid'
        ]);
        foreach ($invoices as $invoice) {
            $bill = UserSubscription::where('customer', $invoice->customer)->first();
            Invoices::create([
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
        return Invoices::latest()->get();
    }
}
