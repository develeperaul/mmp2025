<template>
  <div class="popup__wrapper !tw-bg-white">
    <div class="">
      <base-icon
        @click="emit('close')"
        name="close"
        class="tw-w-6 tw-h-6 tw-text-back tw-mr-0 tw-ml-auto"
      />
    </div>
    <div>
      <base-icon name="loading" class="tw-w-6 tw-h-6 tw-mb-5" />
      <base-icon name="check" class="tw-w-6 tw-h-6 tw-mb-5" />
      <div class="tw-text-lg tw-font-semibold">+7 917 350 50 50</div>
      <div class="tw-text-secondary">Сим-карта не использована</div>
    </div>
  </div>
</template>
<script setup lang="ts">
const emit = defineEmits<{
  (e: 'close'): void
}>()
</script>
<style lang="scss" scoped></style>
