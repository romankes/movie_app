import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {Movie} from './namespace';
import {types, MovieActionTypes, MovieState} from './types';

const initialState: MovieState = {
  items: [],
  detail: null,

  hasMore: false,
};

const slice = createSlice({
  name: 'Movie',
  initialState,
  reducers: {
    saveItems: (
      state: MovieState,
      action: PayloadAction<Movie.ResFetchItems>,
    ) => {
      if (!action.payload.offset) {
        state.items = action.payload.data;
      } else {
        state.items = [...state.items, ...action.payload.data];
      }

      state.hasMore = action.payload.offset < action.payload.meta.total;
    },

    saveDetail: (
      state: MovieState,
      action: PayloadAction<Movie.ResFetchDetail>,
    ) => {
      state.detail = action.payload.data;
    },
    clearDetail: (
      state: MovieState,
      action: PayloadAction<Movie.ReqFetchDetail>,
    ) => {
      if (state.detail?.id !== action.payload.id) {
        state.detail = null;
      }
    },

    saveItem: (
      state: MovieState,
      action: PayloadAction<Movie.ResCreateItem>,
    ) => {
      state.detail = action.payload.data;
    },

    importItems: (
      state: MovieState,
      action: PayloadAction<Movie.ResImportItems>,
    ) => {
      state.items = [...state.items, ...action.payload.data];

      state.hasMore = action.payload.offset < action.payload.meta.total;
    },

    removeItem: (state: MovieState, action: PayloadAction<number>) => {
      state.items = state.items.filter(({id}) => id !== action.payload);
    },
  },
});

export default slice.reducer;

export const movieActions = {
  ...slice.actions,
  fetchItemsAsync: (payload: Movie.ReqFetchItems): MovieActionTypes => ({
    type: types.FETCH_ITEMS,
    payload,
  }),
  fetchDetailAsync: (payload: Movie.ReqFetchDetail): MovieActionTypes => ({
    type: types.FETCH_DETAIL,
    payload,
  }),

  createItemAsync: (payload: Movie.ReqCreateItem): MovieActionTypes => ({
    type: types.CREATE_ITEM,
    payload,
  }),
  importItemsAsync: (payload: Movie.ReqImportItems): MovieActionTypes => ({
    type: types.IMPORT_ITEMS,
    payload,
  }),

  removeItemAsync: (payload: Movie.ReqRemoveItem): MovieActionTypes => ({
    type: types.REMOVE_ITEM,
    payload,
  }),
};
