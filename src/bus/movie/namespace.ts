import {Actor} from '../actor';

export namespace Movie {
  export type Item = {
    id: number;
    title: string;
    year: number;
    format: Formats;
    createdAt: string;
  };

  export type Detail = Item & {
    actors: Actor.Item[];
  };

  export type Formats = 'VHS' | 'DVD' | 'Blu-ray';

  export type Form = Omit<Detail, 'id' | 'createdAt'>;

  export type FetchItemsParams = {
    actor?: string;
    title?: string;
    search?: string;
  };

  export type ReqFetchItems = FetchItemsParams & {
    limit: number;
    offset: number;
  };
  export type ResFetchItems = {
    data: Item[];
    meta: {
      total: number;
    };
    offset: number;
    status: number;
  };

  export type ReqFetchDetail = {
    id: number;
  };
  export type ResFetchDetail = {
    data: Detail;
  };

  export type ReqImportItems = {
    movie: {
      uri: string;
      type: string;
      name: string;
    };
  };
  export type ResImportItems = ResFetchItems;

  export type ReqCreateItem = Omit<Form, 'actors'> & {
    actors: string[];
  };
  export type ResCreateItem = ResFetchDetail;

  export type ReqRemoveItem = {
    id: number;
  };
  export type ResRemoveItem = {};
}
