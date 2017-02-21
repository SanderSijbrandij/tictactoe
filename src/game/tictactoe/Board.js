import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Tile from './Tile'
import './Board.sass'

class Board extends PureComponent {
  renderTile(tile, index) {
    return <Tile key={index} value={tile} tileId={index} />
  }

  render() {
    return (
      <div className='board'>
        {this.props.board.map(this.renderTile)}
      </div>
    )
  }
}
const mapStateToProps = ({currentGame}) => ({currentGame})

export default connect(mapStateToProps)(Board)
