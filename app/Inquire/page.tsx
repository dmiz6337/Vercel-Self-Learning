'use client'; // Needed for form interactivity in App Router
import Header from "components/Header";
import Footer from "components/Footer";
import React from "react";
import Link from 'next/link';
import { useState } from 'react';

export default function InquiriesPage() {
  const [message, setMessage] = useState('');
  const [responseMsg, setResponseMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const [inquiries, setInquiries] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponseMsg('');

    try {
      const res = await fetch('/api/postInquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();
      if (res.ok) {
        setResponseMsg(data.message);
        setMessage('');
      } else {
        setResponseMsg(`Error: ${data.message}`);
      }
    } catch (err) {
      setResponseMsg('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const fetchInquiries = async () => {
    const res = await fetch('/api/postInquiry', { method: 'GET' });
    const data = await res.json();
    setInquiries(data.inquiries);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
        <Header />
        <main>
            <div className="flex items-center bg-cover bg-center bg-no-repeat justify-center min-h-screen dark:bg-black"
            style={{ backgroundImage: 'url("/statics/building.png")' }}>
            <div className="max-w-md mx-auto mt-10 p-4 bg-black text-white dark:bg-white dark:text-black px-5 py-2 rounded-md text-base font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition duration-300">
                <h1 className="text-2xl font-bold mb-4">Post an Inquiry</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your inquiry..."
                    required
                    className="w-full p-2 border rounded h-24 text-white placeholder-gray-400"
                    />
                    <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
                    >
                    {loading ? 'Submitting...' : 'Submit Inquiry'}
                    </button>
                </form>
                {responseMsg && (
                    <p className="mt-4 text-center text-green-600">{responseMsg}</p>
                )}

                <button
                    onClick={fetchInquiries}
                    className="mt-6 w-full bg-gray-500 text-white p-2 rounded hover:bg-gray-600 transition"
                >
                    Load Inquiries
                </button>

                <div className="mt-4 bg-black text-white p-4 rounded shadow">
                    {inquiries.length === 0 ? (
                        <p className="text-gray-400">No inquiries loaded yet.</p>
                    ) : (
                        <ul className="list-disc list-inside space-y-2">
                            {inquiries.map((inq, idx) => (
                                <li key={idx}>{inq}</li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
            </div>
        </main>
        <div className="h-20" ></div>
        <Footer />
    </div>
    
  );
}
