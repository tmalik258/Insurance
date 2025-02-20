"use client"

import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <header className="w-full">
      <nav className="flex items-center justify-between p-4 max-w-7xl mx-auto">
        <div className="flex items-center space-x-1">
          <div className="h-8 w-8 bg-black rounded-full" />
          <span className="font-semibold">Generix</span>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-gray-600">
            About
          </a>
          <a href="#" className="text-gray-600">
            Services
          </a>
          <a href="#" className="text-gray-600">
            Customer Stories
          </a>
          <a href="#" className="text-gray-600">
            Help
          </a>
          <a href="#" className="text-gray-600">
            Contact
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost">Log in</Button>
          <Button className="bg-indigo-700">Get a quote</Button>
        </div>
      </nav>
    </header>
  );
}

