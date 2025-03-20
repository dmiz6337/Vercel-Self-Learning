'use client'; // Needed for form interactivity in App Router

import React from "react";
import { useState } from 'react';

export default function InquiriesPage() {
  const [message, setMessage] = useState('');
  const [responseMsg, setResponseMsg] = useState('');
  const [loading, setLoading] = useState(false);

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

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Post an Inquiry</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your inquiry..."
          required
          className="w-full p-2 border rounded h-24"
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
    </div>
  );
}
