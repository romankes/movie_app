import {Movie, movieActions} from '@/bus/movie';
import {uiSelectors} from '@/bus/ui';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import {schema} from './validate';

import * as DocumentPicker from 'expo-document-picker';
import {useIsFocused} from '@react-navigation/native';
import {useEffect} from 'react';

const DEFAULT_VALUE: Movie.Form = {
  title: '',
  year: 1992,
  format: 'DVD',
  actors: [],
};

export const useData = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(uiSelectors.getLoading('movie_action'));

  const isFocused = useIsFocused();

  const {
    control,
    handleSubmit,
    formState: {isValid},
    reset,
  } = useForm<Movie.Form>({
    defaultValues: DEFAULT_VALUE,
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = ({actors, ...data}: Movie.Form) => {
    dispatch(
      movieActions.createItemAsync({
        ...data,
        actors: actors.map(({name}) => name),
      }),
    );
  };

  useEffect(() => {
    if (!isFocused) {
      reset(DEFAULT_VALUE);
    }
  }, [isFocused]);

  const onImport = async () => {
    const res = await DocumentPicker.getDocumentAsync({type: ['text/plain']});

    if (res.type === 'success') {
      const {name, uri} = res;

      dispatch(
        movieActions.importItemsAsync({
          movie: {
            name: name,
            uri: uri,
            type: 'text/plain',
          },
        }),
      );
    }
  };

  return {
    isValid,
    control,
    handleSubmit: handleSubmit(onSubmit),
    isLoading,
    onImport,
  };
};
