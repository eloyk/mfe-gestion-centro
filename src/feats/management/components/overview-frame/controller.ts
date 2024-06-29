import { setReady, unsetReady } from "@/data/state"
import { ControllerInterface } from "./interfaces"
import { NextRouter } from "next/router"
import { setDelay } from "@/utils/setDelay"
import { useGetTeachers } from "../../hook/use-get-teachers"
import { setAddress, setBirthDate, setGender, setNames, setPosition, setSpecialization, setSurnames } from "../../state/teacher"
import { useGetCourses } from "../../hook/use-get-courses"
import { useGetStudentList } from "../../hook/use-get-student-list"
import { useGetCountStudent } from "../../hook/use-get-count-student"

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
      await dispatch(useGetCountStudent())
      await dispatch(useGetStudentList())
      await dispatch(setReady())
    }
  }

  public static destroy = () => {
    if(this.instance)
      delete this.instance
  }

  private async refreshData(state:any) {
    console.log(state)
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
  public getCountCourse = () => this.state.courses.length
  public getCountStudentList = () => this.state.studentList.length
  public getCountStudent = () => this.state.countStudent
}

export default Controller