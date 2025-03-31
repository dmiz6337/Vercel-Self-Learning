"use client";
import { useState } from "react";
import Header from "components/Header";
import Footer from "components/Footer";

export default function PaymentPage() {
    const [amount, setAmount] = useState("");
    const [loading, setLoading] = useState(false);

    const handlePayment = async () => {
        setLoading(true);
        const response = await fetch("/api/pay", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ amount }),
        });

        if (response.ok) {
            const { url } = await response.json();
            window.location.href = url; // Redirect to Stripe Checkout
        } else {
            alert("Payment initiation failed. Please try again.");
            setLoading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-lg text-center">
            <Header />
            <h1 className="text-2xl font-bold">💳 Make a Payment</h1>
            <p className="text-gray-600">Enter an amount to pay and proceed.</p>

            <input
                type="number"
                placeholder="Enter amount ($)"
                className="w-full mt-4 p-2 border rounded-md"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />

            <button
                onClick={handlePayment}
                disabled={loading || !amount}
                className="w-full mt-4 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-400"
            >
                {loading ? "Processing..." : "Pay Now"}
            </button>
            <Footer />
        </div>
    );
}