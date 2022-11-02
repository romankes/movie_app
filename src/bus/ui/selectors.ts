import {RootState} from '@/store/rootReducer';
import {createSelector} from 'reselect';
import {Ui} from './namespace';

export const getLoaders = (state: RootState) => state.ui.loaders;

export const getLoading = (name: Ui.FormName) =>
  createSelector(
    [getLoaders],
    loaders => loaders.find(loader => loader.name === name)?.loading,
  );
