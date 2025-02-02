import { createSlice } from "@reduxjs/toolkit";

const movieSlice= createSlice({
    name:"movies",
    initialState:{
        popular:null,
        nowPlaying:null,
        upComing:null,
        topRated:null,
    trailers:null,
    viewTrailer:null,
    titles:null},
        reducers:{
            addPopularList:(state,action)=>{
                state.popular=action.payload;
            },
            addNowPlayingList:(state,action)=>{
                state.nowPlaying=action.payload;
            },
            addUpcomingList:(state,action)=>{
                state.upComing=action.payload;
            },
             addTopratedList:(state,action)=>{
                state.topRated=action.payload;
            },
            addTrailerlist:(state,action)=>{
                state.trailers=action.payload;
            },
            addViewTrailer:(state,action)=>{
                state.viewTrailer=action.payload
            },
            addTitles:(state,action)=>{
                state.titles=action.payload
            },
            removeTitles:(state,action)=>{
                 state.titles= null},
                 removeviewTrailer:(state,action)=>{
                    state.viewTrailer=null},

        }

})

export const {addNowPlayingList,addPopularList,addTopratedList,addUpcomingList,addTrailerlist,addViewTrailer,
    removeviewTrailer,addTitles,removeTitles}=movieSlice.actions;
export default movieSlice.reducer