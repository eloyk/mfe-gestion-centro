import React from 'react'
import { PageInterface } from '@/data/interfaces/page'
import OverviewFrame from '../components/overview-frame'

export const OverviewContainer = ({dispatch, router}:PageInterface) => {
  return <OverviewFrame dispatch={dispatch} router={router}/>
}