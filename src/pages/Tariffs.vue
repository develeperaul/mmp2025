<template>
  <q-page class="tw-container tw-grid tw-content-start env-t env-b page-a">
    <div class="title">Тарифы</div>
    <div class="tw-overflow-hidden tw-mb-7 -tw-mx-4">
      <tab-head v-model="tab" :options="tabs" class="tw-mb-5 tw-px-4" />
      <tab-body v-model="tab">
        <tab-content name="1">
          <div v-if="true" class="tw-flex tw-flex-nowrap tw-overflow-scroll">
            <Tariff
              v-for="tariff in smTarrifs"
              :tariff="tariff"
              tab="1"
              @opentariff="openPopup"
              class="tw-shrink-0 tw-ml-4"
            />
          </div>
          <div v-else class="tw-flex tw-justify-center tw-mt-20">
            У вас нет предстоящих записей
          </div>
        </tab-content>

        <tab-content name="2">
          <div v-if="true" class="tw-flex tw-flex-nowrap tw-overflow-scroll">
            <Tariff
              v-for="tariff in intTarrifs"
              :tariff="tariff"
              tab="2"
              @opentariff="openPopup"
              class="tw-shrink-0 tw-ml-4"
            />
          </div>
          <div v-else class="tw-flex tw-justify-center tw-mt-20">
            У вас нет прошлых записей
          </div>
        </tab-content>
        <tab-content name="3">
          <div v-if="true" class="tw-flex tw-flex-nowrap tw-overflow-scroll">
            <Tariff
              v-for="tariff in actTarrifs"
              :tariff="tariff"
              tab="3"
              @opentariff="openPopup"
              class="tw-shrink-0 tw-ml-4"
            />
          </div>
          <div v-else class="tw-flex tw-justify-center tw-mt-20">
            У вас нет прошлых записей
          </div>
        </tab-content>
      </tab-body>
    </div>
    <div class="popup" v-if="tariffAbout">
      <transition
        appear
        enter-active-class="animated slideInDown"
        leave-active-class="animated slideOutUp"
        mode="out-in"
      >
        <PopupTariff
          v-show="popup"
          :card_tariff="tariffAbout"
          @close="closePopup"
        />
      </transition>
    </div>
  </q-page>
</template>
<script setup lang="ts">
import { UpdateTariffItemT, TariffItemAboutT } from 'src/models/api/main'
import { useRoute } from 'vue-router'
const route = useRoute()
const tab = ref('1')
const tabs = [
  {
    id: '1',
    name: 'Связь',
  },
  {
    id: '2',
    name: 'Интернет',
  },
  {
    id: '3',
    name: 'Акции',
  },
]
const smTarrifs = ref<UpdateTariffItemT[]>([])
const intTarrifs = ref<UpdateTariffItemT[]>([])
const actTarrifs = ref<UpdateTariffItemT[]>([])
const popup = ref(false)
const currentTariff = ref<undefined | UpdateTariffItemT>(undefined)
const tariffAbout = ref<TariffItemAboutT | null>(null)
const closePopup = () => {
  popup.value = false
  tariffAbout.value = null
}
const openPopup = async (id: number, t: string) => {
  if (t === '1')
    currentTariff.value = smTarrifs.value.find(
      (tariff) => tariff.id == Number(id)
    )

  if (t === '2')
    currentTariff.value = intTarrifs.value.find(
      (tariff) => tariff.id == Number(id)
    )
  if (t === '3')
    currentTariff.value = actTarrifs.value.find(
      (tariff) => tariff.id == Number(id)
    )
  if (currentTariff.value) {
    tariffAbout.value = await mainStore().getTariffCardAbout(
      currentTariff.value.operatorId,
      currentTariff.value.id
    )
    setTimeout(() => (popup.value = true), 500)
  }
}
onMounted(async () => {
  smTarrifs.value = await mainStore().getTariffs({
    'applyingDeviceTypes[]': '1',
  })
  intTarrifs.value = await mainStore().getTariffs({
    'applyingDeviceTypes[]': '2',
  })
  actTarrifs.value = await mainStore().getTariffs({
    isPromoted: '1',
  })

  if (route.query?.id && route.query?.tab) {
    if (route.query?.tab === '1')
      currentTariff.value = smTarrifs.value.find(
        (t) => t.id == Number(route.query.id)
      )

    if (route.query?.tab === '2')
      currentTariff.value = intTarrifs.value.find(
        (t) => t.id == Number(route.query.id)
      )
    if (route.query?.tab === '3')
      currentTariff.value = actTarrifs.value.find(
        (t) => t.id == Number(route.query.id)
      )

    if (currentTariff.value) {
      tariffAbout.value = await mainStore().getTariffCardAbout(
        currentTariff.value.operatorId,
        currentTariff.value.id
      )
      setTimeout(() => (popup.value = true), 500)
    }
  }
})
</script>
<style lang="scss" scoped></style>
