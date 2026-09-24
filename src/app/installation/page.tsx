"use client"

import AppCard from '@/Components/Shared/AppCard';
import { AppContext } from '@/context/AppContext';
import React, { useContext } from 'react';

const InstallationPage = () => {
    const { installApps } = useContext(AppContext)
    return (
        <main className="px-4 py-12">
            <div className="container mx-auto max-w-[1400px]">
                {/* Heading */}
                <div className="mb-10 text-center">
                    <h1 className="text-3xl font-bold text-gray-900">
                        Our Install Applications
                    </h1>

                    <p className="mt-2 text-gray-500">
                        Explore all Install applications
                    </p>
                </div>

                {/* All Apps */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {installApps.map((app) => (
                        <AppCard key={app.id} app={app} />
                    ))}
                </div>
            </div>
        </main>
    );
};

export default InstallationPage;