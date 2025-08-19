<template>
  <q-page class="tw-container tw-grid env-t env-b page-a">
    <div class="tw-grid tw-grid-rows-[auto_1fr] tw-content-start tw-h-full">
      <div class="tw-grid">
        <div class="tw-relative">
          <base-icon
            name="back"
            class="tw-w-6 tw-h-6 tw-text-back tw-absolute tw-left-0 tw-top-6"
            @click="$router.back"
          />
          <div class="title">История начислений</div>
        </div>
      </div>
      <div>
        <!-- <tab-head v-model="tab" :options="tabs" class="tw-mb-5" /> -->
        <tab-body v-model="tab">
          <!-- <tab-content name="1">
            <div class="tw-grid tw-gap-5">
              <div class="tw-flex tw-justify-between tw-items-center">
                <div
                  class="tw-grid tw-grid-cols-[24px_1fr] tw-items-center tw-content-center tw-gap-3"
                >
                  <div
                    class="tw-rounded-full tw-grid tw-place-content-center tw-w-6 tw-h-6 tw-bg-primary_orange tw-text-white tw-leading-[100%]"
                  >
                    +
                  </div>
                  <div class=" ">
                    <div class="tw-text-body_l">Выплата</div>
                    <div class="tw-text-secondary">20.05.2025</div>
                  </div>
                </div>
                <div class="tw-text-body_l">+250 ₽</div>
              </div>
              <div class="tw-flex tw-justify-between tw-items-center">
                <div
                  class="tw-grid tw-grid-cols-[24px_1fr] tw-items-center tw-content-center tw-gap-3"
                >
                  <div
                    class="tw-rounded-full tw-grid tw-place-content-center tw-w-6 tw-h-6 tw-bg-primary_orange tw-text-white tw-leading-[100%]"
                  >
                    +
                  </div>
                  <div class=" ">
                    <div class="tw-text-body_l">Выплата</div>
                    <div class="tw-text-secondary">20.05.2025</div>
                  </div>
                </div>
                <div class="tw-text-body_l">+250 ₽</div>
              </div>
            </div>
          </tab-content> -->
          <tab-content name="2">
            <div class="tw-text-center tw-py-10" v-if="items && items.data.length === 0">
              Пока нет операций
            </div>
            <div class="tw-grid tw-gap-5" v-else-if="items">
              <ListItem
                v-for="item in items.data"
                :key="item.id"
                :item="item"
              />
            </div>
          </tab-content>
        </tab-body>
      </div>
    </div>
    <div class="popup" v-if="isPopupRef">
      <PopupRef @close="closePopupRef" />
    </div>
  </q-page>
</template>
<script setup lang="ts">
  import { reqList } from 'src/api/referrals'
  import PopupRef from 'src/components/PopupRef.vue'
  import useRequest from 'src/composables/useRequest'
  import ListItem from 'src/components/Ref/Req/ListItem.vue';

  const isPopupRef = ref(false)
  const closePopupRef = () => {
    isPopupRef.value = false
  }
  const openSuccess = ref(false)
  const tab = ref('2')
  const tabs = [
    {
      id: '1',
      name: 'Начисление',
    },
    {
      id: '2',
      name: 'Списание',
    },
  ];

  const { data: items } = useRequest(reqList, {
    errorText: 'Не удалось загрузить историю!',
  });
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
