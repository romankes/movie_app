import {App} from '../app';
import {Movie} from './namespace';

export enum types {
  FETCH_ITEMS = 'MOVIE/FETCH_ITEMS',
  FETCH_DETAIL = 'MOVIE/FETCH_DETAIL',

  CREATE_ITEM = 'MOVIE/CREATE_ITEM',
  IMPORT_ITEMS = 'MOVIE/IMPORT_ITEMS',

  REMOVE_ITEM = 'MOVIE/REMOVE_ITEM',
}

export type MovieState = {
  items: Movie.Item[];
  detail: Movie.Detail | null;

  hasMore: boolean;
};

export type FetchItemsAsync = App.BaseAction<
  typeof types.FETCH_ITEMS,
  Movie.ReqFetchItems
>;
export type FetchDetailAsync = App.BaseAction<
  typeof types.FETCH_DETAIL,
  Movie.ReqFetchDetail
>;

export type CreateItemAsync = App.BaseAction<
  typeof types.CREATE_ITEM,
  Movie.ReqCreateItem
>;
export type ImportItemsAsync = App.BaseAction<
  typeof types.IMPORT_ITEMS,
  Movie.ReqImportItems
>;

export type RemoveItemAsync = App.BaseAction<
  typeof types.REMOVE_ITEM,
  Movie.ReqRemoveItem
>;

export type MovieActionTypes =
  | RemoveItemAsync
  | CreateItemAsync
  | FetchDetailAsync
  | FetchItemsAsync
  | ImportItemsAsync;
