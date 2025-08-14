<template>
  <q-page class="tw-container tw-grid env-t env-b page-a">
    <div class="tw-relative" style="padding-top: 84px">
      <q-btn
        round
        flat
        class="tw-absolute tw-left-0 tw-top-5"
        @click="router.push({ name: 'varify' })"
      >
        <base-icon name="back" class="tw-w-6 tw-h-6 tw-text-back" />
      </q-btn>
      <Form @submit="submit" class="tw-h-full tw-grid tw-content-between">
        <div>
          <div class="tw-text-h2 tw-font-semibold tw-mb-5">
            В каком регионе вы будете <br />
            использовать сим-карту?
          </div>

          <BaseSearchSelect
            :stations="regionList"
            @update-station="updateRegion"
            :current-station="storageRegion"
          />
        </div>
        <base-button type="submit" class="tw-mb-6"> Продолжить </base-button>
      </Form>
    </div>
  </q-page>
</template>
<script setup lang="ts">
import { RegionT } from 'src/models/api/main'
import { useRouter } from 'vue-router'
// import { auth, ping } from 'src/api/auth';
const { regionList } = storeToRefs(mainStore())
const currentRegion = ref<RegionT>()
const router = useRouter()
const updateRegion = (region: RegionT) => {
  currentRegion.value = region
  window.localStorage.setItem('region', JSON.stringify(region))
}
const storageRegion = computed(() => {
  const storage = window.localStorage.getItem('region')
  if (storage) {
    return JSON.parse(storage)
  }
})
const submit = () => {
  router.push({ name: 'device' })
}
</script>
<style lang="scss" scoped></style>
