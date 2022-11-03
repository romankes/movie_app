import React from 'react';

import {InitializeLayout, ThemeLayout, ToastLayout} from '@/layouts';

import {AppNavigator} from '@/navigation/AppNavigator';

import {store} from '@/store';
import {Provider} from 'react-redux';

export default () => (
  <Provider store={store}>
    <ThemeLayout>
      <InitializeLayout>
        <AppNavigator />
        <ToastLayout />
      </InitializeLayout>
    </ThemeLayout>
  </Provider>
);
