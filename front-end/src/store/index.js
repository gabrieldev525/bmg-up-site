import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux'
import thunk from 'redux-thunk'

// Local imports

const enhancers = []
const middleware = [thunk]
const rootReducer = combineReducers({ })


const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)
export default createStore(rootReducer, composedEnhancers)