import { CDN_IMG } from "../UTILS/Contants"


export const Moviecard=({ posterpath})=>{

    if(!posterpath) return null;

    return(<div className="w-32 md:w-44 mr-2 bg-transparent">
        <img src={CDN_IMG+ posterpath} className="w-[90%] hover:border-red h-48 object-cover rounded-md" />

    </div>)


} 