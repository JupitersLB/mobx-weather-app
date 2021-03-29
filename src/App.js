import React, { useState, useEffect } from 'react';
import { observer } from "mobx-react";

// import Api from './actions/Api';
// import sweetError from './utilities/sweetError';

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
    // handlePlacholder()
  }, [location.status])

  // const handlePlacholder = () => {
  //   Api.fetchTopFifty().promise.then(r => {
  //     console.log(r);
  //     if (r === undefined) return Promise.reject(sweetError("Error: API has reached its limit"))
  //     let obj = r[Math.floor(Math.random() *50)];
  //     location.setName(obj.LocalizedName)
  //     location.fetchCurrent(obj.Key);
  //     location.fetchForecast(obj.Key);
  //     location.fetchHours(obj.Key);
  //   })
  // }

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
