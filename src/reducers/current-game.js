import { JOINED_GAME } from '../actions/game/join'
import { LEFT_GAME } from '../actions/game/leave'
import { GAME_UPDATED } from '../actions/game/subscribe'

export default (state = null, { type, payload }) => {
  switch(type) {
    case GAME_UPDATED:
      if (state._id === payload._id) {
        return Object.assign({}, payload)
      } else {
        return state
      }

    case JOINED_GAME:
      return Object.assign({}, payload)

    case LEFT_GAME :
      return null

    default :
      return state
  }
}
