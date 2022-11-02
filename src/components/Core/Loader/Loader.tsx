import {useTheme} from '@/hooks';
import {Text} from '@/themes/palletes/types';
import React, {FC} from 'react';
import {ActivityIndicator, StyleSheet, View, ViewProps} from 'react-native';

type TProps = ViewProps & {
  width?: number;
  height?: number;

  color?: keyof Text;
};

export const Loader: FC<TProps> = ({
  width,
  height,
  color = 'default',
  ...props
}) => {
  const {pallete} = useTheme();

  return (
    <View
      {...props}
      style={[
        styles.wrapper,
        !!width && {width},
        !!height && {
          height,
        },
        props.style,
      ]}>
      <ActivityIndicator color={pallete.text[color]} size={'large'} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
