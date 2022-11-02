import {Movie, movieActions, movieSelectors} from '@/bus/movie';
import {uiSelectors} from '@/bus/ui';
import {useFetch} from '@/hooks';
import {useEffect, useMemo} from 'react';
import {useDispatch, useSelector} from 'react-redux';

type TArg = {
  id: number;
};
export const useData = ({id}: TArg) => {
  const dispatch = useDispatch();

  const detail = useSelector(movieSelectors.getDetail);

  const isLoading = useSelector(uiSelectors.getLoading('movie_fetching'));

  const params = useMemo(() => ({id}), [id]);

  const {onBootstrap, onRefresh, refreshing} = useFetch<Movie.ReqFetchDetail>({
    fetcher: ({id}) => movieActions.fetchDetailAsync({id}),
    loader: 'movie_fetching',
    offset: 0,
    selectors: movieSelectors,
    params,
  });

  useEffect(() => {
    if (params.id) {
      onBootstrap(0);
    }
  }, [onBootstrap]);

  const onRemove = () => {
    if (detail) {
      dispatch(movieActions.removeItemAsync({id: detail.id}));
    }
  };

  return {onRefresh, refreshing, detail, isLoading, onRemove};
};
