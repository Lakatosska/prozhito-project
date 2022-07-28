import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {getDefaultHeaders} from "./index";
import {INewsItem, TNewsRequest} from "../types/news";
import {BASE_API_URL, NEWS_PAGE_LIMIT, X_TOTAL_COUNT} from "../../constants";

export const newsAPI = createApi({
  reducerPath: 'newsAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_API_URL,
    prepareHeaders: (headers) => getDefaultHeaders(headers),
  }),
  endpoints: (build) => ({
    getNews: build.query<{data: Array<INewsItem>, total: number}, TNewsRequest>({
      query: ({page}) => ({
        url: `/news`,
        params: {
          _page: page,
          _limit: NEWS_PAGE_LIMIT,
        },
      }),
      transformResponse(data: Array<INewsItem>, meta) {
        return {data, total: Number(meta?.response?.headers.get(X_TOTAL_COUNT))}
      }
    }),
  })
})
