import { setReady, unsetReady } from "@/data/state"
import { ControllerInterface } from "./interfaces"
import { NextRouter } from "next/router"
import { setDelay } from "@/utils/setDelay"
import { setDegree, setMaxQty, setModality, setName, setSchoolPeriod, setSection, setTeacher } from "../../state/classroom"
import { useGetCourses } from "../../hook/use-get-courses"
import { useGetDegrees } from "../../hook/use-get-degrees"
import { useGetSections } from "../../hook/use-get-sections"
import { useGetTeachers } from "../../hook/use-get-teachers"
import { useGetModalities } from "../../hook/use-get-modalities"
import { useGetSchoolsPeriods } from "../../hook/use-get-schools-periods"

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
      await dispatch(useGetDegrees())
      await dispatch(useGetSections())
      await dispatch(useGetTeachers())
      await dispatch(useGetModalities())
      await dispatch(useGetSchoolsPeriods())
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
    {id: 'iptName', value: this.state.current.description, onChange: (e:any) => dispatch(setName(e.target.value)), type: 'disabled', title: 'Nombre'},
    {id: 'cbModality', value: this.state.current.id_modality, dataSource: this.state.modalities, onChange: (e:any) => dispatch(setModality(e)), type: 'combo', title: 'Modalidad', placeholder: 'Selecciona una modalidad'},
    {id: 'cbSection', value: this.state.current.id_section, dataSource: this.state.sections, onChange: (e:any) => dispatch(setSection(e)), type: 'combo', title: 'Sección', placeholder: 'Selecciona una sección'},
    {id: 'cbDegree', value: this.state.current.id_degree, dataSource: this.state.degrees, onChange: (e:any) => dispatch(setDegree(e)), type: 'combo', title: 'Grado', placeholder: 'Selecciona un grado'},
    {id: 'cbSchoolPeriod', value: this.state.current.id_school_period, dataSource: this.state.schoolsPeriods, onChange: (e:any) => dispatch(setSchoolPeriod(e)), type: 'combo', title: 'Periodo', placeholder: 'Selecciona un periodo'},
    {id: 'cbTeacher', value: this.state.current.id_teacher, dataSource: this.state.teachers, onChange: (e:any) => dispatch(setTeacher(e)), type: 'combo', title: 'Profesor', placeholder: 'Selecciona un profesor'},
    {id: 'iptMaxQty', value: this.state.current.max_quantity, onChange: (e:any) => dispatch(setMaxQty(e.target.value)), type: 'input', title: 'Cant. Maxima'},
  ]
}

export default Controller