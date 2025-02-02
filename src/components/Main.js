import { BrowserRouter,Route,Routes } from "react-router-dom"
import { Loggin } from "./Loggin"
import {Browse} from "./Browse" 
import {Moviedetails} from "./movieDetails"



 function Main(){

         return(
    <div>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Loggin/>}/>
        <Route path="/browse" element={<Browse/>}/>
        <Route path="/browse/:id" element={<Moviedetails/>}/>
    </Routes>
    </BrowserRouter></div>
    );
};

export default Main