import React, {FC} from 'react';

import {TouchableOpacity, View} from 'react-native';
import {Text, IconButton, TrashIcon} from '@/components';

import {useStyles} from './useStyles';

import {Movie} from '@/bus/movie';

type TProps = {
  movie: Movie.Item;

  onPress: () => any;
  onRemove: () => any;
};

export const MovieCard: FC<TProps> = ({movie, onPress, onRemove}) => {
  const {styles} = useStyles();

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      style={styles.wrapper}>
      <View style={styles.row}>
        <Text
          family="bold"
          size={18}
          style={{flex: 1}}
          margin={{right: 8}}
          ellipsizeMode="tail"
          numberOfLines={1}>
          {movie.title}
        </Text>
        <Text>
          Формат: <Text family="bold">{movie.format}</Text>
        </Text>
      </View>

      <View style={[styles.row, {marginTop: 8}]}>
        <Text family="light">
          Рік випуску: <Text family="bold">{movie.year}</Text>
        </Text>

        <IconButton size={32} onPress={onRemove} style={styles.removeButton}>
          <TrashIcon size={18} color="danger" />
        </IconButton>
      </View>
    </TouchableOpacity>
  );
};
