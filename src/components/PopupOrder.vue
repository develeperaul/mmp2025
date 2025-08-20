<template>
  <div class="popup__wrapper !tw-bg-white">
    <div class="">
      <base-icon
        @click="emit('close')"
        name="close"
        class="tw-w-6 tw-h-6 tw-text-back tw-mr-0 tw-ml-auto"
      />
      <div class="tw-text-center tw-text-xl tw-font-semibold tw-mb-3">
        Заказ от {{ creatEd }}
      </div>
      <div class="tw-flex tw-gap-2.5 tw-justify-center">
        <div class="tw-text-body_l tw-text-secondary">№ {{ id }}</div>
        <base-icon name="copy" class="tw-w-5 tw-h-5" />
      </div>
      <div
        v-for="value in items"
        class="tw-grid tw-grid-cols-[46px_1fr] tw-gap-2.5 tw-mt-6"
      >
        <div>
          <img src="src/assets/icons/megafon-sim.svg" alt="" />
          <!-- <img src="src/assets/icons/mts-sim.svg" alt="" />
                  <img src="src/assets/icons/beeline-sim.svg" alt="" /> -->
        </div>
        <div class="tw-grid tw-gap-4">
          <div class=" ">
            <div>
              <div class="tw-font-semibold tw-mb-1.5">
                {{ value.mobileTariff?.mobileOperator?.name }}
              </div>
              <div>{{ value.mobileTariff?.name }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="tw-grid tw-grid-cols-[46px_1fr] tw-gap-2.5">
        <div></div>
        <div class="tw-grid tw-grid-cols-3">
          <div class="tw-grid tw-gap-1.5">
            <div class="tw-text-secondary tw-text-sm">Абон плата</div>
            <div>{{ cost.subscriptionFees }} ₽/мес</div>
          </div>
          <div class="tw-grid tw-gap-1.5">
            <div class="tw-text-secondary tw-text-sm">Оформление</div>
            <div>{{ cost.activations }} ₽</div>
          </div>
          <div class="tw-grid tw-gap-1.5">
            <div class="tw-text-secondary tw-text-sm">Доставка</div>
            <div>{{ cost.receiving }} ₽</div>
          </div>
        </div>
      </div>
      <div class="tw-mt-5">
        <div class="tw-grid tw-gap-1.5">
          <div class="tw-text-secondary tw-text-sm">Статус</div>
          <div class="tw-text-body_l tw-font-medium">
            {{ status.description }}
          </div>
          <!-- <div class="tw-text-body_l tw-font-medium">Курьером СДЭК</div>
            <div class="tw-text-body_l">17-19 мая</div> -->
        </div>
      </div>
      <base-button class="tw-mt-2" @click="buttons[status.value].action"
        >{{ buttons[status.value].label }}
      </base-button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'

const props = defineProps<{
  id: number
  orderId: string
  creatEd: string
  receiving?: string
  items: {
    activationCost: number
    count: number
    itemCost: number
    mobileTariff: {
      id: number
      mobileOperator: { id: number; name: string; isMegafon: boolean }
      name: string
    }
    regionId: number
    subscriptionFeeCost: number
    totalActivationCost: number
    totalItemCost: number
    totalSubscriptionFeeCost: number
  }[]
  cost: {
    activations: number
    items: number
    receiving: number
    subscriptionFees: number
    total: number
  }
  status: { value: number; description: string }
}>()
const emit = defineEmits<{
  (e: 'close'): void
}>()
const router = useRouter()

const buttons = {
  1: {
    label: 'Заполнить данные о доставке',
    action: () => {
      let isMeg = 0
      props.items.forEach((item) => {
        if (item.mobileTariff) {
          if (item.mobileTariff.mobileOperator.isMegafon) isMeg = 1
        }
      })
      router.push({
        name: 'delivery',
        query: { orderId: props.orderId },
      })
    },
  },
  2: {
    label: 'Оплатить',
    action: () => getPaymentLink(props.orderId),
  },
  3: {
    label: 'Оплатить',
    action: () => getPaymentLink(props.orderId),
  },
  4: {
    label: 'Заполнить данные для регистрации',
    action: () =>
      router.push({
        name: 'data',
        params: { id: props.orderId },
      }),
  },
  5: {
    label: 'Повторить оплату',
    action: () => getPaymentLink(props.orderId),
  },
}

const getPaymentLink = (orderId: string) => {
  $store
    .dispatch('orderPaymentLink', orderId)
    .then((r) => {
      openCapacitorSite(r.data.data.link)
    })
    .catch((e) => {
      throw e
    })
}
</script>
<style lang="scss" scoped></style>
