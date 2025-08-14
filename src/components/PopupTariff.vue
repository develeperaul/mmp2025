<template>
  <div class="popup__wrapper">
    <base-icon
      @click="emit('close')"
      name="close"
      class="tw-w-4 tw-h-4 tw-text-back tw-mr-0 tw-ml-auto"
    />
    <div class="tw-text-center tw-text-xl tw-font-bold tw-mt-3">
      {{ card_tariff.name }}
      {{ card_tariff.tariff.name }}
    </div>
    <div>
      <div>
        <div class="tw-mt-4 tw-text-lg tw-font-semibold">Преимущества</div>
        <div class="tw-flex tw-gap-2.5 tw-overflow-auto tw-mt-4 -tw-mx-4">
          <div
            class="tw-p-4 tw-rounded-xl tw-border tw-border-black tw-w-[270px] tw-shrink-0"
            v-for="(value, index) in card_tariff.tariff.advantages"
            :class="{
              'tw-ml-4': index === 0,
              'tw-mr-4':
                index === card_tariff.tariff.advantages.length - 1 &&
                card_tariff.tariff.advantages.length !== 1,
            }"
          >
            <div class="tw-text-body_l tw-font-medium">
              {{ value.title }}
            </div>
            <div class="tw-text-body_s tw-mt-1">
              {{ value.body }}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="tw-mt-4 tw-text-lg tw-font-semibold">О тарифе</div>
        <div>
          <div class="tw-bg-white">
            еуые
            <base-icon />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { TariffItemAboutT } from 'src/models/api/main'

const props = defineProps<{
  card_tariff: TariffItemAboutT
}>()
const emit = defineEmits<{
  (e: 'close'): void
}>()
</script>
<style lang="scss" scoped></style>
