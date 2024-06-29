import { useAppSelector } from '@/hooks'
import React from 'react'
import { useGetTeachers } from '../../hook/use-get-teachers'
import { usePostTeacher } from '../../hook/use-post-teacher'
import { selectTeacher, setNames, setSurnames, setGender, setAddress, setBirthDate, setSpecialization, setPosition } from '../../state/teacher'
import { Popover } from '@/components/simplify/popover'
import { Table } from '@/components/table'
import { Input } from '@/components'
import { PropInterface } from './interfaces'
import Controller from './controller'
import { selectAppReady, selectIsLogin } from '@/data/state'
import { Icon } from '@/components/icon'

const TeacherFrame = ({dispatch, router}:PropInterface) => {
  const controller = Controller.getInstance({
    dispatch,
    router,
    state: useAppSelector(selectTeacher),
    appReady: useAppSelector(selectAppReady),
    isLogin: useAppSelector(selectIsLogin)
  })
  if(!controller)
    return <></>
  const {
    redirectTo,
    getCurrent,
    getList,
    getInputs
  } = controller
  return (
    <div className='p-8'>
      <div className="flex flex-1 items-center space-x-2">
        <Input placeholder='Filter classroom' size='sm' />
        <button className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md px-3 text-xs h-8 border-dashed" onClick={() => dispatch(useGetTeachers())}><Icon size={15} icon='circlePlus' />Status</button>
        <button className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md px-3 text-xs h-8 border-dashed"><Icon size={15} icon='circlePlus' />Status</button>
        <Popover title={'Docente'} description={'Crear nuevo docente'} items={getInputs()} onSave={() => dispatch(usePostTeacher(getCurrent()))}>
          <button className='inline-flex outline-btn-primary items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground px-3 text-xs h-8'>Agregar Docente</button>
        </Popover>
      </div>
      <div>
        <Table titles={['Nombres', 'Apellidos', 'Especialización', 'Posición']} dataSource={getList()} />
      </div>
    </div>
  )
}

export default TeacherFrame