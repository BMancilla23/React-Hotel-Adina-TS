import { FC, useState } from 'react';

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import '@/css/datepicker.css'

import { BsCalendar } from 'react-icons/bs';

interface Props { }

export const CheckIn: FC<Props> = () => {
  const [startDate, setStartDate] = useState<Date | null>(null)

  return (
    <div className='relative flex items-center justify-end h-full'>
      {/* Icon */}
      <div className="absolute z-10 pr-8">
        <div>
          <BsCalendar className='text-accent text-base'/>
        </div>
      </div>
      <DatePicker
        id='checkin'
        className='w-full h-full outline-none'
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        placeholderText='Entrada'
      />

    </div>
  );
};
