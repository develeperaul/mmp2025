<template>
  <q-page class="tw-container tw-grid tw-content-between page-a">
    <div class="tw-grid tw-content-between">
      <h2 class="title">Паспортные данные</h2>
      <Form @submit="submit" class="tw-grid tw-gap-5">
        <div>
          <div class="tw-text-black tw-text-body_l tw-font-semibold tw-mb-2.5">
            Фамилия
          </div>
          <base-input name="firstName" placeholder="Введите фамилию" />
        </div>
        <div>
          <div class="tw-text-black tw-text-body_l tw-font-semibold tw-mb-2.5">
            Имя
          </div>
          <base-input name="lastName" placeholder="Введите имя" />
        </div>
        <div>
          <div class="tw-text-black tw-text-body_l tw-font-semibold tw-mb-2.5">
            Отчество
          </div>
          <base-input
            name="patronymic"
            placeholder="Введите отчество (при наличии)"
          />
        </div>
        <div>
          <div class="tw-text-black tw-text-body_l tw-font-semibold tw-mb-2.5">
            Дата рождения
          </div>
          <base-input name="birthDate" placeholder="дд.мм.гггг" />
        </div>
        <div>
          <div class="tw-mb-2.5 tw-font-semibold tw-text-body_l">
            Паспорт РФ
          </div>
          <div class="tw-text-body_l tw-mb-3.5">
            Загрузите 2-3 страницы (разворот с фотографией) и 4-5 страницы
            (прописка)
          </div>
          <load-file @loadFile="saveFormDataPassport" />
        </div>
        <base-button type="submit"> Отправить </base-button>
      </Form>
    </div>
  </q-page>
</template>
<script setup lang="ts">
import { personalInfo } from 'src/api/orders'
import { useRouter } from 'vue-router'
const lefFiles = ref<File[]>([])
const props = defineProps<{
  id: string
}>()
const router = useRouter()
const saveFormDataPassport = (files) => {
  lefFiles.value = files
}
const submit = async (payload: {
  firstName: string
  lastName: string
  patronymic: string
  birthDate: string
}) => {
  if (lefFiles.value.length > 1) {
    try {
      await personalInfo(props.id, payload, lefFiles.value)
      router.push({ name: 'orders' })
    } catch (e) {
      throw e
    }
  }
}
</script>

<style lang="scss" scoped></style>
