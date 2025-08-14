<template>
  <q-page class="tw-container tw-grid tw-content-between page-a">
    <div class="tw-grid tw-content-between">
      <h2 class="title">Профиль</h2>
      <div class="tw-grid tw-gap-3">
        <router-link
          :to="{ name: 'orders' }"
          class="tw-flex tw-justify-between tw-items-center tw-bg-white tw-py-[18px] tw-px-5 tw-rounded-xl"
        >
          <div class="tw-grid tw-grid-cols-[24px_1fr] tw-gap-2.5">
            <base-icon name="order" class="tw-w-6 tw-h-6" />
            Мои заказы
          </div>

          <base-icon name="right" class="tw-w-4 tw-h-4" />
        </router-link>
        <div
          class="tw-flex tw-justify-between tw-items-center tw-bg-white tw-py-[18px] tw-px-5 tw-rounded-xl"
          @click="isPopupSupport = true"
        >
          <div class="tw-grid tw-grid-cols-[24px_1fr] tw-gap-2.5">
            <base-icon name="support" class="tw-w-6 tw-h-6" />
            Связаться с поддержкой
          </div>
          <base-icon name="right" class="tw-w-4 tw-h-4" />
        </div>
      </div>
    </div>
    <div
      class="tw-flex tw-justify-between tw-items-center tw-border tw-border-[#8E776280] tw-py-[18px] tw-px-5 tw-rounded-xl"
    >
      <div class="tw-grid tw-grid-cols-[24px_1fr] tw-gap-2.5">
        <base-icon name="logout" class="tw-w-6 tw-h-6" />
        Связаться с поддержкой
      </div>
    </div>
    <transition
      appear
      enter-active-class="animated slideInDown"
      leave-active-class="animated slideOutUp"
      mode="out-in"
    >
      <div class="popup" v-show="isPopupSupport">
        <PopupSupport @close="closePopupSupport" />
      </div>
    </transition>
  </q-page>
</template>
<script setup lang="ts">
import PopupSupport from 'src/components/PopupSupport.vue'
const isPopupSupport = ref(false)
const closePopupSupport = () => {
  isPopupSupport.value = false
}
</script>
<style lang="scss" scoped></style>
