import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import Board from './tictactoe/board'

import resetGame from '../actions/game/reset'

class Game extends PureComponent {
  handleClick(e) {
    e.preventDefault()
    if (this.props.params.gameId === this.props.currentGame._id) {
      this.props.resetGame(this.props.params.gameId)
    }
  }
  render () {
    return (
      <div>
        <div className='row-actions'>
          <RaisedButton label="Reset" primary={true} onClick={this.handleClick.bind(this)} />
        </div>
        <Board board={this.props.currentGame.board} />
        { this.props.currentGame.winner &&
          <h1 style={{textAlign: 'center'}}>
            player {this.props.currentGame.turn} loses. SAD! LOW ENERGY!
          </h1>
        }
      </div>
    )
  }
}
const mapStateToProps = ({currentGame}) => ({currentGame})
export default connect(mapStateToProps, { resetGame })(Game)
