import {Actor} from '@/bus/actor';
import React, {FC} from 'react';

import {View} from 'react-native';
import {Text, IconButton, CloseIcon} from '@/components';

import {useStyles} from './useStyles';

type TProps = {
  actor: Actor.Item;

  hasRemove?: boolean;
  onRemove?: () => any;
};

export const ActorCard: FC<TProps> = ({
  actor,
  hasRemove = false,
  onRemove = () => {},
}) => {
  const {styles} = useStyles();

  return (
    <View style={styles.wrapper}>
      <Text color="light" margin={{right: 4}}>
        {actor.name}
      </Text>
      {hasRemove && (
        <IconButton size={20} onPress={onRemove}>
          <CloseIcon color="light" size={16} />
        </IconButton>
      )}
    </View>
  );
};
