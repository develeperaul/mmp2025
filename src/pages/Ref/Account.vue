<template>
  <q-page class="tw-container tw-grid env-t env-b page-a">
    <div class="tw-grid tw-grid-rows-[auto_1fr] tw-content-start tw-h-full">
      <div class="tw-grid">
        <div class="tw-relative">
          <base-icon
            name="back"
            class="tw-w-6 tw-h-6 tw-text-back tw-absolute tw-left-0 tw-top-6"
          />
          <div class="title">Вывод средств</div>
        </div>
      </div>
      <div
        class="tw-bg-black tw-px-5 tw-py-[18px] tw-rounded-xl tw-text-white tw-grid tw-gap-2.5 tw-mb-[30px]"
      >
        <div>Реферальный счет</div>
        <div class="tw-font-semibold tw-text-2xl">3 250 ₽</div>
      </div>
      <Form @submit="submit" class="tw-grid tw-gap-[60px]">
        <div class="tw-grid tw-gap-5">
          <div>
            <div
              class="tw-text-black tw-text-body_l tw-font-semibold tw-mb-2.5"
            >
              Счет получателя
            </div>
            <base-input
              name="chet"
              maska="####-####-####-####-####"
              placeholder="Номер счета (20-ти значный)"
              unMask
              rules="require"
            />
          </div>
          <div>
            <div
              class="tw-text-black tw-text-body_l tw-font-semibold tw-mb-2.5"
            >
              БИК банка-получателя
            </div>
            <base-input
              name="bik"
              maska="#########"
              placeholder="Номер БИК (9-ти значный)"
              unMask
              rules="require"
            />
          </div>
          <div>
            <div
              class="tw-text-black tw-text-body_l tw-font-semibold tw-mb-2.5"
            >
              ИНН получателя
            </div>
            <base-input
              name="chet"
              maska="##########"
              placeholder="ИНН (10-ти значный)"
              unMask
              rules="require"
            />
          </div>
          <div>
            <div
              class="tw-text-black tw-text-body_l tw-font-semibold tw-mb-2.5"
            >
              Сумма вывода
            </div>
            <base-input
              name="chet"
              type="number"
              placeholder="Сумма"
              rules="require"
            />
            <div class="tw-text-secondary tw-text-xs tw-mt-2.5">
              Минимальная сумма вывода — 3000 ₽
            </div>
          </div>
        </div>
        <base-button type="submit" class="!tw-w-[200px] tw-justify-self-center">
          Вывести
        </base-button>
      </Form>
    </div>
    <div class="success" v-if="openSuccess">
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
          <base-button class="!tw-w-[250px]" @click="openSuccess = false"
            >На главную
          </base-button>
        </div>
      </div>
    </div>
  </q-page>
</template>
<script setup lang="ts">
const openSuccess = ref(false)
</script>
<style lang="scss" scoped>
.success {
  @apply tw-bg-base tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full;
  &__content {
    @apply tw-bg-white tw-rounded-xl tw-w-full tw-pb-[34px] tw-grid tw-justify-items-center tw-text-center;
  }
  &__img {
    @apply tw-translate-y-[-78px] tw-mb-[-78px];
  }
}
</style>
