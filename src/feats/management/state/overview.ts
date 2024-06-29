import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import actions from "./actions"
import { AppState } from "../../../data/store/types"
import { useGetCourses } from "../hook/use-get-courses"
import { useGetStudentList } from "../hook/use-get-student-list"
import { useGetCountStudent } from "../hook/use-get-count-student"

const initialState = {
  courses: [],
  studentList: [],
  countStudent: [],
  current: {
  },
  list: []
}
const overviewSlice = createSlice({
  name: "overview",
  initialState,
  reducers: actions.overview,
  extraReducers(builder) {
    builder
      .addCase(useGetCourses.rejected, (state, {error}:any) => {
        console.log(error)
      })
      .addCase(useGetCourses.fulfilled, (state, {payload}:any) => {
        state.courses = payload
      })
      .addCase(useGetStudentList.rejected, (state, {error}:any) => {
        console.log(error)
      })
      .addCase(useGetStudentList.fulfilled, (state, {payload}:any) => {
        state.studentList = payload
      })
      .addCase(useGetCountStudent.rejected, (state, {error}:any) => {
        console.log(error)
      })
      .addCase(useGetCountStudent.fulfilled, (state, { payload }: any) => {
        state.countStudent = payload.map((item: any) => ({
          ...item,
          metricName: `${item.description.split(" ")[0].substring(0, item.description.split(" ")[0].length - 2)}${item.description.split(" ")[1].toUpperCase()} ${item.description.split(" ")[2].substring(0, 3).toString().toUpperCase()}`,
          tableName: `${item.description.split(" ")[0].substring(0, item.description.split(" ")[0].length - 2)}${item.description.split(" ")[1].toUpperCase()} ${item.description.split(" ")[2].toString().toLowerCase()}`
        }))
      })
  },
})

export const selectOverview = (state: AppState) => state.management.overview
export const { } = overviewSlice.actions

export const overviewReducer = overviewSlice.reducer