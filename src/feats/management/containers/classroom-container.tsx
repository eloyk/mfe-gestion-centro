import React from 'react'
import ClassroomFrame from '../components/classroom-frame'

export const ClassroomContainer = ({dispatch, router}:any) => {
  return <ClassroomFrame dispatch={dispatch} router={router}/>
}