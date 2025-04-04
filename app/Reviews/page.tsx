"use client"; // Required for client-side state & API calls

import { useState, useEffect } from "react";
import Header from "components/Header";
import Footer from "components/Footer";

type Review = {
  username: string;
  rating: number;
  reviewText: string;
  createdAt: string;
};

export default function ReviewPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [username, setUsername] = useState("");
  const [rating, setRating] = useState(5);
  const [reviewText, setReviewText] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch existing reviews (Mocked here, replace with DB fetch)
  useEffect(() => {
    async function fetchReviews() {
      // Replace with real API call
      const mockReviews: Review[] = [
        { username: "Alice", rating: 5, reviewText: "Amazing!", createdAt: "2024-03-30" },
        { username: "Bob", rating: 4, reviewText: "Very good!", createdAt: "2024-03-29" },
      ];
      setReviews(mockReviews);
    }

    fetchReviews();
  }, []);

  // Handle review submission
  async function submitReview(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const newReview: Omit<Review, "createdAt"> = { username, rating, reviewText };

    try {
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newReview),
      });

      const data = await response.json();
      if (response.ok) {
        setReviews((prev) => [...prev, { ...data.review, createdAt: new Date().toISOString() }]);
        setUsername("");
        setRating(5);
        setReviewText("");
      } else {
        alert(data.error || "Something went wrong!");
      }
    } catch (error) {
      console.error("Error submitting review:", error);
    } finally {
      setLoading(false);
    }
  }

  return (

    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <Header />

      <main className="flex flex-col items-center justify-center w-full px-6 py-4">
      <h1 className="text-2xl font-bold mb-4 text-center">User Reviews</h1>

      {/* Review Form in a Centered Container */}
      <div className="w-full max-w-md bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <form onSubmit={submitReview} className="flex flex-col">
          <input
            type="text"
            placeholder="Your Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded mb-3 focus:ring-2 focus:ring-blue-400"
            required
          />

          <select
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded mb-3 focus:ring-2 focus:ring-blue-400"
            required
          >
            {[5, 4, 3, 2, 1].map((r) => (
              <option key={r} value={r}>
                {r} Stars
              </option>
            ))}
          </select>

          <textarea
            placeholder="Write your review..."
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded mb-3 focus:ring-2 focus:ring-blue-400"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit Review"}
          </button>
        </form>
      </div>

      {/* Reviews List in a Centered Container */}
      <div className="w-full max-w-md mt-6">
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div key={index} className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow mb-3 border border-gray-200 dark:border-gray-700">
              <p className="font-bold text-gray-800 dark:text-gray-100">{review.username} ⭐ {review.rating}</p>
              <p className="text-gray-700 dark:text-gray-300">{review.reviewText}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{new Date(review.createdAt).toDateString()}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 dark:text-gray-400 text-center">No reviews yet.</p>
        )}
      </div>
    </main>

    <div className="h-20"></div>
    <Footer />
  </div>
    
  );
}