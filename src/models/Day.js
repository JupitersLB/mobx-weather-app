import { types } from 'mobx-state-tree';
import DayTime from './DayTime';
import NightTime from './NightTime';

const Day = types
  .model('Day', {
    name: types.string,
    maxTemp: types.number,
    minTemp: types.number,
    dayTime: types.optional(DayTime, {icon: 1, phrase: ''}),
    nightTime: types.optional(NightTime, {icon: 1, phrase: ''})
  });

export default Day;
