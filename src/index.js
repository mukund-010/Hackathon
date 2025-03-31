import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import WELCOMEPAGE from './views/welcomepage.js'
import NotFound from './views/not-found.js'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={WELCOMEPAGE} exact path="/" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
