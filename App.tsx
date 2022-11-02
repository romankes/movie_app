import React from 'react';

import {InitializeLayout, ThemeLayout} from '@/layouts';

import {AppNavigator} from '@/navigation/AppNavigator';

import {store} from '@/store';
import {Provider} from 'react-redux';

export default () => (
  <Provider store={store}>
    <ThemeLayout>
      <InitializeLayout>
        <AppNavigator />
      </InitializeLayout>
    </ThemeLayout>
  </Provider>
);
