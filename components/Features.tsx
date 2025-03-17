import React from "react";
import FeatureCard from "./FeatureCard";

import { GrVmMaintenance, GrUserAdmin } from "react-icons/gr";
import { FaRegQuestionCircle, FaRegClipboard } from "react-icons/fa";
import { MdEvent, MdOutlineRateReview } from "react-icons/md";


const Features = () => {
  const features = [
    {
      icon: GrVmMaintenance,
      title: "Maintenance",
      description: "Notify tenants on any upcoming scheduled maintenance.",
    },
    {
      icon: FaRegQuestionCircle,
      title: "Inquiries",
      description: "Create a hub for creating and responding to queries from the community",
    },
    {
      icon: FaRegClipboard,
      title: "Info Board",
      description: "Display key information regarding locations, documents and rules for communal facilities.",
    },
    {
      icon: GrUserAdmin,
      title: "Committee Membership",
      description: "Get to know the Body Corporate committee and how to reach out.",
    },
    {
      icon: MdEvent,
      title: "Events",
      description: "Know when and where community events are being held.",
    },
    {
      icon: MdOutlineRateReview,
      title: "Feedback",
      description: "Leave a review and let us know whats working (and whats not).",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-200 rounded-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">Mission</h2>
          <p className="mt-8 text-xl text-gray-600 dark:text-gray-300 font-light">
            Find below, the features and content we wish to communicate through the Strata Committee Corporate Body Portal
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

export default Features;
