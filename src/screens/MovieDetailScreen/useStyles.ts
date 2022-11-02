import {useTheme} from '@/hooks';
import {useMemo} from 'react';
import {StyleSheet} from 'react-native';

export const useStyles = () => {
  const {pallete} = useTheme();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        actors: {
          flexWrap: 'wrap',
          flexDirection: 'row',
          alignItems: 'center',

          marginTop: 8,
        },
      }),
    [pallete],
  );

  return {styles};
};
