import React from 'react';
import ReactDOM from 'react-dom';
import Api from './actions/Api';
import sweetError from './utilities/sweetError';
import './index.css';
import App from './App';
// import { fetchTopFifty } from './actions/index';
import reportWebVitals from './reportWebVitals';

import Location from "./models/Location";

const location = Location.create({})

Api.fetchTopFifty().promise.then(r => {
  console.log(r);
  if (r === undefined) return Promise.reject(sweetError("Error: API has reached its limit"))
  let obj = r[Math.floor(Math.random() *50)];
  location.setName(obj.LocalizedName)
  location.fetchCurrent(obj.Key);
  location.fetchForecast(obj.Key);
  location.fetchHours(obj.Key);
})

ReactDOM.render(
  <React.StrictMode>
    <App location={location} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
