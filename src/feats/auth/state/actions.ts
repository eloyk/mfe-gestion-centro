import { PayloadAction } from "@reduxjs/toolkit"

const actions = {
  login: {
    setUsername: (state:any, {payload}:PayloadAction<string>) => {
      state.current.username = payload
    },
    setPassword: (state:any, {payload}:any) => {
      state.current.password = payload
    },
    setCode: (state:any, {payload}:any) => {
      state.current.code = payload
    }
  }
}

export default actions