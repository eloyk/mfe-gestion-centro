import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import actions from "./actions"
import { AppState } from "../../../data/store/types"
import { useGetModalities } from "../hook/use-get-modalities"
import { InitialOther } from "./interfaces"
import { usePostModality } from "../hook/use-post-modality"
import { useGetSections } from "../hook/use-get-sections"
import { usePostSection } from "../hook/use-post-section"
import { usePostDegree } from "../hook/use-post-degree"
import { useGetDegrees } from "../hook/use-get-degrees"

const initialState:InitialOther = {
  varietyList: [{label: 'Modalidad', value: 'modality'}, {label: 'Sección', value: 'section'}, {label: 'Grado', value: 'degree'}],
  varietySelection: 'modality',
  current: {
    description: "",
    num_semester: "",
    is_ordenance: "",
    stage: "",
    id_school: "1",
  },
  list: {
    modality: {
      addText: 'Agregar Modalidad',
      addTitle: 'Modalidad',
      addDescription: 'Nueva Modalidad',
      titles: ['Nombre', 'Etapa', '# Semestres'],
      array: []
    },
    section: {
      addText: 'Agregar Sección',
      addTitle: 'Sección',
      addDescription: 'Nueva Sección',
      titles: ['Nombre'],
      array: []
    },
    degree: {
      addText: 'Agregar Grado',
      addTitle: 'Grado',
      addDescription: 'Nueva Grado',
      titles: ['Nombre'],
      array: []
    }
  }
}
const otherSlice = createSlice({
  name: "other",
  initialState,
  reducers: actions.other,
  extraReducers(builder) {
    builder
      .addCase(usePostModality.rejected, (state, {error}:any) => {
        console.log(error)
      })
      .addCase(usePostModality.fulfilled, (state, {payload}:any) => {
        console.log(payload)
        state.current.description = ""
        state.current.num_semester = ""
        state.current.is_ordenance = ""
        state.current.stage = "",
        state.current.id_school = "1"
        state.list.modality.array = payload.map((item:any) => ({description: item.description.trim(), stage: `${item.stage || ""}`.trim(), num_semester: item.num_semester}))
      })
      .addCase(usePostSection.rejected, (state, {error}:any) => {
        console.log(error)
      })
      .addCase(usePostSection.fulfilled, (state, {payload}:any) => {
        console.log(payload)
        state.current.description = ""
        state.current.num_semester = ""
        state.current.is_ordenance = ""
        state.current.stage = "",
        state.current.id_school = "1"
        state.list.section.array = payload.map((item:any) => ({description: item.description.trim()}))
      })
      .addCase(usePostDegree.rejected, (state, {error}:any) => {
        console.log(error)
      })
      .addCase(usePostDegree.fulfilled, (state, {payload}:any) => {
        console.log(payload)
        state.current.description = ""
        state.current.num_semester = ""
        state.current.is_ordenance = ""
        state.current.stage = "",
        state.current.id_school = "1"
        state.list.degree.array = payload.map((item:any) => ({description: item.description.trim()}))
      })
      .addCase(useGetModalities.rejected, (state, {error}:any) => {
        console.log(error)
      })
      .addCase(useGetModalities.fulfilled, (state, {payload}:any) => {
        console.log(payload)
        state.list.modality.array = payload.map((item:any) => ({description: item.description.trim(), stage: `${item.stage || ""}`.trim(), num_semester: item.num_semester}))
      })
      .addCase(useGetSections.rejected, (state, {error}:any) => {
        console.log(error)
      })
      .addCase(useGetSections.fulfilled, (state, {payload}:any) => {
        console.log(payload)
        state.list.section.array = payload.map((item:any) => ({description: item.description.trim()}))
        console.log(state.list.modality.array)
      })
      .addCase(useGetDegrees.rejected, (state, {error}:any) => {
        console.log(error)
      })
      .addCase(useGetDegrees.fulfilled, (state, {payload}:any) => {
        console.log(payload)
        state.list.degree.array = payload.map((item:any) => ({description: item.description.trim()}))
        console.log(state.list.degree.array)
      })
  },
})

export const selectOther = (state: AppState) => state.management.other
export const { setDescription, setIsOrdenance, setNumSemesters, setStage, setVarietySelection } = otherSlice.actions

export const otherReducer = otherSlice.reducer