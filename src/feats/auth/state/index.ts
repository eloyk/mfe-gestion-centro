import { combineReducers } from "@reduxjs/toolkit"
import { loginReducer } from "./login"

export const authReducer = combineReducers({
  login: loginReducer
})