import {all, put, call} from 'redux-saga/effects';
import {uiActions} from '@/bus/ui';
import {SagaIterator} from 'redux-saga';
import {types, UpdateTokenAsync} from '../../types';
import {apiAuth} from '../../api';
import {authActions} from '../../slice';

export function* updateToken(action: UpdateTokenAsync): SagaIterator {
  try {
    yield call(apiAuth.updateToken, action.payload);

    yield put(authActions.toggleLogged(!!action.payload.token));
  } catch (e) {
    console.log(`error update auth token worker ${e}`);
  } finally {
    yield put({type: types.END_UPDATE_TOKEN});
  }
}
