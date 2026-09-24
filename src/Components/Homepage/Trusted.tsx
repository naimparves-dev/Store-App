import React from "react";

const Trusted = () => {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-purple-400 py-12 text-white">
      
      {/* Heading */}
      <h2 className="text-center text-3xl font-bold">
        Trusted By Millions, Built For You
      </h2>

      {/* Statistics */}
      <div className="mx-auto mt-7 grid max-w-4xl grid-cols-3 text-center">

        {/* Downloads */}
        <div>
          <p className="text-xs text-purple-100">
            Total Downloads
          </p>

          <h3 className="mt-2 text-4xl font-bold">
            29.6M
          </h3>

          <p className="mt-2 text-xs text-purple-100">
            21% More Than Last Month
          </p>
        </div>

        {/* Reviews */}
        <div>
          <p className="text-xs text-purple-100">
            Total Reviews
          </p>

          <h3 className="mt-2 text-4xl font-bold">
            906K
          </h3>

          <p className="mt-2 text-xs text-purple-100">
            46% More Than Last Month
          </p>
        </div>

        {/* Apps */}
        <div>
          <p className="text-xs text-purple-100">
            Active Apps
          </p>

          <h3 className="mt-2 text-4xl font-bold">
            132+
          </h3>

          <p className="mt-2 text-xs text-purple-100">
            31 More Will Launch
          </p>
        </div>

      </div>
    </section>
  );
};

export default Trusted;