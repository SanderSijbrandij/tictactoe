import API from '../../middleware/api'
import loadError from '../load/error'
import loadSuccess from '../load/success'
import loading from '../loading'

const api = new API()
const games = api.service('games')

export const SET_POSITION = 'SET_POSITION'

export default (gameId, symbol, position) => {
  return (dispatch) => {
    dispatch(loading(true))

    api.app.authenticate()
    .then(() => {
      games.patch(gameId, { type: 'madeMove', symbol, position })
      .then((response) => {
        dispatch(loadSuccess())
      })
      .catch((error) => {
        dispatch(loadError(error))
      })
      .then(() => {
        dispatch(loading(false))
      })
    })
  }
}
