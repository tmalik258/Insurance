import React from 'react';

const ResidentialPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <h2 className="text-blue-600 text-lg font-medium">
                American Modern® Insurance
              </h2>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Protection lives here
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              From pristine to less than perfect, American Modern has 
              protection that fits your home. We can handle most 
              coverage challenges, like past claims or old age. 
              Welcome to the neighborhood.
            </p>
            
            <button className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors rounded-md text-base font-medium">
              Find an agent
            </button>
          </div>
          
          <div className="relative h-[500px]">
            <img
              src="/istockphoto-165142855-612x612.jpg"
              alt="Happy family with baby on couch with moving boxes"
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Right for your home. Right for you.
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Sometimes you need unique coverage that other insurance companies can't offer. That's specialty insurance. That's American Modern.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-sm p-6 border hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-green-700 mb-3">
              I live there full-time
            </h3>
            <p className="text-gray-600 mb-4">
              Not every home is made for traditional insurance. That's when our residential options can help the most.
            </p>
            <button className="text-blue-600 hover:text-blue-700 flex items-center">
              Learn more
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              I use it part-time
            </h3>
            <p className="text-gray-600 mb-4">
              Mountain chalets, lake cabins, vacation homes and other getaway places can be difficult to insure. Not for us.
            </p>
            <button className="text-blue-600 hover:text-blue-700 flex items-center">
              Learn more
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              It's a rental property
            </h3>
            <p className="text-gray-600 mb-4">
              Do rental units need special treatment? They sure do—and we have several options that provide it.
            </p>
            <button className="text-blue-600 hover:text-blue-700 flex items-center">
              Learn more
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-purple-700 mb-3">
              It's vacant
            </h3>
            <p className="text-gray-600 mb-4">
              Even empty homes need protection. We insure many properties in the middle of a sale, estate transfer or renovation.
            </p>
            <button className="text-blue-600 hover:text-blue-700 flex items-center">
              Learn more
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResidentialPage;