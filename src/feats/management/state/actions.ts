import { PayloadAction } from "@reduxjs/toolkit"

const actions = {
  teacher: {
    setNames: (state:any, {payload}:PayloadAction<string>) => {
      state.current.names = payload
    },
    setSurnames: (state:any, {payload}:any) => {
      state.current.surnames = payload
    },
    setGender: (state:any, {payload}:any) => {
      state.current.id_gender = payload
    },
    setAddress: (state:any, {payload}:any) => {
      state.current.address = payload
    },
    setBirthDate: (state:any, {payload}:any) => {
      state.current.birth_date = payload
    },
    setSpecialization: (state:any, {payload}:any) => {
      state.current.specialization = payload
    },
    setPosition: (state:any, {payload}:any) => {
      state.current.position = payload
    },
  },
  other: {
    setDescription: (state:any, {payload}:any) => {
      state.current.description = payload
    },
    setNumSemesters: (state:any, {payload}:any) => {
      state.current.num_semester = payload
    },
    setIsOrdenance: (state:any, {payload}:any) => {
      state.current.is_ordenance = payload
    },
    setStage: (state:any, {payload}:any) => {
      state.current.stage = payload
    },
    setVarietySelection: (state:any, {payload}:PayloadAction<'modality'|'section'|'period'|'degree'>) => {
      state.varietySelection = payload
    }
  },
  classroom: {
    setName: (state:any, {payload}:any) => {
      state.current.description = payload
    },
    setMaxQty: (state:any, {payload}:any) => {
      state.current.max_quantity = payload
    },
    setModality: (state:any, {payload}:any) => {
      state.current.id_modality = payload
      state.autoName.stageDesc = payload != '' ? state.modalities.find((item:any) => item.value == payload).stage : ''
      state.current.description = `${state.autoName.degreeDesc} ${state.autoName.sectionDesc} ${state.autoName.stageDesc}`.trim()
    },
    setSection: (state:any, {payload}:any) => {
      state.current.id_section = payload
      state.autoName.sectionDesc = payload != '' ? state.sections.find((item:any) => item.value == payload).label : ''
      state.current.description = `${state.autoName.degreeDesc} ${state.autoName.sectionDesc} ${state.autoName.stageDesc}`.trim()
    },
    setTeacher: (state:any, {payload}:any) => {
      state.current.id_teacher = payload
    },
    setSchoolPeriod: (state:any, {payload}:any) => {
      state.current.id_school_period = payload
    },
    setDegree: (state:any, {payload}:any) => {
      state.current.id_degree = payload
      state.autoName.degreeDesc = payload != '' ? state.degrees.find((item:any) => item.value == payload).label : ''
      state.current.description = `${state.autoName.degreeDesc} ${state.autoName.sectionDesc} ${state.autoName.stageDesc}`.trim()
    }
  },
  inscription: {
    setNames: (state:any, {payload}:PayloadAction<string>) => {
      state.current.names = payload
    },
    setDocumentNumber: (state:any, {payload}:PayloadAction<string>) => {
      state.current.document_number = payload
    },
    setSurnames: (state:any, {payload}:any) => {
      state.current.surnames = payload
    },
    setGender: (state:any, {payload}:any) => {
      state.current.id_gender = payload
    },
    setClassroom: (state:any, {payload}:any) => {
      state.current.id_course = payload
      state.current.id_school_period = state.current.id_course != "" ? state.classrooms.find((item:any) => item.value == payload).id_school_period : ""
    },
    setAddress: (state:any, {payload}:any) => {
      state.current.address = payload
    },
    setBirthDate: (state:any, {payload}:any) => {
      state.current.birth_date = payload
    },
    setDocumentId: (state:any) => {
      state.current.documentid_copy = !state.current.documentid_copy
    },
    setPhoto: (state:any) => {
      state.current.photo_2x2 = !state.current.photo_2x2
    },
    setBirthCertificate: (state:any) => {
      state.current.birth_certificate = !state.current.birth_certificate
    },
    setDoctorCertificate: (state:any) => {
      state.current.doctor_certified = !state.current.doctor_certified
    },
    setSchoolCertificate: (state:any) => {
      state.current.certified_record = !state.current.certificated_record
    },
  },
  overview: {}
}

export default actions