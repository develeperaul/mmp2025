<template>
  <div class="tw-p-4 tw-rounded-xl tw-bg-white tw-grid tw-gap-6">
    <base-icon v-if="status" name="check" class="tw-w-5 tw-h-5" />
    <base-icon v-else name="loading" class="tw-w-5 tw-h-5" />
    <div class="tw-text-body_s tw-font-medium">+7 917 350 50 50</div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  status?: boolean
  phone: string
}>()
</script>
<style lang="scss" scoped></style>
