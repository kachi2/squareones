<?php

namespace App\Services;

use App\Models\Plan;
use App\Models\UserSubscription;

class StripePayment
{

    public function createPlan($request)
    {
        $stripe = new \Stripe\StripeClient('sk_test_51P7LhqRxBSKsFyqbRwW3yHYcBxVldQori1jhWvT2yS8VtNSloJWAlI4bB2Yyqwh1ywjJeU6oMWUkAxSMKbldViKb00SP28Wht2');
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
        $stripe = new \Stripe\StripeClient('sk_test_51P7LhqRxBSKsFyqbRwW3yHYcBxVldQori1jhWvT2yS8VtNSloJWAlI4bB2Yyqwh1ywjJeU6oMWUkAxSMKbldViKb00SP28Wht2');
        $stripes = $stripe->products->update($request->stripe_product_id, ['name' => $request->name]);
        return $stripes;
    }


    public function getCurrentPlan()
    {
        $plan = Plan::latest()->first();
        return $plan;
    }

}
