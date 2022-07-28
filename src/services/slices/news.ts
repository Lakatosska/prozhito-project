import {INewsData} from "../types/news";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {newsAPI} from "../api/news";

const initialState: INewsData = {
  page: 1,
  total: 0,
  data: [],
}

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setNewsPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(newsAPI.endpoints.getNews.matchFulfilled, (state, action) => {
        if (state.page === 1) {
          state.data = action.payload.data
        } else {
          state.data.push(...action.payload.data)
        }
        state.total = action.payload.total
      })
      .addMatcher(newsAPI.endpoints.getNews.matchRejected, (state, action) => {
        if (action.error.name !== "ConditionError") {
          state.data = []
          state.total = 0
          state.page = 1
        }
      })
  },
})

export const { setNewsPage } = newsSlice.actions

export default newsSlice.reducer;
