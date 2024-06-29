import { createAsyncThunk } from "@reduxjs/toolkit"
import * as env from '@/data/environments'
import { getMethod } from "@/services/get-method"
export const useGetDegrees = createAsyncThunk(
  'service/getDegrees',
  async () => {
    const resp = await getMethod(`${env.baseUrl}/degree`)
    return resp.data
  }
)