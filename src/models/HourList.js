import { types, destroy } from 'mobx-state-tree'
import Hour from './Hour';

const HourList = types
  .model('HourList', {
    hours: types.array(Hour),
    selectedHours: types.array(types.maybe(types.reference(types.late(() => Hour))))
  })
  .actions(self => ({
    add(hour, idx) {
      self.hours.push({
        id: idx.toString(),
        time: hour.DateTime,
        icon: hour.WeatherIcon,
        temp: hour.Temperature.Value,
        phrase: hour.IconPhrase,
        rainProbability: hour.RainProbability
      })
    },
    remove(hour) {
      destroy(hour);
    },
    removeAllHours() {
      self.hours.clear();
    },
    removeSelected() {
      self.selectedHours.clear();
    },
    selected(hour) {
      self.selectedHours.push(hour)
    }
  }));

export default HourList;
