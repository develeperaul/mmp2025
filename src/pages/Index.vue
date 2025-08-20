<template>
  <q-page class="tw-container tw-grid env-t env-b page-a">
    <div class="tw-overflow-hidden tw-pt-4 tw-mb-11">
      <swiper
        v-if="loads.actions.load"
        :modules="swiperOptions.modules"
        :loop="true"
        effect="fade"
        :fadeEffect="{ crossFade: true }"
        :centeredSlides="true"
        :simulateTouch="true"
        :pagination="swiperOptions.pagination"
      >
        <swiper-slide v-for="n in 3">
          <q-skeleton class="tw-mb-5" width="100%" height="30px"></q-skeleton>
          <q-skeleton
            class="tw-rounded-xl"
            width="100%"
            height="110px"
          ></q-skeleton>
        </swiper-slide>
        <div class="swiper-pagination group-slider__pagination"></div>
      </swiper>
      <swiper
        v-else
        :modules="swiperOptions.modules"
        :loop="true"
        effect="fade"
        :fadeEffect="{ crossFade: true }"
        :centeredSlides="true"
        :simulateTouch="true"
        :pagination="swiperOptions.pagination"
      >
        <swiper-slide
          v-for="action in actionList"
          :key="action.id"
          @click="router.push({ name: 'action', params: { id: action.id } })"
        >
          <div class="tw-grid tw-justify-center tw-gap-5">
            <div
              class="tw-text-h1 tw-font-semibold tw-text-center tw-text-white"
            >
              {{ action.title }}
            </div>
            <div class="banner-info">
              <div class="tw-text-xl tw-leading-[100%]">
                {{ action.subtitle }}
              </div>

              <img
                v-if="action.caption_image_url"
                :src="action.caption_image_url"
                alt=""
                class="tw-mx-auto"
              />
              <img
                v-else
                src="src/assets/icons/logo.png"
                alt=""
                class="tw-mx-auto"
              />
            </div>
          </div>
        </swiper-slide>
        <div class="swiper-pagination group-slider__pagination"></div>
      </swiper>
    </div>

    <div class="tw-overflow-hidden tw-mb-7 -tw-mx-4">
      <tab-head v-model="tab" :options="tabs" class="tw-mb-5 tw-px-4" />
      <tab-body v-model="tab">
        <tab-content name="1">
          <div
            v-if="!loads.tariffs1.message"
            class="tw-flex tw-flex-nowrap tw-overflow-scroll"
          >
            <q-skeleton
              v-if="loads.tariffs1.load"
              v-for="n in 10"
              class="tw-shrink-0 tw-ml-4"
              width="310px"
              height="310px"
            ></q-skeleton>

            <Tariff
              v-else
              v-for="tariff in smTarrifs"
              :tariff="tariff"
              tab="1"
              link
              class="tw-shrink-0 tw-ml-4"
            />
          </div>
          <div
            v-else
            class="tw-flex tw-justify-center tw-mt-5"
            v-html="loads.tariffs1.message"
          ></div>
        </tab-content>

        <tab-content name="2">
          <div
            v-if="!loads.tariffs2.message"
            class="tw-flex tw-flex-nowrap tw-overflow-scroll"
          >
            <q-skeleton
              v-if="loads.tariffs2.load"
              v-for="n in 10"
              class="tw-shrink-0 tw-ml-4"
              width="310px"
              height="310px"
            ></q-skeleton>
            <Tariff
              v-else
              v-for="tariff in intTarrifs"
              :tariff="tariff"
              tab="2"
              link
              class="tw-shrink-0 tw-ml-4"
            />
          </div>
          <div
            v-else
            class="tw-flex tw-justify-center tw-mt-5"
            v-html="loads.tariffs2.message"
          ></div>
        </tab-content>
        <tab-content name="3">
          <div
            v-if="!loads.tariffs3.message"
            class="tw-flex tw-flex-nowrap tw-overflow-scroll"
          >
            <q-skeleton
              v-if="loads.tariffs3.load"
              v-for="n in 10"
              class="tw-shrink-0 tw-ml-4"
              width="310px"
              height="310px"
            ></q-skeleton>
            <Tariff
              v-else
              v-for="tariff in actTarrifs"
              :tariff="tariff"
              tab="3"
              link
              class="tw-shrink-0 tw-ml-4"
            />
          </div>
          <div
            v-else
            class="tw-flex tw-justify-center tw-mt-5"
            v-html="loads.tariffs3.message"
          ></div>
        </tab-content>
      </tab-body>
    </div>

    <div
      class="black_gradient tw-rounded-xl tw-px-5 tw-flex tw-items-center tw-justify-between tw-h-fit"
    >
      <div class="tw-text-h3 tw-text-white tw-font-semibold">
        Приглашайте друзей <br />
        и зарабатывайте
      </div>
      <svg
        width="136"
        height="106"
        viewBox="0 0 136 106"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M81.5441 49.3906L73.1094 52.2563L83.226 74.3378L91.136 70.7451L81.5441 49.3906Z"
          fill="white"
        />
        <path
          d="M65.6792 36.9922L57.0869 40.8075L64.9335 71.2855L73.0002 66.7432L65.6792 36.9922Z"
          fill="white"
        />
        <path
          d="M53.5173 44.4983C55.1221 39.3096 60.3165 36.1031 65.679 36.991L9.19354 226.233C8.49946 228.478 6.25307 229.864 3.93398 229.48C1.124 229.016 -0.629388 226.179 0.211478 223.462L53.5173 44.4983Z"
          fill="#F85921"
        />
        <path
          d="M81.5438 49.3894C76.1815 48.5015 70.9869 51.7079 69.3821 56.8966L64.9229 71.3143C70.2853 72.2022 75.4797 68.9957 77.0845 63.807L81.5438 49.3894Z"
          fill="#F85921"
        />
        <path
          d="M126.807 -74.6896C127.501 -76.9335 129.747 -78.3204 132.066 -77.9363C134.877 -77.471 136.629 -74.6355 135.789 -71.9164L94.9844 68.1477C93.6116 72.5861 89.1679 75.3291 84.5807 74.5694L83.2275 74.3455L126.807 -74.6896Z"
          fill="#F85921"
        />
      </svg>
    </div>
  </q-page>
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, EffectFade } from 'swiper/modules'
import { TariffT, UpdateTariffItemT } from 'src/models/api/main'
import { useRouter } from 'vue-router'
const router = useRouter()
const { actionList } = storeToRefs(mainStore())
const swiperOptions = ref({
  modules: [Pagination, EffectFade],

  pagination: {
    el: '.group-slider__pagination',
    type: 'bullets',
    clickable: false,
    renderBullet: function (index, className) {
      return (
        '<div class="' + className + ' test">' + '<span>' + '</span>' + '</div>'
      )
    },
  },
})
const tab = ref('1')
const tabs = [
  {
    id: '1',
    name: 'Связь',
  },
  {
    id: '2',
    name: 'Интернет',
  },
  {
    id: '3',
    name: 'Акции',
  },
]
const smTarrifs = ref<UpdateTariffItemT[]>([])
const intTarrifs = ref<UpdateTariffItemT[]>([])
const actTarrifs = ref<UpdateTariffItemT[]>([])

