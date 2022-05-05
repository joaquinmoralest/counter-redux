import { configureStore } from "@reduxjs/toolkit"
import counterReducer from './counterSlice'

const store =  configureStore({
  reducer: {
    counter: counterReducer
  } 
})

store.subscribe(() => console.log(store.getState()))

export default store