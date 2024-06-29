import { useRouter } from 'next/router'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks'
import Controller from './controller'
import { Spinner } from '@/components/spinner'
import { selectGlobal } from '@/data/state'

export const AppFrame = ({Component, pageProps}:any) => {
  const {
    getDispatch,
    getRouter,
    getAppReady,
    getAppInit,
  } = Controller.getInstance(useAppDispatch(), useAppSelector(selectGlobal), useRouter())
  if(getAppInit())
    return <Spinner />
  if(!getAppReady())
    return <>
      <Spinner />
      <div style={{display: 'none'}}><Component dispatch={getDispatch()} router={getRouter()} {...pageProps} /></div>
    </> 
  const router = useRouter()
  const dispatch = useAppDispatch()
  return <main> 
    {/* <Popup dispatch={getDispatch()} /> */}
    <Component dispatch={dispatch} router={router} {...pageProps} />
  </main>
}

export default AppFrame