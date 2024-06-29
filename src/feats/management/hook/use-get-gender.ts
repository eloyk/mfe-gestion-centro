import { createAsyncThunk } from "@reduxjs/toolkit"
import * as env from '@/data/environments'
import { getMethod } from "@/services/get-method"
export const useGetGenders = createAsyncThunk(
  'service/getGenders',
  async () => {
    const resp = await getMethod(`${env.baseUrl}/gender`)
    return resp.data
  }
)