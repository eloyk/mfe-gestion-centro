import React from 'react'
import Controller from './controller'
import { useAppSelector } from '@/hooks'
import { selectAppReady, selectIsLogin } from '@/data/state'
import { selectTeacher } from '@/feats/management/state/teacher'
import { PropInterface } from './interfaces'
import { Input } from '@/components'
import { selectLogin } from '../../state/login'

const LoginFrame = ({dispatch, router}:PropInterface) => {
  const controller = Controller.getInstance({
    dispatch,
    router,
    state: useAppSelector(selectLogin),
    appReady: useAppSelector(selectAppReady),
    isLogin: useAppSelector(selectIsLogin)
  })
  if(!controller)
    return <></>
  const {
    getCurrent,
    setCode,
    setPassword,
    setUsername,
    login
  } = controller
  return (
    <main>
      <div className=''>
        <div className='flex w-full'>
          <article className='hidden w-3/5 h-screen lg:block bg-muted bg-personal-1'></article>
          <article className='w-full lg:w-2/5 h-screen flex items-center justify-center'>
            <div className='grid w-[350px] gap-6'>
              <div className='grid gap-2 text-center'>
                <h1 className='text-title text-3xl font-bold'>Login</h1>
                <p className='text-muted'>Enter your email below to login to your account</p>
              </div>
              <div className='grid gap-2'>
                <h1 className='text-primary text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>Código de Centro</h1>
                <Input value={getCurrent().code} onChange={setCode} placeholder='0001' />
              </div>
              <div className='grid gap-2'>
                <h1 className='text-primary text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>Usuario</h1>
                <Input value={getCurrent().username} onChange={setUsername} placeholder='example' />
              </div>
              <div className='grid gap-2'>
                <h1 className='text-primary text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>Clave</h1>
                <Input value={getCurrent().password} onChange={setPassword} className='flex w-full' placeholder='*****' />
              </div>
              <button className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full' onClick={() => login()}>Login</button>
              <button className='inline-flex outline-btn-primary items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full'>Login with Google</button>
            </div>
          </article>
        </div>
      </div>
    </main>
  )
}

export default LoginFrame