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
      <div class="tw-text-body_l tw-text-center">
        Вы точно хотите удалить аккаунт?
      </div>
      <div
        class="tw-grid tw-grid-cols-[135px_135px] tw-justify-center tw-gap-2 tw-mt-5"
      >
        <base-button theme="border" size="sm" @click="logout"> Да </base-button>
        <base-button size="sm" @click="emit('close')"> Нет </base-button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'

const emit = defineEmits<{
  (e: 'close'): void
}>()
const logout = () => {
  authStore().logout()
}
const router = useRouter()
</script>
<style lang="scss" scoped></style>
