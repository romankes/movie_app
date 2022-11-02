import {useTheme} from '@/hooks';

import {useMemo} from 'react';
import {Platform, StyleSheet, StatusBar} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const useStyles = () => {
  const {pallete} = useTheme();

  const {bottom, top} = useSafeAreaInsets();

  const paddingTop = Platform.select({
    ios: 0,
    android: (StatusBar.currentHeight || 0) + 8,
  });

  const minHeight = Platform.select({
    ios: bottom + 82,
    android: 92,
  });

  const styles = useMemo(
    () =>
      StyleSheet.create({
        wrapper: {
          height: '100%',
        },
        header: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',

          paddingTop,
        },
        content: {
          flex: 1,
        },
        container: {
          paddingHorizontal: 16,
        },
        footer: {
          shadowColor: pallete.background.dark,

          shadowOffset: {
            height: 0,
            width: 0,
          },

          shadowOpacity: 0.4,
          shadowRadius: 6,
          elevation: 12,

          backgroundColor: pallete.background.default,

          paddingTop: 24,
          borderTopLeftRadius: 32,
          borderTopRightRadius: 32,

          minHeight,

          marginBottom: -bottom,
          paddingBottom: bottom,
        },
      }),
    [pallete],
  );

  return {styles};
};
