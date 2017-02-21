// game state
import { FETCHED_GAMES } from '../actions/game/fetch'
import {
  GAME_CREATED,
  GAME_UPDATED,
  GAME_REMOVED
} from '../actions/game/subscribe'


export default (state = [], { type, payload } = {}) => {
  switch(type) {
    case FETCHED_GAMES:
      return [].concat(payload)

    case GAME_CREATED:
      const newGame = Object.assign({}, payload)
      return [newGame].concat(state)

    case GAME_UPDATED:
      return state.map((game) => {
        if (game._id === payload._id) {
          return Object.assign({}, payload)
        }
        return game
      })

    case GAME_REMOVED:
      return state.filter((game) => (game._id !== payload._id))


    default:
      return state
  }
}
