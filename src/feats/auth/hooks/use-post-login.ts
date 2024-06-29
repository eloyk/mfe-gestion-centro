import { postMethod } from "@/services/post-method"
import { createAsyncThunk } from "@reduxjs/toolkit"
import * as env from '@/data/environments'

export const usePostLogin = createAsyncThunk(
  'service/postAPILogin',
  async (inUser:any) => {
    console.log(inUser)
    const resp = await postMethod(inUser, `${env.baseUrl}/user/login`)
    return resp.data
  }
)