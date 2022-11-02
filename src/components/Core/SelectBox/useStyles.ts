import {useTheme} from '@/hooks';
import {useMemo} from 'react';
import {StyleSheet} from 'react-native';

export const useStyles = () => {
  const {pallete} = useTheme();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        wrapper: {
          backgroundColor: pallete.input.background.default,
          borderRadius: 8,
          paddingHorizontal: 8,

          overflow: 'hidden',
        },
        item: {
          height: 48,

          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
        },
      }),
    [pallete],
  );

  return {styles};
};
