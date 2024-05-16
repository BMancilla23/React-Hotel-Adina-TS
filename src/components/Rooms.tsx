import { RoomContext } from '@context/RoomContext';
import { FC, useContext } from 'react';
import { Room } from './Room';
import { SpinnerDotted } from 'spinners-react';

interface Props { }

export const Rooms: FC<Props> = () => {
  const { rooms, loading } = useContext(RoomContext)
  /*  console.log(rooms); */
  return (
    <section className='py-24'>
      {/* overlay & spinner */}
      {
        loading && (
          <div className='h-screen fixed bottom-0 top-0 bg-black/90 w-full z-50 flex justify-center items-center'>
            <SpinnerDotted color='white'/>
          </div>
        )
      }
      <div className='container mx-auto lg:px-0'>
        {/* Grid */}
        <div className='grid grid-cols-1 max-w-sm mx-auto gap-[30px] lg:grid-cols-3 lg:max-w-none lg:mx-0'>
          {
            rooms.map((item, i) => {
              /* console.log(item); */
              return <Room room={item} key={i} />
            })
          }
        </div>
      </div>
    </section>
  );
};
