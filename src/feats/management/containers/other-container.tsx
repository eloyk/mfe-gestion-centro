import React from 'react'
import { PageInterface } from '@/data/interfaces/page'
import OtherFrame from '../components/others-frame'

export const OtherContainer = ({dispatch, router}:PageInterface) => {
  return <OtherFrame dispatch={dispatch} router={router}/>
}