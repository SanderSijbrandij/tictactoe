import API from '../../middleware/api'
import loadError from '../load/error'
import loadSuccess from '../load/success'
import loading from '../loading'
import {history} from '../../store'

export const JOINED_GAME = 'JOINED_GAME'

const api = new API()
const games = api.service('games')

export default (gameId) => {
  return (dispatch) => {
    dispatch(loading(true))
    // authenticate
    api.app.authenticate()
    // then => create game in database
    .then(() => {
      games.patch(gameId, { type: 'join' })
      // then => success!
      .then((response) => {
        dispatch(loadSuccess())
        dispatch({
          type: JOINED_GAME,
          payload: response
        })
        const gameLink = `/game/${response._id}`
        history.push(gameLink)
      })
      // catch => display the error
      .catch((error) => {
        dispatch(loadError(error))
      })
      // then => clean up loading spinner
      .then(() => {
        dispatch(loading(false))
      })
    })
  }
}
