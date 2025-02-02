import { createSlice } from "@reduxjs/toolkit";

export const gptSlice=createSlice({
    name:"Gpt",
    initialState:{
        showGptSearch:false,
        gptMoviesNames:null,
        gptMoviesResults:null
    },
    reducers:{
        toggleGpt:(state,action)=>{
            state.showGptSearch=!state.showGptSearch
        },
        addgptMovies:(state,action)=>{
            const {gptMoviesNames,gptMoviesResults}=action.payload;
            state.gptMoviesNames=gptMoviesNames;
            state.gptMoviesResults=gptMoviesResults
        },
        removeGptMnames:(state,action)=>{
         state.gptMoviesNames=null},
         removeGptMresults:(state,action)=>{
            state.gptMoviesResults=null}
    }
})
export const {toggleGpt,addgptMovies,removeGptMnames,removeGptMresults}= gptSlice.actions;
export default gptSlice.reducer;