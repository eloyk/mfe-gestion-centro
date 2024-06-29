import { createAsyncThunk } from "@reduxjs/toolkit"
import * as env from '@/data/environments'
import { getMethod } from "@/services/get-method"
export const useGetStudentList = createAsyncThunk(
  'service/getAPIStudentList',
  async () => {
    const resp = await getMethod(`${env.baseUrl}/studentlist`)
    return resp.data
  }
)