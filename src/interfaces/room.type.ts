import { ReactElement } from 'react';

// Definir las interfaces
export interface Facility {
  name: string;
  icon: ReactElement;
}

export interface RoomType {
  id: number;
  name: string;
  description: string;
  facilities: Facility[];
  size: number;
  maxPerson: number;
  price: number;
  image: string;
  imageLg: string;
}
