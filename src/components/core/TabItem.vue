<template>
  <button class="tab">
    <slot />
  </button>
</template>
<script lang="ts">
export default defineComponent({
  name: 'tab-item',
})
</script>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.tab {
  @apply tw-py-2.5  tw-text-secondary;
  background: transparent;
  width: 100%;
  padding-inline: 30px;

  transition: all 0.3s ease-in-out;
  border-radius: 13px;
  &.active {
    @apply tw-text-black;
    background: #f4eee8;
  }
}
</style>
