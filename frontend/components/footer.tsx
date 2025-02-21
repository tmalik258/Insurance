import { Hexagon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-indigo-700 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-1">
              <Hexagon />
              <span className="font-semibold">Generix</span>
            </div>
            <p className="text-gray-300">
              Your trusted partner in protection since 1959
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">For policyholders</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Make a payment
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  File a claim
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Track a claim
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Insurance solutions</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Recreational
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Residential
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Pet Health
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact us</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Chat
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Give us a call
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Send us an email
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white mt-12 pt-8 text-center text-gray-300">
          <p>© 2025 Insurance Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;