import { Head } from "./Head"
import logo from "../Images/bgimg.jpg"
import { GptSearchbar } from "./GptSearchbar"
import { GptSearchComponent } from "./GptsearchComponent"

export const GptSearch=()=>{
    return<div className="">
     <Head/>
     <div className="fixed -z-10 ">
     <img src={logo} className="w-screen h-screen object-cover" />
     </div>
      <GptSearchbar/>
      <GptSearchComponent/>
    </div>
}