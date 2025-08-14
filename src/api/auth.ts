import { DataObj } from 'src/models/api'

import { api, apiAuth } from '.'
import { AuthT, VerifyT } from 'src/models/api/auth'

export const auth = (phone: string): Promise<AuthT> => {
  const body = new FormData()
  // body.append('phoneNumber', phone)

  return apiAuth.mainKy
    .post('users/auth/request-confirmation', { json: { phoneNumber: phone } })
    .json()
}
export const verify = (phone: string, code: string): Promise<VerifyT> => {
  const body = new FormData()
  body.append('client_id', '2')
  body.append('client_secret', 'hX1A00J2vm5K6ImZmufXiWBadAG5McqA1o9O9rvP')
  body.append('confirmationCode', code)
  body.append('phoneNumber', phone)

  return apiAuth.mainKy.post('users/auth/verify-credentials', { body }).json()
}
