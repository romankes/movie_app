import {createContext} from 'react';
import {StatusBarStyle} from 'react-native';

//themes
import {Pallete} from './palletes/';
import * as palletes from './palletes/';

export enum ThemesName {
  LIGHT = 'light',
}

export enum Fonts {
  extra_bold = 'Manrope-ExtraBold',
  bold = 'Manrope-Bold',
  regular = 'Manrope-Regular',
  medium = 'Manrope-Medium',
  light = 'Manrope-Light',
  extra_light = 'Manrope-ExtraLight',
}

type ThemesItem = {
  pallete: Pallete;
  name: ThemesName;
  statusBarStyle: StatusBarStyle;
  fonts: typeof Fonts;
};

type Themes = {
  light: ThemesItem;
};

export const themes: Themes = {
  light: {
    pallete: palletes[ThemesName.LIGHT],
    name: ThemesName.LIGHT,
    statusBarStyle: 'dark-content',
    fonts: Fonts,
  },
};

export const ThemeContext = createContext(themes[ThemesName.LIGHT]);
