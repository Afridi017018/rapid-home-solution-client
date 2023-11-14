// import React, { useState } from 'react';
// import axios from 'axios';
// import {loadStripe} from '@stripe/stripe-js';
// import { useStripe } from '@stripe/react-stripe-js';
// // import {confirmPayment } from '@stripe/react-stripe-js'

// const Test = () => {

//     const [amount, setAmount] = useState(0);
//   const [paymentSuccess, setPaymentSuccess] = useState(false);
// const stripe = useStripe();
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // Create a payment intent on your server
//       const response = await axios.post('http://localhost:4000/api/services/create-payment-intent', { amount, currency:"bdt" });

//       // const stripe = Stripe('pk_test_51NxsVnLDN7M5wmwbD25KOthKGcCIboO8nzde202QJWvKeb55zHfb70SehpOVnB3mL9PtR3VEvalwWMtPxOMCpCW000Iyq1CBCV'); // Replace with your Stripe publishable key
//       // const elements = stripe.elements();
//       // const cardElement = elements.create('card');

//       // Confirm the payment with the client secret received from the server
//       const result = await stripe.confirmPayment(response?.data?.paymentIntent, {
//         paymentMethodType: 'Card'
//       });

//       if (result.paymentIntent.status === 'succeeded') {
//         // Payment succeeded; save payment information in MongoDB
//         await axios.post('http://localhost:4000/api/services/save-payment', { paymentIntentId: result.paymentIntent.id });
//         setPaymentSuccess(true);
//       } else {
//         // Payment failed or was not completed
//         setPaymentSuccess(false);
//       }
//     } catch (error) {
//       console.error(error);
//       setPaymentSuccess(false);
//     }
//   };

//   return (
//     <div>
//       <h1>Payment Form</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Amount:
//           <input
//             type="number"
//             value={amount}
//             onChange={(e) => setAmount(e.target.value)}
//           />
//         </label>
//         <button type="submit">Pay</button>
//       </form>
//       {paymentSuccess && <p>Payment successful!</p>}
//     </div>
//   );
// };

// export default Test;


















// import {
//   CardNumberElement,
//   CardExpiryElement,
//   CardCvcElement,
//   useStripe,
//   useElements,
//   // CardElement

// } from "@stripe/react-stripe-js";
// import axios from "axios";
// import "./Test.css"
// const Test = () => {

//   const stripe = useStripe();
//   const elements = useElements();
//   const handlePayment = async () => {
//     event.preventDefault();
//     const response = await axios.post(
//       'http://localhost:4000/api/services/create-payment-intent', { amount: 606 * 100, currency: "bdt" }
//     );
//     console.log(response.data)
//     if (response.status === 200) {
//       const confirmPayment = await stripe.confirmCardPayment(
//         response.data,
//         {
//           payment_method: {
//             card: elements.getElement(CardNumberElement),
//           },
//         }
//       );
//       if (confirmPayment.paymentIntent.status === "succeeded") {
//         console.log('payment confirmed');
//         await axios.post('http://localhost:4000/api/services/save-payment', { paymentIntentId: confirmPayment.paymentIntent.id });
//       }
//     }
//   }
//   return (
//     <form onSubmit={handlePayment}>
//       <CardNumberElement/>
//       <CardExpiryElement />
//       <CardCvcElement />

   
//       <button>Confirm Payment</button>
//     </form>
//   )
// }


// export default Test;



// import React, { useState } from 'react';

// function Test() {
//   const [rating, setRating] = useState(0);

//   const handleRatingChange = (newRating) => {
//     setRating(newRating);
//     console.log(newRating)
//   };

//   return (
//     <div>
//       <p>Selected Rating: {rating}</p>
//       <div>
//         {[1, 2, 3, 4, 5].map((star) => (
//           <button
//             key={star}
//             onClick={() => handleRatingChange(star)}
//             className = {`${ star <= rating ? 'text-orange-500' : 'text-gray-500' }`}
//           >
//             ★
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Test;



import React from 'react';

const Test = () => {
  return (
    <div className='h-[570px] flex justify-center items-center'>
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  );
};

export default Test;