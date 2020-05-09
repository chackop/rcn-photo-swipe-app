import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { reducer as AppReducer } from './components/App'

const rootReducer = combineReducers({
  App: AppReducer,
})

// This just allows for multiple middlewares to be integrated with redux
const middleware = []
middleware.push(thunk)

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['App'],
  blacklist: [],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, applyMiddleware(...middleware))
const persistor = persistStore(store)

export default { store, persistor }
