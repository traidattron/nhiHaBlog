import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import loginReducer from '../features/login/loginSlice'
import languageReducer from '../features/language/languageSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    login: loginReducer,
    language: languageReducer
  }
})
