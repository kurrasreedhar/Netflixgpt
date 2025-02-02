import { useEffect } from "react";
import { addTitles } from "../redux/moviesSlice";
import { options } from "../UTILS/Contants";
import { useDispatch, useSelector} from "react-redux";




  export const Mdetails =(id)=>  {
    const Titles=useSelector(store=>store.movies.titles)
    const dispatch= useDispatch()


    const Viewdetails=async()=> {
        const data= await  fetch( 'https://api.themoviedb.org/3/movie/'+id+'?language=en-US', options)
        const dataa= await data?.json()
        dispatch(addTitles(dataa))
        
      
      
      }
      useEffect(()=>{
        !Titles && Viewdetails()
        },[])

      return(<div>

      </div>)
     }