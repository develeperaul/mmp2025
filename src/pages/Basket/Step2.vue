<template>
  <q-page class="tw-container tw-grid env-t env-b page-a">
    <div class="tw-grid tw-grid-rows-[auto_1fr] tw-content-start tw-h-full">
      <div class="tw-grid">
        <div class="tw-relative">
          <base-icon
            name="back"
            class="tw-w-6 tw-h-6 tw-text-back tw-absolute tw-left-0 tw-top-6"
            @click="router.go(-1)"
          />
          <div class="title">Оформление</div>
        </div>

        <div class="tw-font-semibold tw-text-lg tw-mb-4">Способ получения</div>
        <div
          class="tw-inline-flex tw-gap-2.5 tw-overflow-auto tw-mb-6 no-scrollbar"
        >
          <div
            class="tw-shrink-0 tw-p-3.5 tw-rounded-lg tw-bg-white tw-border tw-border-white tw-max-w-[120px] tw-grid tw-grid-rows-[35px_1fr]"
            :class="tab === 1 ? ' !tw-border-primary_orange' : ''"
            @click="choice(1)"
          >
            <img src="~assets/icons/logo.svg" class="tw-self-center" />
            <div class="tw-text-sm">Самовывоз</div>
          </div>
          <div
            class="tw-shrink-0 tw-p-3.5 tw-rounded-lg tw-bg-white tw-border tw-border-white tw-max-w-[120px] tw-grid tw-grid-rows-[35px_1fr]"
            :class="tab === 5 ? ' !tw-border-primary_orange' : ''"
            @click="choice(5)"
          >
            <img src="~assets/icons/sdek.svg" class="tw-self-center" />
            <div class="tw-text-sm">ПВЗ</div>
          </div>
          <div
            class="tw-shrink-0 tw-p-3.5 tw-rounded-lg tw-bg-white tw-border tw-border-white tw-max-w-[120px] tw-grid tw-grid-rows-[35px_1fr]"
            :class="tab === 6 ? ' !tw-border-primary_orange' : ''"
            @click="choice(6)"
          >
            <img src="~assets/icons/sdek.svg" class="tw-self-center" />
            <div class="tw-text-sm">Курьер</div>
          </div>
          <div
            class="tw-shrink-0 tw-p-3.5 tw-rounded-lg tw-bg-white tw-border tw-border-white tw-max-w-[120px] tw-grid tw-grid-rows-[35px_1fr]"
            :class="tab === 7 ? ' !tw-border-primary_orange' : ''"
            @click="choice(7)"
          >
            <img src="~assets/icons/pochta.svg" class="tw-self-center" />
            <div class="tw-text-sm tw-whitespace-nowrap tw-font-medium">
              Почта России
            </div>
          </div>

          <div
            v-if="isMeg != 1"
            class="tw-shrink-0 tw-p-3.5 tw-rounded-lg tw-bg-white tw-border tw-border-white tw-max-w-[120px] tw-grid tw-grid-rows-[35px_1fr]"
            :class="tab === 4 ? ' !tw-border-primary_orange' : ''"
            @click="choice(4)"
          >
            <img src="~assets/icons/megafon.svg" class="tw-self-center" />
            <div class="tw-text-sm tw-whitespace-nowrap">В салоне</div>
          </div>
          <!-- <div
            class="tw-shrink-0 tw-p-3.5 tw-rounded-lg tw-bg-white tw-border tw-border-white tw-max-w-[120px] tw-grid tw-grid-rows-[35px_1fr]"
            :class="tab === 6 ? ' !tw-border-primary_orange' : ''"
            @click="choice(6)"
          >
            <img src="~assets/icons/esim.svg" class="tw-self-center" />
            <div class="tw-text-sm tw-whitespace-nowrap">eSIM</div>
          </div> -->
        </div>
      </div>

      <div class="tw-grid tw-content-between" v-if="tab === 1">
        <div class="tw-bg-white tw-p-5 tw-rounded-xl">
          <div class="tw-text-lg tw-font-medium tw-mb-3.5">
            Адрес самовывоза
          </div>
          <div class="tw-mb-2">Уфа, бульвар Давлеткильдеева, 5</div>
          <div class="tw-text-secondary">Пн-Вс 10:00 - 20:00</div>
        </div>
        <div>
          <div
            class="tw-px-5 tw-py-6 tw-flex tw-justify-between tw-items-center tw-text-lg tw-font-medium tw-bg-white tw-rounded-xl"
          >
            <div>Итого к оплате</div>
            <div>{{ order?.cost.total }} ₽</div>
          </div>

          <base-button
            class="tw-mt-10"
            @click="getPayment"
            :load="loadPayment"
            :disabled="loadPayment"
            >Оплатить</base-button
          >
        </div>
      </div>
      <div class="tw-grid tw-content-between" v-if="tab === 5">
        <div>
          <div
            class="tw-font-medium tw-mb-4"
            v-if="!isOpenChoiceCity && cityCDEK"
          >
            <span> Пункт выдачи </span>
            <span class="tw-text-link" @click="openChoiceCity">
              г. {{ cityCDEK.name }}
            </span>
          </div>
          <div class="tw-grid tw-content-start tw-gap-2">
            <template v-if="isOpenChoiceCity && !cityCDEK">
              <base-select
                :model-value="regionCDEK"
                @update:model-value="getCities"
                :options="regionListCDEK"
                label="Выберите регион"
                :load="loadRegions"
              />
              <base-select
                v-if="regionCDEK"
                :model-value="cityCDEK"
                :options="citiyListCDEK"
                label="Выберите город"
                @update:model-value="getPVZ"
                :load="loadCities"
              />
            </template>
            <base-select
              v-if="cityCDEK"
              :model-value="PVZItemCDEK"
              :options="PVZListCDEK"
              label="Выберите ПВЗ"
              @update:model-value="setPVZItem"
              :load="loadPVZ"
            />
          </div>
        </div>
        <div v-if="PVZItemCDEK && !isPopup">
          <div class="tw-px-5 tw-py-6 tw-bg-white tw-rounded-xl">
            <div class="">
              <div class="tw-mb-2.5 tw-flex tw-items-center tw-justify-between">
                <div>Доставка</div>
                <div>{{ dataPrice.receiving }} ₽</div>
              </div>

              <div class="tw-flex tw-items-center tw-justify-between">
                <div>Оформление</div>
                <div>{{ dataPrice.items }} ₽</div>
              </div>
            </div>
            <div class="tw-border-b tw-border-stroke tw-my-3.5"></div>
            <div
              class="tw-flex tw-justify-between tw-items-center tw-text-lg tw-font-medium"
            >
              <div>Итого к оплате</div>
              <div>{{ dataPrice.total }} ₽</div>
            </div>
          </div>

          <base-button
            class="tw-mt-10 !tw-w-[250px] tw-mx-auto"
            @click="getPayment"
            :load="loadPayment"
            :disabled="loadPayment"
            >Оплатить</base-button
          >
        </div>
      </div>
      <div
        class="tw-grid tw-content-start tw-grid-rows-[auto_1fr]"
        v-if="tab === 6"
      >
        <div>
          <div
            class="tw-font-medium tw-mb-4"
            v-if="!isOpenChoiceCityCourier && cityCDEKCourier"
          >
            <span> Пункт выдачи </span>
            <span class="tw-text-link" @click="openChoiceCityCourier">
              г. {{ cityCDEKCourier.name }}
            </span>
          </div>
          <div class="tw-grid tw-content-start tw-gap-2">
            <template v-if="isOpenChoiceCityCourier && !cityCDEKCourier">
              <base-select
                :model-value="regionCDEKCourier"
                @update:model-value="getCitiesCurier"
                :options="regionListCDEKCourier"
                label="Выберите регион"
                :load="loadRegions"
              />
              <base-select
                v-if="regionCDEKCourier"
                :model-value="cityCDEKCourier"
                :options="citiyListCDEKCourier"
                label="Выберите город"
                @update:model-value="setCityCurier"
                :load="loadCities"
              />
            </template>
          </div>
        </div>
        <div
          v-if="!isOpenChoiceCityCourier && cityCDEKCourier"
          class="tw-grid tw-content-between tw-h-full"
        >
          <div class="tw-grid tw-grid-cols-2 tw-gap-2.5">
            <base-input
              v-model="addressCDEK.postal"
              maska="######"
              placeholder="Введите индекс"
              class="tw-col-span-2"
            />
            <base-input
              v-model="addressCDEK.address"
              placeholder="Введите улицу"
              class="tw-col-span-2"
            />
            <base-input
              v-model="addressCDEK.apartment"
              placeholder="Квартира"
            />
            <base-input v-model="addressCDEK.floor" placeholder="Этаж" />
            <base-input v-model="addressCDEK.entrance" placeholder="Подъезд" />
            <base-input v-model="addressCDEK.intercom" placeholder="Домофон" />
          </div>
          <base-button
            v-if="!receivingCourier"
            class="tw-mt-5 !tw-w-[250px] tw-mx-auto"
            @click="getReceiving"
          >
            Продолжить</base-button
          >
        </div>
        <div v-if="receivingCourier && !isPopup" class="tw-mt-4">
          <div class="tw-px-5 tw-py-6 tw-bg-white tw-rounded-xl">
            <div class="">
              <div class="tw-mb-2.5 tw-flex tw-items-center tw-justify-between">
                <div>Доставка</div>
                <div>{{ dataPriceCourier.receiving }} ₽</div>
              </div>

              <div class="tw-flex tw-items-center tw-justify-between">
                <div>Оформление</div>
                <div>{{ dataPriceCourier.items }} ₽</div>
              </div>
            </div>
            <div class="tw-border-b tw-border-stroke tw-my-3.5"></div>
            <div
              class="tw-flex tw-justify-between tw-items-center tw-text-lg tw-font-medium"
            >
              <div>Итого к оплате</div>
              <div>{{ dataPriceCourier.total }} ₽</div>
            </div>
          </div>

          <base-button
            class="tw-mt-10 !tw-w-[250px] tw-mx-auto"
            @click="getPayment"
            :load="loadPayment"
            :disabled="loadPayment"
            >Оплатить</base-button
          >
        </div>
      </div>

      <div v-if="tab === 7" class="type-content">
        <div class="type-content__title tw-font-medium tw-mb-4">
          Почта России
        </div>

        <div style="display: grid; gap: 15px">
          <base-input
            v-model="pochta.index_city"
            maska="######"
            placeholder="Введите индекс"
            class=""
          />
          <base-input
            v-model="pochta.address"
            placeholder="Введите адрес"
            class=""
          />
        </div>
        <div v-if="receivingPochta && !isPopup" class="tw-mt-5">
          <div class="tw-px-5 tw-py-6 tw-bg-white tw-rounded-xl">
            <div class="">
              <div class="tw-mb-2.5 tw-flex tw-items-center tw-justify-between">
                <div>Доставка</div>
                <div>{{ dataPricePochta.receiving }} ₽</div>
              </div>

              <div class="tw-flex tw-items-center tw-justify-between">
                <div>Оформление</div>
                <div>{{ dataPricePochta.items }} ₽</div>
              </div>
            </div>
            <div class="tw-border-b tw-border-stroke tw-my-3.5"></div>
            <div
              class="tw-flex tw-justify-between tw-items-center tw-text-lg tw-font-medium"
            >
              <div>Итого к оплате</div>
              <div>{{ dataPricePochta.total }} ₽</div>
            </div>
          </div>

          <base-button
            class="tw-mt-10 !tw-w-[250px] tw-mx-auto"
            @click="getPayment"
            :load="loadPayment"
            :disabled="loadPayment"
            >Оплатить</base-button
          >
        </div>
        <div v-if="!receivingPochta">
          <base-button
            v-if="pochta.index_city.length === 6 && pochta.address.length > 3"
            class="tw-mt-10 !tw-w-[250px] tw-mx-auto"
            @click="getReceiving"
            >Продолжить</base-button
          >
        </div>
        <!-- <base-button
          v-if="pochta.index_city.length === 6 && pochta.address.length > 3"
          class="tw-mt-10 !tw-w-[250px] tw-mx-auto"
          @click="getPayment"
          >Оплатить</base-button
        > -->
      </div>
      <div v-if="tab === 4" class="type-content">
        <div class="type-content__title tw-font-medium tw-mb-4">Мегафон</div>

        <div style="display: grid; gap: 15px">
          <base-input
            v-model="megafon.city"
            placeholder="Введите город"
            class=""
          />
          <base-input
            v-model="megafon.address"
            placeholder="Введите адрес"
            class=""
          />
        </div>
        <div v-if="receivingMeg && !isPopup" class="tw-mt-5">
          <div class="tw-px-5 tw-py-6 tw-bg-white tw-rounded-xl">
            <div class="">
              <div class="tw-mb-2.5 tw-flex tw-items-center tw-justify-between">
                <div>Доставка</div>
                <div>{{ dataPriceMeg.receiving }} ₽</div>
              </div>

              <div class="tw-flex tw-items-center tw-justify-between">
                <div>Оформление</div>
                <div>{{ dataPriceMeg.items }} ₽</div>
              </div>
            </div>
            <div class="tw-border-b tw-border-stroke tw-my-3.5"></div>
            <div
              class="tw-flex tw-justify-between tw-items-center tw-text-lg tw-font-medium"
            >
              <div>Итого к оплате</div>
              <div>{{ dataPriceMeg.total }} ₽</div>
            </div>
          </div>

          <base-button
            class="tw-mt-10 !tw-w-[250px] tw-mx-auto"
            @click="getPayment"
            :load="loadPayment"
            :disabled="loadPayment"
            >Оплатить</base-button
          >
        </div>

        <div v-if="!receivingMeg">
          <base-button
            v-if="megafon.city.length > 3 && megafon.address.length > 3"
            class="tw-mt-10 !tw-w-[250px] tw-mx-auto"
            @click="getReceiving"
            >Продолжить</base-button
          >
        </div>
        <!-- <base-button
          v-if="pochta.index_city.length === 6 && pochta.address.length > 3"
          class="tw-mt-10 !tw-w-[250px] tw-mx-auto"
          @click="getPayment"
          >Оплатить</base-button
        > -->
      </div>
      <!-- <div v-if="tab === 4" class="type-content">
        <div class="type-content__title">Салон Мегафон</div>

        <div style="display: grid; gap: 15px">
          <base-input
            v-model="megafon.city"
            placeholder="Введите город"
            class=""
          />
          <base-input
            v-model="megafon.address"
            placeholder="Введите адрес"
            class=""
          />
        </div>
        <base-button
          v-if="megafon.city.length > 3 && megafon.address.length > 3"
          class="tw-mt-10 !tw-w-[250px] tw-mx-auto"
          @click="getPayment"
          >Оплатить</base-button
        >
      </div> -->
      <!-- <div v-if="tab === 2"></div>
      <div v-if="tab === 3"></div>
      <div v-if="tab === 4"></div>
      <div v-if="tab === 5"></div>
      <div v-if="tab === 6"></div> -->
    </div>
    <div class="popup" v-if="isPopup">
      <div class="popup__dialog">
        <div class="tw-text-body_l tw-grid tw-gap-4 tw-justify-items-center">
          <q-spinner-ios color="orange" size="2em" />

          <div class="tw-whitespace-nowrap" v-if="popupMessage">
            {{ popupMessage }}
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>
<script setup lang="ts">
import { useQuasar } from 'quasar'
import { citiesCDEK, PVZCDEK } from 'src/api/delivery'
import { getOrder } from 'src/api/orders'
import { RegionT } from 'src/models/api/main'
import { Browser } from '@capacitor/browser'
import { useRoute, useRouter } from 'vue-router'

