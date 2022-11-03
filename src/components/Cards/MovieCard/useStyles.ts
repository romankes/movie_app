import {useTheme} from '@/hooks';
import {useMemo} from 'react';
import {StyleSheet} from 'react-native';

export const useStyles = () => {
  const {pallete} = useTheme();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        wrapper: {
          paddingHorizontal: 16,
          paddingVertical: 10,

          borderWidth: 1,
          borderColor: pallete.border.action,

          borderRadius: 8,

          marginBottom: 12,
        },
        row: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        },

        removeButton: {
          borderRadius: 32,
          borderWidth: 1,
          borderColor: pallete.icon.danger,
        },

        disabled: {
          borderColor: pallete.icon.gray,
        },
      }),
    [pallete],
  );

  return {styles};
};
