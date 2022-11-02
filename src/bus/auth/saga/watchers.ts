import {SagaIterator} from 'redux-saga';
import {all, call, takeEvery} from 'redux-saga/effects';
import {types} from '../types';
import {fetchToken, updateToken, signIn, signUp} from './workers';

function* watchSignIn(): SagaIterator {
  yield takeEvery(types.SIGN_IN, signIn);
}

function* watchSignUp(): SagaIterator {
  yield takeEvery(types.SIGN_UP, signUp);
}

function* watchFetchToken(): SagaIterator {
  yield takeEvery(types.FETCH_TOKEN, fetchToken);
}

function* watchUpdateToken(): SagaIterator {
  yield takeEvery(types.UPDATE_TOKEN, updateToken);
}

export function* watchAuth() {
  yield all([
    call(watchSignIn),
    call(watchSignUp),
    call(watchUpdateToken),
    call(watchFetchToken),
  ]);
}
