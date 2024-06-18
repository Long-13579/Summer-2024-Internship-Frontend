import { combineReducers } from 'redux'
import bookTicketReducer from './slices/bookTicket'
import uiReducer from './slices/ui'
import { configureStore } from '@reduxjs/toolkit'

const reducer = combineReducers({
  bookTicket: bookTicketReducer,
  ui: uiReducer
})

const store = configureStore({
  reducer,
  devTools: import.meta.env.NODE_ENV !== 'development',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export default store
