import React, {FC} from 'react';
import {useTheme} from '@/hooks';
import {Icon} from '@/themes/palletes/types';
import Svg, {G, Path} from 'react-native-svg';

type TProps = {
  size: number;
  color: keyof Icon;
};

export const MovieIcon: FC<TProps> = ({color, size}) => {
  const {pallete} = useTheme();

  return (
    <Svg
      width={size}
      height={size}
      fill={pallete.icon[color]}
      viewBox="0 0 343.312 343.312">
      <G>
        <Path
          d="M314.604,92.411h-1.766l-49.222,30.781c-10.454,0.462-19.882,4.882-26.883,11.769v-27.595
		c0-22.611-18.398-41.01-41.013-41.01H41.013C18.396,66.356,0,84.754,0,107.366V235.95c0,22.607,18.396,41.007,41.013,41.007
		h154.708c22.614,0,41.013-18.399,41.013-41.007v-26.224c7.001,6.882,16.429,11.308,26.883,11.77l49.222,30.781h1.766
		c28.709,0,28.709-28.739,28.709-41.007v-77.853C343.312,121.15,343.312,92.411,314.604,92.411z"
        />
      </G>
    </Svg>
  );
};
