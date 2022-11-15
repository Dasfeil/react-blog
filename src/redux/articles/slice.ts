import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AFilter, Article, Articles, FeedFilter } from '../../interfaces/article';


const initialState = {
  articles: new Array<Article>(),
  articlesCount: 0,
  loading: true
};

export const articleSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    setArticle: (state, action: PayloadAction<Articles>) => {
      state.articles = action.payload.articles
      state.articlesCount = action.payload.articlesCount
      state.loading = false
    },
    getArticle: (state, action: PayloadAction<AFilter>) => {
      state.loading = true
    },
    getFeedArticle: (state, action: PayloadAction<FeedFilter>) => {
      state.loading = true
    }
  },
});

export const { actions: articleAction, reducer: articleReducer } =
  articleSlice;
