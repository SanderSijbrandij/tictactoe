// src/components/Navigation.js
import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import { history } from '../store'
import signOut from '../actions/user/sign-out'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import MapsMap from 'material-ui/svg-icons/maps/place'
import FlatButton from 'material-ui/FlatButton'

export class Navigation extends PureComponent {
  static propTypes = {
    signedIn: PropTypes.bool.isRequired,
  }

  signOut(event) {
    event.preventDefault()
    this.props.signOut()
  }

  signUp() {
    history.push('/sign-up')
  }

  goHome() {
    if (signedIn) { history.push('/lobby') }
    else { history.push('/sign-in') }
  }

  render() {
    const { signedIn } = this.props
    return (
      <AppBar
        title="TicTacToe"
        iconElementLeft={<IconButton onClick={this.goHome}><MapsMap /></IconButton>}
        iconElementRight={signedIn ?
          <FlatButton label="Sign out" onClick={this.signOut.bind(this)} /> :
          <FlatButton label="Sign up" onClick={this.signUp} />
        }
      />
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({
  signedIn: (!!currentUser && !!currentUser._id)
})

export default connect(mapStateToProps, { signOut })(Navigation)
