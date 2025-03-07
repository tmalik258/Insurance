"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp, Hexagon } from "lucide-react";
import { useRouter } from "nextjs-toploader/app";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const router = useRouter();

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Toggle dropdown state
  const handleDropdownToggle = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  // Navigation handler
  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <header className="w-full bg-indigo-700">
      <nav className="flex items-center justify-between p-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-1 text-white">
          <Hexagon />
          <span className="font-semibold">Generix</span>
        </div>

        {/* Navigation */}
        <div className="flex gap-4">
          <div className="hidden md:flex items-center space-x-6">
            {/* Insurance Solutions */}
            <DropdownMenu onOpenChange={() => handleDropdownToggle("insurance")}>
              <DropdownMenuTrigger asChild>
                <div className="text-gray-200 flex gap-1 items-center cursor-pointer">
                  Insurance Solutions
                  {openDropdown === "insurance" ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                {/* Residential */}
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>Residential</DropdownMenuSubTrigger>
                  <DropdownMenuSubContent className="w-48">
                    <DropdownMenuItem onClick={() => handleNavigation("/residential")}>Full time</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleNavigation("/residential")}>Part time</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleNavigation("/residential")}>Rental</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleNavigation("/residential")}>Vacant</DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>

                {/* Recreational */}
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>Recreational</DropdownMenuSubTrigger>
                  <DropdownMenuSubContent className="w-48">
                    <DropdownMenuItem onClick={() => handleNavigation("/recreational/collector-vehicle")}>Collector Vehicle</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleNavigation("/recreational/motorsports")}>Motorsports</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleNavigation("/recreational/boat")}>Boat</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleNavigation("/recreational/yacht")}>Yacht</DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>

                {/* Other Items */}
                <DropdownMenuItem onClick={() => handleNavigation("/pet-health")}>Pet Health</DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleNavigation("/all-solutions")}>All Solutions</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Customer Service */}
            <DropdownMenu onOpenChange={() => handleDropdownToggle("customer-service")}>
              <DropdownMenuTrigger asChild>
                <div className="text-gray-200 flex gap-1 items-center cursor-pointer">
                  Customer Service
                  {openDropdown === "customer-service" ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <DropdownMenuItem onClick={() => handleNavigation("/customer-service/payment")}>Make a Payment</DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleNavigation("/customer-service/file-claim")}>File a Claim</DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleNavigation("/customer-service/track-claim")}>Track a Claim</DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleNavigation("/customer-service/contact")}>Contact Us</DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleNavigation("/customer-service/blog")}>Blog</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* About Us */}
            <DropdownMenu onOpenChange={() => handleDropdownToggle("about-us")}>
              <DropdownMenuTrigger asChild>
                <div className="text-gray-200 flex gap-1 items-center cursor-pointer">
                  About Us
                  {openDropdown === "about-us" ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <DropdownMenuItem onClick={() => handleNavigation("/about/company")}>Company</DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleNavigation("/about/culture")}>Culture</DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleNavigation("/about/careers")}>Careers</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Auth Links */}
          <div className="flex items-center space-x-4">
            <Link href="/login">
              <Button variant="ghost" className="text-white hover:text-indigo-700">Log in</Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-white text-indigo-700 font-medium hover:bg-gray-200">Get a quote</Button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
