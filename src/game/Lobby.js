import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { history, currentUser } from '../store'
import GameIndex from './GameIndex'
import Title from '../components/Title'
import './Lobby.sass'
import createGame from '../actions/game/create'
import fetchGames from '../actions/game/fetch'
import subscribeToGamesService from '../actions/game/subscribe'
import RaisedButton from 'material-ui/RaisedButton';

class Lobby extends PureComponent {
  componentWillMount() {
    if (!this.props.signedIn) {
      history.push('/sign-in')
    }
  }
  componentDidMount() {
    if (!this.props.subscribedToGames) { this.props.fetchGames() }
    if (!this.props.subscribedToGames) { this.props.subscribeToGamesService() }
  }

  handleClick(e) {
    e.preventDefault()
    if (!this.props.inGame) { this.props.createGame() }
  }

  renderGame(game, index) {
    return <GameIndex key={index} {...game} />
  }

  render () {
    return(
      <div className='lobby'>
        <RaisedButton label="Create a game!" secondary={true}
          onClick={this.handleClick.bind(this)} />
        <Title content='All Games' />
          { this.props.games.map(this.renderGame.bind(this)) }
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser, games, subscribedToGames, currentGame }) => ({
  games,
  currentUser,
  signedIn: (!!currentUser && !!currentUser._id),
  subscribedToGames,
  currentGame,
  inGame: (!!currentGame && !!currentGame._id)
})

export default connect(mapStateToProps, { createGame, fetchGames, subscribeToGamesService })(Lobby)
