import React from "react";
import { HeroSection } from "./_components/hero-section";

const Home = () => {
  return (
    <div className="min-h-screen bg-blue-50">
      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          Get the right protection to keep moving forward
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          From customized auto insurance to superior claims service, our people
          and technology will support you every step of the way. Join us today
          and experience why we&apos;re one of the best insurance companies.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-sm text-blue-400 font-medium mb-2">SAVINGS</h3>
            <p className="text-4xl font-bold text-indigo-700">$750+</p>
          </div>
          <div className="text-center">
            <h3 className="text-sm text-blue-400 font-medium mb-2">MEMBERS</h3>
            <p className="text-4xl font-bold text-indigo-700">18 M+</p>
          </div>
          <div className="text-center">
            <h3 className="text-sm text-blue-400 font-medium mb-2">SUPPORT</h3>
            <p className="text-4xl font-bold text-indigo-700">24 hr</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
