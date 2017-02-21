import React, { PureComponent } from 'react'
import './Tile.sass'

class Tile extends PureComponent {
  render() {
    return (
      <div className='tile'>
        <span className='value'>{ this.props.value }</span>
      </div>
    )
  }
}

export default Tile
