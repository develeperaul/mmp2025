<template>
  <q-page
    class="tw-container tw-grid tw-justify-items-center env-t env-b page-a"
  >
    <div class="tw-grid tw-justify-items-center tw-content-start">
      <img src="src/assets/icons/logo.svg" width="185" height="70" alt="" />
      <div class="tw-h-[400px]"></div>
      <!-- <img
        src="src/assets/images/line3.png"
        width="403.5"
        height="433"
        alt=""
      /> -->
    </div>
    <div class="tw-grid tw-justify-items-center tw-content-start">
      <div class="tw-text-h1 tw-font-semibold tw-text-center tw-mb-[30px]">
        Управляйте тарифами операторов по-новому
      </div>
      <base-button
        @click="router.push({ name: 'home' })"
        class="tw-max-w-[250px]"
      >
        Начнем
      </base-button>
    </div>
  </q-page>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>
<style lang="scss" scoped>
.page-a {
  background-image: url('src/assets/images/line3.png');
  background-size: 435.74px 450.02px;
  background-position: -18px 50px;
  background-repeat: no-repeat;
}
</style>
