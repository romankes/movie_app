import React, {FC} from 'react';
import {useTheme} from '@/hooks';
import {Icon} from '@/themes/palletes/types';
import Svg, {Path} from 'react-native-svg';

type TProps = {
  size: number;
  color: keyof Icon;
};

export const PlusIcon: FC<TProps> = ({color, size}) => {
  const {pallete} = useTheme();

  return (
    <Svg width={size} height={size} viewBox="0 0 8 8" fill="none">
      <Path
        d="M4 7L4 1"
        stroke={pallete.icon[color] as string}
        strokeLinecap="round"
      />
      <Path
        d="M7 4L1 4"
        stroke={pallete.icon[color] as string}
        strokeLinecap="round"
      />
    </Svg>
  );
};
