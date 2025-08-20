import { DataObj } from 'src/models/api'

import { api } from '.'
import {
  PVZCDEKT,
  RegionCDEKT,
  orderT,
  receivingCDEKT,
} from 'src/models/api/delivery'

export const createOrder = (
  payload: {
    mobileTariffId: number
    regionId: number
    count: number
  }[]
): Promise<DataObj<orderT>> => {
  return api.mainKy.post('sim-card-orders', { json: { items: payload } }).json()
}
export const regionsCDEK = (): Promise<DataObj<RegionCDEKT[]>> => {
  return api.mainKy('receiving/cdek/regions').json()
}
export const citiesCDEK = (id: number): Promise<DataObj<RegionCDEKT[]>> => {
  return api.mainKy(`receiving/cdek/regions/${id}/cities`).json()
}
export const PVZCDEK = (
  id: number,
  cityId: number
): Promise<DataObj<PVZCDEKT[]>> => {
  return api
    .mainKy(`receiving/cdek/regions/${id}/cities/${cityId}/delivery-points`)
    .json()
}
export const receivingInfo = (payload: {
  data: { method: number; cdekDeliveryPoint?: string | number }
  orderId: string
}): Promise<DataObj<receivingCDEKT>> => {
  return api.mainKy
    .post(`sim-card-orders/${payload.orderId}/receiving`, {
      json: payload.data,
    })
    .json()
}

export const getPaymentLink = (orderId: string) => {
  return api.mainKy(`sim-card-orders/${orderId}/payment-link`).json()
}
