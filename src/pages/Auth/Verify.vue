<template>
  <q-page class="tw-container tw-grid env-t env-b page-a">
    <div class="tw-relative" style="padding-top: 98px">
      <q-btn
        round
        flat
        class="tw-absolute tw-left-0 tw-top-5"
        @click="router.push({ name: 'auth' })"
      >
        <base-icon name="back" class="tw-w-6 tw-h-6 tw-text-back" />
      </q-btn>
      <div class="tw-text-h1 tw-font-semibold tw-mb-10 tw-text-center">
        СМС-код
      </div>
      <Form @submit="submit">
        <div class="">
          <div class="banner-white">
            <div class="tw-text-body_l tw-text-center tw-mb-5">
              Введите СМС-код
            </div>

            <code-input class="tw-flex tw-justify-center tw-mb-10" />
            <base-button type="submit" class="tw-mb-6">
              Продолжить
            </base-button>
            <div class="tw-text-body_s tw-text-secondary tw-text-center">
              Получить СМС-код можно через 00:50
            </div>
          </div>
        </div>
      </Form>
    </div>
  </q-page>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
// import { auth, ping } from 'src/api/auth';
const { phone } = storeToRefs(authStore())
const router = useRouter()
const submit = async (vals: { kod: string }) => {
  // console.log(v)

  // window.localStorage.setItem('phone', JSON.stringify(phone.value))
  try {
    const res = await authStore().verifyClient(vals.kod)
    router.push({ name: 'region' })
  } catch (e) {
    console.log(e)
  }
}
</script>
<style lang="scss" scoped>
.page-a {
  background-image: url('src/assets/images/line2.png');
  background-size: 464.5px 349.5px;
  background-position: -18px 190px;
  background-repeat: no-repeat;
}
</style>
