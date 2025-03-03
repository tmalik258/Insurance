import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Career = () => {
  return (
    <div className="relative w-full">
      <div className="relative w-full h-96">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/careers-hero.jpg"
            alt="People in office discussion"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>

        <div className="absolute inset-0 z-10 flex flex-col justify-center p-8 md:p-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Careers</h1>
          <h2 className="text-2xl md:text-3xl font-medium text-gray-800 mb-8">Push boundaries. With us.</h2>
          
          <Link href="/apply">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md w-36 transition-all">
              Apply now
            </button>
          </Link>
        </div>
      </div>

      <div className="w-full py-12 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
      
          <div className="md:col-span-3">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">About us</h2>
            
            <nav className="flex flex-col space-y-4">
              <Link href="/about/company" className="text-gray-600 hover:text-gray-900">
                Company
              </Link>
              <Link href="/about/culture" className="text-gray-600 hover:text-gray-900">
                Culture
              </Link>
              <Link href="/about/careers" className="text-blue-600 font-medium border-b-2 border-blue-600 pb-1 w-fit">
                Careers
              </Link>
            </nav>
          </div>
          
          <div className="md:col-span-9">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Flexibility. Opportunity. Impact.</h2>
            
            <div className="relative w-full aspect-video mb-8">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/VIDEO_ID" 
                title="Push boundaries with American Modern"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            
            <div className="prose max-w-none">
              <p className="text-gray-700 mb-4">
                American Modern, a Munich Re company, is widely recognized as a specialty 
                insurance leader that delivers residential and recreational products and services. 
                But, we're also known as a Top Workplace with a vibrant and inclusive culture that 
                ensures employees boundless opportunity to grow their careers and make a 
                difference every day in a flexible environment that helps them succeed.
              </p>
              
              <p className="text-blue-600 mt-8">
                <Link href="/about/careers/infographic">
                  Check out this infographic to see how American Modern can benefit you and your career.
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-12 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
       
            <div className="md:col-span-5">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Talent stories</h2>
              
              <div className="mb-6">
                <Image 
                  src="/images/talent-story-group.jpg" 
                  alt="Group of employees" 
                  width={500}
                  height={300}
                  className="w-full rounded-md mb-4"
                />
                
                <h3 className="text-lg font-medium text-blue-600 mb-2">
                  <Link href="/careers/stories/work-life-balance">
                    Why my employer offers more than just work-life balance
                  </Link>
                </h3>
                
                <p className="text-sm text-gray-600">
                  By Sonya Fleschesser, Talent Acquisition Partner <span className="inline-block ml-1">→</span>
                </p>
              </div>
            </div>
            
            <div className="md:col-span-7">
              <h3 className="text-lg font-medium text-blue-600 mb-6">Featured stories</h3>
              
              <div className="prose max-w-none mb-8">
                <p className="text-gray-700">
                  It's not possible for us to tell you every single employee talent story—you'd 
                  honestly have to come work here to know all of the amazing things our 
                  employees get to do. But, here are just a few that can help you see what 
                  types of career- and business- enhancing opportunities you can get, just 
                  by becoming an American Modern employee.
                </p>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-blue-600 mb-1">
                    <Link href="/careers/stories/jasjit-butalia">
                      Why working at American Modern sometimes gives me goosebumps
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-600">
                    by Jasjit Butalia <span className="inline-block ml-1">→</span>
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-blue-600 mb-1">
                    <Link href="/careers/stories/matt-ryan">
                      How being part of digital claims solutions fed my need for positive change
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-600">
                    by Matt Ryan <span className="inline-block ml-1">→</span>
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-blue-600 mb-1">
                    <Link href="/careers/stories/kelly-meiser">
                      Still flexible after all these years
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-600">
                    by Kelly Meiser <span className="inline-block ml-1">→</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-12 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-purple-700 text-center mb-6">Benefits at American Modern</h2>
          
          <p className="text-center mb-10">
            We are proud to offer our employees, their domestic partners, and their children, a wide range of insurance benefits.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 mb-10">
            
            <div>
              <ul className="space-y-4 list-disc pl-5">
                <li className="text-gray-700">
                  Two options for your health insurance plan (PPO or High Deductible)
                </li>
                <li className="text-gray-700">
                  Supplemental Life and AD&D plans that provide financial support and dependents (includes spouse/domestic partner and children)
                </li>
                <li className="text-gray-700">
                  Voluntary Benefit plans that supplement your health and life insurance plans (Accident, Critical Illness and Hospital Indemnity)
                </li>
              </ul>
            </div>
            
            <div>
              <ul className="space-y-4 list-disc pl-5">
                <li className="text-gray-700">
                  Prescription drug coverage (included in your health insurance plan)
                </li>
                <li className="text-gray-700">
                  Additional insurance coverage provided at no cost to you, such as basic life insurance equal to 1x annual salary (up to $500k) and AD&D coverage that is equal to 1x annual salary (up to $500k)
                </li>
                <li className="text-gray-700">
                  Short and Long Term Disability coverage
                </li>
                <li className="text-gray-700">
                  Vision and dental insurance plans
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center italic my-8">
            In addition to the above insurance offerings, our employees also enjoy:
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
            
            <div>
              <ul className="space-y-4 list-disc pl-5">
                <li className="text-gray-700">
                  A robust 401k plan with up to a 5% employer match
                </li>
                <li className="text-gray-700">
                  A retirement savings plan that is 100% company funded
                </li>
                <li className="text-gray-700">
                  Paid time off that begins with 24 days each year, with more days added when you celebrate milestone service anniversaries
                </li>
                <li className="text-gray-700">
                  Eligibility to receive a yearly bonus as a Munich Re employee
                </li>
                <li className="text-gray-700">
                  A variety of health and wellness programs provided at no cost
                </li>
                <li className="text-gray-700">
                  A hybrid environment that gives you a choice in where and how you get work done
                </li>
                <li className="text-gray-700">
                  A corporately subsidized on-site cafeteria as well as a We Proudly Serve coffee shop
                </li>
              </ul>
            </div>
            
            <div>
              <ul className="space-y-4 list-disc pl-5">
                <li className="text-gray-700">
                  An on-site complimentary workout facility as well as walking trails on campus grounds
                </li>
                <li className="text-gray-700">
                  On-site wellness center complete with nurse practitioner
                </li>
                <li className="text-gray-700">
                  Financial assistance for adoptions and infertility treatment
                </li>
                <li className="text-gray-700">
                  Paid time off for eligible family care needs
                </li>
                <li className="text-gray-700">
                  Tuition assistance and educational achievement bonuses
                </li>
                <li className="text-gray-700">
                  Free parking
                </li>
                <li className="text-gray-700">
                  A corporate matching gifts program that further enhances your charitable donation
                </li>
                <li className="text-gray-700">
                  Paid time off to volunteer in your community
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2">
          {/* Left Content */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <div className="text-blue-600 font-medium mb-4">
              Apply now
            </div>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Find your place at American Modern
            </h2>
            
            <Link href="/careers/positions">
              <button className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-2 rounded transition-colors inline-flex items-center w-fit">
                View open positions
              </button>
            </Link>
          </div>
          <div className="relative h-64 md:h-auto">
            <Image
              src="/images/employee-office.jpg"
              alt="Smiling employee in modern office"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;