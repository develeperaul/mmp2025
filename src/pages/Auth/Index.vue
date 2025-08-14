<template>
  <q-page class="tw-container tw-grid env-t env-b page-a">
    <div class="tw-relative" style="padding-top: 98px">
      <div class="tw-text-h1 tw-font-semibold tw-mb-10 tw-text-center">
        Авторизация
      </div>
      <Form @submit="submit">
        <div class="">
          <div class="banner-white">
            <div class="tw-text-body_l tw-text-center tw-mb-5">
              Введите номер телефона
            </div>
            <base-input
              name="phone"
              type="tel"
              v-model="phone"
              maska="+7 (###)-###-##-##"
              placeholder="+7 (000)-000-00-00"
              class="tw-mb-5"
              unMask
              rules="cellphone"
            />
            <base-button type="submit"> Получить код </base-button>
          </div>
        </div>
      </Form>
      <div
        class="tw-absolute tw-bottom-6 tw-text-xs tw-text-black/40 tw-text-center"
      >
        Нажимая на кнопку «Продолжить» вы принимаете
        <a href="/" class="tw-underline">Пользовательское соглашение</a>

        и даете
        <a href="/" class="tw-underline">
          согласие на обработку персональных данных
        </a>
      </div>
    </div>
  </q-page>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
// import { auth, ping } from 'src/api/auth';
const { phone } = storeToRefs(authStore())
const router = useRouter()
const submit = async () => {
  window.localStorage.setItem('phone', JSON.stringify(phone.value))
  router.push({ name: 'verify' })
  try {
    const res = await authStore().login()
    // await auth(`+7${phone.value}`)
  } catch (e) {
    console.log(e)
  }
  // await authStore().login(0);
}
</script>
<style lang="scss" scoped>
.page-a {
  background-image: url('src/assets/images/line1.png');
  background-size: 435.74px 450.02px;
  background-position: -18px 50px;
  background-repeat: no-repeat;
}
</style>
