"use client";

import * as z from "zod";
import { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, Hexagon } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner"; // Using sonner for toast notifications

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Register = () => {
  const router = useRouter();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const formSchema = z.object({
    userType: z.enum(["individual", "business"]),
    first_name: z.string().optional(),
    last_name: z.string().optional(),
    primary_first_name: z.string().min(1, "Primary first name is required"),
    primary_last_name: z.string().min(1, "Primary last name is required"),
    policy_number: z.string().min(1, "Policy number is required"),
    zip_code: z
      .string()
      .refine((val) => (val ? /^\d{5}$/.test(val) : true), {
        message: "ZIP code must be 5 digits",
      })
      .transform((val) => (val ? parseInt(val, 10) : undefined)),
    password: z.string().min(8, "Password must be at least 8 characters long"),
    confirm_password: z.string().min(8, "Password must be at least 8 characters long"),
    username: z.string().min(1, "Username is required"),
    email: z.string().email("Please enter a valid email address"),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userType: "individual",
      first_name: "",
      last_name: "",
      primary_first_name: "",
      primary_last_name: "",
      policy_number: "",
      zip_code: undefined,
      password: "",
      confirm_password: "",
      email: "",
      username: "",
    },
  });

  const [selectedType, setSelectedType] = useState("individual");

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/register/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || "Registration failed");
      }

      await response.json();
      toast.success("Registration successful! Please sign in.");
      router.push("/login"); // Redirect to login page after successful registration
    } catch (error) {
      console.error("Registration error:", error);
      if (error instanceof Error) {
        toast.error(error.message || "An error occurred during registration");
      } else {
        toast.error("An error occurred during registration");
      }
    }
  };

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
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="flex gap-4 mb-8">
                <Button
                  type="button"
                  className="flex-1"
                  variant={
                    selectedType === "individual" ? "default" : "outline"
                  }
                  onClick={() => {
                    form.setValue("userType", "individual");
                    setSelectedType("individual");
                  }}
                >
                  Individual
                </Button>
                <Button
                  type="button"
                  className="flex-1"
                  variant={selectedType === "business" ? "default" : "outline"}
                  onClick={() => {
                    form.setValue("userType", "business");
                    setSelectedType("business");
                  }}
                >
                  Business
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your username" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            type={passwordVisible ? "text" : "password"}
                            placeholder="Enter your password"
                            {...field}
                            className="pr-10" // Add padding to accommodate the icon
                          />
                          <button
                            type="button"
                            onClick={() => setPasswordVisible(!passwordVisible)}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                            aria-label={
                              passwordVisible ? "Hide password" : "Show password"
                            }
                          >
                            {passwordVisible ? (
                              <EyeOff className="h-5 w-5" />
                            ) : (
                              <Eye className="h-5 w-5" />
                            )}
                          </button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="confirm_password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            type={confirmPasswordVisible ? "text" : "password"}
                            placeholder="Confirm your password"
                            {...field}
                            className="pr-10" // Add padding to accommodate the icon
                          />
                          <button
                            type="button"
                            onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                            aria-label={
                              confirmPasswordVisible ? "Hide password" : "Show password"
                            }
                          >
                            {confirmPasswordVisible ? (
                              <EyeOff className="h-5 w-5" />
                            ) : (
                              <Eye className="h-5 w-5" />
                            )}
                          </button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {selectedType === "individual" && (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="primary_first_name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Primary First Name Insured</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your first name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="primary_last_name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Primary Last Name Insured</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your last name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="policy_number"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Policy Number</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your policy number"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="zip_code"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Coverage ZIP Code</FormLabel>
                          <FormControl>
                            <Input
                              maxLength={5}
                              placeholder="Enter your coverage ZIP Code"
                              type="number"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </>
              )}

              {selectedType === "business" && (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="first_name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your first name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="last_name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your last name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="primary_first_name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Primary First Name Insured</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your first name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="primary_last_name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Primary Last Name Insured</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your last name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="policy_number"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Policy Number</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your policy number"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="zip_code"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Coverage ZIP Code</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your coverage ZIP Code"
                              type="number"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </>
              )}

              <Button type="submit" className="mt-10">
                Register
              </Button>
            </form>
          </Form>

          {/* Sign In Link */}
          <p className="mt-8 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-indigo-700 hover:text-indigo-600"
            >
              Sign in here
            </Link>
          </p>
        </div>
      </div>

      {/* Right Panel - Image and Content */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-300 to-indigo-600">
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
