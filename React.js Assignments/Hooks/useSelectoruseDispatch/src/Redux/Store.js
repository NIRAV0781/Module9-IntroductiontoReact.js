import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../Redux/counterSclice'

export const store = configureStore({
  reducer: {
    counter: counterReducer
  },
})