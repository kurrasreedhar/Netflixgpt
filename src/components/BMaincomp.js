import { useSelector } from "react-redux";
import {Videotitle} from "./Videotitlee";
import { BgVideo } from "./Bgvideo";



export const Maincomponent=()=>{
  
    const Movies=useSelector(store=>store?.movies?.nowPlaying)

    if(!Movies) return;

    const Mainmovie=Movies[0]
  
    const {overview,title,id}=Mainmovie;
     

    return(<div className="pt-[25%] bg-black md:pt-0">
         
          <Videotitle overview_title={overview} mvetitle={title} />
          <BgVideo mveid={id}/> 
             

    </div>)

}