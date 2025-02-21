import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  UserIcon,
  MailIcon,
  LockIcon,
  PhoneIcon,
  ChevronRight,
  Building2,
  Hexagon,
} from "lucide-react";
import Image from "next/image";

const Register = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Registration Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-4 sm:px-6 lg:px-8 bg-white py-12">
        <div className="max-w-md w-full mx-auto">
          {/* Logo */}
          <div className="flex items-center mb-8">
            <Hexagon />
            <span className="ml-2 text-2xl font-bold text-gray-900">
              Insurance Portal
            </span>
          </div>

          {/* Welcome Text */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900">
              Create your account
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Fill in the details below to get started with your insurance
              journey
            </p>
          </div>

          {/* Registration Form */}
          <form className="space-y-6">
            {/* Personal Information */}
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* First Name */}
                <div className="space-y-1">
                  <Label htmlFor="firstName">First Name</Label>
                  <div className="relative">
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="John"
                      className="pl-10 h-12 border-gray-300"
                    />
                    <UserIcon className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                  </div>
                </div>

                {/* Last Name */}
                <div className="space-y-1">
                  <Label htmlFor="lastName">Last Name</Label>
                  <div className="relative">
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="Doe"
                      className="pl-10 h-12 border-gray-300"
                    />
                    <UserIcon className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1">
                <Label htmlFor="email">Email address</Label>
                <div className="relative">
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@company.com"
                    className="pl-10 h-12 border-gray-300"
                  />
                  <MailIcon className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                </div>
              </div>

              {/* Phone */}
              <div className="space-y-1">
                <Label htmlFor="phone">Phone number</Label>
                <div className="relative">
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="pl-10 h-12 border-gray-300"
                  />
                  <PhoneIcon className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                </div>
              </div>

              {/* Company */}
              <div className="space-y-1">
                <Label htmlFor="company">Company (Optional)</Label>
                <div className="relative">
                  <Input
                    id="company"
                    type="text"
                    placeholder="Your company name"
                    className="pl-10 h-12 border-gray-300"
                  />
                  <Building2 className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                </div>
              </div>

              {/* Insurance Type */}
              <div className="space-y-1">
                <Label htmlFor="insuranceType">Insurance Type</Label>
                <Select>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select insurance type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="health">Health Insurance</SelectItem>
                    <SelectItem value="life">Life Insurance</SelectItem>
                    <SelectItem value="property">Property Insurance</SelectItem>
                    <SelectItem value="vehicle">Vehicle Insurance</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Password */}
              <div className="space-y-1">
                <Label htmlFor="password">Create password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type="password"
                    placeholder="Create a secure password"
                    className="pl-10 h-12 border-gray-300"
                  />
                  <LockIcon className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Must be at least 8 characters long with 1 number and 1 special
                  character
                </p>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-start">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                className="h-4 w-4 mt-1 text-indigo-700 border-gray-300 rounded"
              />
              <label
                htmlFor="terms"
                className="ml-2 block text-sm text-gray-700"
              >
                I agree to the{" "}
                <a href="#" className="text-indigo-700 hover:text-indigo-600">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-indigo-700 hover:text-indigo-600">
                  Privacy Policy
                </a>
              </label>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full h-12 bg-indigo-700 hover:bg-indigo-800 text-white text-base"
            >
              Create account
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </form>

          {/* Sign In Link */}
          <p className="mt-8 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <a
              href="#"
              className="font-medium text-indigo-700 hover:text-indigo-600"
            >
              Sign in here
            </a>
          </p>
        </div>
      </div>

      {/* Right Panel - Image and Content */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-500 to-indigo-700">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <Image
            src="/family.jpg"
            width={400}
            height={600}
            alt="Insurance"
            className="absolute inset-0 h-full w-full object-cover mix-blend-overlay"
          />
        </div>
        <div className="relative h-full flex items-center px-12">
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-6">
              Join our insurance community
            </h2>
            <p className="text-lg text-gray-100 mb-8">
              Get access to comprehensive insurance coverage and expert support
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600">
                  <span className="text-xl">✓</span>
                </div>
                <p className="ml-4 text-gray-100">24/7 customer support</p>
              </div>
              <div className="flex items-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600">
                  <span className="text-xl">✓</span>
                </div>
                <p className="ml-4 text-gray-100">Flexible payment options</p>
              </div>
              <div className="flex items-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600">
                  <span className="text-xl">✓</span>
                </div>
                <p className="ml-4 text-gray-100">Customized coverage plans</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
