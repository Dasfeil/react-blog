import { put, takeEvery, Effect, ForkEffect, call } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { articleAction } from './slice';
import { FeedFilter, AFilter } from '../../interfaces/article';
import { getArticles, getFeedArticles } from '../../services/conduit';

export function* watchFReq(action: PayloadAction<FeedFilter>): Generator<Effect, void> {
    try {
        const query = action.payload
        const res = yield call(getFeedArticles, query)
        yield put({
            type: articleAction.setArticle.type,
            payload: res
        })
    }
    catch (error) {
        console.log(error)
    }
}

export function* watchGReq(action: PayloadAction<AFilter>): Generator<Effect, void> {
    try {
        const query = action.payload
        const res = yield call(getArticles, query)
        yield put({
            type: articleAction.setArticle.type,
            payload: res
        })
    }
    catch (error) {
        console.log(error)
    }
}

export function* watchArticleSagas(): Generator<ForkEffect, void> {
    yield takeEvery(articleAction.getFeedArticle, watchFReq)
    yield takeEvery(articleAction.getArticle, watchGReq);
}

const articleSagas = watchArticleSagas;

export default articleSagas;
