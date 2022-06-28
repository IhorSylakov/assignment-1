import { combineReducers, configureStore } from '@reduxjs/toolkit';
import postReducer from './reducers/PostSlice';

const rootReducer = combineReducers({
  postReducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
