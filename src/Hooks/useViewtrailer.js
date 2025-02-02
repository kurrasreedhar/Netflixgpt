import { useEffect } from "react";
import { addViewTrailer } from "../redux/moviesSlice";
import { options } from "../UTILS/Contants";
import { useDispatch, useSelector} from "react-redux";
 
 
 
 export const Mvedview=(id)=>{
   const Trailer=useSelector(store=>store.movies.viewTrailer)
   
    const dispatch= useDispatch()


    const Viewmd=async()=>{
        const dataa= await fetch('https://api.themoviedb.org/3/movie/'+ id +'/videos?language=en-US', options)
            const data= await dataa?.json()
           
            const Filterdata= data.results.filter((video)=> video.type==="Trailer")
            const trailer = Filterdata.length? Filterdata[0] : data.results[0]
            dispatch(addViewTrailer(trailer)) }


     useEffect(()=>{
           !Trailer && Viewmd()
           },[])

         return(<div>

         </div>)
        }