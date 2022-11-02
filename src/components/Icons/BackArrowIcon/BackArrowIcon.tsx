import React, {FC} from 'react';
import {useTheme} from '@/hooks';
import {Icon} from '@/themes/palletes/types';
import Svg, {Path} from 'react-native-svg';

type TProps = {
  size: number;
  color: keyof Icon;
};

export const BackArrowIcon: FC<TProps> = ({color, size}) => {
  const {pallete} = useTheme();

  return (
    <Svg width={size} height={size} viewBox="0 0 21 18" fill="none">
      <Path
        d="M2 9L1.32791 8.40142L0.794802 9L1.32791 9.59858L2 9ZM8.45291 0.401421L1.32791 8.40142L2.67209 9.59858L9.79709 1.59858L8.45291 0.401421ZM1.32791 9.59858L8.45291 17.5986L9.79709 16.4014L2.67209 8.40142L1.32791 9.59858ZM2 9.9L21 9.89999V8.1L2 8.1L2 9.9Z"
        fill={pallete.icon[color] as string}
      />
    </Svg>
  );
};
