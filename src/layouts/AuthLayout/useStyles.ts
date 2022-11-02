import {useTheme} from '@/hooks';
import {useMemo} from 'react';
import {StatusBar, StyleSheet} from 'react-native';

export const useStyles = () => {
  const {pallete} = useTheme();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        wrapper: {},
        container: {
          paddingHorizontal: 16,
          height: '100%',
        },
        header: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',

          marginBottom: 32,
          marginTop: StatusBar.currentHeight,
        },
        content: {
          flex: 1,
        },
        logo: {
          justifyContent: 'center',
          alignItems: 'center',

          marginVertical: 48,
        },
        footer: {
          paddingVertical: 8,
        },
      }),
    [pallete],
  );

  return {styles};
};
