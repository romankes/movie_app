import React, {FC, ReactNode, useEffect, useMemo, useRef} from 'react';
import {TextInput, View, TextInputProps} from 'react-native';
import {useStyles} from './useStyles';
import {InputKeys} from '@/themes/palletes/types';
import {Text} from '../Text';

type TProps = TextInputProps & {
  label?: string;
  color?: keyof InputKeys;
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;

  error?: string;
  errorEmpty?: boolean;

  margin?: {
    right?: number;
    bottom?: number;
    top?: number;
    left?: number;
  };
};

export const FilledField: FC<TProps> = ({
  leftIcon,
  rightIcon,
  label,
  margin,
  color = 'default',
  errorEmpty,
  error,
  numberOfLines = 1,
  ...props
}) => {
  const {styles, placeholderColors} = useStyles({color, error, numberOfLines});

  const ref = useRef<TextInput>(null);

  const margins = useMemo(
    () => ({
      marginTop: margin?.top || 0,
      marginBottom: margin?.bottom || 0,
      marginLeft: margin?.left || 0,
      marginRight: margin?.right || 0,
    }),
    [margin],
  );

  return (
    <View style={margins}>
      {!!label && (
        <Text family="bold" size={14} margin={{bottom: 14}}>
          {label}
        </Text>
      )}
      <View style={styles.inputWrapper}>
        {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}
        <TextInput
          {...props}
          ref={ref}
          style={[
            styles.input,
            props.multiline && {paddingVertical: 8, textAlignVertical: 'top'},
            props.style,
          ]}
          placeholderTextColor={placeholderColors}
        />
        {rightIcon && <View style={styles.rightIcon}>{rightIcon}</View>}
      </View>
      {!errorEmpty && (
        <Text margin={{top: 4}} family="medium" color="danger">
          {error}
        </Text>
      )}
    </View>
  );
};
