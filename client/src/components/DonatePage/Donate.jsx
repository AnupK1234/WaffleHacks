import { useState } from "react"
import { loadStripe } from '@stripe/stripe-js';

const Donate = () => {
    const [amount,setAmount] = useState();
    const handleChange=(e)=>{
        setAmount(e.target.value);
    }
    const makePayment = async () => {
        const stripe = await loadStripe(import.meta.env.VITE_PRIMARY_KEY);
        const headers = {
          "Content-Type": "application/json"
        };
        const response = await fetch("http://localhost:8000/api/users/create-checkout-session", {
          method: "POST",
          headers: headers,
          body: JSON.stringify(amount)
        });
        const session = await response.json();
        const result = stripe.redirectToCheckout({
          sessionId: session.id
        });
        if (result.error) {
          console.log("result.error");
        }
    };
  return (
    <div>
        <input type="text" value={amount} onChange={handleChange} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        <button onClick={makePayment} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Donate</button>
        {/* Email, amount, Donor name, Short message */}
    </div>
  )
}

export default Donate
