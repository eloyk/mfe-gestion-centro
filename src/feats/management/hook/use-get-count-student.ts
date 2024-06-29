import { createAsyncThunk } from "@reduxjs/toolkit"
import * as env from '@/data/environments'
import { getMethod } from "@/services/get-method"
export const useGetCountStudent = createAsyncThunk(
  'service/getAPICountStudent',
  async () => {
    const resp = await getMethod(`${env.baseUrl}/course/countstudent`)
    return resp.data
  }
)