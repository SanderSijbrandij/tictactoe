import API from '../../middleware/api'
import loadError from '../load/error'
import loadSuccess from '../load/success'
import loading from '../loading'

const api = new API()
const games = api.service('games')

export default(gameId, symbol, position) => {
  console.log(gameId, symbol, position)

  return (dispatch) => {

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
    .catch((error) => {
      dispatch(loadError(error))
    })
  }
}
