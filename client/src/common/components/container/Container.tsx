import clsx from 'clsx';
import { FC, PropsWithChildren } from 'react';

interface ContainerProps {
  flex?: boolean;
}

export const Container: FC<PropsWithChildren<ContainerProps>> = ({
  flex = false,
  children,
}) => {
  const classes = clsx('container mx-auto', {
    'flex-1': flex,
  });
  return <div className={classes}>{children}</div>;
};
