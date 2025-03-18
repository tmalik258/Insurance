"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [activeTab, setActiveTab] = useState('claims'); // Set claims as active by default

  const renderTabContent = () => {
    switch (activeTab) {
      case 'service':
        return (
          <>
            <h2 className="text-xl font-medium text-gray-800 mb-4">Customer service</h2>
            
            <p className="text-sm mb-6">
              Real time support is available Monday through Friday, 8 a.m to 8 p.m. EST.
            </p>
            
            <h3 className="text-sm font-medium mb-3">Reach out to us</h3>
            
            <div className="flex flex-col md:flex-row gap-6 mb-8">
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-blue-600" />
                <a href="mailto:servicecenter@amig.com" className="text-blue-600 hover:underline text-sm">
                  servicecenter@amig.com
                </a>
              </div>
              
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-blue-600" />
                <a href="tel:+18005432644" className="text-blue-600 hover:underline text-sm">
                  (800) 543-2644
                </a>
              </div>
            </div>
            
            <h3 className="text-sm font-medium mb-3">Mailing address</h3>
            
            <div className="mb-8">
              <div className="flex items-start gap-2">
                <input type="checkbox" checked readOnly className="mt-1" />
                <div className="text-sm">
                  <p className="font-medium">American Modern Insurance Group</p>
                  <p>PO Box 5323</p>
                  <p>Cincinnati OH 45201-5323</p>
                  <p>US</p>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-gray-600 mb-8">
              Your agent is your advocate and a knowledgeable resource for explaining your policy. Your 
              agent's contact information can be found on your policy documents, or on your online 
              account.
            </p>
            
            <div className="text-right">
              <Link href="/login" className="inline-flex items-center text-blue-600 hover:underline text-sm">
                Log in or sign up today! 
                <span className="ml-1">→</span>
              </Link>
            </div>
          </>
        );
      case 'claims':
        return (
          <>
            <h2 className="text-xl font-medium text-gray-800 mb-4">Notify us of your loss</h2>
            
            <p className="text-sm mb-6">
              However you choose to reach out to us, we will work closely with you until your claim is 
              settled. Once your claim is filed, you can chat with us to check your claim's status.
            </p>
            
            <h3 className="text-sm font-medium mb-3">Reach out to us</h3>
            
            <div className="flex flex-col md:flex-row gap-6 mb-8">
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-blue-600" />
                <a href="mailto:plclaims1@amig.com" className="text-blue-600 hover:underline text-sm">
                  plclaims1@amig.com
                </a>
              </div>
              
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-blue-600" />
                <a href="tel:+18003752075" className="text-blue-600 hover:underline text-sm">
                  (800) 375-2075
                </a>
              </div>
            </div>
            
            <h3 className="text-sm font-medium mb-3">Mailing address</h3>
            
            <div className="mb-8">
              <div className="flex items-start gap-2">
                <input type="checkbox" checked readOnly className="mt-1" />
                <div className="text-sm">
                  <p className="font-medium">American Modern Insurance Group</p>
                  <p>ATTN: Claims processing</p>
                  <p>PO Box 5323</p>
                  <p>Cincinnati OH 45201-5323</p>
                  <p>US</p>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <p className="text-sm font-medium mb-3">Please have this information ready:</p>
              <ul className="text-sm text-gray-600 list-inside space-y-1">
                <li>• Your policy number</li>
                <li>• Your contact information</li>
                <li>• A description of what was damaged or lost</li>
                <li>• Date and specific time of the loss</li>
                <li>• Note any personal injuries that occurred</li>
                <li>• Whether an ambulance was called, or fire or police departments were notified</li>
                <li>• Whether you believe you need to make temporary repairs</li>
              </ul>
            </div>
            
            <div className="text-right">
              <Link href="/file-claim" className="inline-flex items-center text-blue-600 hover:underline text-sm">
                File a claim 
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </>
        );
      case 'billing':
        return (
          <>
            <h2 className="text-xl font-medium text-gray-800 mb-4">Choose your payment method</h2>
            
            <p className="text-sm mb-6">
              Make a one-time payment or skip the hassle of checks and stamps with EZPay, an automatic 
              payment plan that is convenient and could save you money. We let you choose any payment 
              day of the month between the 1st and the 28th.
            </p>
            
            <h3 className="text-sm font-medium mb-3">Reach out to us</h3>
            
            <div className="mb-4">
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-blue-600" />
                <a href="tel:+18005432644" className="text-blue-600 hover:underline text-sm">
                  (800) 543-2644
                </a>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-sm font-medium mb-3">Mailing address</h3>
              
              <div className="flex flex-col md:flex-row justify-between gap-8">
                <div className="flex-1">
                  <p className="text-sm text-gray-600 mb-2">Payment delivered via USPS</p>
                  <div className="flex items-start gap-2">
                    <input type="checkbox" checked readOnly className="mt-1" />
                    <div className="text-sm">
                      <p className="font-medium">American Modern P & C</p>
                      <p>PO Box 740167</p>
                      <p>Cincinnati OH 45274-0167</p>
                      <p>US</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1">
                  <p className="text-sm text-gray-600 mb-2">Overnight delivery (UPS or FedEx)</p>
                  <div className="flex items-start gap-2">
                    <input type="checkbox" checked readOnly className="mt-1" />
                    <div className="text-sm">
                      <p className="font-medium">Fifth Third Bank</p>
                      <p>5050 Kingsley Drive</p>
                      <p>Cincinnati OH 45227</p>
                      <p>ATTN: INOC18-Rlbx 740167</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-gray-600 mb-8">
              If paying by mail, please write your policy number on your check and include the payment 
              coupon.
            </p>
            
            <div className="text-right">
              <Link href="/payment" className="inline-flex items-center text-blue-600 hover:underline text-sm">
                Make a payment or sign up for EZPay automatic payments
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </>
        );
      case 'policy':
        return (
          <>
            <h2 className="text-xl font-medium text-gray-800 mb-4">Change your policy</h2>
            
            <p className="text-sm mb-6">
              We recommend contacting your agent for any change that affects your coverage, limits, or the 
              deductible. Your agent's contact information can be found on your policy documents, or on 
              your online account.
            </p>
            
            <h3 className="text-sm font-medium mb-3">Reach out to us</h3>
            
            <div className="flex flex-col md:flex-row gap-6 mb-8">
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-blue-600" />
                <a href="mailto:servicecenter@amig.com" className="text-blue-600 hover:underline text-sm">
                  servicecenter@amig.com
                </a>
              </div>
              
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-blue-600" />
                <a href="tel:+18005432644" className="text-blue-600 hover:underline text-sm">
                  (800) 543-2644
                </a>
              </div>
            </div>
            
            <p className="text-sm text-gray-600 mb-8">
              By creating an account, you have access to submit a name change and a mailing address 
              change. You also have access to download and view your policy documents.
            </p>
            
            <div className="text-right">
              <Link href="/login" className="inline-flex items-center text-blue-600 hover:underline text-sm">
                Log in or create an account
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <section className="bg-[#fffff] text-black">
      <div className="max-w-6xl mx-auto px-4 py-8 ">
        <div className="text-sm mb-2 ">We're here for you.</div>
        <h1 className="text-3xl font-semibold mb-6">Contact us</h1>
        
        <div className="flex flex-col md:flex-row bg-white rounded-md overflow-hidden">
          {/* Left sidebar - options */}
          <div className="w-full md:w-1/4 bg-gray-50 p-4">
            <p className="text-gray-700 text-sm mb-4">What do you need help with today?</p>
            
            <div className="space-y-1">
              <div 
                className={`p-3 text-sm rounded-md cursor-pointer ${activeTab === 'service' ? 'bg-blue-50 text-blue-600 font-medium' : 'hover:bg-gray-100 text-gray-700'}`}
                onClick={() => setActiveTab('service')}
              >
                Customer service
              </div>
              <div 
                className={`p-3 text-sm rounded-md cursor-pointer ${activeTab === 'claims' ? 'bg-blue-50 text-blue-600 font-medium' : 'hover:bg-gray-100 text-gray-700'}`}
                onClick={() => setActiveTab('claims')}
              >
                Claims information
              </div>
              <div 
                className={`p-3 text-sm rounded-md cursor-pointer ${activeTab === 'billing' ? 'bg-blue-50 text-blue-600 font-medium' : 'hover:bg-gray-100 text-gray-700'}`}
                onClick={() => setActiveTab('billing')}
              >
                Billing and payments
              </div>
              <div 
                className={`p-3 text-sm rounded-md cursor-pointer ${activeTab === 'policy' ? 'bg-blue-50 text-blue-600 font-medium' : 'hover:bg-gray-100 text-gray-700'}`}
                onClick={() => setActiveTab('policy')}
              >
                Change your policy
              </div>
            </div>
          </div>
          
          {/* Right content - contact details */}
          <div className="w-full md:w-3/4 p-6 text-gray-800">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;