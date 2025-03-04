
"use client";

import React, { ReactNode, useEffect } from "react";
import { SessionProvider, useSession } from "next-auth/react";
import { useRouter , usePathname} from "next/navigation";
import { LoadingSpinner } from "@/components/loading-spinner";

interface Props {
  children: ReactNode;
}

const NextAuthProvider = ({ children }: Props) => {
  return (
    <SessionProvider>
      <AuthWrapper>{children}</AuthWrapper>
    </SessionProvider>
  );
};

const AuthWrapper = ({ children }: { children: ReactNode }) => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const excludedPaths = ["/login", "/", "/reset-password", 
    "/reset-password-form", "/reset-password-form/:param1/:param2", , "/confirmation"]; 

  const pathname = usePathname(); // Get the current pathname

  const redirectPaths = ["/login", "/register",  "/reset-password"]; 


  // const isExcludedPath = (ex) => {
  //   return excludedPaths.some((path) => {
  //     const matcher = match(path, { decode: decodeURIComponent });
  //     return matcher(ex);
  //   });
  // };

  useEffect(() => {
    // Check if session is loading or the user is not authenticated
    if (status === "loading") return; // Don't redirect while loading
    // if (!session) {
    //   router.push("/login"); // Redirect to login page if user is not logged in
    // }
    // if (!session && !isExcludedPath(pathname)) {
    //   router.push("/login"); // Redirect to login page if user is not logged in and path is not excluded
    // }
    if (
      !session &&
      !excludedPaths.some(
        (path) =>
          pathname === path || pathname.startsWith("/reset-password-form")
      )
    ) {
      // console.debug("Redirecting to login page");
      router.push("/login"); // Redirect to login page
    }

    // if 


    // If user is logged in and is on any of the specified paths, redirect them
    if (session && redirectPaths.includes(pathname)) {
      router.push("/"); // Redirect to homepage or another page you prefer
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session, status, router]);

  if (status === "loading") {
    return (
      <LoadingSpinner />
    ); // Show a loading state while session is being checked
  }

  // if (!session) {
  //   // return null; // Don't render anything if user is not logged in
  //   router.push("/login");
  // }

  return <>{children}</>;
};

export default NextAuthProvider;