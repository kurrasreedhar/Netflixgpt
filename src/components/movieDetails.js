import {  useParams, } from "react-router-dom";
import {  useDispatch, useSelector } from "react-redux";
import { Mvedview } from "../Hooks/useViewtrailer";
import {Mdetails} from  "../Hooks/useViewdetails";
import { CDN_IMG } from "../UTILS/Contants"
import Logo from "../Images/Netflix_Logo_PMS.png";
import { PlayIcon } from '@heroicons/react/solid';
import { Link } from "react-router-dom";
import {removeTitles,removeviewTrailer} from "../redux/moviesSlice"
import { useState } from "react";

export const Moviedetails=()=>{
    const [showpopup,setshowpopup]=useState(false)
    const dispatch= useDispatch()
    const {id}= useParams()
    Mvedview(id)
    Mdetails(id)
    const view= useSelector(store=>store?.movies?.viewTrailer)
    const Titles=useSelector(store=>store?.movies?.titles)
    if(!view && !Titles) return <h1>no found</h1>
    const {original_title,poster_path,overview,tagline}= Titles || {}

    const closepup=()=>{
        setshowpopup(!showpopup)
    }
    const showpup=()=>{
        setshowpopup(!showpopup)
    }

    const Remove=()=>{
        dispatch(removeTitles())
        dispatch(removeviewTrailer())
    }
    
   return(<div className="w-full h-screen">
    <div className=" w-[40%] md:w-1/6 h-[40%] md:h-1/6 cursor-pointer bg-gradient-to-r from-neutral-100">
      <Link to="/browse">
        <img src={Logo} alt="Logo" className="w-full cursor-pointer" onClick={Remove} />
      </Link>
    </div>
  
    <div className="flex -mt-28 md:mt-0 p-1 md:p-8 bg-yellow-50">
      <div className="w-1/3 md:w-1/6 mx-6 md:mx-16">
        <img src={CDN_IMG + poster_path} alt="Movie Poster" className="w-full" />
      </div>
  
      <div className="w-1/2">
        <h1 className="font-bold text-xl md:text-4xl text-black">{original_title}</h1>
        <h2 className="text-gray-500 text-[90%] md:text-[110%] ">{tagline}</h2>
  
        <div className="mx-0 md:mx-28 relative">
          <button
            onClick={showpup}
            className="flex bg-black text-white hover:text-indigo-400 my-8 md:my-20 m-2 p-2.5 rounded-lg"
          >
            <PlayIcon className="h-6 w-6 mx-1" aria-hidden="true" /> Play Trailer
          </button>
        </div>
  
        <p className="text-black font-bold text-lg mt-28 hidden md:inline-block">Overview</p>
        <p className="w-full text-black text-sm hidden md:inline-block">{overview}</p>
      </div>
    </div>
     
    {showpopup && (
      <div className=" absolute inset-0 mt-40 md:mt-10 ml-6 md:ml-48 w-[85%] md:w-[70%] h-[35%] md:h-[90%] bg-black ">
        <div className="flex justify-between my-3 mx-6">
          <h1 className="text-white text:lg md:text-xl">Trailer</h1>
          <button className="text-white font-xl  p-0.5 hover:text-blue-800" onClick={closepup}>
            Close
          </button>
        </div>
        <div className="w-[98%] h-[50%] md:h-[98%] pl-3">
          <iframe
            className="aspect-video w-full "
            src={`https://www.youtube.com/embed/${view?.key}?autoplay=1&mute=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    )}
    </div>
  
   )  
            }