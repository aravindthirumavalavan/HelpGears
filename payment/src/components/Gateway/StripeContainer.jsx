import React from 'react'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from './PaymentForm';

const PUBLIC_KEY = "pk_test_51JOcaoSJc7FCuHyuhoDu6b0vLkMVMHJJGUPgPuXgW7Hgi4eKyIfmcTmRltzRS64o4IbWZBAgr07e489zXo1Zt7w700NBz1SUQM"

const stripeTestPromise = loadStripe(PUBLIC_KEY)
export default function StripeContainer() {
     return (
          <Elements stripe={stripeTestPromise}>
               <PaymentForm />
          </Elements>
     )
}
