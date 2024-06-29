import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import actions from "./actions"
import { AppState } from "../../../data/store/types"
import { usePostTeacher } from "../hook/use-post-teacher"
import { useGetTeachers } from "../hook/use-get-teachers"

const initialState = {
  current: {
    names: "",
    surnames: "",
    id_gender: "",
    address: "",
    birth_date: "",
    specialization: "",
    position: "",
    id_school: "1"
  },
  list: []
}
const teacherSlice = createSlice({
  name: "teacher",
  initialState,
  reducers: actions.teacher,
  extraReducers(builder) {
    builder
      .addCase(usePostTeacher.rejected, (state, {error}:any) => {
        console.log(error)
      })
      .addCase(usePostTeacher.fulfilled, (state, {payload}:any) => {
        console.log(payload)
        state.current.names = ""
        state.current.surnames = ""
        state.current.id_gender = ""
        state.current.address = ""
        state.current.birth_date = ""
        state.current.specialization = ""
        state.current.position = ""
        state.list = payload.map((item:any) => ({names: item.names.trim(), surnames: item.surnames.trim(),  specialization: item.specialization, position: item.position}))
      })
      .addCase(useGetTeachers.rejected, (state, {error}:any) => {
        console.log(error)
      })
      .addCase(useGetTeachers.fulfilled, (state, {payload}:any) => {
        state.list = payload.map((item:any) => ({names: item.names.trim(), surnames: item.surnames.trim(),  specialization: item.specialization, position: item.position}))
        console.log(state.list)
        console.log(payload)
      })
  },
})

export const selectTeacher = (state: AppState) => state.management.teacher
export const { setNames, setSurnames, setGender, setAddress, setBirthDate, setSpecialization, setPosition } = teacherSlice.actions

export const teacherReducer = teacherSlice.reducer