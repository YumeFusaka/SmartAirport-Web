import request from '@/utils/axios'
import type { Data } from '@/utils/axios.ts'

export const loginAPI = (data: any): Promise<Data<any>> => {
  return request({
    url: '/login',
    method: 'post',
    data: data
  }).then(res => res.data as Data<any>)
}