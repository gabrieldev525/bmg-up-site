import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'

// Local imports
import Form from './page/Form'
import secondPage from './page/blog/second-page'
import Blog from './page/blog'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/second-page' component={secondPage} />
        <Route path='/lead' component={Form} />
        <Route path='/' exact component={Blog} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes