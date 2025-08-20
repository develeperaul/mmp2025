<template>
  <button class="btn" :class="[`btn_${theme}`, size ? `btn_${size}` : '']">
    <slot />
  </button>
</template>
<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    theme?: 'bg' | 'gradient' | 'border'
    size?: 'sm'
  }>(),
  {
    theme: 'bg',
  }
)
</script>
<style lang="scss" scoped>
.btn {
  @apply tw-flex tw-gap-2 tw-items-center tw-justify-center  tw-text-body_l  tw-rounded-2xl tw-w-full tw-cursor-pointer;

  height: 45px;
  border-radius: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-inline: 30px;
  &_bg {
    @apply tw-bg-primary_orange tw-text-white;
  }
  &_sm {
    @apply tw-text-body_s;
    height: 38px;
  }
  &_border {
    @apply tw-bg-white tw-border tw-border-stroke50 tw-text-black;
  }

  &:disabled {
    opacity: 0.6 !important;
  }
}
</style>
