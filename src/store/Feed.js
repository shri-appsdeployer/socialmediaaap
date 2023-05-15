import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  feeds: [
    {
      id:'101',
      name: "Shrinivas Joshi",
      role: "Software Engineer / Frontend Developer",
      postTime: "1w",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
        quaerat exercitationem fuga, nisi aspernatur quasi!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In, modi. Suscipit, at? Ad placeat non tempore, dicta hic doloribus sunt!`,
      image: "url",
      likes: 10,
      dislikes: 0,
    },
    {
        id:'102',
        name: "Kartik Kul",
        role: "Software Engineer / Frontend Developer",
        postTime: "1w",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          quaerat exercitationem fuga, nisi aspernatur quasi!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In, modi. Suscipit, at? Ad placeat non tempore, dicta hic doloribus sunt!`,
        image: "url",
        likes: 10,
        dislikes: 0,
      },
  ],
};

export const feedSlice = createSlice({
  name: "feeds",
  initialState,
  reducers: {
    incrementLike:(state,action)=>{
        state.feeds.map((item)=>{
            if(item.id == action.payload){
                item.likes++
            }
        })

    },
    incrementdisLike:(state,action)=>{
      state.feeds.map((item)=>{
          if(item.id == action.payload){
              item.dislikes++
          }
      })

  }
  },
});

// Action creators are generated for each case reducer function
export const {incrementLike,incrementdisLike} = feedSlice.actions;
export const getAllFeeds = (state) => state.feeds.feeds; // get the state of news


export default feedSlice.reducer;
