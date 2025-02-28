import { useSelector } from "react-redux"
import { useTrailer } from "../Hooks/useTrailer"

export const BgVideo=({mveid})=>{

    const BGid= useSelector(store=>store?.movies?.trailers)
    
    useTrailer(mveid) 

    return(<div className="w-full">
        
        <iframe  className="  w-full aspect-video   "
        src={"https://www.youtube.com/embed/" + BGid?.key+"?autoplay=1&mute=1" } 
        title="YouTube video player"  allow="accelerometer; 
        autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
         referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>)
}