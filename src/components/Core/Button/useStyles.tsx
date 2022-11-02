import {ButtonKeys} from '@/themes/palletes/types';
import {useTheme} from '@/hooks';
import {useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {Fonts} from '@/themes';

type TArgs = {
  color: keyof ButtonKeys;
  weight: keyof typeof Fonts;
};

export const useStyles = ({color, weight}: TArgs) => {
  const {pallete, fonts} = useTheme();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        wrapper: {
          backgroundColor: pallete.button.background[color],
          borderColor: pallete.button.border[color],
          borderWidth: 1,

          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'nowrap',

          paddingHorizontal: 8,
        },

        text: {
          flexGrow: 1,
          flexShrink: 1,
          color: pallete.button.text[color],
          fontFamily: fonts[weight],

          fontSize: 14,
        },

        rightIconWrapper: {
          flexShrink: 0,
        },
      }),
    [pallete, color, weight, fonts],
  );

  return {styles};
};
