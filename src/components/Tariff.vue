<template>
  <div class="tariff">
    <div class="tariff__top">
      <div class="tw-grid tw-gap-1">
        <div class="tw-font-bold tw-text-lg tw-leading-[100%] tw-text-white">
          {{ tariff.operator }}
        </div>
        <div class="tw-text-base tw-leading-[100%] tw-text-white80">
          {{ tariff.name }}
        </div>
      </div>
      <div
        class="tw-text-sm tw-leading-[100%] tw-py-[3px] tw-px-2.5 tw-bg-primary_orange tw-text-white tw-rounded-[30px] tw-w-fit"
        v-if="tariff.label?.text"
      >
        {{ tariff.label.text }}
      </div>
    </div>
    <div class="tariff__bottom">
      <div class="tw-flex tw-gap-9 tw-mb-3.5">
        <div class="tw-grid tw-gap-1">
          <div class="tw-text-2xl tw-font-medium">
            {{
              tariff.availableTalkTime == 0
                ? '∞'
                : tariff.availableTalkTime == 1
                  ? '0'
                  : tariff.availableTalkTime
            }}
          </div>
          <div class="tw-text-body_s tw-text-secondary">мин</div>
        </div>
        <div class="tw-grid tw-gap-1">
          <div class="tw-text-2xl tw-font-medium">
            {{
              tariff.availableData == 0
                ? '∞'
                : tariff.availableData == 1
                  ? '0'
                  : tariff.availableData
            }}
          </div>
          <div class="tw-text-body_s tw-text-secondary">Гб</div>
        </div>
        <div class="tw-grid tw-gap-1">
          <div class="tw-text-2xl">
            {{
              tariff.availableTextMessagesCount == 0
                ? '∞'
                : tariff.availableTextMessagesCount == 1
                  ? '0'
                  : tariff.availableTextMessagesCount
            }}
          </div>
          <div class="tw-text-body_s tw-text-secondary">SMS</div>
        </div>
      </div>
      <div class="tw-mb-4">
        <template v-for="(n, index) in tariff.unlimitedDataOptions">
          {{ n.description }}
          <template v-if="index < tariff.unlimitedDataOptions.length - 1">
            ,
          </template>
        </template>
      </div>
      <div class="tw-flex tw-content-end tw-gap-1 tw-mb-5">
        <span class="tw-font-medium tw-text-2xl tw-leading-[100%]">
          {{ (+tariff.cost).toFixed(0) }} ₽
        </span>
        <span class="tw-text-body_s tw-leading-[100%] tw-text-secondary"
          >/мес</span
        >
      </div>
      <div class="tw-grid tw-grid-cols-2 tw-gap-2">
        <base-button @click="addBasket" size="sm"> В корзину </base-button>
        <base-button theme="border" @click="openTariff" size="sm">
          Подробнее
        </base-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { UpdateTariffItemT } from 'src/models/api/main'

import { useRouter } from 'vue-router'

const props = withDefaults(
  defineProps<{
    tariff: UpdateTariffItemT
    link?: boolean
    tab: string
  }>(),
  {
    link: false,
  }
)

const emit = defineEmits<{
  (e: 'opentariff', id: number, tab: string): void
}>()

const router = useRouter()
const openTariff = () => {
  if (props.link) {
    router.push({
      name: 'tariffs',
      query: { id: props.tariff.id, tab: props.tab },
    })
  } else {
    emit('opentariff', props.tariff.id, props.tab)
  }
}

const addBasket = () => {
  basketStore().addTariff(props.tariff)
  router.push({ name: 'basket' })
}
</script>
<style lang="scss" scoped>
.tariff {
  @apply tw-bg-els tw-overflow-hidden tw-w-[310px] tw-h-fit;
  border-radius: 20px;
  &__top {
    background: linear-gradient(
      95.46deg,
      rgba(9, 11, 22, 0.8) 0%,
      #20243a 100%
    );
    padding: 14px 16px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  &__bottom {
    padding: 14px 16px 22px;
  }
}
</style>
