import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './Routes';
import {MovieFormScreen, MovieListScreen, MovieDetailScreen} from '@/screens';

export type MovieStackParamList = {
  [Routes.MOVIE_LIST]: undefined;
  [Routes.MOVIE_DETAIL]: {id: number};
  [Routes.MOVIE_FORM]: undefined;
};

const MovieStack = createStackNavigator<MovieStackParamList>();

export const MovieNavigator = () => {
  return (
    <MovieStack.Navigator screenOptions={{headerShown: false}}>
      <MovieStack.Screen name={Routes.MOVIE_LIST} component={MovieListScreen} />
      <MovieStack.Screen name={Routes.MOVIE_FORM} component={MovieFormScreen} />
      <MovieStack.Screen
        name={Routes.MOVIE_DETAIL}
        component={MovieDetailScreen}
      />
    </MovieStack.Navigator>
  );
};
