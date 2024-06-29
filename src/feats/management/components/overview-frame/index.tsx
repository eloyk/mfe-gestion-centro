import { useAppSelector } from '@/hooks'
import React from 'react'
import { PropInterface } from './interfaces'
import Controller from './controller'
import { selectAppReady, selectIsLogin } from '@/data/state'
import { Label } from '@/components/ui/label'
import { BarChart } from '@/components/simplify/simple-bar-chart'
import { selectOverview } from '../../state/overview'

const OverviewFrame = ({dispatch, router}:PropInterface) => {
  const controller = Controller.getInstance({
    dispatch,
    router,
    state: useAppSelector(selectOverview),
    appReady: useAppSelector(selectAppReady),
    isLogin: useAppSelector(selectIsLogin)
  })
  if (!controller)
    return <></>
  const {
    getCountCourse,
    getCountStudentList,
    getCountStudent
  } = controller
  return (
    <div className='p-8'>
      <div className="flex flex-wrap justify-between">
        <article className='border rounded flex flex-col justify-center p-2 w-[49%]'>
          <Label className='text-xl text-center'>Cursos</Label>
          <Label className='text-5xl text-center pt-2'>{getCountCourse()}</Label>
        </article>
        <article className='border rounded flex flex-col justify-center p-2 w-[49%]'>
          <Label className='text-xl text-center'>Inscripciones</Label>
          <Label className='text-5xl text-center pt-2'>{getCountStudentList()}</Label>
        </article>
      </div>
      <div className="flex flex-wrap justify-between h-[70vh] mt-4">
        <article className='border rounded flex flex-col justify-center p-4 w-[69%]'>
          <BarChart data={getCountStudent()}/>
        </article>
        <article className='border rounded flex flex-col p-2 w-[29%] h-[70vh] overflow-y-scroll'>
          {
            getCountStudent().map((item:any) => 
              <span className='flex justify-between align-center p-2 border-b' key={item.course_id}>
                <Label className='text-sm text-center capitalize'>{item.tableName}</Label>
                <Label className='text-sm text-center'>{`${item.count_student}/${item.max_quantity}`}</Label>
              </span>
            )
          }
        </article>
      </div>
    </div>
  )
}

export default OverviewFrame