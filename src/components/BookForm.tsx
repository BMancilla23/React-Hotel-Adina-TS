import { FC, useContext } from 'react';
import { CheckIn } from './CheckIn';
import { CheckOut } from './CheckOut';
import { AdultsDropdown } from './AdulstDropdown';
import { KidsDropdown } from './KidsDropdown';
import { RoomContext } from '@context/RoomContext';

interface Props { }

export const BookForm: FC<Props> = () => {

  const { handleClick } = useContext(RoomContext)

  return (
    <form className='h-[300px] w-full lg:h-[70px]'>
      <div className='flex flex-col w-full h-full lg:flex-row'>
        <div className='flex-1 border-r'>
          <CheckIn />
        </div>
        <div className='flex-1 border-r'>
          <CheckOut />
        </div>
        <div className='flex-1 border-r'>
          <AdultsDropdown />
        </div>
        <div className='flex-1 border-r'>
          <KidsDropdown />
        </div>
        <button onClick={(e) => handleClick(e)} type='submit' className='btn btn-primary'>Buscar</button>
      </div>
    </form>
  );
};