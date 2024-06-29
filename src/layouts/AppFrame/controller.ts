import { NextRouter } from "next/router"
import { unsetInitApp } from "../../data/state"
import { setDelay } from "@/utils/setDelay"
import { useGetCurrUser } from "@/feats/auth/hooks"

let dispatch:any
class Controller {
  private static instance:Controller
  private router
  private appReady: any
  private appInit: any
  private isLogin: any
  private inLogin: boolean

  constructor(inDispatch: any, router: any){
    this.inLogin = false
    dispatch = inDispatch
    this.router = router
    this.delayApp()
  }

  public static getInstance(inDispatch: any, state: any, router: NextRouter) {
    if(!this.instance)
      this.instance = new Controller(inDispatch, router)
    this.instance.refreshData(state, router)
    return this.instance
  }

  private async delayApp() {
    await setDelay(.25)
    await dispatch(useGetCurrUser())
    dispatch(unsetInitApp())
  }

  private refreshData(state: { appReady: any; appInit: any; isLogin: any }, router: { pathname: string }){
    this.inLogin = router.pathname == "/auth/login"
    this.router = router
    this.appReady = state.appReady
    this.appInit = state.appInit
    this.isLogin = state.isLogin
  }

  public getRouter = () => this.router
  public getAppReady = () => this.appReady
  public getAppInit = () => this.appInit
  public getInLogin = () => this.inLogin
  public getIsLogin = () => this.isLogin
  public getDispatch = () => dispatch

}

export default Controller