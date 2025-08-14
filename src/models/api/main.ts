export type RegionT = {
  id: number | string
  name: string
}
export type DeviceT = {
  id: number
  description: string
}

export type ActionT = {
  id: number
  body_action_title: null | string
  body_action_url: null | string
  body_image_url: null | string
  body_text: null | string
  caption_image_url: null | string
  subtitle: null | string
  title: null | string
}

export type TariffT = {
  id: number
  name: string
  isMegafon: boolean
  tariffs: TariffItemT[]
}
export type TariffItemT = {
  id: number
  applyingDeviceType: {
    value: number
    description: string
  }
  availableData: number
  availableTalkTime: number
  availableTextMessagesCount: number
  cost: string
  description: null | string
  isESimAvailable: boolean
  isPromoted: boolean
  label: {
    text: null | string
  }
  name: string
  abouts: []
  advantages: []
  regions: [
    {
      id: number
      name: string
    },
  ]
  unlimitedDataOptions: [
    {
      id: number
      description: null | string
      enabled: boolean
    },
  ]
}

export type UpdateTariffItemT = {
  id: number
  operator: string
  operatorId: number
  availableData: number
  availableTalkTime: number
  availableTextMessagesCount: number
  cost: string
  isESimAvailable: boolean
  name: string
  regions: [
    {
      id: number
      name: string
    },
  ]
  label: {
    text: null | string
  }
  unlimitedDataOptions: [
    {
      id: number
      description: null | string
      enabled: boolean
    },
  ]
}

export type TariffItemAboutT = {
  id: number
  name: null | string
  isMegafon: boolean
  tariff: {
    id: number
    applyingDeviceType: {
      value: number
      description: null | string
    }
    availableData: number
    availableTalkTime: number
    availableTextMessagesCount: number
    cost: null | string
    description: null | string
    isESimAvailable: boolean
    isPromoted: boolean
    label: {
      text: null | string
    }
    name: null | string
    abouts: []
    advantages: { title: string; body: string }[]
    regions: {
      id: number
      name: null | string
    }[]

    unlimitedDataOptions: {
      id: number
      description: null | string
      enabled: boolean
    }[]
  }
}
