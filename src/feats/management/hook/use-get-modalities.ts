import { createAsyncThunk } from "@reduxjs/toolkit"
import * as env from '@/data/environments'
import { getMethod } from "@/services/get-method"
export const useGetModalities = createAsyncThunk(
  'service/getModalities',
  async () => {
    const resp = await getMethod(`${env.baseUrl}/modality`)
    return resp.data
  }
)