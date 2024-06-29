import { useAppSelector } from '@/hooks'
import React from 'react'
import { Popover } from '@/components/simplify/popover'
import { Table } from '@/components/table'
import { Input } from '@/components'
import { PropInterface } from './interfaces'
import Controller from './controller'
import { selectAppReady, selectIsLogin } from '@/data/state'
import { Icon } from '@/components/icon'
import { Combobox } from '@/components/simplify/combobox'
import { selectOther, setVarietySelection } from '../../state/other'

const OtherFrame = ({dispatch, router}:PropInterface) => {
  const controller = Controller.getInstance({
    dispatch,
    router,
    state: useAppSelector(selectOther),
    appReady: useAppSelector(selectAppReady),
    isLogin: useAppSelector(selectIsLogin)
  })
  if(!controller)
    return <></>
  const {
    redirectTo,
    getCurrent,
    getList,
    getComboList,
    getVarietySelection,
    getInput,
    getFunc
  } = controller
  return (
    <div className='p-8'>
      <div className="flex flex-1 items-center space-x-2">
        <Combobox dataSource={getComboList()} placeholder={'Selecciona la tabla'} emptyMsg={'No se encontro la tabla'} className={""} value={getVarietySelection()} onSelect={async (e:any) => {
          await dispatch(setVarietySelection(e))
          await getFunc().get()
        }}/>
        <Input placeholder='Filter classroom' size='md' />
        <button className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md px-3 py-2 text-xs h-10 border-dashed" onClick={() => getFunc().get()}><Icon size={15} icon='circlePlus' />Refresh</button>
        <button className="inline-flex hidden items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md px-3 py-2 text-xs h-10 border-dashed"><Icon size={15} icon='circlePlus' />Status</button>
        <Popover title={getList().addTitle} saveText={getList().addText} description={getList().addDescription} items={getInput()} onSave={() => getFunc().post(getCurrent())}>
          <button className='inline-flex outline-btn-primary items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground px-3 py-2 text-xs h-10'>{getList().addText}</button>
        </Popover>
      </div>
      <div>
        <Table titles={getList().titles} dataSource={getList().array} />
      </div>
    </div>
  )
}

export default OtherFrame