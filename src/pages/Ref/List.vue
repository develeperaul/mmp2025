<template>
  <q-page class="tw-container tw-grid env-t env-b page-a">
    <div class="tw-grid tw-grid-rows-[auto_1fr] tw-content-start tw-h-full">
      <div class="tw-grid">
        <div class="tw-relative">
          <base-icon
            name="back"
            class="tw-w-6 tw-h-6 tw-text-back tw-absolute tw-left-0 tw-top-6"
          />
          <div class="title">Приглашенные друзья</div>
        </div>
      </div>
      <div>
        <tab-head v-model="tab" :options="tabs" class="tw-mb-5" />
        <tab-body v-model="tab">
          <tab-content name="1">
            <div class="tw-grid tw-grid-cols-2 tw-gap-2.5">
              <ref-item phone="+7 917 350 50 50" />
              <ref-item phone="+7 917 350 50 50" />
            </div>
          </tab-content>
          <tab-content name="2">
            <div class="tw-grid tw-grid-cols-2 tw-gap-2.5">
              <ref-item status phone="+7 917 350 50 50" />
              <ref-item phone="+7 917 350 50 50" />
            </div>
          </tab-content>
        </tab-body>
      </div>
    </div>
    <div class="popup" v-if="isPopupRef">
      <PopupRef @close="closePopupRef" />
    </div>
  </q-page>
</template>
<script setup lang="ts">
import PopupRef from 'src/components/PopupRef.vue'
const isPopupRef = ref(false)
const closePopupRef = () => {
  isPopupRef.value = false
}
const openSuccess = ref(false)
const tab = ref('1')
const tabs = [
  {
    id: '1',
    name: 'Новые',
  },
  {
    id: '2',
    name: 'Активные',
  },
]
</script>
<style lang="scss" scoped>
.success {
  @apply tw-bg-base tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full;
  &__content {
    @apply tw-bg-white tw-rounded-xl tw-w-full tw-pb-[34px] tw-grid tw-justify-items-center tw-text-center;
  }
  &__img {
    @apply tw-translate-y-[-78px] tw-mb-[-78px];
  }
}
</style>
