<template>
  <q-layout view="lhh lPr lFf" class="bg">
    <q-page-container>
      <router-view class="env-t env-b" />
      <q-footer class="tw-bg-els tw-rounded-t-xl">
        <div class="tw-container tw-py-4 tw-flex tw-justify-between tw-px-8">
          <router-link
            :to="{ name: 'home' }"
            class="tw-grid tw-justify-items-center tw-gap-0.5"
            v-slot="{ isExactActive }"
          >
            <BaseIcon
              name="home"
              class="tw-w-6 tw-h-6"
              :class="[isExactActive ? 'tw-text-black' : '  tw-text-secondary']"
            />
            <span
              :class="[isExactActive ? 'tw-text-black' : '  tw-text-secondary']"
              class="tw-text-xs"
            >
              Главная
            </span>
          </router-link>
          <router-link
            :to="{ name: 'tariffs' }"
            class="tw-grid tw-justify-items-center tw-gap-0.5"
            v-slot="{ isExactActive }"
          >
            <BaseIcon
              name="products"
              class="tw-w-6 tw-h-6"
              :class="[isExactActive ? 'tw-text-black' : '  tw-text-secondary']"
            />
            <span
              :class="[isExactActive ? 'tw-text-black' : '  tw-text-secondary']"
              class="tw-text-xs"
            >
              Тарифы
            </span>
          </router-link>
          <router-link
            :to="{ name: 'basket' }"
            class="tw-grid tw-justify-items-center tw-gap-0.5"
            v-slot="{ isExactActive }"
          >
            <BaseIcon
              name="basket"
              class="tw-w-6 tw-h-6"
              :class="[isExactActive ? 'tw-text-black' : '  tw-text-secondary']"
            />
            <span
              :class="[isExactActive ? 'tw-text-black' : '  tw-text-secondary']"
              class="tw-text-xs"
            >
              Корзина
            </span>
          </router-link>
          <router-link
            :to="{ name: 'profile' }"
            class="tw-grid tw-justify-items-center tw-gap-0.5"
            v-slot="{ isExactActive }"
          >
            <BaseIcon
              name="profile"
              class="tw-w-6 tw-h-6"
              :class="[isExactActive ? 'tw-text-black' : '  tw-text-secondary']"
            />
            <span
              :class="[isExactActive ? 'tw-text-black' : '  tw-text-secondary']"
              class="tw-text-xs"
            >
              Профиль
            </span>
          </router-link>
        </div>
      </q-footer>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts"></script>
<style lang="scss" scoped>
.bg {
  @apply tw-bg-base;
}
</style>
