import {all, put, call} from 'redux-saga/effects';
import {uiActions} from '@/bus/ui';
import {SagaIterator} from 'redux-saga';
import {CreateItemAsync} from '../../types';
import {AxiosResponse} from 'axios';
import {Movie} from '../../namespace';
import {apiMovie} from '../../api';
import {movieActions} from '../../slice';
import {navigate, Routes} from '@/navigation';
import {showToast} from '@/services/toast';

export function* createItem(action: CreateItemAsync): SagaIterator {
  try {
    yield put(uiActions.toggleLoader({name: 'movie_action', loading: true}));

    const response: AxiosResponse<Movie.ResCreateItem> = yield call(
      apiMovie.createItem,
      action.payload,
    );
    console.log(response.data);

    if (response.data.status) {
      navigate(Routes.MOVIE_DETAIL, {id: response.data.data.id});

      showToast({
        text1: 'Фільм додано!',
        type: 'success',
      });
    } else {
      console.log(response.data.error.code);

      if (response.data.error.code === 'MOVIE_EXISTS') {
        showToast({
          text1: 'Такий фільм уже додано!',
          type: 'error',
        });
      }
    }
  } catch (e) {
    console.log(`error create movie item worker ${e}`);
  } finally {
    yield put(uiActions.toggleLoader({name: 'movie_action', loading: false}));
  }
}
