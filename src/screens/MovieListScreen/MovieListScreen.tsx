import React, {FC} from 'react';
import {FlatList, View} from 'react-native';

import {useStyles} from './useStyles';
import {useData} from './useData';
import {ListLayout} from '@/layouts';
import {StackScreenProps} from '@react-navigation/stack';
import {MovieStackParamList} from '@/navigation/MovieNavigator';
import {Routes} from '@/navigation';
import {
  CloseIcon,
  FilledField,
  IconButton,
  Loader,
  MovieCard,
  MovieIcon,
  UserIcon,
} from '@/components';

type TProps = StackScreenProps<MovieStackParamList, Routes.MOVIE_LIST>;

export const MovieListScreen: FC<TProps> = ({navigation}) => {
  const {styles} = useStyles();

  const {
    isLoading,
    onBootstrap,
    onLoad,
    movies,
    onRemove,
    onToggleFilter,
    fields,
    value,
    setValue,
    ...props
  } = useData();

  return (
    <ListLayout
      onCreate={() => navigation.navigate(Routes.MOVIE_FORM)}
      title="Список фільміві">
      <FlatList
        {...props}
        style={styles.container}
        data={movies}
        ListHeaderComponent={
          <FilledField
            margin={{top: 8}}
            value={value}
            onChangeText={setValue}
            leftIcon={
              !!value && (
                <IconButton size={32} onPress={() => setValue('')}>
                  <CloseIcon size={18} color="default" />
                </IconButton>
              )
            }
            rightIcon={
              <View style={styles.field}>
                <IconButton size={32} onPress={onToggleFilter('title')}>
                  <MovieIcon
                    color={fields.includes('title') ? 'action' : 'default'}
                    size={22}
                  />
                </IconButton>
                <IconButton size={32} onPress={onToggleFilter('actor')}>
                  <UserIcon
                    color={fields.includes('actor') ? 'action' : 'default'}
                    size={22}
                  />
                </IconButton>
              </View>
            }
          />
        }
        renderItem={({item}) => (
          <MovieCard
            movie={item}
            onPress={() =>
              navigation.navigate(Routes.MOVIE_DETAIL, {id: item.id})
            }
            onRemove={() => onRemove(item.id)}
          />
        )}
        showsVerticalScrollIndicator={false}
        keyExtractor={({id}) => `movie-${id}`}
        onEndReached={onLoad}
        contentContainerStyle={styles.content}
        ListEmptyComponent={
          isLoading && !props.refreshing ? <Loader height={200} /> : null
        }
      />
    </ListLayout>
  );
};
