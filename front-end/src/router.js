import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'

// Local imports
import Form from './page/Form'
import secondPage from './page/blog/second-page'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact = {true} component={Form} />
        <Route path='/second-page' component={secondPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes