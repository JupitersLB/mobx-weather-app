import { types } from 'mobx-state-tree'
import Hour from './Hour';

const HourList = types
  .model('HourList', {
    hours: types.array(Hour),
    // selectedHours: types.array(Hour)
  })
  .actions(self => ({
    add(hour) {
      self.hours.push({
        time: hour.DateTime,
        icon: hour.WeatherIcon,
        temp: hour.Temperature.Value,
        phrase: hour.IconPhrase,
        rainProbability: hour.RainProbability
      })
    },
    // initSelected(arr) {
    //   let tmp = arr.slice(0, 3)
    //   self.selectedHours = {...tmp}
    // }
  }));

export default HourList;
