import {configureStore} from "@reduxjs/toolkit";
import userreducer from "./userSlice";
import moviesreducer from "./moviesSlice";
import gptreducer from "./gptSlice";

const appStore=configureStore({

    reducer:{
         user:userreducer,
         movies:moviesreducer,
         gpt:gptreducer
    }

})

export default appStore