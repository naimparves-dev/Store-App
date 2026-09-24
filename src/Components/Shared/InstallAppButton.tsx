"use client"

import { AppContext } from '@/context/AppContext';
import { TApp } from '@/Type/Type';
import React, { useContext } from 'react';

const InstallAppButton = ({app}:{app:TApp}) => {

    const {installApps,setInstallApps}=useContext(AppContext)

    const handelInstallApps=()=>{
        setInstallApps([...installApps,app])
    }
    return (
        <button onClick={()=>handelInstallApps()} className="btn btn-success mt-7 text-white">
            Install Now
        </button>
    );
};

export default InstallAppButton;