import { JOINED_GAME } from '../actions/game/join'
import { LEFT_GAME } from '../actions/game/leave'

export default (state = null, { type, payload }) => {
  switch(type) {
    case JOINED_GAME:
      return Object.assign({}, payload)

    case LEFT_GAME :
      return null

    default :
      return state
  }
}
