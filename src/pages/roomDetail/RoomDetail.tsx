import { AdultsDropdown } from '@/components/AdulstDropdown';
import { CheckIn } from '@/components/CheckIn';
import { CheckOut } from '@/components/CheckOut';
import { KidsDropdown } from '@/components/KidsDropdown';
import { ScrollToTop } from '@/components/ScrollToTop';
import { RoomContext } from '@context/RoomContext';
import { FC, useContext } from 'react';
import { FaCheck } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

interface Props {}

export const RoomDetail: FC<Props> = () => {
  const { rooms } = useContext(RoomContext);
  const { id } = useParams();
  /*   console.log(id); */

  // Obtener rooms
  const room = rooms.find(room => {
    return room.id === Number(id);
  });
  /*   console.log(room); */

  // Verifica si se encontró la habitación
  if (!room) {
    return <div>Room not found</div>;
  }

  // Destructurar room
  const { name, description, facilities, imageLg, price } = room;

  return (
    <section className=''>
      <ScrollToTop />
      {/* Banner */}
      <div className='bg-room bg-cover bg-center h-[560px] relative flex justify-center items-center'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/70'> </div>
        {/* Title */}
        <h1 className='text-6xl font-light text-white z-20 font-secondary text-center opacity-90 uppercase'>
          {name} Details
        </h1>
      </div>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row h-full py-24'>
          {/* Left */}
          <div className='w-full h-full lg:w-[60%] px-6'>
            <h2 className='h2'>{name}</h2>
            <p className='mb-8'>{description}</p>
            <img src={imageLg} alt='' />
            {/* Facilities */}
            <div className='mt-12'>
              <h3 className='h3 mb-3'>Instalaciones de la habitación</h3>
              <p className='mb-12'>
                Nuestra habitación está equipada con todas las comodidades para
                asegurar una estancia placentera. Disfruta de:
              </p>
              {/* Grid */}
              <div className='grid grid-cols-3 gap-6 mb-12'>
                {facilities.map(({ name, icon }: any, index: any) => (
                  <div className='flex items-center gap-x-3 flex-1' key={index}>
                    <div className='text-3xl text-accent'>{icon}</div>
                    <span className='text-base '>{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Right */}
          <div className='w-full h-full lg:w-[40%]'>
            {/* Reservation */}
            <div className='py-8 px-6 bg-accent/20 mb-12'>
              <div className='flex flex-col space-y-4 mb-4'>
                <h3>Tu reservación</h3>
                <div className='h-[60px]'>
                  <CheckIn />
                </div>
                <div className='h-[60px]'>
                  <CheckOut />
                </div>
                <div className='h-[60px]'>
                  <AdultsDropdown />
                </div>
                <div className='h-[60px]'>
                  <KidsDropdown />
                </div>
              </div>
              <button className='btn btn-lg btn-primary w-full'>
                Reserva ahora por ${price}
              </button>
            </div>
            {/* Rules */}
            <div>
              <h3 className='h3'>Reglas del hotel</h3>
              <p className='mb-6'>
                Para garantizar una estancia cómoda y segura para todos nuestros
                huéspedes, por favor tenga en cuenta las siguientes reglas:
              </p>
              <ul className='flex flex-col gap-y-4'>
                <li className='flex items-center gap-x-4'>
                  <FaCheck className='text-accent' />
                  Entrada: 3:00 PM - 9:00 PM
                </li>
                <li className='flex items-center gap-x-4'>
                  <FaCheck className='text-accent' />
                  Salida: 10:30 AM
                </li>
                <li className='flex items-center gap-x-4'>
                  <FaCheck className='text-accent' />
                  No Mascostas
                </li>
                <li className='flex items-center gap-x-4'>
                  <FaCheck className='text-accent' />
                  No Fumar
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
