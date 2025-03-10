import { configureStore } from '@reduxjs/toolkit'
import TodoReducer from './todoSlide'

export const store = configureStore({
  reducer: {
    todos:TodoReducer
  },
})