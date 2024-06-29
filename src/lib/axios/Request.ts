import { RequestType } from "./RequestType"

export interface Request {
  url: string
  type: RequestType
  data?: any
}