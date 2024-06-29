import { PageInterface } from '@/data/interfaces/page'
import { TeacherContainer } from '@/feats/management/containers/teacher-container'
import React from 'react'

const Teacher = ({dispatch, router}:PageInterface) => 
  <TeacherContainer dispatch={dispatch} router={router} />

export default Teacher