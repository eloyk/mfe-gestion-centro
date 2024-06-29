import { axios } from "@/lib/axios/axios";

export const getMethod = (url:string) => axios({type: 'GET', url})