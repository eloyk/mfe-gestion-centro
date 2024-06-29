import { Request } from "./Request"
import runner, { Axios, AxiosError } from 'axios'
import LocalStorage from "../../lib/localStorage"

export const axios = ({type, url, data}:Request) => {
  const username = LocalStorage.get('username')
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': LocalStorage.get(`${username}|currUser`)
  }}
  switch(type){
    case 'GET': 
      return runner.get(url, config).catch(err => {
        throw new AxiosError(JSON.stringify(err.response))
      })
    case 'POST':
      return runner.post(url, data, config).catch(err => {
        throw new AxiosError(JSON.stringify(err.response))
      })
    case 'DELETE':
      return runner.delete(url, config).catch(err => {
        console.log(err.response)
        throw new AxiosError(JSON.stringify(err.response))
      })
    case 'PUT':
      return runner.put(url, data, config).catch(err => {
        throw new AxiosError(JSON.stringify(err.response))
      })
  }
}