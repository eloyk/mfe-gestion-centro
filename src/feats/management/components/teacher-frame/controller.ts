import { setReady, unsetReady } from "@/data/state"
import { ControllerInterface } from "./interfaces"
import { NextRouter } from "next/router"
import { setDelay } from "@/utils/setDelay"
import { useGetTeachers } from "../../hook/use-get-teachers"
import { setAddress, setBirthDate, setGender, setNames, setPosition, setSpecialization, setSurnames } from "../../state/teacher"
import { useGetCourses } from "../../hook/use-get-courses"

let dispatch:any
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
    if(!isLogin){
      this.redirectAndDestroy(router, 'login')
      return this.instance
    }
    
    if(!this.instance)
      this.instance = new Controller(dispatch, router, appReady)
    this.instance.refreshData(state)
    return this.instance
  }

  private async setAppReadyDelay(appReady:any) {
    if(!appReady){
      await setDelay(.2)
      await dispatch(useGetCourses())
      await dispatch(setReady())
    }
  }

  public static destroy = () => {
    if(this.instance)
      delete this.instance
  }

  private async refreshData(state:any) {
    this.state = state
  }

  private static async redirectAndDestroy(router:NextRouter, path:string) {
    if(typeof window != 'undefined' && router)
      router.push(path)
    if(this.instance)
      delete this.instance
  }
  
  public redirectTo = async (path:string) => {
    await dispatch(unsetReady())
    this.router.push(path)
  }

  public getCurrent = () => this.state.current
  public getList = () => this.state.list
  public getInputs = () => [
    {id: 'iptNames', value: this.state.current.names, onChange: (e:any) => dispatch(setNames(e.target.value)), type: 'input', title: 'Nombres'},
    {id: 'iptSurnames', value: this.state.current.surnames, onChange: (e:any) => dispatch(setSurnames(e.target.value)), type: 'input', title: 'Apellidos'},
    {id: 'cbGender', value: this.state.current.id_gender, dataSource: [{label: 'Femenino', value: "2"},{label: 'Masculino', value: "1"}], onChange: (e:any) => dispatch(setGender(e)), type: 'combo', title: 'Genero', placeholder: 'Selecciona un genero'},
    {id: 'iptAddress', value: this.state.current.address, onChange: (e:any) => dispatch(setAddress(e.target.value)), type: 'input', title: 'Dirección'},
    {id: 'iptBirthDate', value: this.state.current.birth_date, onChange: (e:any) => dispatch(setBirthDate(e.target.value)), type: 'input', title: 'F. Nacimiento'},
    {id: 'iptSpecialization', value: this.state.current.specialization, onChange: (e:any) => dispatch(setSpecialization(e.target.value)), type: 'input', title: 'Especialización'},
    {id: 'iptPositions', value: this.state.current.position, onChange: (e:any) => dispatch(setPosition(e.target.value)), type: 'input', title: 'Posición'},
  ]
}

export default Controller