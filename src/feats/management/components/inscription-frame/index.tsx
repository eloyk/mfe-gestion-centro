import { useAppSelector } from '@/hooks'
import React from 'react'
import { Input } from '@/components'
import { PropInterface } from './interfaces'
import Controller from './controller'
import { selectAppReady, selectIsLogin } from '@/data/state'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Combobox } from '@/components/simplify/combobox'
import { selectInscription, setAddress, setBirthCertificate, setBirthDate, setClassroom, setDoctorCertificate, setDocumentId, setDocumentNumber, setGender, setNames, setPhoto, setSchoolCertificate, setSurnames } from '../../state/inscription'
import { usePostInscription } from '../../hook/use-post-inscription'

const TeacherFrame = ({ dispatch, router }: PropInterface) => {
  const controller = Controller.getInstance({
    dispatch,
    router,
    state: useAppSelector(selectInscription),
    appReady: useAppSelector(selectAppReady),
    isLogin: useAppSelector(selectIsLogin)
  })
  if (!controller)
    return <></>
  const {
    redirectTo,
    getCurrent,
    getGenders,
    getClassrooms
  } = controller
  return (
    <div className='p-8'>
      <div className='w-full flex justify-between pb-3'>
        <div></div>
        <Button onClick={() => dispatch(usePostInscription(getCurrent()))}>Agregar</Button>
      </div>
      <div className='flex justify-between'>
        <div className='w-full'>
          <Label htmlFor="width">Identificación</Label>
          <Input value={getCurrent().document_number} onChange={(e:any) => dispatch(setDocumentNumber(e.target.value))} className='w-full' placeholder='000-0000000-0' size='md' />
          <Label htmlFor="width">Nombres</Label>
          <Input value={getCurrent().names} onChange={(e:any) => dispatch(setNames(e.target.value))} className='w-full' placeholder='Pablo' size='md' />
          <Label htmlFor="width">Apellidos</Label>
          <Input value={getCurrent().surnames} onChange={(e:any) => dispatch(setSurnames(e.target.value))} className='w-full' placeholder='Catullo' size='md' />
          <Label htmlFor="width">Sexo</Label>
          <Combobox value={getCurrent().id_gender} onSelect={(e:any) => dispatch(setGender(e))} dataSource={getGenders()} className='w-full' placeholder='Selecciona un sexo' />
          <Label htmlFor="width">Fecha Nacimiento</Label>
          <Input value={getCurrent().birth_date} onChange={(e:any) => dispatch(setBirthDate(e.target.value))} type='date' className='w-full' size='md' />
          <Label htmlFor="width">Curso</Label>
          <Combobox value={getCurrent().id_course} onSelect={(e:any) => dispatch(setClassroom(e))} dataSource={getClassrooms()} className='w-full' placeholder='Selecciona un curso' />
          <Label htmlFor="width">Dirección</Label>
          <Input value={getCurrent().address} onChange={(e:any) => dispatch(setAddress(e.target.value))} className='w-full' placeholder='' size='md' />
          <div className='flex flex-wrap gap-2 mt-2'>
            <Button variant={getCurrent().documentid_copy ? 'default':'outline'} onClick={() => dispatch(setDocumentId())}>Cédula</Button>
            <Button variant={getCurrent().photo_2x2 ? 'default':'outline'} onClick={() => dispatch(setPhoto())}>Foto 2x2</Button>
            <Button variant={getCurrent().doctor_certified ? 'default':'outline'} onClick={() => dispatch(setDoctorCertificate())}>Cert. Medico</Button>
            <Button variant={getCurrent().birth_certificate ? 'default':'outline'} onClick={() => dispatch(setBirthCertificate())}>Acta de Nacimiento</Button>
            <Button variant={getCurrent().certified_record ? 'default':'outline'} onClick={() => dispatch(setSchoolCertificate())}>Certificado Escolar</Button>
          </div>
        </div>

      </div>

    </div>
  )
}

export default TeacherFrame