import {BackArrowIcon, IconButton, Loader, Text} from '@/components';
import React, {FC, ReactNode} from 'react';

import {
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {useStyles} from './useStyles';

type TProps = {
  title: string;
  onBack: () => any;

  rightIcon?: ReactNode;
  onPressRightIcon?: () => any;

  renderFooter?: ReactNode | ReactNode[];

  children: ReactNode | ReactNode[];

  onRefresh?: () => any;
  refreshing?: boolean;
  isLoading?: boolean;
};

export const DetailLayout: FC<TProps> = ({
  children,
  onBack,
  title,
  renderFooter,
  onRefresh,
  refreshing = false,
  isLoading,
  rightIcon,
  onPressRightIcon,
}) => {
  const {styles} = useStyles();

  const refreshProps = onRefresh
    ? {
        refreshControl: (
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        ),
      }
    : {};

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={[styles.header, styles.container]}>
        <IconButton size={32} onPress={onBack}>
          <BackArrowIcon size={24} color="default" />
        </IconButton>
        <Text
          family="medium"
          size={20}
          style={{flex: 1}}
          margin={{left: 4, right: 4}}
          numberOfLines={1}
          ellipsizeMode="tail"
          align="center">
          {title}
        </Text>
        {rightIcon ? (
          <IconButton size={32} onPress={onPressRightIcon}>
            {rightIcon}
          </IconButton>
        ) : (
          <View style={{width: 32}} />
        )}
      </View>
      <ScrollView
        {...refreshProps}
        showsVerticalScrollIndicator={false}
        style={[styles.content, styles.container]}>
        {isLoading && !refreshing ? <Loader height={200} /> : children}
      </ScrollView>
      {renderFooter && (
        <View style={[styles.footer, styles.container]}>{renderFooter}</View>
      )}
    </SafeAreaView>
  );
};
