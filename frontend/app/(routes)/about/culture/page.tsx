import React from 'react';
import Image from 'next/image';
import { Star, ThumbsUp } from 'lucide-react';

const Culture = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-64 md:h-80">
        <Image 
          src="/images/culture-hero.jpg" 
          alt="Colleagues collaborating in office" 
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-center p-8 bg-gradient-to-r from-white/80 to-transparent">
          <h1 className="text-3xl font-bold text-gray-900">Culture</h1>
          <p className="text-xl font-medium text-gray-800 mt-2">Come for the job.</p>
          <p className="text-xl font-medium text-gray-800">Stay for the people.</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sidebar Navigation */}
          <div className="col-span-1">
            <h2 className="text-xl font-bold mb-6">About us</h2>
            <nav className="flex flex-col space-y-2">
              <a href="/company" className="text-gray-600 hover:text-gray-900 py-1">Company</a>
              <a href="/culture" className="text-blue-600 font-medium border-l-4 border-blue-600 pl-3 py-1">Culture</a>
              <a href="/careers" className="text-gray-600 hover:text-gray-900 py-1">Careers</a>
            </nav>
          </div>

          {/* Main Content */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold mb-6">What you'll experience at American Modern</h2>
            
            <p className="mb-6 text-gray-700">
              Whether it's the family-friendly atmosphere, the inclusive feeling of our workplace, or our 
              efforts in the areas of environmental, social and governance, our award-winning culture 
              attracts the very best talent and shapes who we are.
            </p>
            
            <p className="mb-6 text-gray-700">
              For example, we invite associates to anonymously participate in a yearly Top Workplace
              survey managed by a third-party provider, one of the questions asked is, "What words would
              you use to describe the culture?" Some of the words they use are: inclusive, innovative,
              ethical, welcoming, motivational, forward-thinking, growth-oriented and kind.
            </p>

            {/* Featured Awards Section */}
            <div className="col-span-1 mt-12 mb-12 bg-gray-100 p-6 rounded-lg">
              <h2 className="col-span-1 text-2xl font-bold mb-8">Featured awards</h2>
              
              <div className="container ml-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Award 1 */}
                <div className="border-b pb-4 flex items-start">
                  <Star className="text-blue-600 mr-2 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="ml-6 font-medium">Top workplace, greater Cincinnati, 2014-2023</p>
                  </div>
                </div>
                
                {/* Award 2 */}
                <div className="border-b pb-4 flex items-start">
                  <ThumbsUp className="text-blue-600 mr-2 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-medium">Top workplace, USA, 2020-2024</p>
                  </div>
                </div>
                
                {/* Award 3 */}
                <div className="border-b pb-4 flex items-start">
                  <Star className="text-blue-600 mr-2 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-medium">A Forbes best midsize employer 2023</p>
                  </div>
                </div>
                
                {/* Award 4 */}
                <div className="border-b pb-4 flex items-start">
                  <ThumbsUp className="text-blue-600 mr-2 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-medium">Best-in-state insurance company, Forbes Magazine, 2021, 2022</p>
                  </div>
                </div>
                
                {/* Award 5 */}
                <div className="border-b pb-4 flex items-start">
                  <Star className="text-blue-600 mr-2 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-medium">Best places to work in Ohio, 2022</p>
                  </div>
                </div>
                
                {/* Award 6 */}
                <div className="border-b pb-4 flex items-start">
                  <ThumbsUp className="text-blue-600 mr-2 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-medium">Elite 50 internship award winner, RISE Professionals, 2022</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Giving Back Section */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Giving back is part of who we are</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-700">
                    We support and empower our employees in whatever way they
                    decide to give, be it monetary or time-driven donations. We
                    provide two days of paid time off to volunteer per year to make
                    it easier for associates to support charitable causes.
                  </p>
                </div>
                
                <div>
                  <p className="text-gray-700 mb-4">
                    Our charitable giving efforts are focused on the areas of arts & culture, science
                    education, health, civic/social projects, demographic change, natural
                    catastrophes, and the environment. As an organization, we endeavor to
                    support and enable volunteer activities in our community, provide relief in times
                    of disaster, and sponsor non-profits whose goals align with our corporate
                    values.
                  </p>
                  
                  <p className="text-gray-700">
                    American Modern is a Sustaining Platinum Sponsor of the Clermont County
                    Chamber of Commerce, as well as a member of the Cincinnati Chamber of
                    Commerce.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Culture;