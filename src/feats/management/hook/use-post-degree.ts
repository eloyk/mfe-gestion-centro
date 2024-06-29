import { postMethod } from "@/services/post-method"
import { createAsyncThunk } from "@reduxjs/toolkit"
import * as env from '@/data/environments'
import { getMethod } from "@/services/get-method"

export const usePostDegree = createAsyncThunk(
  'service/postAPIDegree',
  async (inDegree:any) => {
    console.log(inDegree)
    await postMethod(inDegree, `${env.baseUrl}/degree`)
    const resp = await getMethod(`${env.baseUrl}/degree`)
    return resp.data
  }
)