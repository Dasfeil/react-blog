import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AFilter, Articles } from '../../interfaces/article';


const initialState: Articles = {
  articles: [],
  articlesCount: 0
};

export const articleSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    setArticle: (state, action: PayloadAction<Articles>) => {
      state.articles = action.payload.articles
      state.articlesCount = action.payload.articlesCount
    },
    getArticle: (state, action: PayloadAction<AFilter>) => {
      state = initialState
    }
  },
});

export const { actions: articleAction, reducer: articleReducer } =
  articleSlice;
