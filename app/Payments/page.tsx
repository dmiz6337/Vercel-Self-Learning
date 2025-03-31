"use client";
import { useState } from "react";
import Header from "components/Header";
import Footer from "components/Footer";

export default function Payments() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handlePayment = async () => {
    setLoading(true);

    try {
      // Prepare data to send in the POST request
      const paymentData = { amount: 1000 }; // Example amount, in cents (e.g., $10.00)

      // Send the POST request to your API route
      const response = await fetch("/api/pay", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(paymentData),
      });

      const result = await response.json();

      if (response.ok && result.url) {
        // Redirect to the Stripe homepage after payment initiation
        window.location.href = result.url;  // Redirect to the Stripe homepage or a custom URL
      } else {
        // Handle error if the response is not okay
        setError(result.error || "Payment initiation failed.");
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