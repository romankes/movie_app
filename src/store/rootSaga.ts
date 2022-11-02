import {all, call} from 'redux-saga/effects';

//watchers

import {watchApp} from '@/bus/app/saga/watchers';
import {watchAuth} from '@/bus/auth/saga/watchers';
import {watchMovie} from '@/bus/movie/saga/watchers';

function* rootSaga() {
  try {
    yield all([call(watchApp), call(watchAuth), call(watchMovie)]);
  } catch (e) {
    console.error('error in root saga', e);
  }
}

export default rootSaga;
