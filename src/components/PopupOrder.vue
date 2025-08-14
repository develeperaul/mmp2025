<template>
  <div class="popup__wrapper !tw-bg-white">
    <div class="">
      <base-icon
        @click="emit('close')"
        name="close"
        class="tw-w-6 tw-h-6 tw-text-back tw-mr-0 tw-ml-auto"
      />
      <div class="tw-text-center tw-text-xl tw-font-semibold tw-mb-3">
        Заказ от 16 мая
      </div>
      <div class="tw-flex tw-gap-2.5 tw-justify-center">
        <div class="tw-text-body_l tw-text-secondary">№ М-000000001</div>
        <base-icon name="copy" class="tw-w-5 tw-h-5" />
      </div>
      <div class="tw-grid tw-grid-cols-[46px_1fr] tw-gap-2.5 tw-mt-6">
        <div>
          <img src="src/assets/icons/megafon-sim.svg" alt="" />
          <!-- <img src="src/assets/icons/mts-sim.svg" alt="" />
                  <img src="src/assets/icons/beeline-sim.svg" alt="" /> -->
        </div>
        <div>
          <div>
            <div class="tw-font-semibold tw-mb-1.5">Мегафон</div>
            <div>Максимум Мегафон 3.0</div>
          </div>
          <div class="tw-grid tw-grid-cols-3">
            <div class="tw-grid tw-gap-1.5">
              <div class="tw-text-secondary tw-text-sm">Абон плата</div>
              <div>550 ₽/мес</div>
            </div>
            <div class="tw-grid tw-gap-1.5">
              <div class="tw-text-secondary tw-text-sm">Оформление</div>
              <div>500 ₽</div>
            </div>
            <div class="tw-grid tw-gap-1.5">
              <div class="tw-text-secondary tw-text-sm">Доставка</div>
              <div>700 ₽</div>
            </div>
          </div>
          <div class="tw-mt-5">
            <div class="tw-grid tw-gap-1.5">
              <div class="tw-text-secondary tw-text-sm">Статус</div>
              <div class="tw-text-body_l tw-font-medium">Курьером СДЭК</div>
              <div class="tw-text-body_l">17-19 мая</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const emit = defineEmits<{
  (e: 'close'): void
}>()
</script>
<style lang="scss" scoped></style>
