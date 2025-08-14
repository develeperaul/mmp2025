<template>
  <div
    class="tw-bg-white tw-rounded-xl tw-px-5 tw-py-4 tw-grid tw-grid-cols-[53px_1fr] tw-gap-3.5"
  >
    <div>
      <img src="src/assets/icons/megafon-sim.svg" alt="" />
      <!-- <img src="src/assets/icons/mts-sim.svg" alt="" />
                  <img src="src/assets/icons/beeline-sim.svg" alt="" /> -->
    </div>
    <div>
      <div class="">
        <div class="tw-text-body_l tw-font-semibold tw-mb-1.5">
          Заказ от {{ creatEd }}
        </div>
        <div class="tw-text-body_s tw-text-secondary">№ {{ id }}</div>
      </div>
      <div class="tw-text-body_l tw-mt-3.5">Доставка курьером СДЭК</div>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  id: number
  creatEd: string
}>()
</script>
<style lang="scss" scoped></style>
