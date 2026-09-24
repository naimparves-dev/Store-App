import React from "react";

const LoadingPage = () => {
  return (
    <main className="px-4 py-12">
      <div className="container mx-auto max-w-[1400px]">
        {/* Heading Skeleton */}
        <div className="mb-10 text-center">
          <div className="mx-auto h-9 w-64 animate-pulse rounded-md bg-gray-200" />

          <div className="mx-auto mt-3 h-4 w-96 max-w-full animate-pulse rounded bg-gray-200" />
        </div>

        {/* Cards Skeleton */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="w-full rounded-xl bg-white p-2 shadow-sm"
            >
              {/* Image */}
              <div className="h-[165px] w-full animate-pulse rounded-lg bg-gray-200" />

              {/* Title */}
              <div className="mt-3 h-4 w-3/4 animate-pulse rounded bg-gray-200" />

              {/* Bottom */}
              <div className="mt-3 flex items-center justify-between">
                <div className="h-5 w-12 animate-pulse rounded bg-gray-200" />

                <div className="h-5 w-10 animate-pulse rounded bg-gray-200" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default LoadingPage;