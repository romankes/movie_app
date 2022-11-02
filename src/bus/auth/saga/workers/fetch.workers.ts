import {all, put, call} from 'redux-saga/effects';
import {uiActions} from '@/bus/ui';
import {SagaIterator} from 'redux-saga';
import {types} from '../../types';
import {apiAuth} from '../../api';
import {authActions} from '../../slice';

export function* fetchToken(): SagaIterator {
  try {
    const response: string | null = yield call(apiAuth.fetchToken);

    yield put(authActions.toggleLogged(!!response));
  } catch (e) {
    console.log(`error fetch auth token worker ${e}`);
  } finally {
    yield put({type: types.END_FETCH_TOKEN});
  }
}
