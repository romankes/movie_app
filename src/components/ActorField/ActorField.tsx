import React, {FC, useEffect, useMemo, useRef, useState} from 'react';

import {TextInput, View} from 'react-native';
import {Text, IconButton, ActorCard, PlusIcon} from '@/components';

import {Actor} from '@/bus/actor';

import {useStyles} from './useStyles';

type TProps = {
  actors: Actor.Item[];
  onChange: (actors: Actor.Item[]) => any;

  error?: string;

  margin?: {
    right?: number;
    bottom?: number;
    top?: number;
    left?: number;
  };

  label?: string;
};

export const ActorField: FC<TProps> = ({
  margin,
  actors,
  onChange,
  error,
  label,
}) => {
  const {styles} = useStyles();

  const [value, setValue] = useState('');
  const [isInput, setIsInput] = useState(false);

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

  useEffect(() => {
    if (isInput) {
      ref.current?.focus();
    }
  }, [isInput]);

  return (
    <View style={margins}>
      {!!label && (
        <Text margin={{bottom: 8}} family="bold" size={14}>
          {label}
        </Text>
      )}

      <View style={[styles.wrapper]}>
        {actors.map(actor => (
          <ActorCard
            hasRemove
            onRemove={() => onChange(actors.filter(({id}) => id !== actor.id))}
            actor={actor}
            key={`tag-${actor.id}`}
          />
        ))}
        {isInput ? (
          <TextInput
            ref={ref}
            style={styles.input}
            value={value}
            onChangeText={setValue}
            onSubmitEditing={() => {
              if (value) {
                onChange([...actors, {name: value, id: new Date().getTime()}]);
                setValue('');
                setIsInput(false);
              }
            }}
          />
        ) : (
          <IconButton size={32} onPress={() => setIsInput(true)}>
            <PlusIcon color="default" size={14} />
          </IconButton>
        )}
      </View>
      <Text
        style={{height: 16}}
        margin={{top: 4}}
        family="medium"
        color="danger">
        {error}
      </Text>
    </View>
  );
};