const tab = ref(1)
const $q = useQuasar()
const route = useRoute()
const router = useRouter()
const isMeg = ref(route.query.isMeg)
const isPopup = ref(false)
const popupMessage = ref('')
const { order } = storeToRefs(basketStore())
const region = computed(() => {
  const storageRegion = window.localStorage.getItem('region')
  if (storageRegion) {
    return JSON.parse(storageRegion).name
  }
})
const orderId = ref(route.query.orderId ?? localStorage.getItem('mmp_order_id'))
const choice = (id: number) => {
  tab.value = id
}
const dataPrice = ref({
  receiving: 0,
  items: 0,
  total: 0,
})
const dataPriceCourier = ref({
  receiving: 0,
  items: 0,
  total: 0,
})

const receivingCourier = ref(false)
const {
  regionCDEK,
  regionCDEKCourier,
  regionListCDEK,
  regionListCDEKCourier,
  cityCDEK,
  cityCDEKCourier,
  citiyListCDEK,
  citiyListCDEKCourier,
  PVZItemCDEK,
  PVZListCDEK,
} = storeToRefs(basketStore())

const addressCDEK = ref({
  postal: '',
  address: '',
  apartment: '',
  floor: '',
  entrance: '',
  intercom: '',
})

const receivingPochta = ref(false)
const dataPricePochta = ref({
  receiving: 0,
  items: 0,
  total: 0,
})
const pochta = ref({
  index_city: '',
  address: '',
})

