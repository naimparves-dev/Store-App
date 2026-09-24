import React from "react";

const Footer = () => {
  return (
    <footer className="mt-16 bg-gray-950 text-white">
      <div className="container mx-auto max-w-[1400px] px-4 py-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold">
              App<span className="text-pink-500">Market</span>
            </h2>

            <p className="mt-4 max-w-[280px] text-sm leading-6 text-gray-400">
              Discover, explore and download the best apps available on the
              market.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Company</h3>

            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="#" className="transition hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Resources</h3>

            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="#" className="transition hover:text-white">
                  Trending Apps
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Categories
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Developer Center
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Help Center
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>

            <p className="text-sm leading-6 text-gray-400">
              Stay connected with us and get the latest app updates.
            </p>

            <div className="mt-5 flex gap-3">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 text-sm transition hover:bg-pink-500"
              >
                f
              </a>

              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 text-sm transition hover:bg-pink-500"
              >
                X
              </a>

              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 text-sm transition hover:bg-pink-500"
              >
                in
              </a>

              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 text-sm transition hover:bg-pink-500"
              >
                ▶
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-gray-800 pt-6">
          <div className="flex flex-col items-center justify-between gap-3 text-sm text-gray-500 sm:flex-row">
            <p>© 2026 AppMarket. All rights reserved.</p>

            <div className="flex gap-5">
              <a href="#" className="transition hover:text-white">
                Privacy Policy
              </a>

              <a href="#" className="transition hover:text-white">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;