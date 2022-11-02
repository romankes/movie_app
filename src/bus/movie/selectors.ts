import {RootState} from '@/store/rootReducer';

export const getItems = (state: RootState) => state.movie.items;
export const getDetail = (state: RootState) => state.movie.detail;

export const getHasMore = (state: RootState) => state.movie.hasMore;
