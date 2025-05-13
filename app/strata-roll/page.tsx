"use client";
import React, { useEffect, useState } from "react";
import Header from "components/Header";
import Footer from "components/Footer";

interface UnitOwner {
  id: string;
  name: string;
  email: string;
  phone?: string;
  unitNumber: string;
  entitlement: number;
}

export default function StrataRollPage() {
  const [owners, setOwners] = useState<UnitOwner[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");



  // Fetch owners on mount and when page is restored from bfcache (browser back/forward)
  useEffect(() => {
    const fetchOwners = () => {
      setLoading(true);
      const q = searchQuery.trim();
      const url = q ? `/api/strata-roll?q=${encodeURIComponent(q)}` : "/api/strata-roll";
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setOwners(data);
          setLoading(false);
        });
    };

    fetchOwners();

    // Listen for pageshow event to handle bfcache restores
    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        fetchOwners();
      }
    };
    window.addEventListener("pageshow", handlePageShow);
    return () => {
      window.removeEventListener("pageshow", handlePageShow);
    };
  }, [searchQuery]);

  return (
    <>
      <Header />
      <main className="container mx-auto p-8 min-h-[70vh] bg-white dark:bg-black transition-colors">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">Strata Roll</h1>
        <div className="mb-6">
          <input
            type="text"
            className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-400 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600"
            placeholder="Search by any field..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            aria-label="Search strata roll"
          />
        </div>
        {loading ? (
          <p className="text-gray-600 dark:text-gray-300">Loading...</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200">Unit Number</th>
                  <th className="py-2 px-4 border-b border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200">Owner Name</th>
                  <th className="py-2 px-4 border-b border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200">Email</th>
                  <th className="py-2 px-4 border-b border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200">Phone</th>
                  <th className="py-2 px-4 border-b border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200">Entitlement</th>
                </tr>
              </thead>
              <tbody>
                {owners.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="py-4 text-center text-gray-500 dark:text-gray-400">No matching entries found.</td>
                  </tr>
                ) : (
                  owners.map((owner) => (
                    <tr key={owner.id} className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                      <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100">{owner.unitNumber}</td>
                      <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100">{owner.name}</td>
                      <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100">{owner.email}</td>
                      <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100">{owner.phone || "-"}</td>
                      <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100">{owner.entitlement}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
