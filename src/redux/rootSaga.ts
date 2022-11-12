import { all, fork, AllEffect, ForkEffect } from 'redux-saga/effects';
import articleSagas from './articles/saga';
import userSagas from './user/saga';

export default function* rootSaga(): Generator<
  AllEffect<ForkEffect<void>>,
  void,
  unknown
> {
  yield all([fork(articleSagas), fork(userSagas)]);
}
