import { getMethod } from "@/services/get-method";
import { createAsyncThunk } from "@reduxjs/toolkit";
import * as env from '@/data/environments'

export const useGetCurrUser = createAsyncThunk(
  'service/getCurrUser',
  async () => {
    const resp = await getMethod(`${env.baseUrl}/user/currentUser`)
    return resp.data
  }
)