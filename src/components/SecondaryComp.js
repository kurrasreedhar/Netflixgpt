import { useSelector } from "react-redux"
import {MovieList} from "./movieList";


export const Secondary=()=>{

 const nmovies=useSelector(store=>store.movies.nowPlaying)
  const tmovies=useSelector(store=>store.movies.topRated)
  
 const umovies=useSelector(store=>store?.movies.upComing)
 const pmovies=useSelector(store=>store?.movies?.popular);
  
 

    return(<div className=" bg-black">
      <div className="mt-0 md:-mt-52 pl-4 md:pl-10  relative">
      <MovieList MveList={nmovies} title={"Nowplaying"}/>
    <MovieList MveList={pmovies} title={"Popular"}/>
      <MovieList MveList={tmovies} title={"Toprated"}/>
      <MovieList MveList={umovies} title={"Upcoming"}/>
     
      </div>
    </div>)
}