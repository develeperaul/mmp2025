import { defineStore } from 'pinia'
import { list } from 'src/api/orders'

import { orderT, RegionCDEKT } from 'src/models/api/delivery'
import { RegionT, UpdateTariffItemT } from 'src/models/api/main'
interface BasketItemI extends UpdateTariffItemT {
  count: number
}
export default defineStore('orders', () => {
  const orders = ref<orderT[]>([])
  const orderList = async () => {
    try {
      orders.value = (await list()).data
    } catch (e) {
      throw e
    }
  }

  return {
    orders,
    orderList,
  }
})
