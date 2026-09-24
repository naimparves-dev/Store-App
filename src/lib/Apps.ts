export const getApps=async()=>{
    const res=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/data.json`)
    const data=await res.json();
    return data
}