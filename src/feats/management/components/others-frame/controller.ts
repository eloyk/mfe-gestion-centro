import { setReady, unsetReady } from "@/data/state"
import { ControllerInterface } from "./interfaces"
import { NextRouter } from "next/router"
import { setDelay } from "@/utils/setDelay"
import { useGetCourses } from "../../hook/use-get-courses"
import { setDescription, setIsOrdenance, setNumSemesters, setStage } from "../../state/other"
import { usePostModality } from "../../hook/use-post-modality"
import { usePostSection } from "../../hook/use-post-section"
import { usePostDegree } from "../../hook/use-post-degree"
import { useGetModalities } from "../../hook/use-get-modalities"
import { useGetSections } from "../../hook/use-get-sections"
import { useGetDegrees } from "../../hook/use-get-degrees"

let dispatch:any
class Controller {
  static instance?: Controller
  private router: any
  private state:any
  private varietySelection: 'modality' | 'section' | 'degree' = "modality"
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
      dispatch(useGetModalities())
      dispatch(useGetSections())
      dispatch(useGetDegrees())
      await dispatch(setReady())
    }
  }

  public static destroy = () => {
    if(this.instance)
      delete this.instance
  }

  private async refreshData(state:any) {
    this.state = state
    this.varietySelection = this.state.varietySelection
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
  private getFuncsByName = () => ({
    modality: { post: (e: any) => dispatch(usePostModality(e)), get: () => dispatch(useGetModalities()) },
    section: { post: (e: any) => dispatch(usePostSection(e)), get: () => dispatch(useGetSections()) },
    degree: { post: (e: any) => dispatch(usePostDegree(e)), get: () => dispatch(useGetDegrees()) }
  })
  private getInputs = () => ({
    modality: [
      { id: 'iptDescription', value: this.state.current.description, onChange: (e: any) => dispatch(setDescription(e.target.value)), type: 'input', title: 'Nombre' },
      { id: 'iptNumSemester', value: this.state.current.num_semester, onChange: (e: any) => dispatch(setNumSemesters(e.target.value)), type: 'input', title: '# de Semestres' },
      { id: 'iptStage', value: this.state.current.stage, onChange: (e: any) => dispatch(setStage(e.target.value)), type: 'input', title: 'Etapa' },
      { id: 'iptIsOrdenance', value: this.state.current.is_ordenance, onChange: (e: any) => dispatch(setIsOrdenance(e.target.value)), type: 'input', title: 'Ordenados' },
    ],
    section: [
      { id: 'iptDescription', value: this.state.current.description, onChange: (e: any) => dispatch(setDescription(e.target.value)), type: 'input', title: 'Nombre' },
    ],
    degree: [
      { id: 'iptDescription', value: this.state.current.description, onChange: (e: any) => dispatch(setDescription(e.target.value)), type: 'input', title: 'Nombre' },
    ],
  })
  public getComboList = () => this.state.varietyList
  public getVarietySelection = () => this.varietySelection
  public getInput = () => this.getInputs()[this.varietySelection]
  public getFunc = () => this.getFuncsByName()[this.varietySelection]
  public getList = () => this.state.list[this.varietySelection]
}

export default Controller
