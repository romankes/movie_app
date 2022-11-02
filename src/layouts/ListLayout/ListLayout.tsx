import {IconButton, PlusIcon, Text} from '@/components';
import React, {FC, ReactNode} from 'react';
import {SafeAreaView, View} from 'react-native';

import {useStyles} from './useStyles';

type TProps = {
  title: string;

  onCreate: () => any;

  children: ReactNode | ReactNode[];
};

export const ListLayout: FC<TProps> = ({onCreate, title, children}) => {
  const {styles} = useStyles();

  return (
    <View style={styles.wrapper}>
      <View style={[styles.header, styles.container]}>
        <View style={{width: 28}} />
        <Text family="medium" size={18}>
          {title}
        </Text>
        <IconButton style={styles.button} size={28} onPress={onCreate}>
          <PlusIcon color="light" size={16} />
        </IconButton>
      </View>
      {children}
    </View>
  );
};
