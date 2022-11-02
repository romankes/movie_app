import React, {FC, useCallback, useEffect} from 'react';

import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {useSelector, useDispatch} from 'react-redux';
import {Routes} from './Routes';

import {AuthNavigator} from './AuthNavigator';

import {authSelectors} from '@/bus/auth';
import {appActions, appSelectors} from '@/bus/app';

import {navigationRef} from './RootNavigation';

import {useTheme} from '@/hooks';
import {EmptyScreen} from '@/screens';
import {Text} from '@/components';
import {MovieNavigator} from './MovieNavigator';

export type AppStackParamList = {
  [Routes.AUTH_NAVIGATOR]: undefined;
  [Routes.MOVIE_NAVIGATOR]: undefined;
};

const AppStack = createStackNavigator<AppStackParamList>();

export const AppNavigator: FC = () => {
  const dispatch = useDispatch();

  const logged = useSelector(authSelectors.getLogged);

  const {pallete} = useTheme();
  return (
    <NavigationContainer
      ref={navigationRef}
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: pallete.background.default as string,
        },
      }}>
      <AppStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {!logged ? (
          <AppStack.Screen
            name={Routes.AUTH_NAVIGATOR}
            component={AuthNavigator}
          />
        ) : (
          <AppStack.Screen
            name={Routes.MOVIE_NAVIGATOR}
            component={MovieNavigator}
          />
        )}
      </AppStack.Navigator>
    </NavigationContainer>
  );
};
