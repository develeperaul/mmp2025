<template>
  <div class="success" v-if="showed">
    <div class="tw-container tw-h-full tw-grid tw-content-center">
      <div class="success__content">
        <img
          class="success__img"
          src="src/assets/images/check2.png"
          alt=""
          width="153"
          height="153"
        />
        <div class="tw-text-lg tw-leading-[120%] tw-font-semibold tw-mb-3.5">
          Заявка на вывод денежных <br />
          средств оформлена
        </div>
        <div class="tw-text-secondary tw-text-body_s tw-mb-8">
          Зачисление средств занимает <br />
          до 2-х рабочих дней
        </div>
        <base-button class="!tw-w-[250px]" @click="$router.replace('/')">
          На главную
        </base-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const showed = defineModel<boolean>({ default: false });
</script>

<style lang="scss" scoped>
  .success {
    z-index: 1000;
    @apply tw-bg-base tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full;

    &__content {
      @apply tw-bg-white tw-rounded-xl tw-w-full tw-pb-[34px] tw-grid tw-justify-items-center tw-text-center;
    }
    &__img {
      @apply tw-translate-y-[-78px] tw-mb-[-78px];
    }
  }
</style>
