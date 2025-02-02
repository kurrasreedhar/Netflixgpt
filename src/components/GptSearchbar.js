import {AIKEY} from "../UTILS/Contants";
import { useRef } from "react";
import { GoogleGenerativeAI } from '@google/generative-ai';
import { options } from "../UTILS/Contants";
import { useDispatch } from "react-redux";
import {addgptMovies} from "../redux/gptSlice"

export const GptSearchbar=()=>{
    const genAI = new GoogleGenerativeAI(AIKEY);
    const dispatch=useDispatch()
    const inputValues=useRef(null)

    const Searchmves=async(mve)=>{
     const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+ mve +"&include_adult=false&language=en-US&page=1", options);
         const array = await data.json()
        return array.results
      }  
    
    const HandleGptSearchfn=async()=>{
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query : " 
        + inputValues.current.value + 
        ". only give me names of 5 movies, comma seperated like the example result given ahead.Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

const result = await model.generateContent(gptQuery);
if(!result)return 
const gptMovies = result?.response?.candidates[0]?.content?.parts[0]?.text?.split(",")
console.log(gptMovies)
const tmdbMovies=  await Promise.all(gptMovies.map(mve=>Searchmves(mve)))
console.log(tmdbMovies)
dispatch(addgptMovies({gptMoviesNames:gptMovies,gptMoviesResults:tmdbMovies}))


} 
    
    return(<div className=" w-full pt-44 md:pt-32  ">
        <form onSubmit={(e)=>e.preventDefault()} className=" w-full md:w-full px-2 md:px-60 grid grid-cols-12  ">
    <input type="text"  placeholder="what you want to watch today" ref={inputValues} className="w-full md:w-full col-span-10 px-2 py-2.5 rounded-lg "/>
    <button   onClick={HandleGptSearchfn} className="col-span-2 text-white text:sm md:text-xl bg-red-800 mx-1 md:mx-4 my-0.5 rounded-lg">Search</button>
    </form>
    </div>)
}