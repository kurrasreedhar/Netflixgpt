import { useEffect } from "react"
import {options} from "../UTILS/Contants"
import { useDispatch } from "react-redux"
import { addNowPlayingList } from "../redux/moviesSlice"
   
   const NowPlaying =()=>{
    const dispatch= useDispatch()

     useEffect(()=>{
    GetNowPlayingMovies()
    },[])

    const GetNowPlayingMovies=async()=>{
        const data= await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1", options)
        const mdata= await data?.json()
         dispatch(addNowPlayingList(mdata?.results))
    
         }
         return(<div>
            
         </div>)
}
export default NowPlaying


    