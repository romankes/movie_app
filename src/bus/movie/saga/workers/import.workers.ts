import {all, put, call, delay} from 'redux-saga/effects';
import {uiActions} from '@/bus/ui';
import {SagaIterator} from 'redux-saga';
import {ImportItemsAsync} from '../../types';
import {AxiosResponse} from 'axios';
import {Movie} from '../../namespace';
import {apiMovie} from '../../api';
import {movieActions} from '../../slice';
import {goBack} from '@/navigation';

export function* importItems(action: ImportItemsAsync): SagaIterator {
  try {
    yield put(uiActions.toggleLoader({name: 'movie_action', loading: true}));

    const response: AxiosResponse<Movie.ResImportItems> = yield call(
      apiMovie.importItems,
      action.payload,
    );

    if (response.data.status) {
      yield put(movieActions.importItems(response.data));
      goBack();
    }

    delay(100);
  } catch (e) {
    console.log(`error import movie items worker ${e}`);
  } finally {
    yield put(uiActions.toggleLoader({name: 'movie_action', loading: false}));
  }
}
