export const getApps=async()=>{
    const res=await fetch("http://localhost:3000/data.json", {cache:"force-cache"})
    const data=await res.json();
    return data
}