import { useEffect } from "react";
import {options} from "../UTILS/Contants"
import { useDispatch, useSelector } from "react-redux";
import { addTrailerlist } from "../redux/moviesSlice";


export const useTrailer=(mveid)=>{
   const Trailer= useSelector(store=>store.movies.trailers)
   const dispatch= useDispatch()



const Getdata =async()=>{
    const dataa= await fetch('https://api.themoviedb.org/3/movie/'+ mveid +'/videos?language=en-US', options)
    const data= await dataa?.json()
   
    const Filterdata= data.results.filter((video)=> video.type==="Trailer")
    const trailer = Filterdata.length? Filterdata[0] : data.results[0]
     dispatch(addTrailerlist(trailer))
  
   }

   useEffect(()=>{
     !Trailer && Getdata()
     },[]) 


   return(<div>

   </div>)
}