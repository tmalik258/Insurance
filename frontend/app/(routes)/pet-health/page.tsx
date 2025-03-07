import Image from "next/image";
import Link from "next/link";

const PetHealth = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-10 px-4">
      <div className="max-w-5xl bg-white p-6 rounded-lg shadow-lg">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative w-full h-64 md:h-auto">
          <Image
        src="/istockphoto-165142855-612x612.jpg" // Ensure this image is inside the 'public' folder
        alt="Full width image"
        width={1920} // Set a large width
        height={1080} // Set a large height
        className="w-full h-auto" // Makes the image full width
        priority // Ensures the image loads quickly
      />
          </div>

          <div className="flex flex-col justify-center">
            <nav className="text-sm text-gray-600 mb-2">
              <Link href="/">Home</Link> / <span className="text-gray-800">Pet Health</span>
            </nav>
            <h1 className="text-3xl font-semibold text-gray-900 mb-4">
              Pet Health Insurance
            </h1>
            <p className="text-gray-700 mb-4">
              Get special coverage for your special pet. You know, the one you let cuddle up with you on the couch at night.
              You'll feel better knowing that your furry friend will be taken care of when an accident or illness occurs.
            </p>
            <button className="bg-indigo-700 text-white px-6 py-2 rounded-md hover:bg-indigo-800">
              Get a quote
            </button>
            <p className="text-sm text-gray-600 mt-2">
              Have other coverage needs?{" "}
              <Link href="#" className="text-indigo-700 hover:underline">
                See all of our options.
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-8 p-6 bg-gray-50 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Coverage highlights</h2>
          <ul className="space-y-3">
            <li>
              <h3 className="text-indigo-700 font-medium">Furry friends welcome</h3>
              <p className="text-gray-600 text-sm">
                Coverage for dogs and cats from 6 weeks to as much as 14 years old in most states.
              </p>
            </li>
            <li>
              <h3 className="text-indigo-700 font-medium">Coverage choices</h3>
              <p className="text-gray-600 text-sm">
                Accident and illness is our most popular coverage, but accident only is also available.
              </p>
            </li>
            <li>
              <h3 className="text-indigo-700 font-medium">Extras and options</h3>
              <p className="text-gray-600 text-sm">
                Choose the coverage that's right for your pet by selecting the annual limit, reimbursement percentage, and deductible.
              </p>
            </li>
            <li>
              <h3 className="text-indigo-700 font-medium">Discounts that accelerate savings</h3>
              <p className="text-gray-600 text-sm">
                Take advantage of multiple-pet and military discounts.
              </p>
            </li>
          </ul>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            Pet Health Insurance at a Glance
          </h2>
          <p className="text-gray-600 mt-2">
            So you never have to choose between an expensive treatment and your pet.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div>
            <h3 className="text-lg font-semibold text-indigo-700">
              How You're Protected:
            </h3>
            <ul className="list-disc list-inside text-gray-600 text-sm mt-2 space-y-1">
              <li>Laboratory and diagnostic tests for covered conditions.</li>
              <li>Breed-specific, genetic, and chronic conditions.</li>
              <li>Emergency and specialist visits, nursing care.</li>
              <li>Alternative therapies, prescription meds, and dental illness (up to $1,000).</li>
            </ul>
          </div>


          <div>
            <h3 className="text-lg font-semibold text-indigo-700">
              Included Coverage:
            </h3>
            <ul className="list-disc list-inside text-gray-600 text-sm mt-2 space-y-1">
              <li>Accident and Illness</li>
              <li>Accident-only (available by phone)</li>
            </ul>
            <div className="relative w-full h-40 mt-4">
              <Image
                src="/image-39535-800.jpg" 
                alt="Pet Insurance Overview"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>


        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div>
            <h3 className="text-lg font-semibold text-indigo-700">
              Extra Options:
            </h3>
            <ul className="list-disc list-inside text-gray-600 text-sm mt-2 space-y-1">
              <li>Annual limit from $2,000 to unlimited.</li>
              <li>Reimbursement percentage: 70%, 80%, or 90%.</li>
              <li>Deductible options from $100 to $1,000.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-indigo-700">
              You Should Know:
            </h3>
            <ul className="list-disc list-inside text-gray-600 text-sm mt-2 space-y-1">
              <li>Pets need a vet exam if they haven't visited in 12 months.</li>
              <li>Short waiting period before coverage starts.</li>
              <li>Pre-existing conditions are not covered.</li>
              <li>Availability of coverage varies by state.</li>
            </ul>
          </div>
        </div>

        {/* Added Pet Insurance Claims Section */}
        <div className="mt-12 bg-gray-50 p-6 rounded-lg shadow">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Dog and cat insurance for the unexpected
            </h2>
            <p className="text-gray-600 mt-2">
              We're there when your furry family members need us most
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* First column */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-indigo-700">Medical Conditions</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="text-indigo-600 mr-2">•</div>
                  <div>
                    <span className="font-medium">Dental illness</span>
                    <p className="text-sm text-gray-600">Coverage up to $1,000 for dental treatments</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-indigo-600 mr-2">•</div>
                  <div>
                    <span className="font-medium">Breed-specific, congenital and genetic conditions</span>
                    <p className="text-sm text-gray-600">Support for hereditary issues</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-indigo-600 mr-2">•</div>
                  <div>
                    <span className="font-medium">Cancer</span>
                    <p className="text-sm text-gray-600">Treatment and ongoing care</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Second column */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-indigo-700">Additional Coverage</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="text-indigo-600 mr-2">•</div>
                  <div>
                    <span className="font-medium">Chronic conditions</span>
                    <p className="text-sm text-gray-600">Ongoing care for long-term illnesses</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-indigo-600 mr-2">•</div>
                  <div>
                    <span className="font-medium">Preventable conditions</span>
                    <p className="text-sm text-gray-600">When the unexpected happens</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-indigo-600 mr-2">•</div>
                  <div>
                    <span className="font-medium">Orthopedic conditions</span>
                    <p className="text-sm text-gray-600">Joint and bone-related issues</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Third column */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-indigo-700">Emergency Services</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="text-indigo-600 mr-2">•</div>
                  <div>
                    <span className="font-medium">Emergency care, hospitalization and surgery</span>
                    <p className="text-sm text-gray-600">24/7 emergency support</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-indigo-600 mr-2">•</div>
                  <div>
                    <span className="font-medium">Prescription drugs, diagnostic testing, specialist care</span>
                    <p className="text-sm text-gray-600">Comprehensive medical support</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-indigo-600 mr-2">•</div>
                  <div>
                    <span className="font-medium">Rehabilitation</span>
                    <p className="text-sm text-gray-600">Recovery and therapy services</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Quote section with image */}
          <div className="mt-12 grid md:grid-cols-2 gap-8 items-center">
            <div className="relative w-full h-64">
              <Image
                src="/woman-laptop.jpg" // Make sure this image exists in your public folder
                alt="Woman getting a pet insurance quote"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Get a quote</h3>
              <p className="text-gray-600 mb-6">
                Learn more and get a quote on insurance for your pet. Our simple process takes just minutes
                and can provide peace of mind for years to come.
              </p>
              <button className="bg-indigo-700 text-white px-6 py-3 rounded-md hover:bg-indigo-800 transition duration-300">
                Get a quote
              </button>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 text-xs text-gray-500">
            <p>
              Pet health insurance is administered by Embrace Pet Insurance Agency, LLC and underwritten by one of the licensed insurers of American Modern Insurance Group, Inc., including American Modern Home Insurance Company d/b/a in CA as American Modern Insurance Company (Lic. No. 2222-8) and American Southern Home Insurance Company. Coverage is subject to policy terms, conditions, limitations, exclusions, underwriting review, and approval, and may not be available for all risks or in all states. Rates and discounts vary, are determined by many factors, and are subject to change.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetHealth;