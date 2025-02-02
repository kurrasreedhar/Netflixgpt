import { useEffect } from "react"
import { addPopularList } from "../redux/moviesSlice"
import { useDispatch } from "react-redux"
import { options } from "../UTILS/Contants"

export const Popularmvs=()=>{

    const dispatch=useDispatch()

    useEffect(()=>{
       GetPopularmvs()
    },[])

 
 const GetPopularmvs=async()=>{
    const data= await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
    const mdata= await data?.json()
     dispatch( addPopularList(mdata?.results))
}}