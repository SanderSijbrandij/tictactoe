import React, { PureComponent } from 'react'
import './Tile.sass'
import setPosition from '../../actions/game/set-position'
import { connect } from 'react-redux'

class Tile extends PureComponent {
  handleClick() {
    const game = this.props.currentGame
    const gameId = game._id
    const symbol = (game.turn === 1) ? 'X' : 'O'
    const position = this.props.tileId

    this.props.setPosition(gameId, symbol, position)
  }

  render() {
    console.log(this.props.currentGame._id)
    return (
      <div className='tile'
        onClick={this.handleClick.bind(this)}>
        <span className='value'>{ this.props.value }</span>
      </div>
    )
  }
}

const mapStateToProps = ({currentGame}) => ({currentGame})
export default connect(mapStateToProps, { setPosition })(Tile)
