'use client';
import Header from "components/Header";
import Footer from "components/Footer";
import React from "react";
import Link from 'next/link';
import { useState } from 'react';
import { useSession } from 'next-auth/react';

export default function InquiriesPage() {

  // ...existing hooks and types...

  const handleResolve = async (id: string) => {
    try {
      const res = await fetch(`/api/postInquiry?id=${id}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        setInquiries((prev) => prev.filter((inq) => inq.id !== id));
      } else {
        const data = await res.json();
        alert(data.message || 'Failed to resolve inquiry.');
      }
    } catch (err) {
      alert('Failed to resolve inquiry.');
    }
  };

  const { data: session } = useSession();
  const [message, setMessage] = useState('');
  const [responseMsg, setResponseMsg] = useState('');
  const [loading, setLoading] = useState(false);
  type Inquiry = {
  id: string;
  message: string;
  createdAt: string;
  user?: {
    name?: string | null;
    image?: string | null;
  };
};
const [inquiries, setInquiries] = useState<Inquiry[]>([]);

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
                        <div className="space-y-2">
  {inquiries.map((inq) => (
  <div key={inq.id} className="mb-2 flex items-center justify-between">
    <div>
      <strong>{inq.user?.name || "Anonymous"}:</strong> {inq.message}
      <div className="text-xs text-gray-400">{new Date(inq.createdAt).toLocaleString()}</div>
    </div>
    <button
      onClick={() => handleResolve(inq.id)}
      className="ml-4 bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-xs"
    >
      Resolve
    </button>
  </div>
))}
</div>
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
