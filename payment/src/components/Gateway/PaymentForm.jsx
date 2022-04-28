import React, { useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import axios from "axios";
import payment from './../../assets/success.gif';
import './PaymentForm.css';
const CARD_OPTIONS = {
     iconStyle: "solid",
     style: {
          base: {
               iconColor: "#c4f0ff",
               color: "#fff",
               fontWeight: 500,
               fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
               fontSize: "16px",
               fontSmoothing: "antialiased",
               ":-webkit-autofill": { color: "#fce883" },
               "::placeholder": { color: "#87bbfd" }
          },
          invalid: {
               iconColor: "#ffc7ee",
               color: "#ffc7ee"
          }
     }
}

export default function PaymentForm() {
     const [success, setSuccess] = useState(false)
     const stripe = useStripe()
     const elements = useElements()
     const handleSubmit = async (e) => {
          e.preventDefault()
          const { error, paymentMethod } = await stripe.createPaymentMethod({
               type: "card",
               card: elements.getElement(CardElement),
          })


          if (!error) {
               try {
                    const { id } = paymentMethod
                    console.log("Id: ", id);
                    var amount = document.getElementById('amount');
                    var causes = document.getElementById('causes');
                    var emailId = document.getElementById('emailId')
                    const response = await axios.post("http://localhost:3000/payment", {
                         amount: amount.value,
                         causes: causes.value,
                         emailId: emailId.value,
                         id
                    })
                    //  console.log(amount.value)
                    if (response.data.success) {
                         console.log("Successful payment")
                         setSuccess(true)
                    }

               } catch (error) {
                    console.log("Error", error)
               }
          } else {
               console.log(">>> ", error.message)
          }
     }

     return (
          <>
               {!success ?
                    <form onSubmit={handleSubmit}>
                         <div className="vector">
                              <fieldset className="details-group">
                                   <div className="details">
                                        <h1 className="start-donate">Start Donating </h1>
                                        <label className="container">
                                             <span>Name   </span>
                                             <input type="text" id="name" name="name"></input>
                                        </label>
                                        <label className="container">
                                             <span>Phone  </span>
                                             <input type="number" id="phone" name="phone"></input>
                                        </label>
                                        <label className="container">
                                             <span>Amount  </span>
                                             <input type="number" id="amount" name="amount"></input>
                                        </label>
                                        <label className="container">
                                             <span>Causes  </span>
                                             <select id="causes" class="field">
                                                  <option value="Food">Food</option>
                                                  <option value="Clothing">Clothing</option>
                                                  <option value="Education">Education</option>
                                             </select>
                                        </label>
                                        <label className="container">
                                             <span>EmailId  </span>
                                             <input type="text" id="emailId" name="EmailId"></input>
                                        </label>
                                   </div></fieldset>
                              <fieldset className="FormGroup">

                                   <div className="FormRow">
                                        <CardElement options={CARD_OPTIONS} />
                                   </div>
                              </fieldset>

                              <div className="pay-btn">
                                   <button>Pay</button>
                              </div>
                         </div>
                    </form>
                    :
                    <div className="splash-image">
                         <img src={payment} className="success" alt="success" />
                         <h2 className="success-text">Hurray! Payment Successful </h2>
                    </div>
               }

          </>
     )
}