const loads = ref({
  actions: {
    load: false,
    message: '',
  },
  tariffs1: {
    load: false,
    message: '',
  },
  tariffs2: {
    load: false,
    message: '',
  },
  tariffs3: {
    load: false,
    message: '',
  },
})

onMounted(async () => {
  loads.value.tariffs1.load = true
  loads.value.tariffs2.load = true
  loads.value.tariffs3.load = true
  Promise.allSettled([
    getActions(),
    mainStore()
      .getTariffs({
        'applyingDeviceTypes[]': '1',
      })
      .then((r) => (smTarrifs.value = r))
      .catch((err) => (loads.value.tariffs1.message = 'Список пуст'))
      .finally(() => (loads.value.tariffs1.load = false)),
    mainStore()
      .getTariffs({
        'applyingDeviceTypes[]': '1',
      })
      .then((r) => (intTarrifs.value = r))
      .catch((err) => (loads.value.tariffs2.message = 'Список пуст'))
      .finally(() => (loads.value.tariffs2.load = false)),
    mainStore()
      .getTariffs({
        isPromoted: 'true',
      })
      .then((r) => (actTarrifs.value = r))
      .catch((err) => (loads.value.tariffs3.message = 'Список пуст'))
      .finally(() => (loads.value.tariffs3.load = false)),
  ])
  // await mainStore().getActions()
  // smTarrifs.value =
  // intTarrifs.value =  mainStore().getTariffs({
  //   'applyingDeviceTypes[]': '2',
  // })
  // actTarrifs.value =  mainStore().getTariffs({
  //   isPromoted: 'true',
  // })
})

const getActions = () => {
  if (actionList.value.length === 0) {
    loads.value.actions.load = true
    mainStore()
      .getActions()
      .catch((err) => (loads.value.actions.message = 'Список пуст'))
      .finally(() => (loads.value.actions.load = false))
  }
}
</script>
<style lang="scss" scoped>
.page-a {
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 280px;
    background: linear-gradient(180deg, #ff7d4f 5.22%, #f85921 112.95%);
    border-radius: 60px;
    transform: translateY(-60px);
    z-index: 0;
  }
}
</style>
