import {all, put, call, take} from 'redux-saga/effects';
import {uiActions} from '@/bus/ui';
import {SagaIterator} from 'redux-saga';
import {SignUpAsync, types} from '../../types';
import {AxiosResponse} from 'axios';
import {Auth} from '../../namespace';
import {apiAuth} from '../../api';
import {authActions} from '../../slice';

export function* signUp(action: SignUpAsync): SagaIterator {
  try {
    yield put(uiActions.toggleLoader({name: 'sign_up', loading: true}));

    console.log('call');

    const response: AxiosResponse<Auth.ResSignUp> = yield call(
      apiAuth.signUp,
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
    console.log(`error sign up worker ${e}`);
  } finally {
    yield put(uiActions.toggleLoader({name: 'sign_up', loading: false}));
  }
}
