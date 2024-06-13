import { configureStore } from '@reduxjs/toolkit';
import CurrentViewSlice from './CurrentViewSlice';

import userReducer from './netflixClone/userSlice';
import movieReducer from './netflixClone/movieSlice';
import gptReducer from './netflixClone/gptSlice';
import configReducer from './netflixClone/configSlice';

import appSlice from './youtubeClone/appSlice';
import searchSlice from './youtubeClone/searchSlice';
import chatSlice from './youtubeClone/chatSlice';

const store = configureStore({
  reducer: {
    focus: CurrentViewSlice,

    // netflixClone
    user: userReducer,
    movies: movieReducer,
    gpt: gptReducer,
    config: configReducer,

    //youtubeClone
    app: appSlice,
    search: searchSlice,
    chat: chatSlice,
  },
});

export default store;
