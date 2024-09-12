<!DOCTYPE html>
<head>
    <script src="https://js.stripe.com/v3/"></script>
</head>
<html>
    <body style="margin:0px auto">

        <div style="width: 300px; border:2px solid #000; padding:20px; margin:200px auto" >
        <form id="payment-form">
            <div id="card-element">
                <!-- Stripe Elements will create input fields here -->
            </div>
            <div id="card-errors" role="alert"></div>
            <div style="padding-top:20px "> 

                <button id="submit" >Update Payment Method</button>
            </div>
        </form>
    </div>

        <script>
            var stripe = Stripe('pk_test_51P7LhqRxBSKsFyqbPdmjZpG4tFsnyLZEV6Tn38aic7H4oeWOSub5gTRnjF4vgdRbBJutMM0G3d2x3c9VFz2g1dkX00bPRK5pYT'); // Replace with your Stripe publishable key
        var elements = stripe.elements();










        var style = {
            base: {
                color: '#32325d',
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSmoothing: 'antialiased',
                fontSize: '16px',
                '::placeholder': {
                    color: '#aab7c4'
                }
            },
            invalid: {
                color: '#fa755a',
                iconColor: '#fa755a'
            }
        };

        var card = elements.create('card', {style: style});
        card.mount('#card-element');
        var form = document.getElementById('payment-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    stripe.confirmCardPayment("pi_3Py28WRxBSKsFyqb0IXhSvOX_secret_ILAe3vo8VRwdyhYJvvmwLbEtp", {
        payment_method: {
            card: card,
            billing_details: {
                name: 'Customer Name',
            },
        }
    }).then(function(result) {
        if (result.error) {
            // Show error to your customer
            var errorElement = document.getElementById('card-errors');
            errorElement.textContent = result.error.message;
        } else {
            // The payment has been processed!
            if (result.paymentIntent.status === 'succeeded') {
                // Update your UI to reflect the payment succeeded
               console.log(result)
            }
        }
    });
});
        </script>


    </body>
</html>