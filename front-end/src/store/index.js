import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux'
import thunk from 'redux-thunk'

// Local imports
import appReduce from '../appReducer'

const enhancers = []
const middleware = [thunk]
const rootReducer = combineReducers({
  app: appReduce,

})


const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)
export default createStore(rootReducer, composedEnhancers)