import { LoginContainer } from '@/feats/auth/containers/login-container'
import React from 'react'

const login = ({dispatch, router}:any) => 
  <LoginContainer dispatch={dispatch} router={router}/>
export default login