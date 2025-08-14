import { DataObj } from 'src/models/api'

import { api } from '.'
import { orderT } from 'src/models/api/delivery'

export const list = (): Promise<DataObj<orderT[]>> => {
  return api.mainKy.get('sim-card-orders').json()
}
