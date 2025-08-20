<template>
  <div class="tw-flex tw-justify-between tw-items-center">
    <div
      class="tw-grid tw-grid-cols-[24px_1fr] tw-items-center tw-content-center tw-gap-3"
    >
      <div
        class="tw-rounded-full tw-grid tw-place-content-center tw-w-6 tw-h-6 tw-bg-primary_orange tw-text-white tw-leading-[100%]"
      >
        -
      </div>
      <div class=" ">
        <div class="tw-text-body_l">Вывод средств</div>
        <div class="tw-text-secondary">{{ item.status.description }}</div>
      </div>
    </div>
    <div class="tw-text-body_l">-{{ item.amount }} ₽</div>
  </div>
</template>

<script setup lang="ts">
  import { ReqListItem } from 'src/models/api/referrals';

  defineProps<{
    item: ReqListItem,
  }>();
</script>
