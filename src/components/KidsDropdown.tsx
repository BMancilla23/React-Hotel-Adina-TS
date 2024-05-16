import { FC, useContext } from 'react';

import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react'
import { BsChevronDown } from 'react-icons/bs';
import { RoomContext } from '@context/RoomContext';

interface Props { }

const LIST = [
  {
    name: '0 Niños'
  },
  {
    name: '1 Niño'
  },
  {
    name: '2 Niños'
  },
  {
    name: '3 Niños'
  },
  {
    name: '4 Niños'
  }
] as const;

export const KidsDropdown: FC<Props> = () => {

  const { kids, setKids } = useContext(RoomContext)

  return (
    <Menu as='div' className='w-full h-full bg-white relative'>
      {/* btn */}
      <MenuButton className='w-full h-full flex items-center justify-between px-8'>
        {kids === 'o kids' ? 'No Kids' : kids}
        <BsChevronDown className='text-base text-accent-hover' />
      </MenuButton>
      {/* Items */}
      <MenuItems as='ul' className='bg-white absolute w-full flex flex-col z-40'>
        {
          LIST.map(({ name }, index) => (
            <MenuItem onClick={() => setKids(name)} className='border-b last-of-type:border-b-0 h-12 hover:bg-accent hover:text-white w-full flex justify-center items-center cursor-pointer' key={index} as='li'>{name}</MenuItem>
          ))
        }
      </MenuItems>
    </Menu>
  );
};
