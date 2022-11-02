import React, {ReactNode, useState} from 'react';

import {SafeAreaView, View} from 'react-native';

//app themes
import {themes, ThemeContext, ThemesName} from '@/themes';
import {useTheme} from '@/hooks';

type TProps = {
  children: ReactNode;
};

export const ThemeLayout: React.FC<TProps> = ({children, ...props}) => {
  return (
    <ThemeContext.Provider value={themes[ThemesName.LIGHT]}>
      <ThemeLayoutContent {...props}>{children}</ThemeLayoutContent>
    </ThemeContext.Provider>
  );
};

const ThemeLayoutContent: React.FC<TProps> = ({children}) => {
  const {pallete} = useTheme();

  return (
    <View style={{backgroundColor: pallete.background.default, flex: 1}}>
      {children}
    </View>
  );
};
