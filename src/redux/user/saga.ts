import { put, takeEvery, Effect, ForkEffect, call } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { userAction } from './slice'
import { getUser } from '../../services/conduit';

export function* watchGetReq(action: PayloadAction<string>): Generator<Effect, void> {
    try {
        const auth = action.payload
        const res = yield call(getUser, auth)
        yield put({
            type: userAction.setUser.type,
            payload: res
        })
    }
    catch (error) {
        console.log(error)
    }
    finally {
        yield put({
            type: userAction.stopLoad.type
        })
    }
}

export function* watchUserSagas(): Generator<ForkEffect, void> {
  yield takeEvery(userAction.getUser, watchGetReq);
}

const userSagas = watchUserSagas;

export default userSagas;
