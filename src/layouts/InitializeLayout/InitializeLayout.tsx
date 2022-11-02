import React, {FC, PropsWithChildren, ReactNode} from 'react';
import {useData} from './useData';

type TProps = {
  children: ReactNode;
};

export const InitializeLayout: FC<TProps> = ({children}) => {
  const {initialized} = useData();

  if (!initialized) {
    return null;
  }

  return <>{children}</>;
};
