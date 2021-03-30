import { types } from 'mobx-state-tree';
import Swal from 'sweetalert2'

import Api from '../actions/Api';
import sweetError from '../utilities/sweetError';

import DayList from "./DayList";
import HourList from "./HourList";

const Location = types
  .model('Location', {
    name: types.optional(types.string, ''),
    status: types.optional(types.integer, 0),
    phrase: types.optional(types.string, ''),
    icon: types.optional(types.integer, 1),
    temp: types.optional(types.number, 0),
    realTemp: types.optional(types.number, 0),
    UVIndex: types.optional(types.number, 0),
    humidity: types.optional(types.number, 0),
    windSpeed: types.optional(types.number, 0),
    precipitation: types.optional(types.number, 0),
    dayList: types.optional(DayList, { days: [] }),
    hourList: types.optional(HourList, { hours: [] })
  })
  .actions(self => ({
    fetchLocation(value) {
      Api.searchLocation(value).promise.then(r => {
        console.log(r)
        if (r === undefined) {
          sweetError("Error: API has reached its limit")
        } else if (r.length === 0) {
          sweetError(`Error: Can't find ${value}`)
        } else {
          self.setName(value);
          self.fetchCurrent(r[0].Key);
          self.fetchForecast(r[0].Key);
          self.fetchHours(r[0].Key);
        }
      })
    },
    fetchCurrent(location) {
      Api.fetchCurrentConditions(location).promise.then(r => {
        console.log(r)
        if (r === undefined) return
        self.setCurrent(r[0]);
        self.setStatus();
      })
    },
    fetchForecast(location) {
      Api.fetchFiveDayForecast(location).promise.then(r => {
        console.log(r)
        if (r === undefined) return
        self.dayList.removeSelected();
        self.dayList.removeAllDays();
        r.DailyForecasts.map((day, idx) => self.dayList.add(day, idx));
        self.dayList.days.slice(0, 3).map(day => self.dayList.selected(day))
        self.setStatus();
      })
    },
    fetchHours(location) {
      Api.fetchHourlyForecast(location).promise.then(r => {
        console.log(r)
        if (r === undefined) return
        self.hourList.removeSelected();
        self.hourList.removeAllHours();
        r.map((hour, idx) => self.hourList.add(hour, idx));
        self.hourList.hours.slice(0, 3).map(hour => self.hourList.selected(hour))
        self.setStatus();
      })
    },
    fetchGeoLocation(crd) {
      Api.searchGeoLocation(crd.latitude, crd.longitude).promise.then(r => {
        console.log(r)
        if (r === undefined) return Promise.reject(sweetError("Error: API has reached its limit"))
        self.setName(r.LocalizedName);
        self.fetchCurrent(r.Key);
        self.fetchForecast(r.Key);
        self.fetchHours(r.Key);
        Swal.close();
      })
    },
    setCurrent(obj) {
      self.icon = obj.WeatherIcon
      self.phrase = obj.WeatherText
      self.temp = obj.Temperature.Metric.Value
      self.realTemp = obj.RealFeelTemperature.Metric.Value
      self.UVIndex = obj.UVIndex
      self.humidity = obj.RelativeHumidity
      self.windSpeed = obj.Wind.Speed.Metric.Value
      self.precipitation = obj.PrecipitationSummary.Precipitation.Metric.Value
    },
    setName(newName) {
      self.name = newName
    },
    setStatus() {
      self.status = self.status + 1;
    },
    resetStatus() {
      self.status = 0;
    }
  }));

export default Location;
