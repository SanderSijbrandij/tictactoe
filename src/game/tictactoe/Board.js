import React, { PureComponent } from 'react'
import Tile from './Tile'
import './Board.sass'

const tiles = ['X', 'O', 'X',
               'O', 'X', 'O',
               'X', 'O', 'X']

class Board extends PureComponent {
  renderTile(tile, index) {
    return <Tile key={index} value={tile} />
  }

  render() {
    return (
      <div className='board'>
        {tiles.map(this.renderTile)}
      </div>
    )
  }
}

export default Board
