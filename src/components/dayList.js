import React, { useState, useEffect } from 'react';
import { observer } from "mobx-react";

import DayForecast from './dayForecast';

const DayList = props => {
  const { location } = props;
  const [selectedDays, setSelectedDays] = useState([])

  useEffect(() => {
    setSelectedDays(location.dayList.days.slice(0, 3))
  }, [location.dayList.days])


  return (
    <div className="weather-forecast text-purple-500 pt-3 bg-opacity-50 w-5/6 md:w-4/6 lg:w-1/2 bg-indigo-300 mx-auto rounded-2xl">
      <div className="weather-forecast-header flex justify-between px-3">
        <div className='left-arrow h-8 w-8 invisible pointer' >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
        </div>
        <p className="font-bold text-xl">A look into the next few days...</p>
        <div className='right-arrow h-8 w-8 pointer'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
      <div className="forecast-cards flex py-2 px-3">
        { selectedDays.map( (el, idx ) => <DayForecast forecast={el} key={idx}/> ) }
      </div>
    </div>
  );
}

export default observer(DayList);
