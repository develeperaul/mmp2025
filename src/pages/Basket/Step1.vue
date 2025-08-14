<template>
  <q-page class="tw-container tw-grid env-t env-b page-a">
    <div class="tw-grid tw-content-between tw-h-full tw-pb-10">
      <div>
        <div class="title">Корзина</div>
        <div class="tw-flex tw-justify-end tw-mb-4">
          <span class="tw-text-secondary tw-text-sm"> Очистить все </span>
        </div>
        <div class="tw-overflow-hidden">
          <div
            class="tw-grid tw-gap-4 tw-overflow-auto tw-max-h-[65vh] tw-pb-10"
          >
            <div v-for="(orderRedion, index) in basket">
              <div
                v-for="t in orderRedion"
                class="tw-bg-white tw-rounded-xl tw-px-5 tw-py-4 tw-grid tw-grid-cols-[53px_1fr] tw-gap-3.5"
              >
                <div>
                  <img src="src/assets/icons/megafon-sim.svg" alt="" />
                  <!-- <img src="src/assets/icons/mts-sim.svg" alt="" />
                  <img src="src/assets/icons/beeline-sim.svg" alt="" /> -->
                </div>
                <div class="tw-grid gap-[18px]">
                  <div class="tw-grid">
                    <div class="tw-grid tw-grid-cols-[1fr_20px]">
                      <span class="tw-font-medium tw-text-lg">
                        {{ t.operator }}
                      </span>
                      <base-icon
                        @click="remove(index, t.id)"
                        name="close"
                        class="tw-w-5 tw-h-5 tw-text-back"
                      />
                    </div>
                    <div>
                      <span> {{ t.name }} </span>
                      <span> ({{ t.count }}) </span>
                    </div>
                  </div>
                  <div class="tw-grid tw-grid-cols-2">
                    <div class="tw-grid tw-gap-1">
                      <span class="tw-text-secondary tw-text-sm">
                        Абон плата
                      </span>
                      <span class="tw-font-medium"
                        >{{ (+t.cost).toFixed(0) }} ₽/мес</span
                      >
                    </div>
                    <div class="tw-grid tw-gap-1">
                      <div class="tw-flex tw-gap-1">
                        <span class="tw-text-secondary tw-text-sm">
                          Оформление
                        </span>
                        <div>
                          <img src="src/assets/icons/warning.svg" alt="" />
                        </div>
                      </div>
                      <span class="tw-font-medium">550 ₽</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="tw-flex tw-justify-center">
        <base-button class="!tw-w-fit" @click="createOrder">
          Перейти к оформлению
        </base-button>
      </div>
    </div>
  </q-page>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'

const { basket } = storeToRefs(basketStore())
const order = computed(() => {
  const arr = []
  if (basket.value) {
    for (const key in basket.value) {
      if (Object.prototype.hasOwnProperty.call(basket.value, key)) {
        const element = basket.value[key]
      }
    }
  }
})
const router = useRouter()
const createOrder = async () => {
  try {
    await basketStore().create()
    router.push({ name: 'delivery' })
  } catch (e) {
    throw e
  }
}
const remove = (regionId: string | number, id: number) => {
  basketStore().remove(regionId, id)
}
</script>
<style lang="scss" scoped></style>
