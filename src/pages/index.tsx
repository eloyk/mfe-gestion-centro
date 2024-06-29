import { PageInterface } from '@/data/interfaces/page'
import { OverviewContainer } from '@/feats/management/containers/overview-container'
import React from 'react'

const Overview = ({dispatch, router}:PageInterface) => 
  <OverviewContainer dispatch={dispatch} router={router} />

export default Overview