const receivingMeg = ref(false)
const dataPriceMeg = ref({
  receiving: 0,
  items: 0,
  total: 0,
})
const megafon = ref({
  city: '',
  address: '',
})
const getReceiving = async () => {
  const payload = {
    data: {
      method: tab.value,
      // pickupPointId: 1,
      // deliveryRawAddress: "тестовые данные",
    },

    orderId: orderId.value,
  }
  if (tab.value === 1) {
    payload.data = {
      ...payload.data,
      pickupPointId: 1,
      deliveryRawAddress: 'тестовые данные',
    }
  }
  if (tab.value === 4) {
    payload.data = {
      ...payload.data,
      megafonOfficeCity: megafon.value.city,
      megafonOfficeStreet: megafon.value.address,
    }
  }

  if (tab.value === 5 && PVZItemCDEK.value) {
    payload.data = {
      ...payload.data,
      cdekDeliveryPoint: PVZItemCDEK.value.id,
    }
  }
  if (tab.value === 6) {
    if (regionCDEKCourier.value && cityCDEKCourier.value) {
      payload.data = {
        ...payload.data,
        cdekPostalCode: addressCDEK.value.postal,
        cdekAddress:
          regionCDEKCourier.value.name +
          ' ' +
          cityCDEKCourier.value.name +
          ' ' +
          addressCDEK.value.address +
          ' ' +
          addressCDEK.value.floor +
          ' ' +
          addressCDEK.value.entrance +
          ' ' +
          addressCDEK.value.intercom,
      }
    }
  }
  if (tab.value === 7) {
    payload.data = {
      ...payload.data,
      russianPostRawAddress: pochta.value.address,
      russianPostPostalCode: pochta.value.index_city,
    }
  }
  // $q.loading.show({
  //   delay: 1,
  // });
  isPopup.value = true
  if (tab.value === 1) popupMessage.value = ''
  else popupMessage.value = 'Рассчитываем доставку'
  try {
    const res = await basketStore().receivingOrder(payload)
    if (res) {
      if (tab.value === 5) {
        dataPrice.value.items = res.data.cost.items
        dataPrice.value.receiving = res.data.cost.receiving
        dataPrice.value.total = res.data.cost.total
      }
      if (tab.value === 6) {
        dataPriceCourier.value.items = res.data.cost.items
        dataPriceCourier.value.receiving = res.data.cost.receiving
        dataPriceCourier.value.total = res.data.cost.total
        receivingCourier.value = true
      }
      if (tab.value === 7) {
        dataPricePochta.value.items = res.data.cost.items
        dataPricePochta.value.receiving = res.data.cost.receiving
        dataPricePochta.value.total = res.data.cost.total
        receivingPochta.value = true
      }
      if (tab.value === 4) {
        dataPriceMeg.value.items = res.data.cost.items
        dataPriceMeg.value.receiving = res.data.cost.receiving
        dataPriceMeg.value.total = res.data.cost.total
        receivingMeg.value = true
      }
    }
  } catch (e) {
    throw e
  } finally {
    isPopup.value = false
  }
  // loadReceiving.value = true;
  // $store
  //   .dispatch("receiveOrder", payload)
  //   .then((res) => {
  //     modals.value.summ = true;
  //     message.value.text = "Рассчитываем стоимость доставки...";
  //     let othertext = "";
  //     let receiving = res.data.data.cost.receiving;
  //     if (pickap.value === 4) {
  //       receiving =
  //         res.data.data.cost.subscriptionFees + res.data.data.cost.activations;

  //       othertext =
  //         "<br/> В стоимость доставки включена процедура активации сим-карты и абонентский платёж за первый месяц";
  //     }
  //     message.value.text = `Доставка будет стоить ${res.data.data.cost.receiving} рублей ${othertext}`;
  //     loadReceiving.value = false;
  //     $q.loading.hide();
  //   })
  //   .catch((e) => {
  //     $q.loading.hide();
  //     $q.notify("Ошибка");

  //     throw e;
  //   })
  //   .finally(() => {});
}

