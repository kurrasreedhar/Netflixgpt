
import { useDispatch } from "react-redux";
import { addUpcomingList } from "../redux/moviesSlice";
import { options } from "../UTILS/Contants";
import { useEffect } from "react";

export const Upcomingmvs=()=>{
   const dispatch =useDispatch()

   useEffect(()=>{
      GetUpcoming()
   },[])
    const GetUpcoming=async()=>{

       const data= await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
       const Mdata = await data?.json()
       dispatch( addUpcomingList(Mdata?.results))

    }
}