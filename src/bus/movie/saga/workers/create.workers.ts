import {all, put, call} from 'redux-saga/effects';
import {uiActions} from '@/bus/ui';
import {SagaIterator} from 'redux-saga';
import {CreateItemAsync} from '../../types';
import {AxiosResponse} from 'axios';
import {Movie} from '../../namespace';
import {apiMovie} from '../../api';
import {movieActions} from '../../slice';
import {navigate, Routes} from '@/navigation';

export function* createItem(action: CreateItemAsync): SagaIterator {
  try {
    yield put(uiActions.toggleLoader({name: 'movie_action', loading: true}));

    const response: AxiosResponse<Movie.ResCreateItem> = yield call(
      apiMovie.createItem,
      action.payload,
    );
    console.log(response.data);

    if (response.data.data) {
      navigate(Routes.MOVIE_DETAIL, {id: response.data.data.id});
    }
  } catch (e) {
    console.log(`error create movie item worker ${e}`);
  } finally {
    yield put(uiActions.toggleLoader({name: 'movie_action', loading: false}));
  }
}
