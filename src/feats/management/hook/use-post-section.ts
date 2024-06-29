import { postMethod } from "@/services/post-method"
import { createAsyncThunk } from "@reduxjs/toolkit"
import * as env from '@/data/environments'
import { getMethod } from "@/services/get-method"

export const usePostSection = createAsyncThunk(
  'service/postAPISection',
  async (inSection:any) => {
    console.log(inSection)
    await postMethod(inSection, `${env.baseUrl}/section`)
    const resp = await getMethod(`${env.baseUrl}/section`)
    return resp.data
  }
)