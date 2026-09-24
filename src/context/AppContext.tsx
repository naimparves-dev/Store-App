"use client"

import React, { createContext, ReactNode, useState } from 'react';
import { TApp } from '@/Type/Type';


type IAppContext={
    installApps:TApp[];
    setInstallApps:React.Dispatch<React.SetStateAction<TApp[]>>
}

export const AppContext=createContext<IAppContext>({
    installApps:[],
    setInstallApps:()=>{},
}
)

const AppContextProvider = ({children}:{children:ReactNode}) => {
    const [installApps,setInstallApps]=useState<TApp[]>([])
    const sharedApps={
        installApps,
        setInstallApps
    }
    return (
        <AppContext.Provider value={sharedApps}>
            {children}
        </AppContext.Provider>
    );
};


export default AppContextProvider;