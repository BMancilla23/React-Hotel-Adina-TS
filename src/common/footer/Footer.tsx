import { FC } from 'react';

import LogoWhite from '@/assets/img/logo-white.svg';

interface Props {}

export const Footer: FC<Props> = () => {
  return (
    <footer className='bg-primary py-12'>
      <div className='container mx-auto text-white flex flex-col gap-y-4 items-center lg:justify-between lg:flex-row'>
        {/* Logo */}
        <a href=''>
          <img src={LogoWhite} alt='' />
        </a>
        <p className='text-xs sm:text-base'>Copyright &copy; 2024. Todos los derechos reservados</p>
      </div>
    </footer>
  );
};
