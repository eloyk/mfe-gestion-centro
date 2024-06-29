import { postMethod } from "@/services/post-method"
import { createAsyncThunk } from "@reduxjs/toolkit"
import * as env from '@/data/environments'

export const usePostInscription = createAsyncThunk(
  'service/postAPIInscription',
  async (inInscription:any) => {
    let data = {...inInscription, document_number: inInscription.document_number.replaceAll('-', '')}
    const student = await postMethod(data, `${env.baseUrl}/student`)
    data = {...data, id_student: student.data.id}
    const document = await postMethod(data, `${env.baseUrl}/document`)
    data = {...data, id_document: document.data.id, order_num: Number(`${Math.random()*100}`.split('.')[0])}
    const inscription = await postMethod(data, `${env.baseUrl}/inscription`)
    console.log(data)
    const resp = await postMethod(data, `${env.baseUrl}/studentlist`)
    return inscription.data
  }
)