import { types, destroy } from 'mobx-state-tree'
import Day from './Day';
import DayTime from './DayTime';
import NightTime from './NightTime';

const DayList = types
  .model('DayList', {
    days: types.array(Day),
    selectedDays: types.array(types.maybe(types.reference(types.late(() => Day))))
  })
  .actions(self => ({
    add(day, idx) {
      self.days.push({
        id: idx.toString(),
        name: day.Date,
        maxTemp: day.Temperature.Maximum.Value,
        minTemp: day.Temperature.Minimum.Value,
        dayTime: DayTime.create({icon: day.Day.Icon, phrase: day.Day.IconPhrase }),
        nightTime: NightTime.create({icon: day.Night.Icon, phrase: day.Night.IconPhrase })
      })
    },
    remove(day) {
      destroy(day);
    },
    removeAllDays() {
      self.days.clear();
    },
    removeSelected() {
      self.selectedDays.clear();
    },
    selected(day) {
      self.selectedDays.push(day)
    }
  }));

export default DayList;
