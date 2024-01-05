import { Container } from '@components/container/Container';
import { FC } from 'react';

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  return (
    <header className="bg-mainGrayBg sticky top-0 z-50 flex h-[42px] items-center">
      <Container>
        <h1 className="cursor-pointer px-4 py-1 font-sairaStencilOne text-lg text-special hover:text-white md:text-2xl">
          <a>ADMIN.BIKE-BOOKING.COM</a>
        </h1>
      </Container>
    </header>
  );
};
