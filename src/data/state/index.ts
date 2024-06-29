import { createSlice } from "@reduxjs/toolkit"
import { AppState } from "../store/types"
import actions from "./actions"
import { usePostLogin, useGetCurrUser } from "@/feats/auth/hooks"

const initialState = {
  appReady: false,
  appInit: true,
  isLogin: null,
  companyName: null,
}

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: actions,
  extraReducers(builder) {
      builder
        .addCase(usePostLogin.pending, (state:any) => {
          state.appReady = false
        })
        .addCase(usePostLogin.rejected, (state:any) => {
          state.appReady = true
        })
        .addCase(usePostLogin.fulfilled, (state:any) => {
          state.isLogin = true
        })
        .addCase(useGetCurrUser.rejected, (state:any, {error}:any) => {
          console.error(error)
          state.isLogin = false
        })
        .addCase(useGetCurrUser.fulfilled, (state:any, {payload}:any) => {
          console.log('currUser', payload)
          state.isLogin = true
          state.companyName = payload.name
        })
  },
})

export const selectGlobal = (state:AppState) => state.global
export const selectAppReady = (state:AppState) => state.global.appReady
export const selectIsLogin = (state: AppState) => state.global.isLogin
export const { setReady, unsetReady, unsetInitApp } = globalSlice.actions
export const globalReducer = globalSlice.reducer