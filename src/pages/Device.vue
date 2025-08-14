<template>
  <q-page class="tw-container tw-grid env-t env-b page-a">
    <div class="tw-relative" style="padding-top: 84px">
      <q-btn
        round
        flat
        class="tw-absolute tw-left-0 tw-top-5"
        @click="router.push({ name: 'region' })"
      >
        <base-icon name="back" class="tw-w-6 tw-h-6 tw-text-back" />
      </q-btn>
      <div class="tw-h-full tw-grid tw-content-between">
        <div>
          <div class="tw-text-h2 tw-font-semibold tw-mb-5">
            Как вы будете использовать сим-карту?
          </div>
          <div class="tw-grid tw-gap-8">
            <div class="device" @click="choiceDevice(0)">
              <div class="device__bg">
                <img src="src/assets/images/phone.png" alt="" />
              </div>
              <div class="device__title">Телефон</div>
            </div>
            <div class="device" @click="choiceDevice(1)">
              <div class="device__bg">
                <img src="src/assets/images/router.png" alt="" />
              </div>
              <div class="device__title">Другие устройства</div>
              <div class="device__subtitle">
                Модем, роутер, планшет, умные часы
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>
<script setup lang="ts">
import { DeviceT } from 'src/models/api/main'
import { useRouter } from 'vue-router'
// import { auth, ping } from 'src/api/auth';
const router = useRouter()
const devicesType = ref<DeviceT[]>()
onMounted(async () => {
  try {
    devicesType.value = await mainStore().getDevices()
  } catch (e) {
    throw e
  }
})
const choiceDevice = (indx: number) => {
  if (devicesType.value) {
    const currenrDevice = devicesType.value[indx]
    window.localStorage.setItem('deviceType', JSON.stringify(currenrDevice))
    router.push({ name: 'start' })
  }
}
</script>
<style lang="scss" scoped>
.device {
  display: grid;

  justify-items: center;
  text-align: center;
  &__bg {
    background: #ffffff99;
    backdrop-filter: blur(70px);
    width: 222.73px;
    height: 196px;
    display: grid;
    place-content: center;

    border-radius: 30px;
    img {
      width: 200px;
      height: 178.09px;
      border-radius: 25px;
    }
  }
  &__title {
    @apply tw-text-body_l tw-font-medium tw-mt-3;
  }
  &__subtitle {
    @apply tw-text-body_s tw-text-secondary tw-mt-1.5;
  }
}
</style>
