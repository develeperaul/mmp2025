import { defineStore } from 'pinia'
import {
  regions,
  deviceTypes,
  actions,
  action,
  tariffs,
  tariffAbout,
} from 'src/api/main'
import {
  ActionT,
  RegionT,
  TariffItemT,
  TariffT,
  UpdateTariffItemT,
} from 'src/models/api/main'
export default defineStore('main', () => {
  const regionList = ref<RegionT[]>([])
  const getRegions = async () => {
    try {
      regionList.value = (await regions()).data
    } catch (e) {
      throw e
    }
  }
  const getDevices = async () => {
    try {
      const res = (await deviceTypes()).data
      return res
    } catch (e) {
      throw e
    }
  }
  const actionList = ref<ActionT[]>([])
  const getActions = async () => {
    try {
      actionList.value = (await actions()).data
    } catch (e) {
      throw e
    }
  }
  const getAction = async (id: string) => {
    try {
      return (await action(id)).data
    } catch (e) {
      throw e
    }
  }

  const getTariffs = async (params: {
    [key: string]: string | number | boolean
  }) => {
    let regionLk = JSON.parse(window.localStorage.region)
    console.log(params)

    try {
      const res = (await tariffs({ ...params, regionId: regionLk.id })).data
      return tariffsAdapter(res)
    } catch (e) {
      throw e
    }
  }

  const tariffsAdapter = (data: TariffT[]): UpdateTariffItemT[] => {
    let adaptiveData = []
    data.forEach((operator) => {
      const operatorId = operator.id
      const operatorName = operator.name
      const tariffs = operator.tariffs

      tariffs.forEach((tariff: TariffItemT) => {
        const newTariff = {
          id: tariff.id,
          operator: operatorName,
          operatorId: operatorId,
          availableData: tariff.availableData,
          availableTalkTime: tariff.availableTalkTime,
          availableTextMessagesCount: tariff.availableTextMessagesCount,
          cost: tariff.cost,
          isESimAvailable: tariff.isESimAvailable,
          name: tariff.name,
          regions: tariff.regions,
          label: tariff.label,
          unlimitedDataOptions: tariff.unlimitedDataOptions,
        }
        adaptiveData.push(newTariff)
      })
    })
    return adaptiveData
  }

  const getTariffCardAbout = async (operator: number, tariffId: number) => {
    try {
      return (await tariffAbout(operator, tariffId)).data
    } catch (e) {
      throw e
    }
  }
  return {
    regionList,
    getRegions,
    getDevices,
    actionList,
    getAction,
    getActions,

    getTariffs,
    getTariffCardAbout,
  }
})
