import React from "react";
import FeatureCard from "./FeatureCard";

import { GrVmMaintenance, GrUserAdmin } from "react-icons/gr";
import { FaRegQuestionCircle, FaRegClipboard } from "react-icons/fa";
import { MdEvent, MdOutlineRateReview } from "react-icons/md";


const Contacts = () => {
  const contacts = [
    {
      icon: GrVmMaintenance,
      title: "Treasurer",
      description: "Celina Lee: celina_lee@gmail.com",
    },
    {
      icon: FaRegQuestionCircle,
      title: "Secretary",
      description: "Caroline Niles: caroline_niles@gmail.com",
    },
    {
      icon: FaRegClipboard,
      title: "Chairman",
      description: "Marcus Meyer: marcus_meyer@gmail.com",
    },
    {
      icon: GrUserAdmin,
      title: "Committee Applications & HR",
      description: "Greg Jones: greg_jones@gmail.com",
    },
    {
      icon: MdEvent,
      title: "Events",
      description: "Jacob Richards: jacob_richards@gmail.com",
    },
    {
      icon: MdOutlineRateReview,
      title: "Unit Owners Inquiries & Maintenance",
      description: "Alex James: alex_james@gmail.com",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-200 rounded-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">Mission</h2>
          <p className="mt-8 text-xl text-gray-600 dark:text-gray-300 font-light">
            Find below, the Strata Committee Corporate Body Members and Points of Contact
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
