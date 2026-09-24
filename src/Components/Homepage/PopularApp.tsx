import { getApps } from "@/lib/Apps";
import { TApp } from "@/Type/Type";
import React from "react";
import AppCard from "../Shared/AppCard";

const PopularApp = async () => {
  const data: TApp[] = await getApps();

  return (
    <section className="px-4 py-12">
      <div className="container mx-auto max-w-[1300px]">
        {/* Section Header */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Trending Apps
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        {/* App Cards */}
        <div className="grid grid-cols-4 gap-3">
          {data.slice(0, 8).map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularApp;