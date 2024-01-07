import { FC } from 'react';

interface SpinnerProps {}

export const Spinner: FC<SpinnerProps> = () => {
  return (
    <div className="h-12 w-12 animate-spin rounded-full border-8 border-gray-300 border-t-mainGrayBg" />
  );
};
