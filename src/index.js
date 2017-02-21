// src/index.js
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'
import store, { history } from './store'
import injectTapEventPlugin from 'react-tap-event-plugin'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

import App from './App'

import SignUp from './users/SignUp'
import SignIn from './users/SignIn'

import Lobby from './game/Lobby'
import Game from './game/Game'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/lobby" component={Lobby} />
        <Route path="/game/:gameId" component={Game} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
