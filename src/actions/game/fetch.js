import API from '../../middleware/api'
import loadError from '../load/error'
import loadSuccess from '../load/success'
import loading from '../loading'

export const FETCHED_GAMES = 'FETCHED_GAMES'

const api = new API()
const games = api.service('games')

export default () => {
  return (dispatch) => {
    dispatch(loading(true))

    api.app.authenticate()
    .then(() => {
      games.find({
        query: {
          $limit: 25
        }
      })
      .then((response) => {
        dispatch(loadSuccess())
        dispatch({
          type: FETCHED_GAMES,
          payload: response.data
        })
      })
      .catch((error) => {
        dispatch(loadError(error))
      })
      .then(() => {
        dispatch(loading(false))
      })
    })
    .catch((error) => {
      dispatch(loadError({ message: 'Please log in before continuing'}))
    })
    .then(() => {
      dispatch(loading(false))
    })
  }
}
