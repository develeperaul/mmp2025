<template>
  <q-page class="tw-container tw-grid env-t env-b page-a">
    <div class="tw-grid tw-grid-rows-[auto_1fr] tw-content-start tw-h-full">
      <div class="tw-grid">
        <div class="tw-relative">
          <base-icon
            name="back"
            class="tw-w-6 tw-h-6 tw-text-back tw-absolute tw-left-0 tw-top-6"
          />
          <div class="title">Оформление</div>
        </div>

        <div class="tw-font-semibold tw-text-lg tw-mb-4">Способ получения</div>
        <div class="tw-inline-flex tw-gap-2.5 tw-overflow-auto tw-mb-6">
          <div
            class="tw-shrink-0 tw-p-3.5 tw-rounded-lg tw-bg-white tw-border tw-border-white tw-max-w-[120px] tw-grid tw-grid-rows-[35px_1fr]"
            :class="tab === 1 ? ' !tw-border-primary_orange' : ''"
            @click="choice(1)"
          >
            <img src="src/assets/icons/logo.svg" class="tw-self-center" />
            <div class="tw-text-sm">Самовывоз</div>
          </div>
          <div
            class="tw-shrink-0 tw-p-3.5 tw-rounded-lg tw-bg-white tw-border tw-border-white tw-max-w-[120px] tw-grid tw-grid-rows-[35px_1fr]"
            :class="tab === 5 ? ' !tw-border-primary_orange' : ''"
            @click="choice(5)"
          >
            <img src="src/assets/icons/sdek.svg" class="tw-self-center" />
            <div class="tw-text-sm">ПВЗ</div>
          </div>
          <div
            class="tw-shrink-0 tw-p-3.5 tw-rounded-lg tw-bg-white tw-border tw-border-white tw-max-w-[120px] tw-grid tw-grid-rows-[35px_1fr]"
            :class="tab === 6 ? ' !tw-border-primary_orange' : ''"
            @click="choice(6)"
          >
            <img src="src/assets/icons/sdek.svg" class="tw-self-center" />
            <div class="tw-text-sm">Курьер</div>
          </div>
          <div
            class="tw-shrink-0 tw-p-3.5 tw-rounded-lg tw-bg-white tw-border tw-border-white tw-max-w-[120px] tw-grid tw-grid-rows-[35px_1fr]"
            :class="tab === 7 ? ' !tw-border-primary_orange' : ''"
            @click="choice(7)"
          >
            <img src="src/assets/icons/pochta.svg" class="tw-self-center" />
            <div class="tw-text-sm tw-whitespace-nowrap">Почта России</div>
          </div>
          <div
            v-if="!isMeg"
            class="tw-shrink-0 tw-p-3.5 tw-rounded-lg tw-bg-white tw-border tw-border-white tw-max-w-[120px] tw-grid tw-grid-rows-[35px_1fr]"
            :class="tab === 4 ? ' !tw-border-primary_orange' : ''"
            @click="choice(4)"
          >
            <img src="src/assets/icons/megafon.svg" class="tw-self-center" />
            <div class="tw-text-sm tw-whitespace-nowrap">В салоне</div>
          </div>
          <!-- <div
            class="tw-shrink-0 tw-p-3.5 tw-rounded-lg tw-bg-white tw-border tw-border-white tw-max-w-[120px] tw-grid tw-grid-rows-[35px_1fr]"
            :class="tab === 6 ? ' !tw-border-primary_orange' : ''"
            @click="choice(6)"
          >
            <img src="src/assets/icons/esim.svg" class="tw-self-center" />
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
            <div>500 ₽</div>
          </div>

          <base-button class="tw-mt-10" @click="getPayment"
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
                <div>{{ receiving }} ₽</div>
              </div>

              <div class="tw-flex tw-items-center tw-justify-between">
                <div>Оформление</div>
                <div>500 ₽</div>
              </div>
            </div>
            <div class="tw-border-b tw-border-stroke tw-my-3.5"></div>
            <div
              class="tw-flex tw-justify-between tw-items-center tw-text-lg tw-font-medium"
            >
              <div>Итого к оплате</div>
              <div>500 ₽</div>
            </div>
          </div>

          <base-button
            class="tw-mt-10 !tw-w-[250px] tw-mx-auto"
            @click="getPayment"
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
                @update:model-value="getCitiesCurier"
                :options="regionListCDEK"
                label="Выберите регион"
                :load="loadRegions"
              />
              <base-select
                v-if="regionCDEK"
                :model-value="cityCDEK"
                :options="citiyListCDEK"
                label="Выберите город"
                @update:model-value="setCityCurier"
                :load="loadCities"
              />
            </template>
          </div>
        </div>
        <div
          v-if="!isOpenChoiceCity && cityCDEK"
          class="tw-grid tw-content-between tw-h-full"
        >
          <div class="tw-grid tw-grid-cols-2 tw-gap-2.5">
            <base-input
              v-model="addressCDEK.postal"
              placeholder="Введите индекс"
              class="tw-col-span-2"
            />
            <base-input
              v-model="addressCDEK.address"
              placeholder="Введите адрес"
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
            class="tw-mt-10 !tw-w-[250px] tw-mx-auto"
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
                <div>{{ receivingCourier }} ₽</div>
              </div>

              <div class="tw-flex tw-items-center tw-justify-between">
                <div>Оформление</div>
                <div>500 ₽</div>
              </div>
            </div>
            <div class="tw-border-b tw-border-stroke tw-my-3.5"></div>
            <div
              class="tw-flex tw-justify-between tw-items-center tw-text-lg tw-font-medium"
            >
              <div>Итого к оплате</div>
              <div>500 ₽</div>
            </div>
          </div>

          <base-button
            class="tw-mt-10 !tw-w-[250px] tw-mx-auto"
            @click="getPayment"
            >Оплатить</base-button
          >
        </div>
      </div>

      <div v-if="tab === 7" class="type-content">
        <div class="type-content__title">Почта России</div>

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
        <base-button
          v-if="pochta.index_city.length === 6 && pochta.address.length > 3"
          class="tw-mt-10 !tw-w-[250px] tw-mx-auto"
          @click="getPayment"
          >Оплатить</base-button
        >
      </div>
      <div v-if="tab === 4" class="type-content">
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
      </div>
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

          <div class="tw-whitespace-nowrap">{{ popupMessage }}</div>
        </div>
      </div>
    </div>
  </q-page>
