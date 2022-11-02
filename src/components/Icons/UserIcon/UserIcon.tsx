import React, {FC} from 'react';
import {useTheme} from '@/hooks';
import {Icon} from '@/themes/palletes/types';
import Svg, {Path, Ellipse} from 'react-native-svg';

type TProps = {
  size: number;
  color: keyof Icon;
};

export const UserIcon: FC<TProps> = ({color, size}) => {
  const {pallete} = useTheme();

  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M21.8878 21.9429C22.4778 21.8201 22.829 21.2037 22.5495 20.6698C21.7903 19.2199 20.5452 17.9459 18.9326 16.9851C16.9437 15.8002 14.5069 15.1579 12 15.1579C9.49311 15.1579 7.05626 15.8002 5.0674 16.9851C3.45476 17.9459 2.20974 19.2199 1.45053 20.6698C1.17098 21.2036 1.5222 21.8201 2.1122 21.9429L3.85261 22.305C9.22667 23.423 14.7733 23.423 20.1474 22.305L21.8878 21.9429Z"
        fill={pallete.icon[color] as string}
      />
      <Ellipse
        cx="12.0008"
        cy="6.31579"
        rx="6.32669"
        ry="6.31579"
        fill={pallete.icon[color] as string}
      />
    </Svg>
  );
};
