import { Head } from "./Head";
import  BGIMG from "../Images/bgimg.jpg"
import React,{useRef, useState} from "react"
import { validatefrom } from "../UTILS/Validate";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import{auth} from "../UTILS/firebase"
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";
import Userlogo from "../Images/userlogo.jpg"

export const Loggin=()=>{
   const [sign,setsign]=useState(true)
    const [error, seterror]= useState(null)
    const email=useRef(null)
    const password=useRef(null)
    const name=useRef(null)
    const dispatch= useDispatch()

    const formsubmisson=(e)=>{
        e.preventDefault()
      const msg = validatefrom(email?.current?.value ,password?.current?.value ,name?.current?.value,sign)
     seterror(msg);
     if(msg) return;
                      //signup//
          if(!sign){                      
               
                   createUserWithEmailAndPassword(auth, email?.current?.value ,password?.current?.value)
                   .then((userCredential) => {
                    const user = userCredential?.user;

            
                    updateProfile(user, {
                      displayName: name?.current?.value, photoURL:Userlogo
                    }).then(() => {
                       const {uid,email,displayName,photoURL}=auth?.currentUser
                       dispatch(addUser({
                        uid:uid,
                        email:email,
                        displayName:displayName,
                        photoURL:photoURL
                       }))
                       

                    }).catch((error) => {
                      console.log(error)
                    })
                  })
                   .catch((error) => {
                   const errorCode = error.code;
                   const errorMessage = error.message  ;
                   seterror(errorCode + "-" + errorMessage)
                  })
                  }
        else{
                    //sign in//
                    
                     signInWithEmailAndPassword(auth, email?.current?.value ,password?.current?.value)
                     .then((userCredential) => {
                      const user = userCredential?.user;
                      console.log(user)})
                    .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    seterror(errorCode + "-"+ errorMessage)})}
}
const Togglesign=()=>{
  setsign(!sign)
 }
   


      return(<div>
       <Head/>
        <div className="absolute"> 
      <img className="w-screen h-screen object-cover " src={BGIMG} alt="bgimg"/>
      </div>
  
        <div className=" w-full mx-auto my-28 md:my-36 left-0 right-0 absolute flex justify-center items-center ">
     
     <form onSubmit={formsubmisson} 
     className=" w-[80%] md:w-[23%] h-[80%] md:h-[70%] z-20 bg-black opacity-80 rounded-xl flex flex-col text-center ">

      <h1 className=" font-semibold text-2xl my-6 text-white " >{sign? "SIGN IN" :"SIGN UP"}</h1>

    {!sign &&  <input placeholder="Name"  
    className=" bg-gray-500 w-2/3 text-sm my-3 mx-12 py-2 px-2  rounded-xl text-white font-bold " ref={name} type="text"/>}
    {!sign && <p className=" text-white text-sm" >eg-Vijay</p>}
    <input placeholder="Email address" 
    className=" bg-gray-500 w-2/3 text-sm my-3 mx-12 py-2 px-2 rounded-xl text-white  font-bold"  ref={email} type="text"/>
     {!sign && <p className=" text-white text-sm" >eg-vijay123@gmail.com</p>}

    <input  placeholder="Password" 
    className=" bg-gray-500 w-2/3 text-sm my-3 mx-12 py-2 px-2 rounded-xl text-white font-bold" ref={password} type="password"/>
    {!sign && <p className=" text-white text-sm" >eg-Vijay123@</p>}
    <button  className=" w-2/3 bg-red-900 text-sm my-3 mx-12 cursor-pointer rounded-xl p-1.5  text-white" type="submit">submit</button>

    <p className="text-red-800">{error}</p>

    < p className="text-blue-500 underline cursor-pointer mx-3 my-5 text-lg " onClick={Togglesign}> 
    {sign? "new to netflix! signup now" : "already member? signin now"}</p>

        </form>
        </div>
    </div>)
}