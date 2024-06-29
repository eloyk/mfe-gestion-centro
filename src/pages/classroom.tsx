import { PageInterface } from '@/data/interfaces/page'
import { ClassroomContainer } from '@/feats/management/containers/classroom-container'
import React from 'react'

const Classroom = ({dispatch, router}:PageInterface) => 
  <ClassroomContainer dispatch={dispatch} router={router} />

export default Classroom