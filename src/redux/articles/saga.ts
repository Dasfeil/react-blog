import { put, takeEvery, Effect, ForkEffect, call } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { articleAction } from './slice';
import { AFilter } from '../../interfaces/article';
import { getArticles } from '../../services/conduit';

export function* watchGetReq(action: PayloadAction<AFilter>): Generator<Effect, void> {
    try {
        const query = action.payload
        const res = yield call(getArticles, query)
        yield put({
            type: articleAction.setArticle.type,
            payload: res
        })
    }
    catch (error) {
        console.error(error)
    }
}

export function* watchArticleSagas(): Generator<ForkEffect, void> {
  yield takeEvery(articleAction.getArticle, watchGetReq);
}

const articleSagas = watchArticleSagas;

export default articleSagas;
