import {Movie, movieActions, movieSelectors} from '@/bus/movie';
import {useDebounce, useFetch} from '@/hooks';
import {useCallback, useEffect, useMemo, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

type TField = keyof Omit<Movie.FetchItemsParams, 'search'>;

export const useData = () => {
  const dispatch = useDispatch();

  const movies = useSelector(movieSelectors.getItems);

  const [fields, setFields] = useState<TField[]>([]);
  const [value, setValue] = useState('');

  const search = useDebounce(value);

  const params: Movie.FetchItemsParams = useMemo(() => {
    if (!fields.length) return {};

    if (fields.length === 2) return {search};

    return {[fields[0]]: search};
  }, [search, fields]);

  const {isLoading, onBootstrap, onLoad, onRefresh, refreshing} =
    useFetch<Movie.FetchItemsParams>({
      fetcher: movieActions.fetchItemsAsync,
      loader: 'movie_fetching',
      offset: movies.length,
      selectors: movieSelectors,
      limit: 10,
      params,
    });

  const onRemove = (id: number) => {
    dispatch(movieActions.removeItemAsync({id}));
  };

  const moviesData = useMemo(
    () =>
      [...movies].sort((curr, next) => curr.title.localeCompare(next.title)),
    [movies],
  );

  const onToggleFilter = useCallback(
    (field: TField) => () => {
      const index = fields.findIndex(item => item === field);

      if (index === -1) {
        setFields([...fields, field]);
      } else {
        setFields(fields.filter((_, i) => i !== index));
      }
    },
    [fields],
  );

  useEffect(() => {
    console.log('call');

    onBootstrap(0);
  }, [onBootstrap]);

  return {
    isLoading,
    onBootstrap,
    onLoad,
    onRefresh,
    refreshing,
    movies: moviesData,
    onRemove,
    onToggleFilter,
    fields,
    value,
    setValue,
  };
};
