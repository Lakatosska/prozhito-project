import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {createLogger} from "redux-logger";
import {newsAPI} from "../api/news";
import newsReducer from "../slices/news"

export const rootReducer = combineReducers({
  news: newsReducer,
  [newsAPI.reducerPath]: newsAPI.reducer,
})

const logger = createLogger()

export const index = configureStore({
  reducer: rootReducer
})

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
    logger,
    newsAPI.middleware
  ]),
  devTools: process.env.NODE_ENV === 'development',
  preloadedState: undefined,
})

export default store
