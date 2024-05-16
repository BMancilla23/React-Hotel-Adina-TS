import { FC, useEffect, useState } from 'react';
import LogoDark from '@/assets/img/logo-dark.svg'
import LogoWhite from '@/assets/img/logo-white.svg'

interface Props { }

export const Header: FC<Props> = () => {

  const [header, setHeader] = useState(true)

  useEffect(() => {

    const handleScroll = () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  const menuItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Habitaciones', path: '/rooms' },
    { name: 'Restaurante', path: '/restaurant' },
    { name: 'Spa', path: '/spa' },
    { name: 'Contacto', path: '/contact' }
  ] as const;

  return (
    <header className={`${header ? 'bg-white py-6 shadow-lg' : 'bg-transparent py-8'} fixed top-0 z-50 w-full transition-all duration-500`}>
      <nav className='container mx-auto flex flex-col items-center gap-y-6 lg:flex-row lg:justify-between lg:gap-y-0'>
        <a href="/">
          {
            header ? (
              <img src={LogoDark} className='w-[160px]' alt="logo" />
            ) : (
              <img src={LogoWhite} className='w-[160px]' alt="logo" />
            )
          }
        </a>

        <ul className={`${header ? 'text-primary' : 'text-white'} flex gap-x-4 text-xs sm:text-base font-secondary  lg:gap-x-8 items-center uppercase`}>
        {menuItems.map((item, index) => (
            <a key={index} href={item.path} className='hover:text-accent transition'>
              {item.name}
            </a>
          ))}
        </ul>
      </nav>
    </header>
  );
};
