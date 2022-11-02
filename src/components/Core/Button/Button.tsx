import React, {FC, ReactNode, useMemo} from 'react';
import {ButtonKeys} from '@/themes/palletes/types';
import {TouchableOpacity, TouchableOpacityProps, View} from 'react-native';
import {useStyles} from './useStyles';
import {Fonts} from '@/themes';
import {Text} from '@/components';

type TProps = TouchableOpacityProps & {
  children: ReactNode;
  size?: 'small' | 'default' | 'large';
  color?: keyof ButtonKeys;
  weight?: keyof typeof Fonts;
  align?: 'center' | 'left' | 'right';
  variant?: 'round' | 'square';
  rightIcon?: ReactNode;
  disable?: boolean;
  margin?: {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
  };
};

export const Button: FC<TProps> = ({
  children,
  size = 'default',
  color = 'default',
  weight = 'regular',
  align = 'center',
  disable = false,
  variant = 'square',
  rightIcon,
  margin,
  ...props
}) => {
  const {styles} = useStyles({color: disable ? 'gray' : color, weight});

  const marginData = useMemo(
    () => ({
      marginBottom: margin?.bottom,
      marginTop: margin?.top,
      marginLeft: margin?.left,
      marginRight: margin?.right,
    }),
    [margin],
  );

  const height = useMemo(() => {
    switch (size) {
      case 'small':
        return 40;

      case 'default':
        return 48;

      case 'large':
        return 52;

      default:
        return 48;
    }
  }, [size]);

  const fontSize = useMemo(() => {
    switch (size) {
      case 'small':
        return 13;

      case 'default':
        return 14;

      case 'large':
        return 15;

      default:
        return 14;
    }
  }, [size]);

  const borderRadius = useMemo(() => {
    if (variant === 'square') {
      return 12;
    }

    switch (size) {
      case 'small':
        return 30;

      case 'default':
        return 20;

      case 'large':
        return 40;

      default:
        return 20;
    }
  }, [size, variant]);

  return (
    <TouchableOpacity
      {...props}
      activeOpacity={0.8}
      style={[styles.wrapper, {height, borderRadius}, marginData, props.style]}>
      <Text
        family="medium"
        style={[styles.text, {textAlign: align}, {fontSize}]}>
        {children}
      </Text>
      {rightIcon && <View style={styles.rightIconWrapper}>{rightIcon}</View>}
    </TouchableOpacity>
  );
};