</template>
<script setup lang="ts">
import { useQuasar } from 'quasar'
import { citiesCDEK, PVZCDEK } from 'src/api/delivery'
import { RegionT } from 'src/models/api/main'
import { useRoute } from 'vue-router'

const tab = ref(1)
const $q = useQuasar()
const route = useRoute()
const isMeg = ref(route.query.isMeg)
const isPopup = ref(false)
const popupMessage = ref('')

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

const receiving = ref(0)
const receivingCourier = ref(1)
const {
  regionCDEK,
  regionListCDEK,
  cityCDEK,
  citiyListCDEK,
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

const pochta = ref({
  index_city: '',
  address: '',
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
    if (regionCDEK.value && cityCDEK.value) {
      payload.data = {
        ...payload.data,
        cdekPostalCode: addressCDEK.value.postal,
        cdekAddress:
          regionCDEK.value.name +
          ' ' +
          cityCDEK.value.name +
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
  popupMessage.value = 'Рассчитываем доставку'
  try {
    const res = await basketStore().receivingOrder(payload)
    if (res)
      if (tab.value === 5) {
        receiving.value = res.data.cost.receiving
      }
    if (tab.value === 6) {
      receivingCourier.value = res.data.cost.receiving
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

const getPayment = () => {
  if (orderId.value) {
    if (tab.value === 1) {
      getReceiving().then((r) => {
        basketStore()
          .getLink(orderId.value)
          .then((r) => {
            openCapacitorSite(r.data.data.link)
          })
      })
    } else {
      basketStore()
        .getLink(orderId.value)
        .then((r) => {
          openCapacitorSite(r.data.data.link)
        })
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
  alert('open')
  // Browser.open({ url: url });
  // Browser.addListener("browserFinished", () => {
  //   checkStatusPayment();
  // });
}
onMounted(() => {
  if (route.query.orderId) {
    localStorage.setItem('mmp_order_id', JSON.stringify(route.query.orderId))
  }
  getRegionsCDEK()
})

const isOpenChoiceCity = ref(true)

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
const getRegionsCDEKCurier = async () => {
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
  regionCDEK.value = opt
  loadCities.value = true
  cityCDEK.value = null

  try {
    await basketStore().getCitiesCDEK(opt.id)
  } catch (e) {
    throw e
  } finally {
    loadCities.value = false
  }
}
const setCityCurier = async (opt: RegionT) => {
  cityCDEK.value = opt
  loadCities.value = true

  try {
    await basketStore().getCitiesCDEK(opt.id)
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
  receivingCourier.value = 0
}
watch(cityCDEK, (val) => {
  if (val) isOpenChoiceCity.value = false
  else isOpenChoiceCity.value = true
})
</script>
<style lang="scss" scoped></style>
