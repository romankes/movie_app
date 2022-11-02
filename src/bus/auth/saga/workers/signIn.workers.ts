import {AxiosResponse} from 'axios';
import {put, call, take, all} from 'redux-saga/effects';
import {SagaIterator} from 'redux-saga';
import {apiAuth} from '../../api';
import {Auth} from '../../namespace';

import {SignInAsync, types} from '../../types';

import {uiActions} from '@/bus/ui';
import {authActions} from '../../slice';

export function* signIn(action: SignInAsync): SagaIterator {
  try {
    yield put(uiActions.toggleLoader({name: 'sign_in', loading: true}));

    const response: AxiosResponse<Auth.ResSignIn> = yield call(
      apiAuth.signIn,
      action.payload,
    );

    console.log(response.data);

    if (response.data.token) {
      yield all([
        put(authActions.updateTokenAsync({token: response.data.token})),
        put(authActions.toggleLogged(true)),
      ]);

      yield take(types.END_UPDATE_TOKEN);
    }
  } catch (e) {
    console.log(`error sign in worker ${e}`);
  } finally {
    yield put(uiActions.toggleLoader({name: 'sign_in', loading: false}));
  }
}
