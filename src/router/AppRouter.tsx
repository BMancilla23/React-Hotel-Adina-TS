import { Home } from '@/pages/home/Home';
import { RoomDetail } from '@/pages/roomDetail/RoomDetail';
import { Routes, Route } from 'react-router-dom';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/room/:id' element={<RoomDetail />} />
      </Routes>
    </>
  );
};
