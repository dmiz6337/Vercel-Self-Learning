"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "components/Header";
import Footer from "components/Footer";

export default function PaymentPage() {
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

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

      if (response.ok) {
        router.push("/payment-success");
      } else {
        // Handle error if the response is not okay
        const data = await response.json();
        setError(data.error || "Payment initiation failed.");
      }
    } catch (error) {
      setError("An error occurred while processing the payment.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-black dark:bg-black">
        <Header />
        <main>
            <div className="flex items-center justify-center min-h-screen bg-black">
                <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md text-center">
                    <h1 className="text-2xl text-black font-bold mb-4">Payment Page</h1>
                    <p className="text-gray-600 mb-6">Enter the amount you want to pay</p>

                    <div className="mb-4">
                        <input
                            type="number"
                            id="amount"
                            value={amount}
                            onChange={(e) => setAmount(Number(e.target.value))}
                            placeholder="Enter amount"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    <button
                    onClick={handlePayment}
                    disabled={loading}
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition disabled:bg-gray-400"
                    >
                    {loading ? "Processing..." : "Pay Now"}
                    </button>

                    {error && <p className="text-red-500 mt-4">{error}</p>}
                </div>
            </div>
        </main>
        <div className="h-20" ></div>
        <Footer />
    </div>
  );
}