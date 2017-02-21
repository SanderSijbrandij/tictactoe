import React, { PureComponent } from 'react'
import { history } from '../store'
import { connect } from 'react-redux'
import './GameIndex.sass'

import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

import joinGame from '../actions/game/join'

class GameIndex extends PureComponent {
  handleClick() {
    if (!this.props.inGame) { this.props.joinGame(this.props._id) }
  }

  render () {
    console.log(this.props)
      return (
        <Paper className='game-row'>
          <div className='row-info'>
            <div className='row-item'>
              <span>Player One: </span>
              <span>
                {this.props.playerOne && this.props.playerOne.name}
                {!this.props.playerOne && '...'}
              </span>
            </div>
            <div className='row-item'>
              <span>Player Two: </span>
              <span>
                {this.props.playerTwo && this.props.playerTwo.name}
                {!this.props.playerTwo && '...'}
              </span>
            </div>
          </div>
          <div className='row-actions'>
          <RaisedButton label="Join!" primary={true}
            onClick={this.handleClick.bind(this)} />
          </div>
        </Paper>
      )
  }
}
const mapStateToProps = ({currentUser, currentGame}) => ({
  currentUser,
  currentGame,
  inGame: (!!currentGame && !!currentGame._id)
})
export default connect(mapStateToProps, { joinGame })(GameIndex)
