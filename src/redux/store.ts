import { configureStore } from '@reduxjs/toolkit'
import { reducer } from '../redux/rootReducer'

export const store = configureStore({
  reducer
})