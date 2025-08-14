<template>
  <q-page class="tw-container tw-grid env-t env-b page-a">
    <div class="tw-grid tw-grid-rows-[auto_1fr] tw-content-start tw-h-full">
      <div class="tw-grid">
        <div class="tw-relative">
          <base-icon
            name="back"
            class="tw-w-6 tw-h-6 tw-text-back tw-absolute tw-left-0 tw-top-6"
          />
          <div class="title">Реферальная программа</div>
        </div>
        <div class="tw-grid tw-gap-5 tw-justify-items-center tw-mb-10">
          <div class="">
            Делитесь ссылкой и получайте 250 ₽ <br />
            за каждого приглашенного друга
          </div>
          <img
            src="src/assets/images/peoples/group.png"
            alt=""
            width="213"
            height="40"
          />
          <base-button class="!tw-w-fit"> Ссылка для приглашения </base-button>
        </div>
        <div
          class="tw-border tw-border-icon_nav tw-border-dashed tw-rounded-xl tw-p-5 tw-flex tw-justify-between tw-mb-[30px]"
        >
          <div>
            <div class="tw-text-lg tw-font-semibold">3 000 ₽</div>
            <div class="tw-text-body_l">Заявка на вывод средств</div>
          </div>
          <base-icon name="loading" class="tw-w-6 tw-h-6" />
        </div>
        <div>
          <div
            class="tw-bg-white tw-p-5 tw-rounded-xl tw-grid tw-justify-items-center tw-mb-5"
          >
            <div class="tw-text-body_l tw-mb-2.5">Реферальный счет</div>
            <div class="tw-font-semibold tw-text-3xl tw-mb-4">0 ₽</div>
            <div class="tw-flex tw-justify-center tw-gap-10">
              <div
                class="tw-text-secondary tw-grid tw-gap-2 tw-justify-items-center"
              >
                <base-icon name="arrow-up45" class="tw-w-[34px] tw-h-[34px]" />
                Вывести
              </div>
              <div
                class="tw-text-secondary tw-grid tw-gap-2 tw-justify-items-center"
              >
                <base-icon name="clock" class="tw-w-[34px] tw-h-[34px]" />
                История
              </div>
            </div>
          </div>
          <div class="tw-grid tw-gap-3">
            <div
              class="tw-flex tw-justify-between tw-items-center tw-bg-white tw-py-[18px] tw-px-5 tw-rounded-xl"
            >
              Приглашенные друзья

              <base-icon name="right" class="tw-w-4 tw-h-4" />
            </div>
            <div
              class="tw-flex tw-justify-between tw-items-center tw-bg-white tw-py-[18px] tw-px-5 tw-rounded-xl"
            >
              Правила программы

              <base-icon name="right" class="tw-w-4 tw-h-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="popup" v-if="isPopup">
      <div class="popup__dialog">
        <div class="tw-text-body_l tw-grid tw-gap-4 tw-justify-items-center">
          <q-spinner-ios color="orange" size="2em" />

          <div class="tw-whitespace-nowrap">{{ popupMessage }}</div>
        </div>
      </div>
    </div> -->
  </q-page>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped></style>
