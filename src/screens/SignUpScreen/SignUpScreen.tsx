import React, {FC} from 'react';

import {AuthLayout} from '@/layouts';
import {Button, FilledField} from '@/components';

import {Controller} from 'react-hook-form';

import {useData} from './useData';

import {StackScreenProps} from '@react-navigation/stack';
import {AuthStackParamList} from '@/navigation/AuthNavigator';
import {Routes} from '@/navigation';

type TProps = StackScreenProps<AuthStackParamList, Routes.SIGN_UP>;

export const SignUpScreen: FC<TProps> = ({navigation}) => {
  const {control, handleSubmit, isLoading, isValid} = useData();

  return (
    <AuthLayout
      renderFooter={
        <Button onPress={handleSubmit} disable={!isValid}>
          Зареєструватись
        </Button>
      }
      isLoading={isLoading}
      title={'Зареєструватись'}
      hasBack
      onBack={navigation.goBack}>
      <Controller
        control={control}
        name="email"
        render={({field: {onChange, onBlur, value}, fieldState: {error}}) => (
          <FilledField
            value={value}
            onChangeText={onChange}
            error={error?.message}
            onBlur={onBlur}
            placeholder="Ваш email"
            label="Email"
            autoCapitalize="none"
            keyboardType="email-address"
          />
        )}
      />
      <Controller
        control={control}
        name="name"
        render={({field: {onChange, onBlur, value}, fieldState: {error}}) => (
          <FilledField
            value={value}
            onChangeText={onChange}
            error={error?.message}
            onBlur={onBlur}
            placeholder="Ваше ім`я"
            label="Ім`я"
            autoCapitalize="none"
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({field: {onChange, onBlur, value}, fieldState: {error}}) => (
          <FilledField
            value={value}
            onChangeText={onChange}
            error={error?.message}
            onBlur={onBlur}
            placeholder="Ваш пароль"
            label="Пароль"
            autoCapitalize="none"
            secureTextEntry
          />
        )}
      />

      <Controller
        control={control}
        name="confirmPassword"
        render={({field: {onChange, onBlur, value}, fieldState: {error}}) => (
          <FilledField
            value={value}
            onChangeText={onChange}
            error={error?.message}
            onBlur={onBlur}
            placeholder="Підтвердіть ваш пароль"
            label="Підтвердіть пароль"
            autoCapitalize="none"
            secureTextEntry
          />
        )}
      />
    </AuthLayout>
  );
};
