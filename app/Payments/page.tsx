"use client";
import { useState } from "react";
import Header from "components/Header";
import Footer from "components/Footer";

export default function PaymentPage() {
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handlePayment = async () => {
    setLoading(true);
    setError(null); // Reset previous errors

    try {
      // Send the POST request to the API route with the amount entered by the user
      const response = await fetch("/api/pay", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount }), // Send the amount to the API route
      });

      const data = await response.json();

      if (response.ok && data.url) {
        // Redirect the user to the URL provided in the API response (Stripe homepage)
        window.location.href = data.url;
      } else {
        // Handle error if the response is not okay
        setError(data.error || "Payment initiation failed.");
      }
    } catch (error) {
      setError("An error occurred while processing the payment.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
        <Header />
        <main>
            <h1>Payment Page</h1>
            <div>
                <label htmlFor="amount">Enter Amount:</label>
                <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                placeholder="Enter amount to pay"
                />
            </div>
            <button onClick={handlePayment} disabled={loading}>
                {loading ? "Processing..." : "Pay Now"}
            </button>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </main>
        <div className="h-20" ></div>
        <Footer />
    </div>
  );
}