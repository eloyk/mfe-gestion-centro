import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import actions from "./actions"
import { AppState } from "../../../data/store/types"
import { usePostTeacher } from "../hook/use-post-teacher"
import { useGetTeachers } from "../hook/use-get-teachers"
import { useGetGenders } from "../hook/use-get-gender"
import { useGetCourses } from "../hook/use-get-courses"
import { usePostInscription } from "../hook/use-post-inscription"

const initialState = {
  classrooms: [],
  genders: [],
  current: {
    document_number: "",
    names: "",
    surnames: "",
    id_gender: "",
    id_course: "",
    address: "",
    id_school_period: "",
    birth_date: "",
    id_school: "1",
    documentid_copy: false,
    photo_2x2: false,
    birth_certificate: false,
    doctor_certified: false,
    certified_record: false,
  },
  list: []
}
const inscriptionSlice = createSlice({
  name: "inscription",
  initialState,
  reducers: actions.inscription,
  extraReducers(builder) {
    builder
      .addCase(usePostInscription.rejected, (state, {error}:any) => {
        console.log(error)
      })
      .addCase(usePostInscription.fulfilled, (state, {payload}:any) => {
        console.log(payload)
        state.current.document_number = ""
        state.current.names = ""
        state.current.surnames = ""
        state.current.id_gender = ""
        state.current.id_course = ""
        state.current.id_school_period = ""
        state.current.address = ""
        state.current.birth_date = ""
        state.current.documentid_copy = false
        state.current.photo_2x2 = false
        state.current.birth_certificate = false
        state.current.doctor_certified = false
        state.current.certified_record = false
      })
      .addCase(useGetGenders.rejected, (state, {error}:any) => {
        console.log(error)
      })
      .addCase(useGetGenders.fulfilled, (state, {payload}:any) => {
        state.genders = payload.map((item:any) => ({label: item.description,  value: `${item.id}`}))
        console.log(state.genders)
      })
      .addCase(useGetCourses.rejected, (state, {error}:any) => {
        console.log(error)
      })
      .addCase(useGetCourses.fulfilled, (state, {payload}:any) => {
        state.classrooms = payload.map((item:any) => ({label: item.course_description,  value: `${item.course_id}`, id_school_period: item.id_school_period}))
        console.log(state.classrooms)
      })
  },
})

export const selectInscription = (state: AppState) => state.management.inscription
export const { 
  setNames, setSurnames, setGender, setAddress, setBirthDate, setBirthCertificate, setClassroom,
  setDoctorCertificate, setDocumentId, setPhoto, setSchoolCertificate, setDocumentNumber } = inscriptionSlice.actions

export const inscriptionReducer = inscriptionSlice.reducer