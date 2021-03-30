import React, { useEffect } from 'react';
import { observer } from "mobx-react";

import Header from './components/header';
import CurrentForecast from './components/currentForecast';
import DayList from './components/dayList';
import HourList from './components/hourList';
import Footer from './components/footer';

import './App.css';

const App = props => {
  const { location } = props;

  useEffect(() => {
    console.log(process.env.NODE_ENV);
    console.log(process.env.REACT_APP_ACCU_API_KEY);
    console.log(location.status)
  }, [location.status])

  return (
    <div className="App flex flex-col">
      <Header location={location} />
      <div className="forecasts flex-grow">
        <div className="day-forecast">
          { location.status === 3 ? <CurrentForecast location={location} /> : '' }
        </div>
        <div className="hourly-forecast pt-3">
          { location.status === 3 ? <HourList location={location} /> : ''}
        </div>
        <div className="future-forecast pt-3">
          { location.status === 3 ? <DayList location={location} /> : ''}
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default observer(App);
