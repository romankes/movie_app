import {useCallback, useMemo, useRef, useState} from 'react';
import {Animated} from 'react-native';

export const useAnimation = () => {
  const animation = useMemo(() => new Animated.Value(0), []);

  const [isOpened, setIsOpened] = useState(false);

  const ref = useRef(0);

  const height = useMemo(() => {
    return animation.interpolate({
      inputRange: [0, 1],
      outputRange: [48, 48 + ref.current],
    });
  }, [animation, ref.current]);

  const onShow = useCallback(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();

    setIsOpened(true);
  }, [animation]);

  const onHide = useCallback(() => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
    setIsOpened(false);
  }, [animation]);

  return {ref, isOpened, onHide, onShow, height};
};
