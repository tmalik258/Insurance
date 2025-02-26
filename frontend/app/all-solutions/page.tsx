"use client";

import Link from "next/link";
import { useState } from "react";

// Define types for better TypeScript support
type SolutionCategory = "Residential" | "Recreational" | "Pet Health" | "Earthquake";

interface Solution {
  title: string;
  description: string;
  link: string;
}

interface SolutionsMap {
  [key: string]: Solution[];
}

const ExploreSolutions = () => {
  const [activeTab, setActiveTab] = useState<SolutionCategory>("Residential");
  
  const tabs: SolutionCategory[] = ["Residential", "Recreational", "Pet Health", "Earthquake"];
  
  const solutions: SolutionsMap = {
    "Residential": [
      {
        title: "Homeowners",
        description: "Having trouble finding coverage because of your home's value, age or claim history? We help protect a wide range of homes.",
        link: "/solutions/homeowners"
      },
      {
        title: "Homeowners FLEX®",
        description: "Some homes may need a more customized solution. Dial coverage levels up or down to fit your home's age, claims history or location.",
        link: "/solutions/homeowners-flex"
      },
      {
        title: "Dwelling Special",
        description: "A vacant, rental or seasonal home may not need the same coverage as your full-time residence. Here's an option for up to a four-family property.",
        link: "/solutions/dwelling-special"
      },
      {
        title: "Dwelling Basic",
        description: "Maybe you can't get full coverage—or maybe you're just looking for the basics. Either way, we can cover most occupancy types.",
        link: "/solutions/dwelling-basic"
      },
      {
        title: "Manufactured Home",
        description: "We've been helping people protect manufactured homes since 1965. Get full coverage for everything from single family and multi-sectional to modular or tiny homes.",
        link: "/solutions/manufactured-home"
      }
    ],
    "Recreational": [
      {
        title: "Boat & Watercraft",
        description: "Protect your time on the water with coverage for boats, jet skis, and other personal watercraft against damage, theft, and liability.",
        link: "/solutions/boat-watercraft"
      },
      {
        title: "RV & Motorhome",
        description: "Take to the road with confidence. Our coverage protects your recreational vehicle whether you're traveling or parked, including personal belongings inside.",
        link: "/solutions/rv-motorhome"
      },
      {
        title: "ATV & Off-Road",
        description: "Coverage for all-terrain vehicles, dirt bikes, and other off-road recreational vehicles, so you can enjoy your adventures with peace of mind.",
        link: "/solutions/atv-offroad"
      },
      {
        title: "Vacation Property",
        description: "Specialized protection for second homes, cabins, or vacation properties that aren't your primary residence but still need comprehensive coverage.",
        link: "/solutions/vacation-property"
      },
      {
        title: "Travel Insurance",
        description: "Don't let unexpected events ruin your trip. Get protection for cancellations, medical emergencies, and lost belongings while traveling.",
        link: "/solutions/travel-insurance"
      }
    ],
    "Pet Health": [
      {
        title: "Basic Pet Coverage",
        description: "Essential protection for your furry family members, covering accidents, injuries, and common illnesses for dogs and cats.",
        link: "/solutions/basic-pet"
      },
      {
        title: "Comprehensive Pet Plan",
        description: "Complete coverage including preventative care, dental, prescription medications, and treatment for chronic conditions.",
        link: "/solutions/comprehensive-pet"
      },
      {
        title: "Senior Pet Care",
        description: "Specialized coverage designed for aging pets with age-related conditions, helping them enjoy their golden years in comfort.",
        link: "/solutions/senior-pet"
      },
      {
        title: "Exotic Pet Insurance",
        description: "Unique coverage options for birds, reptiles, and other non-traditional pets, because every pet deserves protection.",
        link: "/solutions/exotic-pet"
      },
      {
        title: "Pet Wellness Plans",
        description: "Preventative care packages including annual exams, vaccinations, and routine screenings to keep your pets in optimal health.",
        link: "/solutions/pet-wellness"
      }
    ],
    "Earthquake": [
      {
        title: "Residential Earthquake",
        description: "Additional coverage for homes located in earthquake-prone regions, protecting your investment when standard policies don't.",
        link: "/solutions/residential-earthquake"
      },
      {
        title: "Business Earthquake",
        description: "Comprehensive protection for commercial properties, inventory, and business interruption due to earthquake damage.",
        link: "/solutions/business-earthquake"
      },
      {
        title: "Condominium Earthquake",
        description: "Specialized coverage for condo units in areas with seismic activity, filling gaps left by association policies.",
        link: "/solutions/condo-earthquake"
      },
      {
        title: "Contents-Only Coverage",
        description: "Protection specifically for personal belongings damaged during an earthquake, even if you don't own the building.",
        link: "/solutions/contents-earthquake"
      },
      {
        title: "Retrofit Discount Plans",
        description: "Save on premiums with special rates for properties that have been structurally reinforced against earthquake damage.",
        link: "/solutions/retrofit-discount"
      }
    ]
  };

  // Function to handle case when a category has no solutions
  const renderSolutions = () => {
    if (solutions[activeTab].length === 0) {
      return (
        <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-8">
          <p className="text-gray-500">No solutions available in this category yet. Check back soon!</p>
        </div>
      );
    }
    
    return solutions[activeTab].map((solution, index) => (
      <div 
        key={index} 
        className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden border border-gray-100"
      >
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{solution.title}</h3>
          <p className="text-gray-600 mb-4">{solution.description}</p>
          <Link href={solution.link} className="text-blue-600 hover:text-blue-800 inline-flex items-center font-medium">
            Learn more
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    ));
  };

  return (
    <section className="w-full bg-gray-50 py-12">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Explore our solutions</h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">Find the perfect coverage to protect what matters most to you.</p>
        </div>
        
        {/* Tabs */}
        <div className="flex flex-wrap justify-center mb-8 border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 mx-1 font-medium text-sm transition-colors duration-200 ${
                activeTab === tab
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600 hover:text-blue-500"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        
        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {renderSolutions()}
        </div>
        
        {/* CTA Section */}
        <div className="mt-12 text-center">
          <p className="text-gray-700 mb-4">Don't see what you're looking for?</p>
          <Link 
            href="/contact" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors duration-200"
          >
            Contact us for customized solutions
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExploreSolutions;