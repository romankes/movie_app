import {useTheme} from '@/hooks';
import {useMemo} from 'react';
import {StyleSheet} from 'react-native';

export const useStyles = () => {
  const {pallete} = useTheme();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        wrapper: {
          flexWrap: 'wrap',
          flexDirection: 'row',
          alignItems: 'center',

          borderRadius: 8,

          padding: 8,

          minHeight: 48,

          backgroundColor: pallete.input.background.default,
        },

        input: {
          height: '100%',

          marginLeft: 4,

          flex: 1,

          color: pallete.input.text.default,
          fontSize: 14,
        },
      }),
    [pallete],
  );

  return {styles};
};
