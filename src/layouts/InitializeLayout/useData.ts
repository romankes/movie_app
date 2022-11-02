import {appActions, appSelectors} from '@/bus/app';
import {useCallback, useEffect} from 'react';

import {useDispatch, useSelector} from 'react-redux';

import {useFonts} from 'expo-font';
import {Fonts} from '@/themes';

import * as SplashScreen from 'expo-splash-screen';

export const useData = () => {
  const dispatch = useDispatch();

  const initialized = useSelector(appSelectors.getInitialized);

  const [loaded] = useFonts({
    [Fonts.extra_bold]: require(`../../../assets/fonts/Manrope-ExtraBold.ttf`),
    [Fonts.bold]: require(`../../../assets/fonts/Manrope-Bold.ttf`),
    [Fonts.medium]: require(`../../../assets/fonts/Manrope-Medium.ttf`),
    [Fonts.regular]: require(`../../../assets/fonts/Manrope-Regular.ttf`),
    [Fonts.light]: require(`../../../assets/fonts/Manrope-Light.ttf`),
    [Fonts.extra_light]: require(`../../../assets/fonts/Manrope-ExtraBold.ttf`),
  });

  const onPreventHide = useCallback(async () => {
    await SplashScreen.preventAutoHideAsync();
  }, []);

  useEffect(() => {
    onPreventHide();
  }, []);

  const onHide = useCallback(async () => {
    await SplashScreen.hideAsync();
  }, []);

  useEffect(() => {
    if (initialized && loaded) {
      onHide();
    }
  }, [loaded, initialized]);

  useEffect(() => {
    if (!initialized) {
      dispatch(appActions.bootstrapAsync());
    }
  }, [initialized, dispatch, loaded]);

  return {initialized: initialized && loaded};
};
