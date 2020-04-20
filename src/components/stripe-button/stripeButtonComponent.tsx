import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { loadStripe } from '@stripe/stripe-js';


// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
// const stripePromise = loadStripe('');


class StripeCheckoutButton extends React.Component<any>{




    onToken = (token: any) => {
        console.log("token: ", token);
        alert("payment successful");
    }

    // handleClick = async (event: any) => {
    //     // Call your backend to create the Checkout session.
    //     // const { sessionId } = await fetchCheckoutSession();
    //     // When the customer clicks on the button, redirect them to Checkout.
    //     const stripe = await stripePromise;
    //     const { error } = await stripe.redirectToCheckout({
    //         sessionId,
    //     });
    //     // If `redirectToCheckout` fails due to a browser or network
    //     // error, display the localized error message to your customer
    //     // using `error.message`.
    // };

    render() {
        console.log("Stripe Checkout: ", this.props);
        const { price } = this.props;
        const priceForStripe = price * 100;
        const publicKey = "pk_test_j9OqQafC8dl9fW0iIpTs0fRk00hdgXWCiJ";
        return (
            <StripeCheckout
                label="pay now"
                name="Lion Clothing Ltd."
                billingAddress
                shippingAddress
                image='https://svgshare.com/i/CUz.svg'
                description={`your price value {price} Rupees`}
                amount={priceForStripe}
                panelLabel="Pay Now"
                token={this.onToken}
                stripeKey={publicKey}
            />

        );
    }
}

export default StripeCheckoutButton;