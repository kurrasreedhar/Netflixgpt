
import Logo from "../Images/Netflix_Logo_PMS.png";
import { signOut } from "firebase/auth";
import { auth } from "../UTILS/firebase";
import { useSelector } from "react-redux";
import {  onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react"
import { addUser, removeUser } from "../redux/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleGpt } from "../redux/gptSlice";

export const Head=()=>{
     const user= useSelector(store=>store.user)
    const gptclick=useSelector(store=>store.gpt.showGptSearch)
     const dispatch=useDispatch()
     const Navigate= useNavigate()
    
   const GptSearch=()=>{
    dispatch(toggleGpt())
   } 
 
 const handleSignout=()=>{
         signOut(auth).then(() => {
       
 }).catch((error) => {
     console.log(error)
 });}
 
 useEffect(()=>{
       
   const unsubcribe=
     onAuthStateChanged(auth, (user) => {
             if (user) {
      const {uid,email,displayName,photoURL} = user
      dispatch(addUser({uid:uid,email:email,displayName:displayName,
          photoURL:photoURL
      }))
      Navigate("/browse")
      
    } 
    else {
       dispatch(removeUser())
       Navigate("/")
      }})
  return ()=>unsubcribe();},[])


    return(<div className=" w-full z-10 absolute flex flex-col md:flex-row justify-between items-center bg-gradient-to-b from-black  ">
    
      <img className="w-44 h-20 mx-auto md:mx-0" src={Logo} alt="Logo"/>
       { user &&<div className="w-full md:w-full  flex justify-between md:justify-end  mx-2 " >
        <button onClick={GptSearch}
           className="mb-12 md:mb-4 my-0  md:my-7 mx-6 px-3 py-1  bg-blue-900 text-white font-bold text-lg md:text-lg z-10 cursor-pointer rounded-lg">
            {!gptclick? "Gpt Search" : "Home"  }</button>
         <img className="w-0  md:w-12 h-0 md:h-12 my-0 md:my-3  " src={user.photoURL}/>
         
       <  button  onClick={handleSignout}
          className="mb-10 md:mb-0 my-0  md:my-3  p-2 text-white font-bold text-lg md:text-lg z-10 cursor-pointer rounded-lg">Sign Out</button></div>}

</div>)
}