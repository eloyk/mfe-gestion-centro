import React from 'react'
import TeacherFrame from '../components/teacher-frame'

export const TeacherContainer = ({dispatch, router}:any) => {
  return <TeacherFrame dispatch={dispatch} router={router}/>
}