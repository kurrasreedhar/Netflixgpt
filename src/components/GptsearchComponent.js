import {MovieList} from "./movieList";
import { useSelector } from "react-redux";
export const GptSearchComponent=()=>{
   
     const {gptMoviesNames,gptMoviesResults} = useSelector(store=>store?.gpt)
    if(!gptMoviesNames) return null;

    return<div className="p-4,m-4 mt-5 ml-5 mr-5 bg-black text-white opacity-95">
        <div> 
            {gptMoviesNames?.map((mveName,index)=>(<MovieList 
             key={mveName} 
             title={mveName} 
             MveList={gptMoviesResults[index]}/>
             ))}
    </div>
</div>}