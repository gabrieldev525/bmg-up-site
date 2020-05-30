import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'

// Local imports
import Form from './page/Form'


function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Form}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes