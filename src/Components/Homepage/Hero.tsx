import Image from "next/image";
import React from "react";
import HeroImage from "@/assets/hero.png";

const Hero = () => {
  return (
    <section className="min-h-[800px] bg-white">

      {/* Hero Content */}
      <div className="mx-auto flex min-h-[350px] max-w-[1440px] flex-col items-center text-center pt-8">

        {/* Heading */}
        <h1 className="text-5xl font-bold leading-tight text-slate-800">
          We Build
          <br />
          <span className="text-purple-600">Productive</span> Apps
        </h1>

        {/* Description */}
        <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-500">
          At HERO.IO , we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.
          <br />
          Our goal is to turn your ideas into digital experiences that truly
          make an impact.
        </p>

        {/* Buttons */}
        <div className="mt-3 flex gap-3">
          <button className="flex items-center gap-2 rounded border border-gray-300 px-4 py-2 text-sm font-medium text-slate-700">
            ▶ Google Play
          </button>

          <button className="flex items-center gap-2 rounded border border-gray-300 px-4 py-2 text-sm font-medium text-slate-700">
             App Store
          </button>
        </div>
      </div>

      {/* Hero Image */}
      <div className="flex justify-center">
        <Image
          src={HeroImage}
          alt="Hero App"
          width={700}
          height={700}
          className="object-contain"
        />
      </div>

    </section>
  );
};

export default Hero;