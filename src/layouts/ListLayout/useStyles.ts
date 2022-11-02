import {useTheme} from '@/hooks';
import {useMemo} from 'react';
import {Platform, StatusBar, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const useStyles = () => {
  const {pallete} = useTheme();

  const {top} = useSafeAreaInsets();
  const paddingTop = Platform.select({
    ios: top - 12,
    android: StatusBar.currentHeight,
  });

  const height = Platform.select({
    ios: 48 + top,
    android: 48 + (StatusBar.currentHeight || 0),
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

          height,

          paddingTop,
          marginBottom: 8,

          shadowColor: pallete.background.dark,

          shadowOffset: {
            height: 0,
            width: 0,
          },

          shadowOpacity: 0.4,
          shadowRadius: 6,
          elevation: 12,

          backgroundColor: pallete.background.default,

          borderBottomLeftRadius: 24,
          borderBottomRightRadius: 24,
        },

        button: {
          backgroundColor: pallete.background.dark,
          borderRadius: 32,
        },
        container: {
          paddingHorizontal: 24,
        },
      }),
    [pallete],
  );

  return {styles};
};
