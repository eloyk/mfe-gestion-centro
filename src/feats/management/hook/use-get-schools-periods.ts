import { createAsyncThunk } from "@reduxjs/toolkit"
import * as env from '@/data/environments'
import { getMethod } from "@/services/get-method"
export const useGetSchoolsPeriods = createAsyncThunk(
  'service/getAPISchoolsPeriods',
  async () => {
    const resp = await getMethod(`${env.baseUrl}/schoolperiod`)
    return resp.data
  }
)