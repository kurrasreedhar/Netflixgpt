import { PlayIcon, InformationCircleIcon } from '@heroicons/react/solid';



export  const Videotitle=( {overview_title,mvetitle})=>{


    return(
        <div className="w-full aspect-video  absolute bg-gradient-to-br from-black pt-[2%] md:pt-[10%] pl-5 md:pl-16  ">
            <h1 className="font-bold mt-16 md:mt-0 text-lg md:text-4xl text-white  ">{mvetitle}</h1>
            <h1 className=" hidden md:inline-block font-bold mt-10 w-[30%]  text-white text-xl">{overview_title}</h1>
            <div className='flex mt-8 ' > 
                <button className=' flex bg-gray-700 text-white m-2 p-2.5 rounded-lg'>
                <PlayIcon className=" h-6 w-6 mx-1 " aria-hidden="true"/>Play</button>
                <button className='hidden md:flex bg-gray-700 text-white m-2 p-2 rounded-lg ' >
  <InformationCircleIcon className="   h-6 w-6" aria-hidden="true" />  More Info
</button>

            </div>
            
        </div>
    )
}