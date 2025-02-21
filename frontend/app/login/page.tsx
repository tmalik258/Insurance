import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LockIcon, MailIcon, ChevronRight, Hexagon } from "lucide-react";
import Image from "next/image";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Login Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-4 sm:px-6 lg:px-8 bg-white">
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
            <h2 className="text-3xl font-bold text-gray-900">Welcome back</h2>
            <p className="mt-2 text-sm text-gray-600">
              Please enter your credentials to access your account
            </p>
          </div>

          {/* Login Form */}
          <form className="space-y-6">
            <div className="space-y-1">
              <Label
                htmlFor="email"
                className="text-sm font-medium text-gray-700"
              >
                Email address
              </Label>
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

            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <Label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-700"
                >
                  Password
                </Label>
                <a
                  href="#"
                  className="text-sm font-medium text-indigo-700 hover:text-indigo-600"
                >
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="pl-10 h-12 border-gray-300"
                />
                <LockIcon className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-700 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-700"
              >
                Keep me signed in
              </label>
            </div>

            <Button
              type="submit"
              className="w-full h-12 bg-indigo-700 hover:bg-indigo-800 text-white text-base"
            >
              Sign in to your account
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </form>

          {/* Sign Up Link */}
          <p className="mt-8 text-center text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <a
              href="#"
              className="font-medium text-indigo-700 hover:text-indigo-600"
            >
              Create an account
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
              Secure your future with confidence
            </h2>
            <p className="text-lg text-gray-100 mb-8">
              Access your insurance portfolio and manage your policies with our
              easy-to-use portal
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-2">
                <Image
                  src="/family.jpg"
                  width={400}
                  height={600}
                  alt="User"
                  className="h-10 w-10 rounded-full border-2 border-white"
                />
                <Image
                  src="/family.jpg"
                  width={400}
                  height={600}
                  alt="User"
                  className="h-10 w-10 rounded-full border-2 border-white"
                />
                <Image
                  src="/family.jpg"
                  width={400}
                  height={600}
                  alt="User"
                  className="h-10 w-10 rounded-full border-2 border-white"
                />
              </div>
              <p className="text-sm text-gray-100">
                Join thousands of satisfied customers
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
