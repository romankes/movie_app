import {Ui, uiSelectors} from '@/bus/ui';
import {RootState} from '@/store/rootReducer';
import {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

type TBaseParams = {
  offset: number;
  limit: number;
};

type TSelectors = {
  getHasMore: (state: RootState) => boolean;
};

type TArgs<P> = {
  loader: Ui.FormName;

  fetcher: (params: P & TBaseParams) => any;
  selectors: TSelectors;
  params: P;
  offset: number;

  limit?: number;
};

export const useFetch = <P>({
  fetcher,
  loader,
  params,
  selectors,
  offset,
  limit = 20,
}: TArgs<P>) => {
  const dispatch = useDispatch();

  const isLoading = useSelector(uiSelectors.getLoading(loader));

  const [refreshing, setRefreshing] = useState(false);

  const hasMore = useSelector(selectors.getHasMore);

  const onBootstrap = useCallback(
    (offset: number) => {
      dispatch(
        fetcher({
          ...params,
          offset,
          limit,
        }),
      );
    },
    [params, limit],
  );

  const onLoad = useCallback(() => {
    if (hasMore) {
      onBootstrap(offset);
    }
  }, [onBootstrap, offset, hasMore]);

  const onRefresh = useCallback(() => {
    onBootstrap(0);
    setRefreshing(true);
  }, [onBootstrap]);

  useEffect(() => {
    if (!isLoading && refreshing) {
      setRefreshing(false);
    }
  }, [isLoading, refreshing]);

  return {onLoad, onRefresh, refreshing, isLoading, onBootstrap};
};
