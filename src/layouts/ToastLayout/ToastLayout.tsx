import {useTheme} from '@/hooks';
import {Fonts} from '@/themes';
import React from 'react';
import {Dimensions} from 'react-native';

import Toast, {BaseToast, ToastConfigParams} from 'react-native-toast-message';

export const ToastLayout = () => {
  const {pallete, fonts} = useTheme();

  const toastConfig = {
    error: ({text1, ...props}: ToastConfigParams<{}>) => (
      <BaseToast
        {...props}
        style={{
          borderLeftWidth: 0,
        }}
        text1Style={{
          fontFamily: Fonts.bold,
          fontSize: 14,

          color: pallete.text.danger,

          textAlign: 'center',

          width: '100%',
        }}
        text1={text1}
      />
    ),
    success: ({text1, ...props}: ToastConfigParams<{}>) => {
      return (
        <BaseToast
          {...props}
          style={{
            borderLeftWidth: 0,
          }}
          text1Style={{
            fontFamily: Fonts.bold,
            fontSize: 18,

            color: pallete.text.success,

            textAlign: 'center',

            width: '100%',
          }}
          text1Props={{
            numberOfLines: 2,
          }}
          text1={text1}
        />
      );
    },
  };

  return <Toast config={toastConfig} />;
};
