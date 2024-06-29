import { combineReducers } from "@reduxjs/toolkit"
import { authReducer } from "@/feats/auth/state"
import { managementReducer } from "@/feats/management/state"
import { globalReducer } from "../state"

const reducers = combineReducers({
  global: globalReducer,
  auth: authReducer,
  management: managementReducer
})
export default reducers