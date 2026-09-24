import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/assets/logo.png";

const Navber = () => {
  return (
    <nav className="h-16 border-b border-gray-200 bg-white px-6 flex items-center justify-between">

      {/* Logo */}
      <div className="flex items-center gap-2">
        <Image
          src={Logo}
          alt="Hero.io Logo"
          width={32}
          height={32}
        />

        <span className="text-sm font-bold text-indigo-600">
          HERO.IO
        </span>
      </div>

      {/* Menu */}
      <div className="flex items-center gap-8">
        <Link
          href="/"
          className="text-sm font-medium text-indigo-600"
        >
          Home
        </Link>

        <Link
          href="/apps"
          className="text-sm font-medium text-gray-600 hover:text-indigo-600"
        >
          Apps
        </Link>

        <Link
          href="/installation"
          className="text-sm font-medium text-gray-600 hover:text-indigo-600"
        >
          Installation
        </Link>
      </div>

      {/* Contribute */}
      <button className="flex items-center gap-2 rounded-md bg-purple-600 px-4 py-2 text-sm font-semibold text-white hover:bg-purple-700">
        <span>●</span>
        Contribute
      </button>

    </nav>
  );
};

export default Navber;