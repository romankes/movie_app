import {combineReducers} from '@reduxjs/toolkit';

//types
import {AppState} from '@/bus/app/types';
import {UiState} from '@/bus/ui/types';
import {AuthState} from '@/bus/auth/types';
import {MovieState} from '@/bus/movie/types';

//reducers
import {appReducer} from '@/bus/app';
import {uiReducer} from '@/bus/ui';
import {authReducer} from '@/bus/auth';
import {movieReducer} from '@/bus/movie';

const rootReducer = combineReducers({
  app: appReducer,
  ui: uiReducer,
  auth: authReducer,
  movie: movieReducer,
});

export type RootState = {
  app: AppState;
  ui: UiState;
  auth: AuthState;
  movie: MovieState;
};

export default rootReducer;
