import { SUBSCRIBED_TO_GAMES_SERVICE } from '../actions/game/subscribe.js'

export default (state = false, { type } = {}) => {
  switch (type) {
    case SUBSCRIBED_TO_GAMES_SERVICE:
      return true

    default:
      return state
  }
}