const loadPayment = ref(false)
const getPayment = () => {
  loadPayment.value = true
  if (orderId.value) {
    if (tab.value === 1) {
      getReceiving()
        .then((r) => {
          basketStore()
            .getLink(JSON.parse(orderId.value))
            .then((r) => {
              openCapacitorSite(r.data.link)
            })
        })
        .finally(() => (loadPayment.value = false))
    } else {
      basketStore()
        .getLink(JSON.parse(orderId.value))
        .then((r) => {
          openCapacitorSite(r.data.link)
        })
        .finally(() => (loadPayment.value = false))
    }
  }
  // loadPayment.value = true;
  // if (pickap.value === 1) {
  //   $store
  //     .dispatch("receiveOrder", {
  //       data: {
  //         method: pickap.value,
  //         pickupPointId: 1,

  //         // deliveryRawAddress: "тестовые данные",
  //       },

  //       orderId: orderId.value,
  //     })
  //     .then(() => {
  //       $store
  //         .dispatch("orderPaymentLink", orderId.value)
  //         .then((r) => {
  //           loadPayment.value = false;
  //           openCapacitorSite(r.data.data.link);
  //         })
  //         .catch((e) => {
  //           throw e;
  //         });
  //     });
  // } else {
  //   $store
  //     .dispatch("orderPaymentLink", orderId.value)
  //     .then((r) => {
  //       loadPayment.value = false;
  //       openCapacitorSite(r.data.data.link);
  //     })
  //     .catch((e) => {
  //       throw e;
  //     });
  // }
  // clear();
}

