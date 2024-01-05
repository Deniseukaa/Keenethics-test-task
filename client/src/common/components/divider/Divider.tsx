import { FC } from 'react';

interface DividerProps {}

export const Divider: FC<DividerProps> = () => {
  return <div className="my-4 border-t border-gray-300" />;
};
