import React, {PropsWithChildren, ReactNode, useEffect, useMemo} from 'react';
import {Animated, TouchableOpacity, View, ViewProps} from 'react-native';
import {Text} from '../Text';

import {useAnimation} from './useAnimation';
import {useStyles} from './useStyles';

type TProps<T> = ViewProps & {
  data: T[];
  renderItem: (value: T) => ReactNode;
  onChange: (value: T) => any;

  renderCurrent: (value: T | null) => string;

  checker: (item: T) => boolean;
  keyExtractor: (item: T) => string;

  current: T | null;

  label?: string;
  error?: string;

  margin?: {
    right?: number;
    bottom?: number;
    top?: number;
    left?: number;
  };
};

export const SelectBox = <T,>({
  data,
  onChange,
  renderItem,
  current,
  renderCurrent,
  label,
  margin,
  checker,
  keyExtractor,
  error,
  ...props
}: PropsWithChildren<TProps<T>>) => {
  const {styles} = useStyles();

  const {isOpened, onHide, onShow, ref, height} = useAnimation();

  const filtered = useMemo(() => data.filter(checker), [data, current]);

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
    <View {...props} style={[margins, props.style]}>
      {!!label && (
        <Text family="bold" size={14} margin={{bottom: 14}}>
          {label}
        </Text>
      )}
      <Animated.View style={[styles.wrapper, {height}]}>
        <TouchableOpacity
          activeOpacity={filtered.length ? 0.6 : 1}
          onPress={() => {
            isOpened ? onHide() : onShow();
          }}
          style={styles.item}>
          <Text
            family={current ? 'medium' : 'regular'}
            color={current ? 'default' : 'gray'}
            size={14}>
            {renderCurrent(current)}
          </Text>
        </TouchableOpacity>

        <View
          onLayout={({nativeEvent}) => {
            ref.current = nativeEvent.layout.height;
          }}>
          {filtered.map(item => (
            <TouchableOpacity
              onPress={() => {
                isOpened ? onHide() : onShow();
                onChange(item);
              }}
              activeOpacity={0.6}
              key={keyExtractor(item)}
              style={styles.item}>
              <Text>{renderItem(item)}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Animated.View>
      <Text margin={{top: 4}} family="medium" color="danger">
        {error}
      </Text>
    </View>
  );
};
