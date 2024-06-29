import { combineReducers } from "@reduxjs/toolkit"
import { teacherReducer } from "./teacher"
import { otherReducer } from "./other"
import { classroomReducer } from "./classroom"
import { inscriptionReducer } from "./inscription"
import { overviewReducer } from "./overview"

export const managementReducer = combineReducers({
  teacher: teacherReducer,
  other: otherReducer,
  classroom: classroomReducer,
  inscription: inscriptionReducer,
  overview: overviewReducer,
})