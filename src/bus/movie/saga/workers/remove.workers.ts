import {all, put, call, select} from 'redux-saga/effects';
import {uiActions} from '@/bus/ui';
import {SagaIterator} from 'redux-saga';
import {RemoveItemAsync} from '../../types';
import {AxiosResponse} from 'axios';
import {Movie} from '../../namespace';
import {apiMovie} from '../../api';
import {movieActions} from '../../slice';
import {movieSelectors} from '../..';
import {goBack} from '@/navigation';
import {showToast} from '@/services/toast';

export function* removeItem(action: RemoveItemAsync): SagaIterator {
  try {
    yield put(uiActions.toggleLoader({name: 'movie_action', loading: true}));

    const response: AxiosResponse<Movie.ResRemoveItem> = yield call(
      apiMovie.removeItem,
      action.payload,
    );

    if (response.data) {
      const detail: Movie.Detail | null = yield select(
        movieSelectors.getDetail,
      );

      yield put(movieActions.removeItem(action.payload.id));

      showToast({
        text1: 'Фільм видаленно!',
        type: 'success',
      });

      if (detail?.id === action.payload.id) {
        goBack();
      }
    }
  } catch (e) {
    console.log(`error remove movie item worker ${e}`);
  } finally {
    yield put(uiActions.toggleLoader({name: 'movie_action', loading: false}));
  }
}
