import { TApp } from "@/Type/Type";
import Link from "next/link";
import React from "react";

interface AppCardProps {
  app: TApp;
}

const AppCard = ({ app }: AppCardProps) => {
  return (
    <div className="w-full rounded-xl bg-white p-2 shadow-sm">
      {/* App Image */}
      <div className="h-[165px] w-full overflow-hidden rounded-lg bg-gray-200">
        <img
          src={app.image}
          alt={app.title}
          className="h-full w-full object-cover"
        />
      </div>

      {/* App Info */}
      <div className="px-1 pt-2">
        <h3 className="truncate text-sm font-semibold text-gray-800">
          {app.title}
        </h3>

        {/* Bottom Info */}
        <div className="mt-2 flex items-center justify-between">
          <span className="rounded bg-green-50 px-2 py-1 text-[10px] font-medium text-green-500">
            ↓ {app.downloads}
          </span>

          <span className="rounded bg-orange-50 px-2 py-1 text-[10px] font-medium text-orange-500">
            ★ {app.ratingAvg}
          </span>
        </div>

        {/* View Details */}
        <Link
          href={`/apps/${app.id}`}
          className="mt-3 block w-full rounded-md bg-[#E5008D] py-2 text-center text-xs font-medium text-white transition hover:bg-[#c90078]"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default AppCard;