import {AxiosPromise} from 'axios';

import axios from '@/services/axios';

import {Movie} from '@/bus/movie';
import {clearObject} from '@/helpers';

export const apiMovie = new (class Api {
  fetchItems(obj: Movie.ReqFetchItems): AxiosPromise<Movie.ResFetchItems> {
    return axios({
      url: '/movies',
      method: 'get',
      params: {
        ...clearObject({obj, callback: item => item}),
        sort: 'title',
        order: 'ASC',
      },
    });
  }
  fetchDetail({id}: Movie.ReqFetchDetail): AxiosPromise<Movie.ResFetchDetail> {
    return axios({
      url: `/movies/${id}`,
      method: 'get',
    });
  }

  createItem(data: Movie.ReqCreateItem): AxiosPromise<Movie.ResCreateItem> {
    return axios({
      url: '/movies',
      method: 'post',
      data,
    });
  }
  importItems({
    movie,
  }: Movie.ReqImportItems): AxiosPromise<Movie.ResImportItems> {
    const data = new FormData();

    //@ts-ignore
    data.append('movies', movie);

    return axios({
      url: '/movies/import',
      method: 'post',
      data,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }

  removeItem({id}: Movie.ReqRemoveItem): AxiosPromise<Movie.ResRemoveItem> {
    return axios({
      url: `/movies/${id}`,
      method: 'delete',
    });
  }
})();
