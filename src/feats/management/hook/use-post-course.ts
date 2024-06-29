import { postMethod } from "@/services/post-method"
import { createAsyncThunk } from "@reduxjs/toolkit"
import * as env from '@/data/environments'
import { getMethod } from "@/services/get-method"

export const usePostCourse = createAsyncThunk(
  'service/postAPICourse',
  async (inCourse:any) => {
    console.log(inCourse)
    await postMethod(inCourse, `${env.baseUrl}/course`)
    const resp = await getMethod(`${env.baseUrl}/course`)
    return resp.data
  }
)