import {BackArrowIcon, IconButton, Loader, Text} from '@/components';
import React, {FC, ReactNode} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {useStyles} from './useStyles';

type TProps = {
  children: ReactNode | ReactNode[];

  hasBack?: boolean;
  onBack?: () => any;

  title?: ReactNode;
  renderFooter: ReactNode;

  isLoading?: boolean;
};

export const AuthLayout: FC<TProps> = ({
  children,
  renderFooter,
  title,
  hasBack,
  onBack,
  isLoading,
}) => {
  const {styles} = useStyles();

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.header}>
          {!!hasBack && (
            <IconButton size={32} onPress={onBack}>
              <BackArrowIcon size={24} color="default" />
            </IconButton>
          )}
          <Text align="center" size={24} family="medium" style={{flex: 1}}>
            {title}
          </Text>
          {!!hasBack && <View style={{width: 32}} />}
        </View>
        {isLoading ? (
          <Loader height={200} />
        ) : (
          <ScrollView
            style={styles.content}
            keyboardShouldPersistTaps="always"
            showsVerticalScrollIndicator={false}
            scrollEnabled={false}>
            {children}
          </ScrollView>
        )}
        {!isLoading && <View style={styles.footer}>{renderFooter}</View>}
      </View>
    </SafeAreaView>
  );
};
