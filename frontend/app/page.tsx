import React from "react";
import { HeroSection } from "./_components/hero-section";
import ServicesGrid from "./_components/services-grid";
import StatsSection from "./_components/stats-section";
import ContactSection from "./_components/contact-section";

const Home = () => {
  return (
    <div className="min-h-screen bg-blue-50">
      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <ServicesGrid />

      {/* Stats Section */}
      <StatsSection />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};

export default Home;
