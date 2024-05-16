import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from 'react';
import { RoomType } from '@/interfaces/room.type'; // Importa la interfaz Room desde room.type
import { roomData } from '@/data/data'; // Importa los datos de las habitaciones desde data.ts

// Define el tipo de contexto para las habitaciones
interface RoomContextType {
  rooms: RoomType[]; // Una matriz de habitaciones
  adults: string;
  setAdults: Dispatch<SetStateAction<string>>;
  kids: string;
  setKids: Dispatch<SetStateAction<string>>;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void; // Agrega el tipado al evento handleClick;
  loading: boolean;
}

// Define el valor inicial del contexto
const initialRoomContext: RoomContextType = {
  rooms: [], // Comienza con una matriz vacía
  adults: '',
  kids: '',
  setAdults: () => {
    /* */
  },
  setKids: () => {
    /* */
  },
  handleClick: () => {
    /* */
  },
  loading: false
};

// Crea el contexto de las habitaciones
export const RoomContext = createContext<RoomContextType>(initialRoomContext);

// Define las propiedades esperadas para el proveedor de habitaciones
interface Props {
  children: ReactNode; // Permite que el proveedor de habitaciones envuelva otros componentes React
}

// Define el componente del proveedor de habitaciones
const RoomProvider: FC<Props> = ({ children }) => {
  // Utiliza el estado local para almacenar las habitaciones
  const [rooms, setRooms] = useState<RoomType[]>(roomData); // Inicializa las habitaciones con los datos importados
  const [adults, setAdults] = useState('1 Adult');
  const [kids, setKids] = useState('0 kids');
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTotal(Number(adults[0]) + Number(kids[0]));
  }, [kids, adults]);
  /*   console.log(total); */

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);
    /*  console.log(total); */
    /*     console.log(rooms); */
    // Filter rooms based on total (person)

    const newRooms = roomData.filter(room => {
      return total <= room.maxPerson;
    });
    setTimeout(() => {
      setRooms(newRooms)
      setLoading(false)
    }, 3000);
  };

  /*  console.log(rooms); */

  /*   console.log(Number(adults[0])); */
  /*  console.log(Number(kids[0])); */

  // Renderiza el contexto RoomContext.Provider
  return (
    <RoomContext.Provider
      value={{ rooms, adults, setAdults, kids, setKids, handleClick, loading }}
    >
      {' '}
      {/* Proporciona el valor del contexto, que incluye las habitaciones */}
      {children}{' '}
      {/* Renderiza los componentes hijos envueltos por el proveedor de habitaciones */}
    </RoomContext.Provider>
  );
};

// Exporta el proveedor de habitaciones
export { RoomProvider };
