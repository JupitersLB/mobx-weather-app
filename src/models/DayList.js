import { types } from 'mobx-state-tree'
import Day from './Day';
import DayTime from './DayTime';
import NightTime from './NightTime';

const DayList = types
  .model('DayList', {
    days: types.array(Day),
    // selectedDays: types.array(Day)
  })
  .actions(self => ({
    add(day) {
      self.days.push({
        name: day.Date,
        maxTemp: day.Temperature.Maximum.Value,
        minTemp: day.Temperature.Minimum.Value,
        dayTime: DayTime.create({icon: day.Day.Icon, phrase: day.Day.IconPhrase }),
        nightTime: NightTime.create({icon: day.Night.Icon, phrase: day.Night.IconPhrase })
      })
    },
    // initSelected(arr) {
    //   let tmp = arr.slice(0, 3)
    //   self.selectedDays = {...tmp}
    // }
  }))

export default DayList;
