import { useState } from "react";
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';

const Donate = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        amount: "",
        message: ""
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setData(prevData => ({
            ...prevData,
            [id]: value
        }));
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        const stripe = await loadStripe(import.meta.env.VITE_PRIMARY_KEY);
        axios.post("http://localhost:8000/api/users/create-checkout-session", data)
        .then(res => {
            if (res.status === 200) {
                console.log(res.data); // Ensure you're logging the actual response data
                
                const sessionId = res.data.id; // Assuming your response data has an 'id' field
                console.log(sessionId);
                const result = stripe.redirectToCheckout({
                    sessionId: sessionId
                });
                
                if (result.error) {
                    console.error(result.error.message);
                }
            }
        })
        .catch(err => {
            console.error("Error creating checkout session:", err);
        });
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="w-full max-w-md p-8 bg-white shadow-md rounded-md">
                <h2 className="text-2xl font-bold text-center mb-6">Donation Form</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Donor Name</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Donor name"
                            value={data.name}
                            onChange={handleChange}
                            className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Email"
                            value={data.email}
                            onChange={handleChange}
                            className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">Amount</label>
                        <input
                            type="number"
                            id="amount"
                            placeholder="Amount"
                            value={data.amount}
                            onChange={handleChange}
                            className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            placeholder="Short message"
                            value={data.message}
                            onChange={handleChange}
                            className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 transition-colors duration-200 ease-in-out"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Donate
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Donate;