const openCapacitorSite = async (url) => {
  // открытие браузера

  Browser.open({ url: url })
  Browser.addListener('browserFinished', () => {
    checkStatusPayment()
  })
  router.push({ name: 'orders' })
}
onMounted(async () => {
  if (route.query.orderId) {
    localStorage.setItem('mmp_order_id', JSON.stringify(route.query.orderId))
  }
  if (order.value === null && orderId.value) {
    order.value = (await getOrder(JSON.parse(orderId.value))).data
  }
  getRegionsCDEK()
  getRegionsCDEKCourier()
})

const isOpenChoiceCity = ref(true)
const isOpenChoiceCityCourier = ref(true)

const loadRegions = ref(false)
const getRegionsCDEK = async () => {
  loadRegions.value = true
  regionCDEK.value = null
  cityCDEK.value = null
  PVZItemCDEK.value = null
  try {
    await basketStore().getRegionsCDEK()
  } catch (e) {
    throw e
  } finally {
    loadRegions.value = false
  }
}
const getRegionsCDEKCourier = async () => {
  loadRegions.value = true
  regionCDEKCourier.value = null
  cityCDEKCourier.value = null

  try {
    await basketStore().getRegionsCDEKCourier()
  } catch (e) {
    throw e
  } finally {
    loadRegions.value = false
  }
}
const loadCities = ref(false)
const getCities = async (opt: RegionT) => {
  console.log('sss')

  regionCDEK.value = opt
  loadCities.value = true
  cityCDEK.value = null
  PVZItemCDEK.value = null
  try {
    await basketStore().getCitiesCDEK(opt.id)
  } catch (e) {
    throw e
  } finally {
    loadCities.value = false
  }
}

