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

  useEffect(() => {
    fetch("/api/strata-roll")
      .then((res) => res.json())
      .then((data) => {
        setOwners(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Header />
      <main className="container mx-auto p-8 min-h-[70vh] bg-white dark:bg-black transition-colors">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">Strata Roll</h1>
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
                {owners.map((owner) => (
                  <tr key={owner.id} className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100">{owner.unitNumber}</td>
                    <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100">{owner.name}</td>
                    <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100">{owner.email}</td>
                    <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100">{owner.phone || "-"}</td>
                    <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100">{owner.entitlement}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
