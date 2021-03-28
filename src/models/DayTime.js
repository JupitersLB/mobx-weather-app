import { types } from 'mobx-state-tree'

const DayTime = types
  .model('DayTime', {
    icon: types.integer,
    phrase: types.string,
  });

export default DayTime;
