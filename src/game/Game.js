import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

import leaveGame from '../actions/game/leave'

class Game extends PureComponent {
  handleClick(e) {
    e.preventDefault()
    console.log(this)
    if (this.props.params.gameId === this.props.currentGame._id) {
      this.props.leaveGame(this.props.params.gameId)
    }
  }
  render () {
    return (
      <div>
        // <div className='row-actions'>
        //   <RaisedButton label="Start game" primary={true} />
        //   <RaisedButton label="Leave" primary={true} onClick={this.handleClick.bind(this)} />
        // </div>
        <Paper className='game-row'>
          <div className='row-actions'>
            <span>Playerlist</span>
          </div>
          <div className='row-info'>
            <span>
            </span>
          </div>
        </Paper>
      </div>
    )
  }
}
const mapStateToProps = ({currentGame}) => ({
  currentGame
})
export default connect(mapStateToProps, { leaveGame })(Game)
