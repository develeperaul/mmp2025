export type RegionCDEKT = {
  code: number
  name: string
}
export type PVZCDEKT = {
  code: string
  uuid: string
  workTime: {
    day: number
    time: string
  }[]
  location: {
    country_code: string
    region_code: number
    region: string
    city_code: number
    city: string
    fias_guid: string
    postal_code: string
    longitude: number
    latitude: number
    address: string
    address_full: string
    city_uuid: string
  }
}

export type receivingCDEKT = {
  id: string
  ordinalId: number
  createdAt: string
  cost: {
    items: number
    subscriptionFees: number
    activations: number
    receiving: number
    total: number
  }
  personalInfo: {
    firstName: null | string
    lastName: null | string
    patronymic: null | string
    passportPhotos: []
  }
  mobileOperator: null
  receiving: {
    method: {
      value: number
      description: string
    }
    cdek: {
      deliveryPoint: {
        code: string
      }
    }
  }
  region: null | string
  status: {
    value: number
    description: string
  }
  items: {
    count: number
    mobileTariffId: number
    regionId: number
    itemCost: number
    totalItemCost: number
    subscriptionFeeCost: number
    totalSubscriptionFeeCost: number
    activationCost: number
    totalActivationCost: number
  }
  []
}

export type orderT = {
  id: string
  ordinalId: number
  createdAt: string
  cost: {
    items: number
    subscriptionFees: number
    activations: number
    receiving: number
    total: number
  }
  personalInfo: {
    firstName: null | string
    lastName: null | string
    patronymic: null | string
    passportPhotos: []
  }
  mobileOperator: null | string
  receiving: null | string
  region: null | string
  status: {
    value: number
    description: string
  }
}
