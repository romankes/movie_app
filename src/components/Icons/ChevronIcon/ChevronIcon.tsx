import React, {FC} from 'react';
import {useTheme} from '@/hooks';
import {Icon} from '@/themes/palletes/types';
import Svg, {Path} from 'react-native-svg';

type TProps = {
  size: number;
  color: keyof Icon;
};

export const ChevronIcon: FC<TProps> = ({color, size}) => {
  const {pallete} = useTheme();

  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M13.5 12L13.8536 12.3536L14.2071 12L13.8536 11.6464L13.5 12ZM10.8536 15.3536L13.8536 12.3536L13.1464 11.6464L10.1464 14.6464L10.8536 15.3536ZM13.8536 11.6464L10.8536 8.64645L10.1464 9.35355L13.1464 12.3536L13.8536 11.6464Z"
        fill={pallete.icon[color] as string}
      />
    </Svg>
  );
};
