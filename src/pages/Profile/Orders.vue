<template>
  <q-page class="tw-container tw-grid tw-content-between page-a">
    <div class="tw-grid tw-content-between">
      <h2 class="title">Мои заказы</h2>
      <tab-head v-model="tab" :options="tabs" class="tw-mb-5" />
      <tab-body v-model="tab">
        <tab-content name="1">
          <div v-if="true" class="tw-grid tw-gap-3">
            <Order
              v-for="(order, index) in orders"
              :key="index"
              :id="order.ordinalId"
              :creatEd="
                dayjs(order.createdAt).locale('ru').format('DD.MM.YYYY')
              "
              @click="openOrder(order)"
            />
          </div>
          <div v-else class="tw-flex tw-justify-center tw-mt-20">
            Список пуст
          </div>
        </tab-content>
        <tab-content name="2">
          <div v-if="true" class="tw-grid tw-gap-3">
            <Order />
          </div>
          <div v-else class="tw-flex tw-justify-center tw-mt-20">
            Список пуст
          </div>
        </tab-content>
      </tab-body>
    </div>
    <div class="popup" v-if="currentOrderOpen">
      <transition
        appear
        enter-active-class="animated slideInDown"
        leave-active-class="animated slideOutUp"
        mode="out-in"
      >
        <PopupOrder
          v-show="isPopupOrder"
          @close="closePopupOrder"
          :id="currentOrderOpen.ordinalId"
          :creatEd="
            dayjs(currentOrderOpen.createdAt).locale('ru').format('DD.MM.YYYY')
          "
        />
      </transition>
    </div>
  </q-page>
</template>
<script setup lang="ts">
import orderStore from 'src/stores/orderStore'
import dayjs from 'dayjs'
import { orderT } from 'src/models/api/delivery'

const tab = ref('1')
const tabs = [
  {
    id: '1',
    name: 'Новые',
  },
  {
    id: '2',
    name: 'Полученные',
  },
]

const isPopupOrder = ref(false)
const closePopupOrder = () => {
  isPopupOrder.value = false
  currentOrderOpen.value = null
}

const { orders } = storeToRefs(orderStore())
const currentOrderOpen = ref<orderT | null>(null)
const openOrder = (order: orderT) => {
  currentOrderOpen.value = order
  isPopupOrder.value = true
}
onMounted(() => {
  orderStore().orderList()
})
</script>
<style lang="scss" scoped></style>
