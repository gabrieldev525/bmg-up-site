import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'

// Local imports
import Form from './page/Form'
import Blog from './page/blog'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/lead' component={Form} />
        <Route path='/' exact component={Blog} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes