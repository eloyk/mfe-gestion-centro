import { setReady, unsetReady } from "../../../../data/state"
import { setDelay } from "@/utils/setDelay"
import { usePostLogin } from "../../hooks"
import { useGetCurrUser } from "../../hooks/use-get-curr-user"
import { setPassword, setUsername, setCode } from '../../state/login'
import { AppDispatch } from "@/data/store/types"
import { NextRouter } from "next/router"
import { ControllerInterface } from "./interfaces"

let dispatch:AppDispatch
class Controller {
  static instance?: Controller
  private router: any
  private state:any


  constructor(inDispatch:any, router:any, appReady: boolean) {
    dispatch = inDispatch
    this.router = router
    this.setAppReadyDelay(appReady)
  }

  public static getInstance({dispatch, router, state, isLogin, appReady}:ControllerInterface) {
    if(isLogin){
      this.redirectAndDestroy(router, '/')
      return this.instance
    }
    
    if(!this.instance)
      this.instance = new Controller(dispatch, router, appReady)
    this.instance.refreshData(state)
    return this.instance
  }

  public static destroy = () => {
    if(this.instance)
      delete this.instance
  }
  
  private async setAppReadyDelay(appReady:any) {
    if(!appReady){
      await setDelay(.2)
      await dispatch(setReady())
    }
  }

  private async refreshData(state:any) {
    this.state = state
  }

  private static redirectAndDestroy(router:NextRouter, path:string) {
    if(typeof window != 'undefined' && router)
      router.push(path)
    if(this.instance)
      delete this.instance
  }

  public setUsername = (e:any) => dispatch(setUsername(e.target.value))
  public setPassword = (e:any) => dispatch(setPassword(e.target.value))
  public setCode = (e:any) => dispatch(setCode(e.target.value))

  public login = async () => {
    if(this.state.current.username == '' || this.state.current.password == '' || this.state.current.code == '')
      return console.log('')
    await dispatch(usePostLogin(this.state.current))
    await dispatch(useGetCurrUser())
  }

  public checkCurrUser = () => dispatch(useGetCurrUser())
  public getCurrent = () => this.state.current
}

export default Controller