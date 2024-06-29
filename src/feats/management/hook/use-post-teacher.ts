import { postMethod } from "@/services/post-method"
import { createAsyncThunk } from "@reduxjs/toolkit"
import * as env from '@/data/environments'
import { getMethod } from "@/services/get-method"

export const usePostTeacher = createAsyncThunk(
  'service/postAPITeacher',
  async (inTeacher:any) => {
    console.log(inTeacher)
    await postMethod(inTeacher, `${env.baseUrl}/teacher`)
    const resp = await getMethod(`${env.baseUrl}/teacher`)
    return resp.data
  }
)