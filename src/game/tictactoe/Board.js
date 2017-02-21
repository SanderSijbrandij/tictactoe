import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Tile from './Tile'
import './Board.sass'
import setPosition from '../../actions/game/set-position'

class Board extends PureComponent {
  renderTile(tile, index) {
    return <Tile key={index} value={tile} />
  }

  render() {
    return (
      <div className='board'>
        {this.props.board.map(this.renderTile)}
      </div>
    )
  }
}

export default connect(null, { setPosition })(Board)
