import { axios } from "@/lib/axios/axios";

export const postMethod = (data:any, url:string) => axios({type: 'POST', url, data})