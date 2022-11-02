import {useTheme} from '@/hooks';
import {useMemo} from 'react';
import {StyleSheet} from 'react-native';

export const useStyles = () => {
  const {pallete} = useTheme();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        wrapper: {
          backgroundColor: pallete.background.dark,

          paddingVertical: 6,
          paddingHorizontal: 10,
          paddingRight: 6,

          borderRadius: 6,

          flexDirection: 'row',
          alignItems: 'center',

          marginRight: 4,
          marginBottom: 4,
        },
      }),
    [pallete],
  );

  return {styles};
};
