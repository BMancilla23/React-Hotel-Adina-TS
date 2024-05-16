import { RoomType } from '@/interfaces/room.type';
import { FC } from 'react';
import { BsArrowsFullscreen, BsPeople } from 'react-icons/bs';
import { Link } from 'react-router-dom'

interface Props {
  room: RoomType
}

export const Room: FC<Props> = ({ room }) => {
  /*  console.log(room); */
  const { id, name, image, description, size, maxPerson, price } = room;

  // Función para cortar la descripción y agregar puntos suspensivos
  const truncateDescription = (text: string, maxLength: number): string => {
    if (text.length <= maxLength) return text;
    return `${text.slice(0, maxLength)}...`;
  }

  return (
    <div className="bg-white shadow-2xl min-h-[500px] group">
      {/* Img */}
      <div className="overflow-hidden">
        <img className='group-hover:scale-110 transition-all duration-300 w-full' src={image} alt="" />
      </div>
      {/* Details */}
      <div className='bg-white shadow-lg max-w-[300px] mx-auto h-[60px] -translate-y-1/2 flex justify-center items-center uppercase font-secondary font-semibold text-xs'>
        <div className='flex justify-between w-[80%]'>
          {/* Size */}
          <div className='flex items-center gap-x-2'>
            <button className='text-accent'>
              <BsArrowsFullscreen size={15} />
            </button>
            <div className="flex gap-x-1">
              <p>Size</p>
              <p>{size}m2</p>
            </div>
          </div>
          {/* room capacity */}
          <div className='flex items-center gap-x-2'>
            <button className='text-accent'>
              <BsPeople size={18} />
            </button>
            <div className="flex gap-x-1">
              <p>Max people</p>
              <p>{maxPerson}</p>
            </div>
          </div>
        </div>
      </div>
      {/* name & description */}
      <div className='text-center'>
        <Link to={`/room/${id}`}>
          <h3 className='h3'>
            {name}
          </h3>
        </Link>
        <p className='max-w-[300px] mx-auto mb-3 lg:mb-6'>{truncateDescription(description, 70)}</p>
      </div>
      {/* Btn */}
      <Link to={`/room/${id}`} className='text-xs p-0 btn btn-secondary btn-sm max-w-[240px] mx-auto'>
        Reserva desde ${price}
      </Link>
    </div>
  );
};