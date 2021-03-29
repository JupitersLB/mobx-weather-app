import React, { useState, useEffect } from 'react';
import { observer } from "mobx-react";

import HourForecast from './hourForecast';

const HourList = props => {
  const { location } = props;
  const [selectedHours, setSelectedHours] = useState([])

  useEffect(() => {
    setSelectedHours(location.hourList.hours.slice(0, 3))
  }, [location.hourList.hours])

  const handleClick = (event) => {
    let idx, newArr;
    if (event.currentTarget.classList.contains('left-arrow')) {
      idx = location.hourList.hours.indexOf(selectedHours[0]) - 1
      newArr = location.hourList.hours.slice(idx, (idx + 3))
    } else {
      idx = location.hourList.hours.indexOf(selectedHours[2]) + 2
      newArr = location.hourList.hours.slice((idx - 3), idx)
    }
    setSelectedHours(newArr);
  }

  const leftArrowClass = selectedHours[0] === location.hourList.hours[0] ? 'left-arrow h-8 w-8 invisible' : 'left-arrow h-8 w-8 cursor-pointer'
  const rightArrowClass = selectedHours[selectedHours.length - 1] === location.hourList.hours[location.hourList.hours.length - 1] ? 'right-arrow h-8 w-8 invisible' : 'right-arrow h-8 w-8 cursor-pointer';

  return (
    <div className="weather-forecast text-purple-500 pt-3 bg-opacity-50 w-5/6 md:w-4/6 lg:w-1/2 bg-indigo-300 mx-auto rounded-2xl">
      <div className="weather-forecast-header flex justify-between px-3">
        <div className={leftArrowClass} onClick={handleClick} >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
        </div>
        <p className="font-bold text-xl">A look into the next few hours...</p>
        <div className={rightArrowClass} onClick={handleClick} >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
      <div className="forecast-cards flex py-2 px-3">
        { selectedHours.map( (el, idx ) => <HourForecast forecast={el} key={idx}/> ) }
      </div>
    </div>
  );
}

export default observer(HourList);
