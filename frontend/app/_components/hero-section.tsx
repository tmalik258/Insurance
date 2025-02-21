import Image from "next/image";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <div className="relative h-[500px] w-full">
      <div className="absolute inset-0">
        <Image
          src="/Family_Portrait.jpg"
          width={400}
          height={400}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold text-white mb-4">
            Welcome to Modern Insurance®
          </h1>
          <p className="text-xl text-white mb-8">
            One-of-a-kind coverage.
            <br />
            For one-of-a-kind lives.
          </p>
          <Button size="lg">Learn more</Button>
        </div>
      </div>
    </div>
  );
}
