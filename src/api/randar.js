import request from '@/utils/request'

export function getRandarData(id) {
  return request({
    url: '/randar',
    method: 'get',
    params: { id }
  })
}

export function getBrandById(id) {
  return request({
    url: '/brand/get',
    method: 'get',
    params: { id }
  })
}
