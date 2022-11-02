import {useTheme} from '@/hooks';
import {useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const useStyles = () => {
  const {pallete} = useTheme();

  const {bottom} = useSafeAreaInsets();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          paddingHorizontal: 16,
        },
        content: {
          paddingBottom: bottom,
        },
        field: {
          flexDirection: 'row',
        },
      }),
    [pallete],
  );

  return {styles};
};
