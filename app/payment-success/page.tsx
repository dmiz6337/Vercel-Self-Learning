import Link from 'next/link';
import Footer from "components/Footer";

export default function PaymentSuccess() {
    return (
        <div className="flex flex-col min-h-screen bg-white dark:bg-black">
            <main>
                <div style={{ textAlign: "center", marginTop: "50px" }}>
                    <h1>🎉 Payment Successful!</h1>
                    <p>Thank you for your payment. Your transaction has been completed.</p>
                    <div className="flex justify-center space-x-6">
                        <Link
                        href="/"
                        className="bg-black text-white dark:bg-white dark:text-black px-5 py-2 rounded-md text-base font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition duration-300"
                        >
                        Return Home
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}