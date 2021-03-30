import { types } from 'mobx-state-tree'

const Hour = types
  .model('Hour', {
    id: types.identifier,
    time: types.string,
    icon: types.integer,
    temp: types.number,
    phrase: types.string,
    rainProbability: types.number
  })
  .views(self => ({
    format() {
      return self.time.substr(11,5)
    }
  }))

export default Hour;
