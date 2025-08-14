import { DataObj } from 'src/models/api'
import {
  RegionT,
  DeviceT,
  ActionT,
  TariffT,
  TariffItemAboutT,
} from 'src/models/api/main'
import { api } from '.'

export const regions = (): Promise<DataObj<RegionT[]>> => {
  return api.mainKy('regions').json()
}
export const deviceTypes = (): Promise<DataObj<DeviceT[]>> => {
  return api.mainKy('applying-device-types').json()
}
export const actions = (): Promise<DataObj<ActionT[]>> => {
  return api.mainKy('marketing-promotions').json()
}
export const action = (id: string): Promise<DataObj<ActionT>> => {
  return api.mainKy(`marketing-promotions/${id}`).json()
}

export const tariffs = (params?: {
  [key: string]: string | number | boolean
}): Promise<DataObj<TariffT[]>> => {
  let p = '?withTariffs=1'

  if (params)
    for (const key in params) {
      if (Object.prototype.hasOwnProperty.call(params, key)) {
        const element = params[key]
        if (p.length === 0) {
          p = '?' + key + '=' + params[key]
        } else {
          p = p + '&' + key + '=' + params[key]
        }
      }
    }

  return api.mainKy(`mobile-operators${p}`).json()
}
export const tariffAbout = (
  operator: number,
  tariff: number
): Promise<DataObj<TariffItemAboutT>> => {
  return api.mainKy(`mobile-operators/${operator}/tariffs/${tariff}`).json()
}
