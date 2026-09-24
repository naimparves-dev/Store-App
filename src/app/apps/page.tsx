import AppCard from "@/Components/Shared/AppCard";
import { getApps } from "@/lib/Apps";
import { TApp } from "@/Type/Type";
import React from "react";


const AllAppsPage = async () => {
  const data: TApp[] = await getApps();

  return (
    <main className="px-4 py-12">
      <div className="container mx-auto max-w-[1400px]">
        {/* Heading */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Our All Applications
          </h1>

          <p className="mt-2 text-gray-500">
            Explore all applications available on our platform
          </p>
        </div>

        {/* All Apps */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default AllAppsPage;