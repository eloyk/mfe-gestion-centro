import { createAsyncThunk } from "@reduxjs/toolkit"
import * as env from '@/data/environments'
import { getMethod } from "@/services/get-method"
export const useGetCourses = createAsyncThunk(
  'service/getAPICourses',
  async () => {
    const resp = await getMethod(`${env.baseUrl}/course`)
    return resp.data
  }
)