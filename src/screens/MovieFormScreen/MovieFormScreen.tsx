import {ActorField, Button, FilledField, SelectBox, Text} from '@/components';
import {MOVIE} from '@/constants';
import {DetailLayout} from '@/layouts';
import {Routes} from '@/navigation';
import {MovieStackParamList} from '@/navigation/MovieNavigator';
import {StackScreenProps} from '@react-navigation/stack';
import React, {FC} from 'react';
import {Controller} from 'react-hook-form';

import {
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  View,
} from 'react-native';

import {useData} from './useData';
import {useStyles} from './useStyles';

type TProps = StackScreenProps<MovieStackParamList, Routes.MOVIE_FORM>;

export const MovieFormScreen: FC<TProps> = ({navigation}) => {
  const {styles} = useStyles();

  const {control, handleSubmit, isValid, isLoading, onImport} = useData();

  return (
    <DetailLayout
      onBack={navigation.goBack}
      title="Створення фільму"
      isLoading={isLoading}
      renderFooter={
        <View>
          <Button disable={!isValid} onPress={handleSubmit}>
            Створити
          </Button>

          <TouchableOpacity activeOpacity={0.6} onPress={onImport}>
            <Text
              color="link"
              margin={{top: 8, bottom: Platform.OS === 'ios' ? 4 : 8}}
              align="center">
              Імпортувати фільми з файлу
            </Text>
          </TouchableOpacity>
        </View>
      }>
      <Controller
        control={control}
        name="title"
        render={({field: {onChange, value}, fieldState: {error}}) => (
          <FilledField
            value={value}
            onChangeText={onChange}
            error={error?.message}
            placeholder="Casablanca"
            label="Назва фільма"
            margin={{top: 12}}
          />
        )}
      />

      <Controller
        control={control}
        name="year"
        render={({field: {onChange, value}, fieldState: {error}}) => (
          <FilledField
            value={value.toString()}
            onChangeText={onChange}
            error={error?.message}
            placeholder="1942"
            label="Рік випуску"
            keyboardType="decimal-pad"
          />
        )}
      />

      <Controller
        control={control}
        name="format"
        render={({field: {onChange, value}, fieldState: {error}}) => (
          <SelectBox<string>
            current={value}
            checker={item => item !== value}
            data={MOVIE.FORMATS}
            keyExtractor={item => `format-${item}`}
            renderCurrent={item => item || 'Оберіть формат'}
            renderItem={item => item}
            onChange={onChange}
            error={error?.message}
            label="Формат фільму"
          />
        )}
      />

      <Controller
        control={control}
        name="actors"
        render={({field: {onChange, value}, fieldState: {error}}) => (
          <ActorField
            actors={value}
            error={error?.message}
            label={'Введіть акторів фільму'}
            onChange={onChange}
          />
        )}
      />
    </DetailLayout>
  );
};
