"use client";
import React, { useEffect, useState } from "react";

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
    <main className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Strata Roll</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Unit Number</th>
                <th className="py-2 px-4 border-b">Owner Name</th>
                <th className="py-2 px-4 border-b">Email</th>
                <th className="py-2 px-4 border-b">Phone</th>
                <th className="py-2 px-4 border-b">Entitlement</th>
              </tr>
            </thead>
            <tbody>
              {owners.map((owner) => (
                <tr key={owner.id}>
                  <td className="py-2 px-4 border-b">{owner.unitNumber}</td>
                  <td className="py-2 px-4 border-b">{owner.name}</td>
                  <td className="py-2 px-4 border-b">{owner.email}</td>
                  <td className="py-2 px-4 border-b">{owner.phone || "-"}</td>
                  <td className="py-2 px-4 border-b">{owner.entitlement}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}
