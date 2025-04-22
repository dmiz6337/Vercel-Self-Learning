"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "components/Header";
import Footer from "components/Footer";

interface Payment {
  id: string;
  description: string;
  amount: number;
  createdAt: string;
}

export default function PaymentPage() {
  const [payments, setPayments] = useState<Payment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  // Fetch payments on mount and when page is restored from bfcache (browser back/forward)
  useEffect(() => {
    const fetchPayments = () => {
      setLoading(true);
      fetch("/api/payments")
        .then((res) => res.json())
        .then((data) => {
          setPayments(data);
          setLoading(false);
        })
        .catch(() => {
          setError("Failed to fetch payments.");
          setLoading(false);
        });
    };

    fetchPayments();

    // Listen for pageshow event to handle bfcache restores
    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        fetchPayments();
      }
    };
    window.addEventListener("pageshow", handlePageShow);

    // Listen for visibilitychange (tab switch, client-side navigation)
    const handleVisibility = () => {
      if (document.visibilityState === "visible") {
        fetchPayments();
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      window.removeEventListener("pageshow", handlePageShow);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);



  const handlePayNow = async (id: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/payments/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        // Redirect to the payment success page
        window.location.href = "/payment-success";
      } else {
        setError("Failed to process payment.");
      }
    } catch (err) {
      setError("An error occurred while processing the payment.");
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = () => {
    setLoading(true);
    fetch("/api/payments")
      .then((res) => res.json())
      .then((data) => {
        setPayments(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch payments.");
        setLoading(false);
      });
  };



  return (
    <div className="flex flex-col min-h-screen dark:bg-black">
      <Header />
      <main>
        <div className="flex items-center bg-cover bg-center bg-no-repeat justify-center min-h-screen dark:bg-black"
          style={{ backgroundImage: 'url("/statics/building.png")' }}>
          <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl text-center dark:bg-gray-900">
            <h1 className="text-2xl text-black dark:text-white font-bold mb-4">Outstanding Payments</h1>


            {error && <p className="text-red-500 mb-2">{error}</p>}
            {loading ? (
              <p className="text-gray-600 dark:text-gray-300">Loading...</p>
            ) : payments.length === 0 ? (
              <p className="text-gray-600 dark:text-gray-300">No outstanding payments.</p>
            ) : (
              <table className="min-w-full border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200">Description</th>
                    <th className="py-2 px-4 border-b border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200">Amount</th>
                    <th className="py-2 px-4 border-b border-gray-200 dark:border-gray-700"></th>
                  </tr>
                </thead>
                <tbody>
                  {payments.map((payment) => (
                    <tr key={payment.id} className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                      <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100">{payment.description}</td>
                      <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100">${payment.amount.toFixed(2)}</td>
                      <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-700">
                        <button
                          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
                          onClick={() => handlePayNow(payment.id)}
                          disabled={loading}
                        >
                          Pay Now
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}