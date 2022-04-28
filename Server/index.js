const express = require("express")
const app = express()
const stripe = require("stripe")('sk_test_51JOcaoSJc7FCuHyuFhpWyBDs4LhiE8WCtgsJb3BafocOwKK7mWiedzwJEfxjXy86OPy3kSpdvQ8kroNjGwNAUFQ30021Sbiy8x')
const bodyParser = require("body-parser")
const cors = require("cors")
const axios=require('axios')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cors())

app.post("/payment", cors(), async (req, res) => {
     console.log("AT payment... body: ", req.body);
     let { amount, id } = req.body
     try {
          const payment = await stripe.paymentIntents.create({
               amount: amount * 100,
               currency: "INR",
               receipt_email: 'priyajenani76@gmail.com',
               description: "Help Gears",
               payment_method: id,
               confirm: true,
          })
          console.log("Payment", payment.value);
          res.json({
               message: "Payment successful",
               success: true
          })
     } catch (error) {
          console.log("Error", error)
          res.json({
               message: "Payment failed",
               success: false
          })
     }
})

app.listen(process.env.PORT || 3000, () => {
     console.log("Sever is listening on port 3000")
})
