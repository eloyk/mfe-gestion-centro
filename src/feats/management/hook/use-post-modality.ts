import { postMethod } from "@/services/post-method"
import { createAsyncThunk } from "@reduxjs/toolkit"
import * as env from '@/data/environments'
import { getMethod } from "@/services/get-method"

export const usePostModality = createAsyncThunk(
  'service/postAPIModality',
  async (inModality:any) => {
    console.log(inModality)
    await postMethod(inModality, `${env.baseUrl}/modality`)
    const resp = await getMethod(`${env.baseUrl}/modality`)
    return resp.data
  }
)