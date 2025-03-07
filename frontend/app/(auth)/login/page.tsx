"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

import { ChevronRight, Eye, EyeOff, Hexagon } from "lucide-react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import Link from "next/link";

// Define the form schema using Zod
const loginSchema = z.object({
  identifier: z.string().min(1, "Please enter your username or email"),
  password: z.string().min(1, "Password is required"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const LoginPage = () => {
  const router = useRouter();
  const [passwordVisible, setPasswordVisible] = useState(false);

  // Initialize the form with react-hook-form
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      identifier: "",
      password: "",
    },
  });

  // Handle form submission
  const onSubmit = async (data: LoginFormValues) => {
    console.log("Form submitted with:", data);
    try {
      const result = await signIn("credentials", {
        redirect: false,
        identifier: data.identifier, // Pass the identifier (username or email)
        password: data.password,
      });

      console.log("SignIn result:", result);

      if (result?.error) {
        toast.error("Incorrect username/email or password");
        form.setError("identifier", {
          type: "manual",
          message: "Invalid username/email or password",
        });
        form.setError("password", {
          type: "manual",
          message: "Invalid username/email or password",
        });
      } else if (result?.ok) {
        // Redirect to dashboard or home page after successful login
        toast.success("Logged in successfully!");
        router.push("/");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("An error occurred during login");
      form.setError("identifier", {
        type: "manual",
        message: "An error occurred during login",
      });
    }
  };

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
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="identifier"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel className="text-sm font-medium text-gray-700">
                      Username or Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your username or email"
                        className="pl-3 h-10 border-gray-300"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

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

              <Button
                type="submit"
                className="w-full h-12 bg-indigo-700 hover:bg-indigo-800 text-white text-base"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? "Signing in..." : "Sign in to your account"}
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </Form>

          {/* Sign Up Link */}
          <p className="mt-8 text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link
              href="/signup"
              className="font-medium text-indigo-700 hover:text-indigo-600"
            >
              Create an account
            </Link>
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