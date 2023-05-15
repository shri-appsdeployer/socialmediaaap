import { configureStore } from '@reduxjs/toolkit'
import feedReducer from './Feed'

export const store = configureStore({
  reducer: {
    feeds:feedReducer,
  },
})