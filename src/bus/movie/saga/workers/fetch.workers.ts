import {all, put, call} from 'redux-saga/effects';
import {uiActions} from '@/bus/ui';
import {SagaIterator} from 'redux-saga';
import {FetchDetailAsync, FetchItemsAsync} from '../../types';
import {AxiosResponse} from 'axios';
import {Movie} from '../../namespace';
import {apiMovie} from '../../api';
import {movieActions} from '../../slice';

export function* fetchItems(action: FetchItemsAsync): SagaIterator {
  try {
    yield put(uiActions.toggleLoader({name: 'movie_fetching', loading: true}));

    const response: AxiosResponse<Movie.ResFetchItems> = yield call(
      apiMovie.fetchItems,
      action.payload,
    );

    if (response.data.data) {
      yield put(
        movieActions.saveItems({
          ...response.data,
          offset: action.payload.offset,
        }),
      );
    }
  } catch (e) {
    console.log(`error fetch movie items worker ${e}`);
  } finally {
    yield put(uiActions.toggleLoader({name: 'movie_fetching', loading: false}));
  }
}

export function* fetchDetail(action: FetchDetailAsync): SagaIterator {
  try {
    yield all([
      put(movieActions.clearDetail(action.payload)),
      put(uiActions.toggleLoader({name: 'movie_fetching', loading: true})),
    ]);

    const response: AxiosResponse<Movie.ResCreateItem> = yield call(
      apiMovie.fetchDetail,
      action.payload,
    );

    if (response.data?.data) {
      yield put(movieActions.saveDetail(response.data));
    }
  } catch (e) {
    console.log(`error fetch movie detail worker ${e}`);
  } finally {
    yield put(uiActions.toggleLoader({name: 'movie_fetching', loading: false}));
  }
}
