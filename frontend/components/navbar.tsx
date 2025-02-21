"use client"

import { Button } from "@/components/ui/button"
import { Hexagon } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="w-full bg-indigo-700">
      <nav className="flex items-center justify-between p-4 max-w-7xl mx-auto">
        <div className="flex items-center space-x-1 text-white">
          <Hexagon />
          <span className="font-semibold">Generix</span>
        </div>

        <div className="flex gap-4">
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-200">
              About
            </a>
            <a href="#" className="text-gray-200">
              Services
            </a>
            <a href="#" className="text-gray-200">
              Customer Stories
            </a>
            <a href="#" className="text-gray-200">
              Help
            </a>
            <a href="#" className="text-gray-200">
              Contact
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/login"><Button variant="ghost" className="text-white hover:text-indigo-700">Log in</Button></Link>
            <Link href="/register"><Button className="bg-white text-indigo-700 font-medium hover:bg-gray-200">Get a quote</Button></Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

