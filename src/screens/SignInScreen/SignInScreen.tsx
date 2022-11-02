import React, {FC} from 'react';

import {TouchableOpacity, View} from 'react-native';
import {Button, FilledField, Text} from '@/components';
import {AuthLayout} from '@/layouts';

import {Controller} from 'react-hook-form';

import {useData} from './useData';

import {Routes} from '@/navigation';
import {StackScreenProps} from '@react-navigation/stack';
import {AuthStackParamList} from '@/navigation/AuthNavigator';

type TProps = StackScreenProps<AuthStackParamList, Routes.SIGN_IN>;

export const SignInScreen: FC<TProps> = ({navigation}) => {
  const {onSubmit, control, isLoading, isValid} = useData();

  return (
    <AuthLayout
      renderFooter={
        <View>
          <Button onPress={onSubmit} disable={!isValid}>
            Увійти
          </Button>
          <TouchableOpacity
            style={{marginTop: 12}}
            activeOpacity={0.6}
            onPress={() => navigation.navigate(Routes.SIGN_UP)}>
            <Text align="center" color="link">
              Зареєструватись
            </Text>
          </TouchableOpacity>
        </View>
      }
      isLoading={isLoading}
      title="Увійдіть в аккаунт">
      <Controller
        name="email"
        control={control}
        render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
          <FilledField
            label="Email"
            placeholder="Ваш email"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            error={error?.message}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
          <FilledField
            label="Пароль"
            placeholder="Ваш пароль"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            error={error?.message}
            secureTextEntry
          />
        )}
      />
    </AuthLayout>
  );
};