const getCitiesCurier = async (opt: RegionT) => {
  console.log(opt)
  regionCDEKCourier.value = opt
  loadCities.value = true
  cityCDEKCourier.value = null

  try {
    await basketStore().getCitiesCDEKCourier(opt.id)
  } catch (e) {
    throw e
  } finally {
    loadCities.value = false
  }
}
const setCityCurier = async (opt: RegionT) => {
  cityCDEKCourier.value = opt
  loadCities.value = true

  try {
    await basketStore().getCitiesCDEKCourier(opt.id)
  } catch (e) {
    throw e
  } finally {
    loadCities.value = false
  }
}
const loadPVZ = ref(false)
const getPVZ = async (opt: RegionT) => {
  cityCDEK.value = opt
  loadPVZ.value = true
  try {
    if (regionCDEK.value)
      await basketStore().getPVZCDEK(regionCDEK.value.id, opt.id)
    if (PVZListCDEK.value.length === 0) {
      $q.notify('В данном городе нет ПВЗ')
    }
  } catch (e) {
    // $q.notify(error.response.data.message);
    throw e
  } finally {
    loadPVZ.value = false
  }
}
const setPVZItem = (opt: RegionT) => {
  PVZItemCDEK.value = opt
  getReceiving()
}
const openChoiceCity = () => {
  regionCDEK.value = null
  cityCDEK.value = null
  PVZItemCDEK.value = null
  isOpenChoiceCity.value = true
  receivingCourier.value = false
}
const openChoiceCityCourier = () => {
  regionCDEKCourier.value = null
  cityCDEKCourier.value = null
  isOpenChoiceCityCourier.value = true
  receivingCourier.value = false
}
watch(cityCDEK, (val) => {
  if (val) isOpenChoiceCity.value = false
  else isOpenChoiceCity.value = true
})
watch(cityCDEKCourier, (val) => {
  if (val) isOpenChoiceCityCourier.value = false
  else isOpenChoiceCityCourier.value = true
})
watchEffect(() => {
  if (
    addressCDEK.value.postal &&
    addressCDEK.value.address &&
    addressCDEK.value.apartment &&
    addressCDEK.value.entrance &&
    addressCDEK.value.floor &&
    addressCDEK.value.intercom
  ) {
    receivingCourier.value = false
  }
  if (pochta.value.index_city && pochta.value.address) {
    receivingPochta.value = false
  }
  if (megafon.value.address && megafon.value.city) {
    receivingMeg.value = false
  }
})
</script>
<style lang="scss" scoped></style>
