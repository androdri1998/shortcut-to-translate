import { all, AllEffect, ForkEffect } from 'redux-saga/effects';

import wordsSaga from './sagas/words.saga';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function* rootSaga(): Generator<
  AllEffect<Generator<ForkEffect<never>, void, unknown>>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  any,
  unknown
> {
  return yield all([wordsSaga()]);
}
