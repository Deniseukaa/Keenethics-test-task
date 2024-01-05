import { Container } from '@components/container/Container';
import { FC } from 'react';

interface FooterProps {}

export const Footer: FC<FooterProps> = () => {
  return (
    <footer className="bg-mainGrayBg sticky bottom-0 z-50 flex h-[42px] items-center">
      <Container>
        <div className="flex justify-end gap-[10px] px-[10px]">
          <span className="text-center text-xl text-stone-300">Developer:</span>
          <span>
            <a
              href="https://github.com/Deniseukaa"
              className="text-center text-xl text-white hover:text-special"
              target="_blank"
            >
              Denys Klukyn
            </a>
          </span>
        </div>
      </Container>
    </footer>
  );
};
