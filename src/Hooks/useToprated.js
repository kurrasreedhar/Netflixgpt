
import { useDispatch } from "react-redux";
import { addTopratedList } from "../redux/moviesSlice";
import { options } from "../UTILS/Contants";
import { useEffect } from "react";

export const Toprated=()=>{
   const dispatch =useDispatch()

   useEffect(()=>{
      GetToprated()
   },[])
    const GetToprated=async()=>{

       const data= await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
       const Mdata = await data?.json()
       dispatch( addTopratedList(Mdata?.results))

    }
}
