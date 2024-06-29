import { createAsyncThunk } from "@reduxjs/toolkit"
import * as env from '@/data/environments'
import { getMethod } from "@/services/get-method"
export const useGetTeachers = createAsyncThunk(
  'service/getAPITeachers',
  async () => {
    const resp = await getMethod(`${env.baseUrl}/teacher`)
    return resp.data
  }
)