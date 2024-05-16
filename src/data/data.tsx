// Importamos las imágenes de las habitaciones

import Room1ImgLg from '@/assets/img/rooms/1-lg.png';
import Room1Img from '@/assets/img/rooms/1.png';
import Room2ImgLg from '@/assets/img/rooms/2-lg.png';
import Room2Img from '@/assets/img/rooms/2.png';
import Room3ImgLg from '@/assets/img/rooms/3-lg.png';
import Room3Img from '@/assets/img/rooms/3.png';
import Room4ImgLg from '@/assets/img/rooms/4-lg.png';
import Room4Img from '@/assets/img/rooms/4.png';
import Room5ImgLg from '@/assets/img/rooms/5-lg.png';
import Room5Img from '@/assets/img/rooms/5.png';
import Room6ImgLg from '@/assets/img/rooms/6-lg.png';
import Room6Img from '@/assets/img/rooms/6.png';
import Room7ImgLg from '@/assets/img/rooms/7-lg.png';
import Room7Img from '@/assets/img/rooms/7.png';
import Room8ImgLg from '@/assets/img/rooms/8-lg.png';
import Room8Img from '@/assets/img/rooms/8.png';
import { RoomType } from '@/interfaces/room.type';

// Importamos los íconos
import {
  FaBath,
  FaCocktail,
  FaCoffee,
  FaHotdog,
  FaParking,
  FaStopwatch,
  FaSwimmingPool,
  FaWifi,
} from 'react-icons/fa';

// Definimos los datos de las habitaciones
export const roomData: RoomType[] = [
  {
    id: 1,
    name: 'Habitación Superior',
    description:
      'Una habitación elegante y cómoda con todas las comodidades modernas para una estancia perfecta.',
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Café', icon: <FaCoffee /> },
      { name: 'Baño', icon: <FaBath /> },
      { name: 'Estacionamiento', icon: <FaParking /> },
      { name: 'Piscina', icon: <FaSwimmingPool /> },
      { name: 'Desayuno', icon: <FaHotdog /> },
      { name: 'Gimnasio', icon: <FaStopwatch /> },
      { name: 'Bebidas', icon: <FaCocktail /> },
    ],
    size: 30,
    maxPerson: 1,
    price: 115,
    image: Room1Img,
    imageLg: Room1ImgLg,
  },
  {
    id: 2,
    name: 'Habitación de Lujo',
    description:
      'Una habitación amplia y lujosa con todas las comodidades para disfrutar de una estancia relajante y placentera.',
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Café', icon: <FaCoffee /> },
      { name: 'Baño', icon: <FaBath /> },
      { name: 'Estacionamiento', icon: <FaParking /> },
      { name: 'Piscina', icon: <FaSwimmingPool /> },
      { name: 'Desayuno', icon: <FaHotdog /> },
      { name: 'Gimnasio', icon: <FaStopwatch /> },
      { name: 'Bebidas', icon: <FaCocktail /> },
    ],
    size: 50,
    maxPerson: 2,
    price: 220,
    image: Room2Img,
    imageLg: Room2ImgLg,
  },
  {
    id: 3,
    name: 'Habitación de Lujo Deluxe',
    description:
      'Una habitación de lujo absolutamente impresionante, perfecta para una escapada especial.',
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Café', icon: <FaCoffee /> },
      { name: 'Baño', icon: <FaBath /> },
      { name: 'Estacionamiento', icon: <FaParking /> },
      { name: 'Piscina', icon: <FaSwimmingPool /> },
      { name: 'Desayuno', icon: <FaHotdog /> },
      { name: 'Gimnasio', icon: <FaStopwatch /> },
      { name: 'Bebidas', icon: <FaCocktail /> },
    ],
    size: 70,
    maxPerson: 2,
    price: 285,
    image: Room3Img,
    imageLg: Room3ImgLg,
  },
  {
    id: 4,
    name: 'Suite Ejecutiva',
    description:
      'Una suite excepcionalmente espaciosa y lujosa, ideal para estancias prolongadas o celebraciones especiales.',
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Café', icon: <FaCoffee /> },
      { name: 'Baño', icon: <FaBath /> },
      { name: 'Estacionamiento', icon: <FaParking /> },
      { name: 'Piscina', icon: <FaSwimmingPool /> },
      { name: 'Desayuno', icon: <FaHotdog /> },
      { name: 'Gimnasio', icon: <FaStopwatch /> },
      { name: 'Bebidas', icon: <FaCocktail /> },
    ],
    size: 100,
    maxPerson: 4,
    price: 400,
    image: Room4Img,
    imageLg: Room4ImgLg,
  },
  {
    id: 5,
    name: 'Habitación Familiar',
    description:
      'Una habitación amplia y confortable diseñada para familias que buscan comodidad y conveniencia.',
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Café', icon: <FaCoffee /> },
      { name: 'Baño', icon: <FaBath /> },
      { name: 'Estacionamiento', icon: <FaParking /> },
      { name: 'Piscina', icon: <FaSwimmingPool /> },
      { name: 'Desayuno', icon: <FaHotdog /> },
      { name: 'Gimnasio', icon: <FaStopwatch /> },
      { name: 'Bebidas', icon: <FaCocktail /> },
    ],
    size: 80,
    maxPerson: 4,
    price: 350,
    image: Room5Img,
    imageLg: Room5ImgLg,
  },
  {
    id: 6,
    name: 'Habitación Doble',
    description:
      'Una habitación cómoda y acogedora con dos camas individuales, ideal para amigos o familiares que viajan juntos.',
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Café', icon: <FaCoffee /> },
      { name: 'Baño', icon: <FaBath /> },
      { name: 'Estacionamiento', icon: <FaParking /> },
      { name: 'Piscina', icon: <FaSwimmingPool /> },
      { name: 'Desayuno', icon: <FaHotdog /> },
      { name: 'Gimnasio', icon: <FaStopwatch /> },
      { name: 'Bebidas', icon: <FaCocktail /> },
    ],
    size: 45,
    maxPerson: 2,
    price: 180,
    image: Room6Img,
    imageLg: Room6ImgLg,
  },
  {
    id: 7,
    name: 'Habitación Estándar',
    description:
      'Una habitación sencilla pero acogedora con todas las comodidades esenciales para una estancia confortable.',
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Café', icon: <FaCoffee /> },
      { name: 'Baño', icon: <FaBath /> },
      { name: 'Estacionamiento', icon: <FaParking /> },
      { name: 'Piscina', icon: <FaSwimmingPool /> },
      { name: 'Desayuno', icon: <FaHotdog /> },
      { name: 'Gimnasio', icon: <FaStopwatch /> },
      { name: 'Bebidas', icon: <FaCocktail /> },
    ],
    size: 35,
    maxPerson: 2,
    price: 150,
    image: Room7Img,
    imageLg: Room7ImgLg,
  },
  {
    id: 8,
    name: 'Habitación Económica',
    description:
      'Una habitación cómoda y asequible perfecta para viajeros que buscan una estancia confortable sin gastar mucho.',
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Café', icon: <FaCoffee /> },
      { name: 'Baño', icon: <FaBath /> },
      { name: 'Estacionamiento', icon: <FaParking /> },
      { name: 'Piscina', icon: <FaSwimmingPool /> },
      { name: 'Desayuno', icon: <FaHotdog /> },
      { name: 'Gimnasio', icon: <FaStopwatch /> },
      { name: 'Bebidas', icon: <FaCocktail /> },
    ],
    size: 25,
    maxPerson: 1,
    price: 80,
    image: Room8Img,
    imageLg: Room8ImgLg,
  },
];
