import { Head } from "./Head"
import  NowPlaying  from "../Hooks/useNowPlaying"
import { Popularmvs } from "../Hooks/usePopular"
import { Toprated } from "../Hooks/useToprated"
import { Upcomingmvs } from "../Hooks/useUpcoming"
import { Maincomponent } from "./BMaincomp"
import {Secondary} from "../components/SecondaryComp";
import { useEffect } from "react";
import {removeTitles,removeviewTrailer} from "../redux/moviesSlice"
import { useDispatch, useSelector } from "react-redux"
import {GptSearch} from "./GPTsearch"
import {removeGptMnames,removeGptMresults} from "../redux/gptSlice"


export const Browse=()=>{
    const gptvalue=useSelector(store=>store.gpt.showGptSearch)
    const dispatch= useDispatch()
    const titles=  useSelector(store=>store.titles)
    const viewTrailer=useSelector(store=>store.viewTrailer)
    useEffect(()=>{
        if(!titles && !viewTrailer){
        dispatch(removeTitles())
        dispatch(removeviewTrailer())}
        if(!gptvalue){
            dispatch(removeGptMnames())
            dispatch(removeGptMresults())
        }

    },[titles,viewTrailer,gptvalue])
   
    NowPlaying()
    Popularmvs()
    Toprated()
    Upcomingmvs()
    
    return(
    <div>
        {gptvalue?  <GptSearch/> :
         <><Head/>
        <Maincomponent/>
        <Secondary/></> 
     
        }
      
    </div>)
}