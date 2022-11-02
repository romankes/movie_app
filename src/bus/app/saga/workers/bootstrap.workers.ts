import {all, put, select, take} from 'redux-saga/effects';
import {appActions, appSelectors} from '@/bus/app';
import {SagaIterator} from 'redux-saga';

import {authActions} from '@/bus/auth';
import {types as authTypes} from '@/bus/auth/types';

export function* bootstrap(): SagaIterator {
  try {
    yield all([put(authActions.fetchTokenAsync())]);

    yield all([take(authTypes.END_FETCH_TOKEN)]);
  } catch (e) {
    console.log(`error app bootstrap worker ${e}`);
  } finally {
    yield put(appActions.toggleInitialized(true));
  }
}
