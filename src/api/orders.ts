import { DataObj } from 'src/models/api'

import { api } from '.'
import { orderT } from 'src/models/api/delivery'

export const list = (): Promise<DataObj<orderT[]>> => {
  return api.mainKy.get('sim-card-orders').json()
}

export const personalInfo = (
  orderId: string,
  payload: {
    firstName: string
    lastName: string
    patronymic: string
    birthDate: string
  },
  files: File[]
) => {
  const body = new FormData()
  body.append('firstName', payload.firstName)
  body.append('lastName', payload.lastName)
  body.append('patronymic', payload.patronymic)
  body.append('birthDate', payload.birthDate)
  files.forEach((file) => {
    body.append('passportPhotos[]', file)
  })
  return api.mainKy
    .post(`sim-card-orders/${orderId}/personal-info`, { body })
    .json()
}
