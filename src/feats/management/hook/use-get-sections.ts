import { createAsyncThunk } from "@reduxjs/toolkit"
import * as env from '@/data/environments'
import { getMethod } from "@/services/get-method"
export const useGetSections = createAsyncThunk(
  'service/getSections',
  async () => {
    const resp = await getMethod(`${env.baseUrl}/section`)
    return resp.data
  }
)