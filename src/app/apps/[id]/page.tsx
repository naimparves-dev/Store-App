import React from "react";
import { TApp } from "@/Type/Type";
import { getApps } from "@/lib/Apps";
import InstallAppButton from "@/Components/Shared/InstallAppButton";
import App from "next/app";

interface AppDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

const AppDetailPage = async ({ params }: AppDetailPageProps) => {
  const { id } = await params;

  const allApps: TApp[] = await getApps();

  const app = allApps.find(
    (app: TApp) => app.id === Number(id)
  );

  if (!app) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold">
            App Not Found
          </h2>

          <p className="mt-2 text-base-content/60">
            The application you are looking for does not exist.
          </p>
        </div>
      </div>
    );
  }

  const maxRating = Math.max(
    ...app.ratings.map((rating) => rating.count)
  );

  return (
    <main className="bg-base-200 py-10">
      <div className="container mx-auto max-w-[1200px] px-4">

        {/* App Header */}
        <div className="card bg-base-100 shadow-sm">
          <div className="card-body">

            <div className="flex flex-col gap-8 md:flex-row">

              {/* App Image */}
              <div className="shrink-0">
                <div className="flex h-[220px] w-[220px] items-center justify-center rounded-xl bg-base-200 p-5">
                  <img
                    src={app.image}
                    alt={app.title}
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>

              {/* App Information */}
              <div className="flex-1">

                <h1 className="text-3xl font-bold">
                  {app.title}
                </h1>

                <p className="mt-2 text-sm text-base-content/60">
                  Developed by{" "}
                  <span className="font-medium text-primary">
                    {app.companyName}
                  </span>
                </p>

                <div className="divider my-3" />

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6">

                  <div>
                    <p className="text-xs text-base-content/60">
                      Downloads
                    </p>

                    <h3 className="mt-1 text-xl font-bold">
                      {app.downloads}
                    </h3>
                  </div>

                  <div>
                    <p className="text-xs text-base-content/60">
                      Average Rating
                    </p>

                    <h3 className="mt-1 text-xl font-bold">
                      {app.ratingAvg}
                    </h3>
                  </div>

                  <div>
                    <p className="text-xs text-base-content/60">
                      Total Reviews
                    </p>

                    <h3 className="mt-1 text-xl font-bold">
                      {app.reviews}
                    </h3>
                  </div>

                </div>

                {/* Install */}
                <InstallAppButton app={app}></InstallAppButton>

              </div>
            </div>
          </div>
        </div>

        {/* Ratings */}
        <div className="card mt-6 bg-base-100 shadow-sm">
          <div className="card-body">

            <h2 className="card-title">
              Ratings
            </h2>

            <div className="mt-4 space-y-3">

              {app.ratings
                .slice()
                .reverse()
                .map((rating) => {

                  const percentage =
                    (rating.count / maxRating) * 100;

                  return (
                    <div
                      key={rating.name}
                      className="flex items-center gap-3"
                    >
                      <span className="w-12 text-xs text-base-content/60">
                        {rating.name}
                      </span>

                      <progress
                        className="progress progress-warning h-3 flex-1"
                        value={percentage}
                        max="100"
                      />

                      <span className="w-16 text-right text-xs text-base-content/50">
                        {rating.count}
                      </span>
                    </div>
                  );
                })}

            </div>
          </div>
        </div>

        {/* Description */}
        <div className="card mt-6 bg-base-100 shadow-sm">
          <div className="card-body">

            <h2 className="card-title">
              Description
            </h2>

            <div className="mt-3 text-sm leading-7 text-base-content/70">
              <p>{app.description}</p>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
};

export default AppDetailPage;