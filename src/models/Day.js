import { types } from 'mobx-state-tree';
import DayTime from './DayTime';
import NightTime from './NightTime';

const Day = types
  .model('Day', {
    id: types.identifier,
    name: types.string,
    maxTemp: types.number,
    minTemp: types.number,
    dayTime: types.maybe(DayTime),
    nightTime: types.maybe(NightTime)
  })
  .views(self => ({
    format() {
      return new Date(self.name).getDay();
    }
  }));

export default Day;
