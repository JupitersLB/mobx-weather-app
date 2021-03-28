import { types } from 'mobx-state-tree'

const NightTime = types
  .model('NightTime', {
    icon: types.integer,
    phrase: types.string,
  });

export default NightTime;
