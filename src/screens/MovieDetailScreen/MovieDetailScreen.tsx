import {ActorCard, Text, TrashIcon} from '@/components';
import {DetailLayout} from '@/layouts';
import {Routes} from '@/navigation';
import {MovieStackParamList} from '@/navigation/MovieNavigator';
import {StackScreenProps} from '@react-navigation/stack';
import React, {FC} from 'react';
import {View} from 'react-native';
import {useData} from './useData';
import {useStyles} from './useStyles';

type TProps = StackScreenProps<MovieStackParamList, Routes.MOVIE_DETAIL>;

export const MovieDetailScreen: FC<TProps> = ({navigation, route}) => {
  const {styles} = useStyles();

  const {onRefresh, refreshing, detail, isLoading, onRemove} = useData(
    route.params,
  );

  return (
    <DetailLayout
      refreshing={refreshing}
      isLoading={isLoading}
      onRefresh={onRefresh}
      onBack={navigation.goBack}
      rightIcon={<TrashIcon size={24} color="danger" />}
      onPressRightIcon={onRemove}
      title={detail?.title || ''}>
      <Text size={16} margin={{top: 12}}>
        Рік випуску фільму:{' '}
        <Text size={16} family="bold">
          {detail?.year}
        </Text>
      </Text>

      <Text size={16} margin={{top: 12}}>
        Формат:{' '}
        <Text size={16} family="bold">
          {detail?.format}
        </Text>
      </Text>

      <Text size={16} margin={{top: 16}}>
        Актори фільму:
      </Text>
      <View style={styles.actors}>
        {detail?.actors.map(item => (
          <ActorCard actor={item} key={`actor-${item.id}`} />
        ))}
      </View>
    </DetailLayout>
  );
};
