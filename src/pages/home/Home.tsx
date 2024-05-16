import { BookForm } from '@/components/BookForm';
import { HeroSlider } from '@/components/HeroSlider';
import { Rooms } from '@/components/Rooms';
import { FC } from 'react';

interface Props { }

export const Home: FC<Props> = () => {
  return (
    <>
      <HeroSlider />
      <div className="container mx-auto relative">
        <div className='bg-accent/20 mt-4 p-4 lg:shadow-xl lg:absolute lg:-top-12 lg:left-0 lg:right-0 lg:p-0 lg:z-30'>
          <BookForm />
        </div>
      </div>
      <Rooms></Rooms>
    </>
  );
};
