import { defineStore } from 'pinia'
import {
  citiesCDEK,
  createOrder,
  getPaymentLink,
  PVZCDEK,
  receivingInfo,
  regionsCDEK,
} from 'src/api/delivery'
import { RegionCDEKT } from 'src/models/api/delivery'
import { RegionT, UpdateTariffItemT } from 'src/models/api/main'
interface BasketItemI extends UpdateTariffItemT {
  count: number
}
export default defineStore('basket', () => {
  const basket = ref<{ [key: string | number]: BasketItemI[] }>({})
  const addTariff = (tariff: UpdateTariffItemT) => {
    let region = JSON.parse(localStorage.region) as { id: number; name: string }
    if (Object.keys(basket.value).length > 0) {
      if (basket.value[region.id]) {
        const currentBasket = basket.value[region.id]

        const el = currentBasket.find((t) => t.id === tariff.id)
        if (el) {
          basket.value[region.id] = basket.value[region.id].map((t) => {
            if (t.id === tariff.id) {
              return { ...t, count: ++t.count }
            }
            return t
          })
        } else {
          basket.value[region.id].push({ ...tariff, count: 1 })
        }
      } else {
        basket.value[region.id] = [{ ...tariff, count: 1 }]
      }
    } else {
      basket.value[region.id] = [{ ...tariff, count: 1 }]
    }
  }

  const remove = (regionId: string | number, tarifId: number) => {
    console.log(regionId)

    console.log(basket.value, basket.value[regionId])

    if (basket.value && basket.value[regionId]) {
      const index = basket.value[regionId].findIndex((t) => t.id === tarifId)
      const tarif = basket.value[regionId][index]

      console.log(basket.value[regionId].splice(index, 1))
      if (basket.value[regionId].length === 0) {
        rezet()
      }
    }

    // if (tarif.count === 1) {
    //   state.basket[regionId] =state.basket[regionId].splice(index, 1);

    // } else {
    //   state.basket[regionId] =
    //   state.basket[regionId].splice(index, 1, {...tarif, court: --tarif.count});
    // }
  }
  const rezet = () => {
    basket.value = {}
  }

  const create = async () => {
    const payload = [] as {
      mobileTariffId: number
      regionId: number
      count: number
    }[]
    for (const key in basket.value) {
      if (Object.prototype.hasOwnProperty.call(basket.value, key)) {
        const element = basket.value[key]
        element?.forEach((el) => {
          payload.push({
            mobileTariffId: el.id,
            regionId: +key,
            count: el.count,
          })
        })
      }
    }
    const res = await createOrder(payload)
    if (res) {
      window.localStorage.setItem('mmp_order_id', JSON.stringify(res.data.id))
    }
  }

  const receivingOrder = async (payload: {
    data: { method: number; cdekDeliveryPoint?: string | number }
  }) => {
    const orderId = window.localStorage.getItem('mmp_order_id')
    if (orderId)
      try {
        return await receivingInfo({ ...payload, orderId: JSON.parse(orderId) })
      } catch (e) {
        throw e
      }
  }

  const getLink = async (orderId: string) => {
    try {
      return await getPaymentLink(orderId)
    } catch (e) {
      throw e
    }
  }
  const regionCDEK = ref<RegionT | null>(null)
  const regionListCDEK = ref<RegionT[]>([])
  const getRegionsCDEK = async () => {
    try {
      const res = (await regionsCDEK()).data
      if (res.length > 0) {
        return (regionListCDEK.value = res.map((i) => {
          return {
            id: i.code,
            name: i.name,
          }
        }))
      } else regionListCDEK.value = []
    } catch (e) {
      throw e
    }
  }

  const cityCDEK = ref<RegionT | null>(null)
  const citiyListCDEK = ref<RegionT[]>([])
  const getCitiesCDEK = async (id: number) => {
    console.log(id)

    try {
      const res = (await citiesCDEK(id)).data
      if (res.length > 0) {
        return (citiyListCDEK.value = res.map((i) => {
          return {
            id: i.code,
            name: i.name,
          }
        }))
      } else citiyListCDEK.value = []
    } catch (e) {
      throw e
    }
  }

  const PVZItemCDEK = ref<RegionT | null>(null)
  const PVZListCDEK = ref<RegionT[]>([])
  const getPVZCDEK = async (id: number, cityId: number) => {
    try {
      const res = (await PVZCDEK(id, cityId)).data
      if (res.length > 0) {
        return (PVZListCDEK.value = res.map((i) => {
          return {
            id: i.code,
            name: i.location.address,
          }
        }))
      } else PVZListCDEK.value = []
    } catch (e) {
      throw e
    }
  }

  return {
    basket,
    addTariff,
    remove,
    rezet,
    create,

    regionCDEK,
    regionListCDEK,
    getRegionsCDEK,

    getCitiesCDEK,
    cityCDEK,
    citiyListCDEK,

    PVZItemCDEK,
    PVZListCDEK,
    getPVZCDEK,

    receivingOrder,

    getLink,
  }
})
