import { types } from 'mobx-state-tree'

const Hour = types
  .model('Hour', {
    time: types.string,
    icon: types.integer,
    temp: types.number,
    phrase: types.string,
    rainProbability: types.number
  });

export default Hour;
