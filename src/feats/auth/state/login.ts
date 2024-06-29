import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import actions from "./actions"
import { AppState } from "@/data/store/types"
import { usePostLogin } from "../hooks/use-post-login"
import LocalStorage from "@/lib/localStorage"

const initialState = {
  current: {
    username: "",
    password: "",
    code: ""
  }
}
const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: actions.login,
  extraReducers(builder) {
    builder
      .addCase(usePostLogin.rejected, (state, {error}:any) => {
        console.log(error)
        LocalStorage.set(`${state.current.username}|currUser`, '')
      })
      .addCase(usePostLogin.fulfilled, (state:any, {payload}:any) => {
        console.log(payload)
        LocalStorage.set('username', state.current.username)
        LocalStorage.set(`${state.current.username}|currUser`, payload.Authorization)
      })
  },
})

export const selectLogin = (state: AppState) => state.auth.login
export const { setUsername, setPassword, setCode } = loginSlice.actions

export const loginReducer = loginSlice.reducer