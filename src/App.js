import React from 'react'
import './App.css'
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom'

import Spitoon from './Spitoon'
import Weenie from './Weenie'
import Superweenie from './Superweenie'
import Home from './Home'

function App() {
  return (
    <BrowserRouter>
      <section>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/salty-spitoon">
            <Spitoon />
          </Route>
          <Route path="/weenie">
            <Weenie />
          </Route>
          <Route path="/superweenie">
            <Superweenie />
          </Route>
        </Switch>
      </section>
    </BrowserRouter>
  )
}

export default App
