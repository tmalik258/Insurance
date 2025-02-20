import Image from "next/image";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl font-bold text-indigo-700 leading-tight mb-6">
            Map and protect your lifetime wealth on a single online platform.
          </h1>
          <p className="text-gray-600 mb-8">
            Use Generix Insurance to collate all of your lifetime assets.
            Generate a Will template, fast.
          </p>
          <Button className="bg-indigo-700 px-8 py-6 text-lg">
            Get the best quotes
          </Button>
        </div>

        <div className="relative">
            <div className="p-0 relative bg-transparent shadow-md">
              <Image
                width={600}
                height={400}
                src="/family.jpg"
                alt="Family relaxing"
                className="w-full object-cover rounded-lg"
              />
            </div>
          <div className="absolute -z-10 top-8 right-8 w-24 h-24 bg-yellow-400 rounded-full" />
          <div className="absolute -z-10 bottom-8 left-8 w-16 h-16 bg-blue-400 rounded-full" />
          <div className="absolute -z-10 top-1/2 left-16 w-12 h-12 bg-cyan-400 rounded-full" />
        </div>
      </div>
    </div>
  );
}
