import { pizzaReducer, cartReducer, userReducer } from './reducers'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

let rootReducer = combineReducers({
  pizzaReducer,
  cartReducer,
  userReducer
})

type RootReducer = typeof rootReducer
export type AppState = ReturnType<RootReducer>

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunkMiddleware)
  ))

export default store;