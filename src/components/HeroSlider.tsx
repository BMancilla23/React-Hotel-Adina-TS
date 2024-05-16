import { FC } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

import Img1 from '@/assets/img/heroSlider/1.jpg'
import Img2 from '@/assets/img/heroSlider/2.jpg'
import Img3 from '@/assets/img/heroSlider/3.jpg'
import { Autoplay, EffectFade } from 'swiper/modules';

interface Props { }

const slides = [
  {
    title: 'Un Oasis de Paz',
    bg: Img1,
    btnText: 'Descubre nuestras habitaciones'
  },
  {
    title: 'Relájate y Rejuvenece',
    bg: Img2,
    btnText: 'Explora nuestros servicios'
  },
  {
    title: 'Experiencia Culinaria',
    bg: Img3,
    btnText: 'Reserva tu mesa'
  }
];

export const HeroSlider: FC<Props> = () => {
  return (
    <Swiper
      modules={[EffectFade, Autoplay]}
      effect={'fade'}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false
      }}
      speed={800}
      className='heroSlider h-[600px] lg:h-[860px]'>
      {
        slides.map(({ title, bg, btnText }: any, index) => (
          <SwiperSlide className='h-full relative flex justify-center items-center' key={index}>
            <div className='z-20 text-white text-center'>
              <h3 className='uppercase font-secondary tracking-[2px]'>Simplemente disfruta y relájate</h3>
              <h1 className='text-[32px] font-secondary uppercase max-w-[920px] lg:text-[68px] leading-right mb-6'>{title}</h1>
              <button className='btn btn-lg btn-primary mx-auto'>{btnText}</button>
            </div>

            <div className="absolute top-0 w-full h-full">
              <img className='object-cover h-full w-full' src={bg} alt={title} />
            </div>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/70'></div>
          </SwiperSlide>
        ))
      }
    </Swiper>
  );
};

