import {Fonts, TextColors} from '@/themes';
import React, {FC, ReactNode, useMemo} from 'react';
import {Text as TextNative, TextProps} from 'react-native';
import {useStyles} from './useStyles';

type TProps = TextProps & {
  color?: keyof TextColors;
  family?: keyof typeof Fonts;
  size?: number;
  children: ReactNode;
  align?: 'left' | 'right' | 'center';
  margin?: {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
  };
};

export const Text: FC<TProps> = ({
  color = 'default',
  family = 'regular',
  size = 14,
  children,
  align = 'left',
  margin,
  ...props
}) => {
  const {styles} = useStyles({color, family, size});

  const marginData = useMemo(
    () => ({
      marginBottom: margin?.bottom,
      marginTop: margin?.top,
      marginLeft: margin?.left,
      marginRight: margin?.right,
    }),
    [margin],
  );

  return (
    <TextNative
      {...props}
      style={[styles.text, {textAlign: align}, marginData, props.style]}>
      {children}
    </TextNative>
  );
};
