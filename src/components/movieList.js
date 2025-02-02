import{ Moviecard} from "./Moviecard"
import React, { useRef } from 'react';
import { Link } from "react-router-dom";


export const MovieList=({MveList,title})=>{
  const sliderRef = useRef(null);
  const scrollAmount = 450;
  
  if(!MveList) return null;
    return(
        <div className=" pb-5" >

      <div className=" flex justify-between px-4 md:px-7 ">

       <h1 className=" font-bold text-xl md:text-3xl text-white" > {title} </h1>

       <div className="flex ">
       <button className="text-white text-2xl md:text-3xl rounded-lg w-8 h-8 flex items-center justify-center "
         onClick={() => {
          const container = sliderRef.current;
          container.scrollLeft -= scrollAmount;} }>
        &#60; </button>

        <button className="text-white text-2xl md:text-3xl  rounded-lg w-8 h-8 flex items-center justify-center "
        onClick={() => {
          const container = sliderRef.current;
          container.scrollLeft += scrollAmount; 
        }}>
        &#62;  </button>
        </div>
        </div> 
        <div className="flex overflow-hidden" ref={sliderRef} style={{scrollBehavior:"smooth", transition:"0.4s" }}>
        <div className="flex pl-10 mt-5 bg-transparent"> 
        {MveList.length?    MveList.map((category)=><Link to={"/browse/"+category.id}   key={category?.id}><Moviecard posterpath={category?.poster_path} /> </Link> ): <p>no movies </p>}
        </div>
         </div>
        
       </div>
    )
}