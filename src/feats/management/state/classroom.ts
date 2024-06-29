import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import actions from "./actions"
import { AppState } from "../../../data/store/types"
import { usePostTeacher } from "../hook/use-post-teacher"
import { useGetTeachers } from "../hook/use-get-teachers"
import { useGetDegrees } from "../hook/use-get-degrees"
import { useGetSections } from "../hook/use-get-sections"
import { useGetModalities } from "../hook/use-get-modalities"
import { usePostCourse } from "../hook/use-post-course"
import { useGetCourses } from "../hook/use-get-courses"
import { useGetSchoolsPeriods } from "../hook/use-get-schools-periods"

const initialState = {
  teachers: [],
  sections: [],
  degrees: [],
  schoolsPeriods: [],
  autoName: {
    degreeDesc: '',
    sectionDesc: '',
    stageDesc: ''
  },
  modalities: [],
  current: {
    id_modality: "", 
    id_section: "", 
    id_degree: "", 
    id_school_period: "", 
    id_teacher: "", 
    id_school: "1", 
    description: "", 
    max_quantity: ""
  },
  list: []
}
const classroomSlice = createSlice({
  name: "classroom",
  initialState,
  reducers: actions.classroom,
  extraReducers(builder) {
    builder
      .addCase(usePostCourse.rejected, (state, {error}:any) => {
        console.log(error)
      })
      .addCase(usePostCourse.fulfilled, (state, {payload}:any) => {
        state.current.id_modality = ""
        state.current.id_section = ""
        state.current.id_degree = ""
        state.current.id_school_period = ""
        state.current.id_teacher = ""
        state.current.id_school = "1"
        state.current.description = ""
        state.current.max_quantity = ""
        state.autoName.degreeDesc = ""
        state.autoName.stageDesc = ""
        state.autoName.sectionDesc = ""
        console.log(payload)
        state.list = payload.map((item:any) => ({name: item.course_description, maxQty: item.max_quantity}))
      
      })
      .addCase(useGetTeachers.rejected, (state, {error}:any) => {
        console.log(error)
      })
      .addCase(useGetTeachers.fulfilled, (state, {payload}:any) => {
        console.log(payload, 'teachers')
        state.teachers = payload.map((item:any) => ({label: `${item.names.split(' ')[0]} ${item.surnames.split(' ')[0]}`, value: `${item.id}`}))
      })
      .addCase(useGetDegrees.rejected, (state, {error}:any) => {
        console.log(error)
      })
      .addCase(useGetDegrees.fulfilled, (state, {payload}:any) => {
        console.log(payload, 'degrees')
        state.degrees = payload.map((item:any) => ({label: item.description, value: `${item.id}`}))
      })
      .addCase(useGetSections.rejected, (state, {error}:any) => {
        console.log(error)
      })
      .addCase(useGetSections.fulfilled, (state, {payload}:any) => {
        console.log(payload, 'sections')
        state.sections = payload.map((item:any) => ({label: item.description, value: `${item.id}`}))
      })
      .addCase(useGetModalities.rejected, (state, {error}:any) => {
        console.log(error)
      })
      .addCase(useGetModalities.fulfilled, (state, {payload}:any) => {
        console.log(payload, 'modalities')
        state.modalities = payload.map((item:any) => ({label: item.description, value: `${item.id}`, stage: item.stage}))
      })
      .addCase(useGetSchoolsPeriods.rejected, (state, {error}:any) => {
        console.log(error)
      })
      .addCase(useGetSchoolsPeriods.fulfilled, (state, {payload}:any) => {
        console.log(payload, 'school-period')
        state.schoolsPeriods = payload.map((item:any) => ({label: item.description, value: `${item.id}`}))
      })
      .addCase(useGetCourses.rejected, (state, {error}:any) => {
        console.log(error)
      })
      .addCase(useGetCourses.fulfilled, (state, {payload}:any) => {
        console.log(payload)
        state.list = payload.map((item:any) => ({name: item.course_description, maxQty: item.max_quantity}))
      })
  },
})

export const selectClassroom = (state: AppState) => state.management.classroom
export const { setModality, setSection, setDegree, setName, setMaxQty, setSchoolPeriod, setTeacher } = classroomSlice.actions

export const classroomReducer = classroomSlice.reducer